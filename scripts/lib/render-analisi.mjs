/**
 * Rende un `Article` in markdown.
 *
 * Il markdown è una copia leggibile dell'analisi, non la sua sorgente: si
 * rigenera da `src/app/core/data/articles/<slug>.ts` e non va modificato a mano,
 * perché la prima rigenerazione lo riscriverebbe. Serve a lavorare sui testi
 * fuori dal sito — un grafo di conoscenza, una ricerca, un'esportazione — senza
 * dover leggere TypeScript.
 *
 * Che cosa passa e che cosa no: passano tutti i testi, i numeri e le etichette,
 * più i toni dei blocchi dove distinguono una lettura favorevole da una
 * contraria. Non passano le ancore dell'indice laterale, che sono impianto del
 * sito e non contenuto.
 *
 * Il file è JavaScript e non TypeScript perché deve girare con `node` senza
 * compilazione, ed è separato dallo script che lo usa perché anche il controllo
 * di allineamento ha bisogno di rendere gli stessi testi.
 */

/* -------------------------------------------------------------------------- */
/* Impronta                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Impronta di un'analisi, scritta nel frontmatter e ricalcolata dal controllo di
 * allineamento: se i due valori divergono, il markdown è vecchio.
 *
 * È un FNV-1a a 32 bit ripetuto con due semi diversi — sedici cifre esadecimali
 * in tutto — e non un hash crittografico: deve solo dire «è cambiato qualcosa»,
 * e deve poter essere ricalcolato ovunque senza dipendenze. La stessa funzione è
 * ripetuta in `src/app/core/data/analisi.spec.ts`, che non può importare questo
 * file perché è JavaScript: se cambia qui, cambia anche là.
 */
export function improntaAnalisi(article) {
  const testo = JSON.stringify(article);
  return fnv1a(testo, 0x811c9dc5) + fnv1a(testo, 0x01000193);
}

function fnv1a(testo, seme) {
  let h = seme >>> 0;
  for (let i = 0; i < testo.length; i++) {
    h ^= testo.charCodeAt(i) & 0xff;
    h = Math.imul(h, 0x01000193) >>> 0;
    h ^= testo.charCodeAt(i) >>> 8;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

/* -------------------------------------------------------------------------- */
/* Frontmatter                                                                 */
/* -------------------------------------------------------------------------- */

/** Stringa YAML sempre fra virgolette: evita di ragionare sui casi limite. */
function yamlString(valore) {
  return `"${String(valore).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function yamlList(valori) {
  return `[${valori.map(yamlString).join(', ')}]`;
}

function frontmatter(article) {
  const righe = [
    `slug: ${yamlString(article.slug)}`,
    `titolo: ${yamlString(article.title)}`,
    `occhiello: ${yamlString(article.kicker)}`,
    `sommario: ${yamlString(article.dek)}`,
    `pubblicata: ${yamlString(article.publishedAt)}`,
  ];
  if (article.updatedAt) righe.push(`aggiornata: ${yamlString(article.updatedAt)}`);
  righe.push(
    `autore: ${yamlString(article.author)}`,
    `minutiLettura: ${article.readingMinutes}`,
    `certezza: ${yamlString(article.certainty)}`,
    `categorie: ${yamlList(article.categories)}`,
    `argomenti: ${yamlList(article.tags)}`,
    `strumenti: ${yamlList(article.instruments)}`,
    `orizzonti: ${yamlList(article.horizons)}`,
  );
  if (article.bias) {
    righe.push(
      `impostazione:`,
      `  strumento: ${yamlString(article.bias.asset)}`,
      `  direzione: ${yamlString(article.bias.direction)}`,
      `  forza: ${yamlString(article.bias.strength)}`,
      `  regime: ${yamlString(article.bias.regime)}`,
    );
  }
  if (article.nextEvent) {
    righe.push(
      `prossimoAppuntamento:`,
      `  quando: ${yamlString(article.nextEvent.when)}`,
      `  titolo: ${yamlString(article.nextEvent.title)}`,
    );
    if (article.nextEvent.detail) {
      righe.push(`  dettaglio: ${yamlString(article.nextEvent.detail)}`);
    }
  }
  righe.push(
    `sorgente: ${yamlString(`src/app/core/data/articles/${article.slug}.ts`)}`,
    `impronta: ${yamlString(improntaAnalisi(article))}`,
  );
  return ['---', ...righe, '---'];
}

/* -------------------------------------------------------------------------- */
/* Blocchi                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Il tono si scrive solo quando distingue davvero una lettura da un'altra.
 *
 * Vale per i riquadri, gli scenari e le due colonne del bilancio, dove qualifica
 * un'affermazione: «Petrolio (warn)» dice che l'effetto atteso è incerto. Non
 * vale per le tabelle di numeri, dove il tono è solo il colore della cifra e
 * un'etichetta come «Brent (bull)» si leggerebbe come un giudizio sul Brent
 * invece che sull'oro: là il segno è già nel valore e nella nota.
 */
function tono(valore) {
  return valore && valore !== 'neutral' ? ` (${valore})` : '';
}

/** Nelle celle di tabella la barra verticale va protetta. */
function cella(testo) {
  return String(testo).replace(/\|/g, '\\|');
}

function renderBlock(block) {
  switch (block.kind) {
    case 'paragraph':
      return [block.text];

    case 'heading':
      return [`## ${block.text}`];

    case 'list': {
      const righe = block.title ? [`**${block.title}**`, ''] : [];
      block.items.forEach((item, i) => {
        righe.push(block.ordered ? `${i + 1}. ${item}` : `- ${item}`);
      });
      return righe;
    }

    case 'callout': {
      const righe = [`> **${block.title}**${tono(block.tone)}`];
      if (block.text) righe.push('>', `> ${block.text}`);
      if (block.items?.length) {
        righe.push('>');
        for (const item of block.items) righe.push(`> - ${item}`);
      }
      return righe;
    }

    case 'stats': {
      const righe = block.title ? [`**${block.title}**`, ''] : [];
      const conNote = block.items.some((i) => i.note);
      righe.push(conNote ? '| Voce | Valore | Nota |' : '| Voce | Valore |');
      righe.push(conNote ? '| --- | --- | --- |' : '| --- | --- |');
      for (const item of block.items) {
        righe.push(
          conNote
            ? `| ${cella(item.label)} | ${cella(item.value)} | ${cella(item.note ?? '')} |`
            : `| ${cella(item.label)} | ${cella(item.value)} |`,
        );
      }
      if (block.caption) righe.push('', `_${block.caption}_`);
      return righe;
    }

    case 'scenarios': {
      const righe = block.title ? [`**${block.title}**`, ''] : [];
      for (const item of block.items) {
        righe.push(`- **${item.label}**${tono(item.tone)} — ${item.text}`);
      }
      if (block.caption) righe.push('', `_${block.caption}_`);
      return righe;
    }

    case 'balance': {
      const righe = block.title ? [`**${block.title}**`, ''] : [];
      for (const lato of [block.left, block.right]) {
        righe.push(`**${lato.title}**${tono(lato.tone)}`, '');
        for (const item of lato.items) righe.push(`- ${item}`);
        if (lato === block.left) righe.push('');
      }
      return righe;
    }

    case 'timeline': {
      const righe = block.title ? [`**${block.title}**`, ''] : [];
      for (const item of block.items) {
        righe.push(`- **${item.when} · ${item.title}** — ${item.text}`);
      }
      return righe;
    }

    case 'quote': {
      const righe = [`> ${block.text}`];
      if (block.cite) righe.push('>', `> — ${block.cite}`);
      return righe;
    }

    case 'note':
      return [`> **Nota** — ${block.text}`];

    default:
      throw new Error(`Blocco di tipo sconosciuto: ${JSON.stringify(block.kind)}`);
  }
}

/* -------------------------------------------------------------------------- */
/* Analisi intera                                                              */
/* -------------------------------------------------------------------------- */

/** Restituisce il markdown completo di un'analisi, terminatore di riga incluso. */
export function renderAnalisi(article) {
  const righe = [
    ...frontmatter(article),
    '',
    `# ${article.title}`,
    '',
    `_${article.kicker}_`,
    '',
    article.dek,
  ];

  if (article.takeaways?.length) {
    righe.push('', '## In sintesi', '');
    for (const punto of article.takeaways) righe.push(`- ${punto}`);
  }

  for (const block of article.blocks) {
    righe.push('', ...renderBlock(block));
  }

  if (article.invalidation?.length) {
    righe.push('', '## Cosa invaliderebbe questa lettura', '');
    for (const condizione of article.invalidation) righe.push(`- ${condizione}`);
  }

  if (article.certaintyNote) {
    righe.push('', '## Quanto è solida questa lettura', '', article.certaintyNote);
  }

  if (article.nextEvent) {
    const e = article.nextEvent;
    righe.push('', '## Prossimo appuntamento', '', `**${e.when}** — ${e.title}`);
    if (e.detail) righe.push('', e.detail);
  }

  if (article.bias) {
    const b = article.bias;
    righe.push(
      '',
      '## Regime descritto',
      '',
      `Impostazione su ${b.asset}: ${b.direction}, forza ${b.strength}.`,
      '',
      b.regime,
    );
  }

  return righe.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

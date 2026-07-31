import { CALENDAR_SECTIONS, CENTRAL_BANK_EVENTS, INDICATORS } from '../data/calendar.data';
import { calendarMarkdown, exportFilename, indicatorMarkdown } from './calendar-export';

/**
 * L'esportazione è la sola parte del sito che produce un file destinato a
 * vivere fuori di qui: se perde righe o sbaglia le colonne, chi lo apre non ha
 * modo di accorgersene confrontandolo con la pagina.
 */

const NOW = '2026-07-31T17:45:00.000Z';

describe('esportazione del calendario in Markdown', () => {
  const full = calendarMarkdown({
    indicators: INDICATORS,
    title: 'Calendario economico — indici principali di USA ed Euro zona',
    events: CENTRAL_BANK_EVENTS,
    archiveGeneratedAt: '2026-07-31T17:11Z',
    now: NOW,
  });

  it('nomina ogni indicatore di entrambe le aree', () => {
    for (const indicator of INDICATORS) {
      expect(full).toContain(`## ${indicator.name}`);
    }
    expect(full).toContain('# USA');
    expect(full).toContain('# Euro zona');
  });

  it('riporta una riga di tabella per ogni diffusione', () => {
    const attese = INDICATORS.reduce((n, i) => n + i.releases.length, 0);
    // Le righe dello storico iniziano con "| " seguito da una data.
    const righe = full.match(/^\| \d{1,2} [a-zà-ù]+ \d{4} · \d{2}:\d{2} \|/gm) ?? [];
    expect(righe.length).toBeGreaterThanOrEqual(attese);
  });

  it('dichiara le sei colonne richieste', () => {
    expect(full).toContain(
      '| Data e ora | Periodo | Previsto | Attuale | Precedente | Scostamento |',
    );
  });

  it('riporta prossima uscita e fonte di ogni indicatore', () => {
    for (const indicator of INDICATORS) {
      expect(full).toContain(indicator.sourceUrl);
    }
    expect(full).toContain('**Prossima uscita.**');
    expect(full).toContain('**Ultimo valore diffuso.**');
  });

  it('allega l’agenda delle banche centrali', () => {
    expect(full).toContain('# Banche centrali');
    expect(full).toContain('Prossimi appuntamenti');
  });

  it('porta con sé l’avvertenza legale e la natura del «previsto»', () => {
    // La dicitura compare a inizio frase in apertura e al plurale in chiusura.
    expect(full).toMatch(/[Nn]on costituisc(e|ono) consulenza finanziaria/);
    expect(full).toContain('consenso degli analisti');
    expect(full).toContain('fuso di Roma');
  });

  it('non lascia barre verticali che romperebbero le tabelle', () => {
    for (const riga of full.split('\n').filter((r) => r.startsWith('|'))) {
      const celle = riga.split(/(?<!\\)\|/).length - 1;
      expect(celle).toBeGreaterThanOrEqual(3);
    }
  });

  it('esporta anche una sola area', () => {
    const usa = CALENDAR_SECTIONS[0];
    const md = calendarMarkdown({
      indicators: usa.indicators,
      title: 'Calendario economico — USA',
      archiveGeneratedAt: '2026-07-31T17:11Z',
      now: NOW,
    });
    expect(md).toContain('# USA');
    expect(md).not.toContain('# Euro zona');
    for (const indicator of usa.indicators) {
      expect(md).toContain(`## ${indicator.name}`);
    }
  });

  it('esporta un singolo indicatore con tutto il suo storico', () => {
    const nfp = INDICATORS.find((i) => i.slug === 'usa-nfp');
    expect(nfp).toBeDefined();
    const md = indicatorMarkdown(nfp!);
    const righe = md.split('\n').filter((r) => /^\| \d{1,2} [a-zà-ù]+ \d{4} · /.test(r));
    expect(righe.length).toBe(nfp!.releases.length);
  });

  it('compone un nome di file datato', () => {
    expect(exportFilename('usa-euro-zona', NOW)).toBe(
      'vitanera-calendario-usa-euro-zona-2026-07-31.md',
    );
  });
});

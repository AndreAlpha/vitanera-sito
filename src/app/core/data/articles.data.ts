/**
 * Archivio delle analisi pubblicate.
 *
 * Questo file non contiene testo: ogni analisi vive in un file suo dentro
 * `articles/`, con lo stesso nome del suo slug, e qui viene solo importata e
 * messa in elenco. Un'analisi in più significa quindi un file in più e due
 * righe in più qui: l'import e la voce nell'array.
 *
 * A ogni analisi corrisponde anche un `contenuti/analisi/<slug>.md`, generato
 * da `npm run analisi` a partire da questi dati e verificato dai test: è la
 * copia leggibile dell'archivio, pensata per essere elaborata fuori dal sito.
 *
 * L'ordine dell'archivio a video è calcolato da `publishedAt`, non dalla
 * posizione nell'array; qui l'elenco si tiene dal più recente al più vecchio.
 *
 * Il campo `categories` accetta più categorie: la prima determina la tinta
 * della pagina e la pastiglia mostrata in evidenza sulle schede, le altre
 * servono a ritrovare l'analisi dall'archivio e dalle pagine di argomento.
 *
 * I testi riportano opinioni personali dell'autore basate su informazioni
 * disponibili al momento della redazione. Non sono consulenza finanziaria e non
 * vanno usati come base per decisioni di investimento (vedi /avvertenze).
 */
import type { Article } from '../models/article.model';
import { warshApreAUnRialzo } from './articles/warsh-apre-a-un-rialzo-e-il-numero-fermo-si-muove';
import { sussidiEProduttivita } from './articles/sussidi-e-produttivita-un-punto-base-di-reazione';
import { iranMinacciaImpiantiGolfo } from './articles/iran-minaccia-gli-impianti-del-golfo-il-greggio-scende';
import { cookProntaAUnRialzo } from './articles/cook-si-dice-pronta-a-un-rialzo-si-muove-solo-il-biennale';
import { coordinateHormuzSestoAnnuncio } from './articles/coordinate-concordate-a-hormuz-il-sesto-annuncio-e-diverso';
import { oroSfiora4200 } from './articles/oro-sfiora-4200-ma-le-attese-sulla-fed-non-si-muovono';
import { adpDeboleTesoroFermo } from './articles/adp-debole-e-tesoro-fermo-ma-il-decennale-non-si-muove';
import { attaccoMarRosso } from './articles/attacco-houthi-nel-mar-rosso-il-secondo-collo-di-bottiglia';
import { trattativaDurataTuttoIlGiorno } from './articles/trump-dichiara-una-trattativa-durata-tutto-il-giorno';
import { hormuzOttoNavi } from './articles/hormuz-non-ha-riaperto-otto-navi-contro-130-al-giorno';
import { oroEstendeCanaleTassi } from './articles/oro-estende-il-rialzo-il-canale-e-quello-dei-tassi';
import { iranControlloIngressiHormuz } from './articles/iran-chiede-il-controllo-sugli-ingressi-a-hormuz';
import { joltsPiuDeboleDelleAttese } from './articles/jolts-piu-debole-delle-attese-oro-su-rendimenti-giu';
import { petrolioInverteBessent } from './articles/petrolio-inverte-bruscamente-bessent-apre-su-hormuz';
import { rischioHormuzSiPagaAltrove } from './articles/rischio-hormuz-si-paga-in-petrolio-e-rendimenti-non-in-oro';
import { rendimentiTrentennaleMassimi } from './articles/rendimenti-a-30-anni-di-nuovo-sui-massimi-dal-2007';
import { naveColpitaHormuz } from './articles/nave-colpita-nello-stretto-di-hormuz';
import { trumpUltimatumTeheran } from './articles/trump-alza-di-nuovo-la-minaccia-contro-teheran';
import { tesoroFabbisognoEIran } from './articles/tesoro-alza-il-fabbisogno-iran-raffredda-la-distensione';
import { oroInverteDopoIsm } from './articles/oro-inverte-il-rialzo-dopo-il-dato-ism';
import { ismManifatturieroFortissimo } from './articles/ism-manifatturiero-a-55-6-piu-forte-del-previsto';
import { primiComponentiIsm } from './articles/primi-dati-ism-prezzi-sopra-le-attese-ordini-in-aumento';
import { interventoYenVendutiEuro } from './articles/intervento-sullo-yen-washington-ha-venduto-euro';
import { williamsPoliticaBenPosizionata } from './articles/williams-politica-della-fed-ben-posizionata';
import { iranSmentisceNegoziatiDiretti } from './articles/iran-smentisce-negoziati-diretti-con-gli-stati-uniti';
import { movimentoCrossAssetSiRafforza } from './articles/movimento-si-rafforza-petrolio-giu-dollaro-sotto-quota-100';
import { interventoCoordinatoYen } from './articles/intervento-coordinato-usa-giappone-sullo-yen';
import { opecQuoteHormuzTransito } from './articles/opec-alza-le-quote-e-una-metaniera-esce-da-hormuz';
import { acquistiBancheCentraliRivisti } from './articles/banche-centrali-tornano-a-comprare-oro-rendimenti-freno';
import { attaccoSospesoNonCancellato } from './articles/attacco-sospeso-non-cancellato-iran-smentisce';
import { cancellazioneAttaccoIran } from './articles/trump-cancella-attacco-iran-accordo-non-chiuso';
import { attacchiEnergiaIraniana } from './articles/attacchi-energia-iraniana-piano-non-ordine';

export { AUTHOR } from './author';

export const ARTICLES: readonly Article[] = [
  warshApreAUnRialzo,
  sussidiEProduttivita,
  iranMinacciaImpiantiGolfo,
  cookProntaAUnRialzo,
  coordinateHormuzSestoAnnuncio,
  oroSfiora4200,
  adpDeboleTesoroFermo,
  attaccoMarRosso,
  trattativaDurataTuttoIlGiorno,
  hormuzOttoNavi,
  oroEstendeCanaleTassi,
  iranControlloIngressiHormuz,
  joltsPiuDeboleDelleAttese,
  petrolioInverteBessent,
  rischioHormuzSiPagaAltrove,
  rendimentiTrentennaleMassimi,
  naveColpitaHormuz,
  trumpUltimatumTeheran,
  tesoroFabbisognoEIran,
  oroInverteDopoIsm,
  ismManifatturieroFortissimo,
  primiComponentiIsm,
  interventoYenVendutiEuro,
  williamsPoliticaBenPosizionata,
  iranSmentisceNegoziatiDiretti,
  movimentoCrossAssetSiRafforza,
  interventoCoordinatoYen,
  opecQuoteHormuzTransito,
  acquistiBancheCentraliRivisti,
  attaccoSospesoNonCancellato,
  cancellazioneAttaccoIran,
  attacchiEnergiaIraniana,
];

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
import { treMortiSuUnaNave } from './articles/tre-morti-su-una-nave-e-il-prezzo-va-nell-altro-verso';
import { trePuntiBaseSulTrentennale } from './articles/tre-punti-base-sul-trentennale-trecento-dollari-sull-oro';
import { settantaDollariIndietro } from './articles/settanta-dollari-indietro-e-la-condizione-scatta';
import { oroRompe4400 } from './articles/l-oro-rompe-i-4400-con-il-dollaro-in-salita';
import { seiNaviLunediMediaUndici } from './articles/sei-navi-lunedi-e-una-media-di-undici';
import { rialzoSettembreTornaInMaggioranza } from './articles/il-rialzo-di-settembre-torna-in-maggioranza';
import { brentPassaGli84 } from './articles/il-brent-passa-gli-84-il-biennale-resta-fermo';
import { petrolioArrivaAiTassi } from './articles/il-petrolio-arriva-ai-tassi-e-mancano-due-punti-base';
import { treSettimanePerLisaCook } from './articles/tre-settimane-per-lisa-cook-e-il-numero-non-si-muove';
import { petrolioPrezzaHormuzOroNo } from './articles/il-petrolio-prezza-hormuz-l-oro-no';
import { bojRitmoPiuRapido } from './articles/la-boj-apre-a-un-ritmo-piu-rapido-e-nomina-il-medio-oriente';
import { washingtonAbbassaIlTono } from './articles/washington-abbassa-il-tono-e-mocha-viene-colpita-di-nuovo';
import { cinquantamilaSoldatiUnDecimoDiPunto } from './articles/cinquantamila-soldati-dichiarati-e-un-decimo-di-punto-nel-golfo';
import { dueInfrastruttureUnPrezzo } from './articles/due-infrastrutture-in-un-giorno-solo-una-ha-un-prezzo';
import { droneSuJazan } from './articles/un-drone-su-jazan-e-la-via-di-fuga-da-hormuz';
import { clausolaHaUnModello } from './articles/la-clausola-ha-un-modello-e-il-modello-non-obbliga';
import { riaperturaHaUnPrezzo } from './articles/la-riapertura-ha-un-prezzo-non-sul-tavolo-dell-oman';
import { maribRischioPiuAltoDal2022 } from './articles/marib-sotto-i-missili-e-il-rischio-piu-alto-dal-2022';
import { washingtonPechinoVentiTonnellate } from './articles/washington-allarga-la-mano-pechino-compra-venti-tonnellate';
import { aspettativeUnAnnoCinqueAnni } from './articles/le-aspettative-a-un-anno-scendono-quelle-a-cinque-anni-no';
import { adnocQuindiciNavi } from './articles/quindici-navi-colpite-e-il-greggio-riparte';
import { nfpLuglioRialzoInMinoranza } from './articles/meno-23-mila-posti-e-il-rialzo-di-settembre-passa-in-minoranza';
import { pattoMeccaClausola } from './articles/un-attacco-a-uno-e-un-attacco-a-tutti-il-patto-e-firmato';
import { pattoGeddaRifugio } from './articles/un-patto-a-gedda-e-il-rifugio-torna-in-vantaggio';
import { dazioPrezzoMinimoPolisilicio } from './articles/un-dazio-con-il-prezzo-minimo-e-la-data-prima-della-fed';
import { hormuzPedaggioAssicurazione } from './articles/hormuz-il-pedaggio-che-nessuno-puo-pagare';
import { iranBozzaHormuz } from './articles/iran-pubblica-la-bozza-su-hormuz-il-rialzo-ha-un-nome';
import { brentSupera82 } from './articles/il-brent-supera-gli-82-dollari-la-soglia-e-caduta';
import { teheranColloquiNonRiapertura } from './articles/teheran-i-colloqui-con-oman-non-sono-la-riapertura';
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
  treMortiSuUnaNave,
  trePuntiBaseSulTrentennale,
  settantaDollariIndietro,
  oroRompe4400,
  seiNaviLunediMediaUndici,
  rialzoSettembreTornaInMaggioranza,
  brentPassaGli84,
  petrolioArrivaAiTassi,
  treSettimanePerLisaCook,
  petrolioPrezzaHormuzOroNo,
  bojRitmoPiuRapido,
  washingtonAbbassaIlTono,
  cinquantamilaSoldatiUnDecimoDiPunto,
  dueInfrastruttureUnPrezzo,
  droneSuJazan,
  clausolaHaUnModello,
  riaperturaHaUnPrezzo,
  maribRischioPiuAltoDal2022,
  washingtonPechinoVentiTonnellate,
  aspettativeUnAnnoCinqueAnni,
  adnocQuindiciNavi,
  nfpLuglioRialzoInMinoranza,
  pattoMeccaClausola,
  pattoGeddaRifugio,
  dazioPrezzoMinimoPolisilicio,
  hormuzPedaggioAssicurazione,
  iranBozzaHormuz,
  brentSupera82,
  teheranColloquiNonRiapertura,
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

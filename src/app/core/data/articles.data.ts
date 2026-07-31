import { Article } from '../models/article.model';

/**
 * Archivio delle analisi pubblicate.
 *
 * L'archivio è attualmente vuoto: il sito è stato riorganizzato attorno alle
 * nuove categorie e al calendario economico, e le pubblicazioni ripartono da
 * zero. Ogni pagina che elenca analisi è preparata per questo stato e mostra un
 * riquadro «ancora nessuna pubblicazione» invece di una griglia vuota.
 *
 * Per aggiungere un'analisi si inserisce un oggetto `Article` in questo array.
 * Il campo `categories` accetta più categorie: la prima determina la tinta della
 * pagina e la pastiglia mostrata in evidenza sulle schede, le altre servono a
 * ritrovare l'analisi dall'archivio e dalle pagine di argomento.
 *
 * L'ordine dell'archivio è calcolato da `publishedAt`, non dalla posizione
 * nell'array.
 *
 * I testi riportano opinioni personali dell'autore basate su informazioni
 * disponibili al momento della redazione. Non sono consulenza finanziaria e non
 * vanno usati come base per decisioni di investimento (vedi /avvertenze).
 */
export const ARTICLES: readonly Article[] = [];

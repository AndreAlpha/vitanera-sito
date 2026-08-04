/**
 * Punto d'ingresso per `npm run analisi`.
 *
 * Esiste perché il generatore dei markdown ha bisogno di leggere insieme le
 * analisi e i loro esiti, e importarli da due file separati vorrebbe dire
 * compilare due volte lo stesso archivio. Non è usato da nessuna pagina: il
 * sito importa direttamente `articles.data.ts` e `outcomes.data.ts`.
 */
export { ARTICLES } from './articles.data';
export { OUTCOMES } from './outcomes.data';

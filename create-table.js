import { sql } from './dbNode.js';

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//    console.log('deleted videos table');
// });

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
);
`.then(() => console.log('created table'));

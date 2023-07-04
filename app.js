import express from 'express';
import bodyParser from 'body-parser';
import dao from './repositories/dao';

import { authenticated, authMiddleware } from './controllers/auth.controller';

import authRoutes from './routes/auth.routes';
import itemsRoutes from './routes/items.routes';

const session = require('express-session');
const cookieParser = require('cookie-parser');

import * as sqlite3 from 'sqlite3';
import sqliteStoreFactory from 'express-session-sqlite';

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server in ${PORT} port`));

app.use(bodyParser.json());
app.use(authMiddleware);
app.use(cookieParser());

app.use(session({ secret: "secretID" }));

const sqliteStore = sqliteStoreFactory(session);

app.use(session({
    store: new sqliteStore({
        driver: sqlite3.Database,
        path: './database.db',
        ttl: 3600000, // 1 hour in miliseconds
    }),
}));

dao.setupDB();

app.use('/api/auth', authRoutes);
app.use('/api/items', authenticated, itemsRoutes);

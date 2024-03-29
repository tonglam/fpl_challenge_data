// Require necessary modules
const express = require('express');
require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const pino = require('pino');
const expressPinoLogger = require('pino-http');
const testJob = require('./src/jobs/test_job');

const app = express();
const port = process.env.PORT || 3000;

// Prisma
const prisma = new PrismaClient();

// Logger
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

// Cron job
testJob();

// Import the router
const programmingLanguagesRouter = require('./src/routes/programmingLanguages.route');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressPinoLogger({ logger }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.get('/event', async (req, res) => {
  const events = await prisma.event.findMany();
  res.json(events);
});

app.use('/programming-languages', programmingLanguagesRouter);

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

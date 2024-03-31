// Require necessary modules
const express = require('express');
require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const pino = require('pino');
const expressPinoLogger = require('pino-http');
// const testJob = require('./src/jobs/test.job');

const app = express();
const port = process.env.PORT || 3000;

// Prisma
const prisma = new PrismaClient();

// Logger
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

// Cron job
// testJob();

// Import the router

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressPinoLogger({ logger }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = { server, prisma, logger };

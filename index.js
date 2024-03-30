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

app.post('/products', async (req, res, next) => {
  console.log(req.body, '************'); //Take a look into request object here
  try {
    const newProduct = await prisma.products.create({
      data: { sellerId: 1, ...req.body },
    });

    res.json({ newProduct });
  } catch (error) {
    next(error.message);
  }
});

app.post('/products', async (req, res, next) => {
  console.log(req.body, '************'); //Take a look into request object here
  try {
    const newProduct = await prisma.products.create({
      data: { sellerId: 1, ...req.body },
    });

    res.json({ newProduct });
  } catch (error) {
    next(error.message);
  }
});

app.get('/products/:id', async (req, res, next) => {
  try {
    const singleProduct = await prisma.products.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.json({ singleProduct });
  } catch (error) {
    next(error.message);
  }
});

app.patch('/products/:id', async (req, res, next) => {
  try {
    const product = await prisma.products.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });

    res.json({ product });
  } catch (error) {
    next(error.message);
  }
});

app.delete('/products/:id', async (req, res, next) => {
  try {
    await prisma.products.delete({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    next(error.message);
  }
});

app.get('/users/:id/products', async (req, res, next) => {
  try {
    const usersWithProducts = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        products: {
          where: {
            selling: true,
          },
        },
      },
    });

    const products = usersWithProducts?.products;

    res.json({ products });
  } catch (error) {
    next(error.message);
  }
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

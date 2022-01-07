const { PrismaClient } = require('@prisma/client')
const express = require('express');
require('@prisma/client');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const multer = require('multer');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const prisma = new PrismaClient()

async function main() {
    // Connect the client
    await prisma.$connect()
    // ... you will write your Prisma Client queries here
}

const route = require('./routes');
app.use('/', route);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


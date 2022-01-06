const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/* GET messages listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({msg: "send messages"});
});

/* Post  message. */
router.post('/',  async function(req, res, next) {
    try {
      await prisma.message.create({
        data: {
           content: 'testt',
           authorId: 1
        },
      })
      console.log('Created messages');
      return res.json({msg: "message create"});
    } catch(e) {
      console.error(e);
      return res.status(403).json({msg: 'something went wrong'});
    }
});

module.exports = router;

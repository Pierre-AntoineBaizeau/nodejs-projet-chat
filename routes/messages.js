const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET messages listing. */
router.get("/", async function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const mess = await prisma.message.findMany();
    return res.status(200).json(mess);
  } catch (e) {
    console.log(e);
    res.status(403).json({ msg: "404 error" });
  }
});

/* Post  message. */
router.post("/", async function (req, res, next) {
  try {
    const message = {
      content: req.body.content,
      authorId: req.body.authorId,
    };
    await prisma.message.create({
      data: message,
    });
    console.log("Created messages");
    return res.json({ msg: "message create" });
  } catch (e) {
    console.error(e);
    return res.status(403).json({ msg: "something went wrong" });
  }
});

module.exports = router;

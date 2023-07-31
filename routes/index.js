const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

router.get("/", function (req, res, next) {
    res.render("index", { title: "Message Board", messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
    console.log(req.body);
    messages.unshift({
        text: req.body.messageText,
        user: req.body.messageUser,
        added: new Date(),
    });
    res.redirect("/");
});

module.exports = router;

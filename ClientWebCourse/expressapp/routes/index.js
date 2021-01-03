var express = require("express");
var router = express.Router();

var contacts = [];
var newId = 1;

router.get("/api/getContacts", function (req, res) {
    var term = (req.query.term || "").toUpperCase();

    var result = term.length === 0
        ? contacts
        : contacts.filter(function (contact) {
            return contact.name.toUpperCase().indexOf(term) >= 0 ||
                contact.phone.toUpperCase().indexOf(term) >= 0;
        });

    res.send(result);
})

router.post("/api/deleteContact", function (req, res) {
    var id = req.body.id;

    contacts = contacts.filter(function (contact) {
        return contact.id !== id;
    });

    res.send({
        success: true,
        message: null
    });
})

router.post("/api/createContact", function (req, res) {
    var contact = req.body.contact

    if (!contact) {
        res.send({
            success: false,
            message: "Неверный формат данных"
        });

        return;
    }

    if (!contact.name) {
        res.send({
            success: false,
            message: "Необходимо задать имя контакта"
        });

        return;
    }

    if (!contact.phone) {
        res.send({
            success: false,
            message: "Необходимо задать телефон контакта"
        });

        return;
    }

    if (contacts.some(function (contact) {
        return contact.phone.toUpperCase() === contact.phone.toUpperCase();
    })) {
        res.send({
            success: false,
            message: "Уже есть контакт с таким телефоном"
        });

        return;
    }

    contact.id = newId;
    newId++;

    contacts.push(contact);

    res.send({
        success: true,
        message: null
    });
})

/* GET home page. */
router.get("/", function (req, res) {
    res.render("index", {
        title: "Express"
    });
});

module.exports = router;

const express = require("express");
const routeur = express.Router();
const twig = require("twig");
const livreSchema=require("./models/livres.models")

routeur.get("/", (requete, reponse) =>{
    reponse.render("accueil.html.twig")
})



routeur.get("/livres", (requete, reponse) =>{
    livreSchema.find()
        .exec()
        .then(livres => {
            reponse.render("livres/liste.html.twig", {liste : livres})
        })
        .catch();
})

routeur.get("/livres/:id", (requete,reponse) => {
    livreSchema.findById(requete.params.id)
    .exec()
    .then(livre => {
        reponse.render("livres/livre.html.twig",{livre : livre})
    })
    .catch(error => {
        console.log(error);
    })
})

routeur.use((requete,reponse,suite) => {
    const error = new Error("Page non trouvée");
    error.status= 404;
    suite(error);
})

routeur.use((error,requete,reponse) => {
    reponse.status(error.status || 500);
    reponse.end(error.message);
})

module.exports = routeur;
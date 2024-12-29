// script.js

// Tableau de citations
const citations = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    "La patience est la clé du bien-être.",
    "L'échec est le fondement de la réussite.",
    "La simplicité est la sophistication suprême.",
    "Le succès est d’aller d’échec en échec sans perdre son enthousiasme."
];

// Tableau d'images de fond
const backgrounds = [
    "url('https://senego.com/wp-content/uploads/2018/07/serigne-cheikh.png')",
    "url('https://senego.com/wp-content/uploads/2016/12/makhtoum.jpg')",
    "url('https://www.leral.net/photo/art/grande/14518235-20340522.jpg?v=1497011672')",
    "url('https://senego.com/wp-content/uploads/2018/03/29216040_2060012877613943_632504751848893739_n.jpg')",
    "url('https://www.leral.net/photo/art/grande/10759008-17754037.jpg?v=1481472275&ibox')",
    "url('')"

];

const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const backgroundDiv = document.getElementById("background");

// Fonction pour générer une citation aléatoire avec animation et changer l'image de fond
function afficherNouvelleCitation() {
    const indexCitation = Math.floor(Math.random() * citations.length);
    const indexBackground = Math.floor(Math.random() * backgrounds.length);

    // Changer la citation
    quoteText.textContent = citations[indexCitation];

    // Changer l'image de fond
    document.body.style.backgroundImage = backgrounds[indexBackground];

    // Enlever puis réajouter la classe pour redémarrer l'animation
    quoteText.classList.remove("fade");
    void quoteText.offsetWidth;  // Force le reflow (recalcul) de l'élément
    quoteText.classList.add("fade");
}

// Événement du bouton pour afficher une nouvelle citation
newQuoteBtn.addEventListener("click", afficherNouvelleCitation);

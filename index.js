/*  Next:
    - Vérifier que tout soit clair dans mon code pour Socket.IO et SweetAlert2
*/

// GLOBAL
import express from "express";
import bodyParser from "body-parser";

// Socket.IO
import { Server } from "socket.io";
import http from "http";

// Date Formatter
import dateFormatter from './public/dateFormatter.js';

// GLOBAL
const app = express( );
const port = 3000;

// Socket.IO
const server = http.createServer( app );
const io = new Server( server )

// TODO : afficher les dates correctement (ne pas les écrire, laisser le code faire le travail)
const staticArticles = [
    {
        id: 1,
        title: "Bodhichitta",
        date: "2023-03-23",
        content: "Need to check on human, ave not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 2,
        title: "Smile",
        date: "2023-03-28",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 3,
        title: "The walking meditation",
        date: "2023-05-13",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 4,
        title: "Yoga Nidra",
        date: "2023-06-23",
        content: "Need to check on human, ave not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 5,
        title: "Vipashiana",
        date: "2023-06-28",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 6,
        title: "The Kindly welcoming what is",
        date: "2023-09-13",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 7,
        title: "Nine cleaning breathings",
        date: "2023-09-23",
        content: "Need to check on human, ave not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 8,
        title: "Stilness",
        date: "2023-11-28",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 9,
        title: "Silence",
        date: "2023-12-13",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 10,
        title: "Spaciousness",
        date: "2023-12-23",
        content: "Need to check on human, ave not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 11,
        title: "I am conscious of my body",
        date: "2024-01-28",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 12,
        title: "Here and now",
        date: "2024-03-13",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 13,
        title: "One thing",
        date: "2024-04-23",
        content: "Need to check on human, ave not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 14,
        title: "Daily Gratitude",
        date: "2024-06-28",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 15,
        title: "The why",
        date: "2024-06-13",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 16,
        title: "Mindfulness basics",
        date: "2024-07-23",
        content: "Need to check on human, ave not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
];

let articles = [ ];

app.use( express.static( "public" ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// console.log( "Test de dateFormatter.formatYearMonth:", dateFormatter.formatYearMonth( "2023-08-21" ) );



function getFormattedArticles( ) {
    return articles.map( article => ( {
        ...article,
        yearOnly: dateFormatter.formatYear( article.date ),
        yearMonth: dateFormatter.formatYearMonth( article.date ),
        fullDate: dateFormatter.formatFull( article.date )
    } ) );
}



// INDEX PAGE
app.get( "/", (req, res ) => {
    const formattedArticles = getFormattedArticles();
    res.render( "index.ejs", { articlesIndex: formattedArticles } );
} );

preResetBlog();
resetBlog();



// GO TO READING ARTICLE
app.get( "/article/:id", ( req, res ) => { // `:`= paramètre de route
    // TODO : créer une fonction externe pour trouver l'article à envoyer ds res.render
    const articleId = parseInt( req.params.id ); // Accès au paramètre de route "id"
    const article = articles.find( a => a.id === articleId ); // Recherche de l'article
    if ( article ) {
        const formattedArticle = {
            ...article,
            fullDate: dateFormatter.formatFull( article.date )
        };
        res.render( "article.ejs", { article: formattedArticle } );
    } // TODO : créer une exception, si l'article est effacé et qu'on actualise la page, renvoi 404.
} );



// GO TO NEW ARTICLE
app.get( "/new-article", ( req, res ) => {
    res.render( "article-form.ejs", { article: { }, mode: "create" } );
} );



// POST NEW ARTICLE
app.post( "/new-article", ( req, res ) => {
    const newArticle = {
        id: articles.length + 1,
        title: req.body.title,
        date: getToday( ),
        content: req.body.content.replace(/\n/g, "<br>")
    };
    articles.push( newArticle );
    
    res.redirect( `/article/${ newArticle.id }` );
} );



// GO TO EDIT ARTICLE
app.get( "/edit-article/:id", ( req, res ) => {
    // TODO : créer une fonction externe pour trouver l'article à envoyer ds res.render
    const articleId = parseInt( req.params.id ); // Accès au paramètre de route "id"
    const article = articles.find( a => a.id === articleId ); // Recherche de l'article
    if ( article ) {
        res.render( "article-form.ejs", { article: article, mode: "edit" } );
    }
} );



// POST EDIT ARTICLE
app.post( "/edit-article/:id", ( req, res ) => {
    // TODO : créer une fonction externe pour trouver l'article à envoyer ds res.render
    const articleId = parseInt( req.params.id ); // Accès au paramètre de route "id"
    const article = articles.find( a => a.id === articleId ); // Recherche de l'article
    if ( article ) {
        article.title = req.body.title;
        article.content = req.body.content.replace( /\n/g, "<br>" );

        res.redirect( `/article/${ article.id }` );
    } else {
        res.status( 404 ).send( { message: "Article not found" } );
    }
} );



// DELETE ARTICLE
// pour supprimer, malgré qu'il existe la route DELETE, il est infiniment plus simple d'utiliser POST
app.post( "/delete/:id", ( req, res ) => {
    // TODO : créer une fonction externe pour trouver l'article à envoyer ds res.render
    const articleId = parseInt( req.params.id ); // Accès au paramètre de route "id"
    const article = articles.find( a => a.id === articleId ); // Recherche de l'article

    if ( article ) {
        articles = articles.filter( a => a.id !== articleId); // Suppression de l'article
        res.redirect( "/" );
    } else {
        res.status( 404 ).send( { message: "Article not found" } );
    }
} ); 



// START EXPRESS & SOCKET.IO SERVER
server.listen( port, ( ) => {
    console.log( `Listening on port ${ port } with Express and Socket.IO`);
})

// GET TODAY'S DATE
function getToday ( ) {
    const today = new Date( );
    const formattedDate =
        today.getFullYear( ) + "-" +
        ( "0" + ( today.getMonth( ) + 1 ) ).slice( -2 ) + "-" +
        ( "0" + today.getDate( ) ).slice( -2 );
    return formattedDate;
}



// RESET BLOG
function preResetBlog( ) {
    setTimeout( ( ) => { // 15 seconds timeout
        io.emit( 'blogPreReset' );
        setTimeout( ( ) => { // 5 seconds timeout
            io.emit( 'blogReset' )
            resetBlog();
            preResetBlog( );
        }, 10000 );
    }, 50000 );
}

function resetBlog( ) {
    articles = staticArticles.map( article => ( { ...article } ) ); // attention à la copie superficielle > copie profonde des objets.
}
/*Este fin de semana voy a estar con mis abuelos y quiero invitarles por sorpresa a
ver una película que se estrenó el año de su nacimiento 1922. El problema es que solo
tengo 10 euros, por lo que como máximo la entrada tiene que valer 3.33 euros*/
db.peliculas.find( { $and: [ { date: { $gt: new Date ("1922-01-01") } }, {date : {$lt: new Date("1923-01-01")}},{precioentrada: { $lte: 3.33}}]})
db.peliculas.find( { date: { $gt: new Date ("1922-01-01"), $lt: new Date("1923-01-01")}, precioentrada:{ $lte: 3.33}})
db.peliculas.find({$and:[{ date: {$gt:new Date("1922-01-01"),$lt: new Date("1923-01-01")}, precioentrada: {$lte:3.33}}]})
/*
ATENCIÓN SOLUCIÓN SI HUBIERA PUESTO LAS FECHAS TIPO date:new Date(
db.peliculas.find({
    date:new Date( {$gte: new Date("2002-01-01"), $lte: new Date("2002-12-31")}
})

*/

/*
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a350"), "titulo" : "Nosferatu, eine Symphonie des Grauens", "precioentrada" : 3, "personal" : { "direccion" : [ "F. W. Murnau" ], "protagonista" : [ "Max Schreck", "Gustav von Wangenheim", "Greta Schröder", "Alexander Granach" ] }, "pegi" : "TP", "genero" : [ "Terror" ], "pais" : [ "Alemania" ], "duracion" : 94, "date" : "1922-09-17", "color" : false }
*/
//Odio el cine español y solo me apetece ver películas que no sean españolas.
db.peliculas.find( { pais: { $not: { $eq: "España" } } } )
db.peliculas.find( { pais: { $ne: "España" } } )
/*
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a34d"), "titulo" : "Ice Age", "precioentrada" : 5, "personal" : { "direccion" : [ "Chris Wedge", "Carlos Saldanha" ], "protagonista" : [ "Manny", "Sid", "Diego", "Scrat", "Roshan", "Soto", "Dodo", "Carl", "Frank", "Ken" ] }, "pegi" : 3, "genero" : [ "Animación", "Comedia", 
"Ciencia ficción", "Infantil" ], "pais" : [ "Estados Unidos" ], "duracion" : 81, "date" : "2002-02-08", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a34f"), "titulo" : "La guerra de las galaxias: Episodio IV-Una nueva esperanza", "precioentrada" : 8, "personal" : { 
"direccion" : [ "George Lucas" ], "protagonista" : [ "Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing", "Alec Guinness", "Anthony Daniels", "Kenny Baker", "Peter Mayhew", "David Prowse", "James Earl Jones" ] }, "pegi" : 16, "genero" : [ "Ciencia ficción" ], "pais" : [ "Estados Unidos" ], "duracion" : 121, "date" : "1997-11-24", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a350"), "titulo" : "Nosferatu, eine Symphonie des Grauens", "precioentrada" : 3, "personal" : { "direccion" : [ "F. W. Murnau" ], "protagonista" : [ "Max Schreck", "Gustav von Wangenheim", "Greta Schröder", "Alexander Granach" ] }, "pegi" : "TP", "genero" : [ "Terror" ], "pais" : [ "Alemania" ], "duracion" : 94, "date" : "1922-09-17", "color" : false }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a351"), "titulo" : "Indiana Jones en busca del arca perdida", "precioentrada" : 8, "personal" : { "direccion" : [ "George Lucas" ], "protagonista" : [ "Harrison Ford" ] }, "pegi" : "TP", "genero" : [ "Aventura", "Acción" ], "pais" : [ "Estados Unidos" ], "duracion" : 115, "date" : "1981-10-27", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a353"), "titulo" : "Robots", "precioentrada" : 5, "personal" : { "direccion" : [ "Chris Wedge", "Carlos Saldanha" ], 
"protagonista" : [ "Ewan McGregor", "Halle Berry", "Greg Kinnear", "Mel Brooks", "Drew Carey" ] }, "pegi" : 16, "genero" : [ "Animación", "Comedia", "Infantil" ], "pais" : [ "Estados Unidos" ], "duracion" : 89, "date" : "2005-02-02", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a354"), "titulo" : "El gran dictador", "precioentrada" : 3, "personal" : { "direccion" : [ "Charles Chaplin" ], "protagonista" : [ "Charles Chaplin", "Paulette Goddard", "Jack Oakie", "Reginald Gardiner", "Henry Daniell", "Billy Gilbert" ] }, "pegi" : "TP", "genero" : [ "Comedia", "Drama", "Sátira" ], "pais" : [ "Estados Unidos" ], "duracion" : 124, "date" : "1940-02-28", "color" : false }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a355"), "titulo" : "Parque Jurásico", "precioentrada" : 5, "personal" : { "direccion" : [ "Steven Spielberg" ], "protagonista" : [ "Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "Samuel L. Jackson" ] }, "pegi" : 12, "genero" : [ "Ciencia Ficción", "Aventura", "Acción", "Suspense" ], "pais" : [ "Estados Unidos" ], "duracion" : 127, "date" : "1993-07-26", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a356"), "titulo" : "Interstellar", "precioentrada" : 8, "personal" : { "direccion" : [ "Christopher Nolan" ], "protagonista" : [ "Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Matt Damon" ] }, "pegi" : 12, "genero" : [ "Ciencia Ficción" ], "pais" : [ "Estados Unidos", "Reino Unido", "Canadá" ], "duracion" : 169, "date" : "2014-04-05", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a357"), "titulo" : "Grease", "precioentrada" : 5, "personal" : { "direccion" : [ "Randal Kleiser" ], "protagonista" : [ "John Travolta", "Olivia Newton-John", "Stockard Channing", "Jeff Conaway" ] }, "pegi" : "TP", "genero" : [ "Comedia romántica", "Musical" ], "pais" : [ "Estados Unidos" ], "duracion" : 110, "date" : "1978-07-20", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a358"), "titulo" : "Metrópolis", "precioentrada" : 3, "personal" : { "direccion" : [ "Fritz Lang" ], "protagonista" : [ "Brigitte Helm", "Gustav Fröhlich", "Alfred Abel", "Rudolf Klein-Rogge" ] }, "pegi" : "TP", "genero" : [ "Ciencia Ficción", "Expresionismo" ], "pais" : [ 
"Alemania" ], "duracion" : 153, "date" : "1927-03-04", "color" : false }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a359"), "titulo" : "Titanic", "precioentrada" : 5, "personal" : { "direccion" : [ "James Cameron" ], "protagonista" : [ "Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Gloria Stuart", "Ioan Gruffudd" ] }, "pegi" : 12, "genero" : [ "Romance", "Catástrofe", "Drama" ], "pais" : [ "Estados Unidos" ], "duracion" : 195, "date" : "1997-09-23", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35a"), "titulo" : "Iron Man", "precioentrada" : 5, "personal" : { "direccion" : [ "Jon Favreau" ], "protagonista" : 
[ "Robert Downey Jr.", "Terrence Howard", "Gwyneth Paltrow", "Shaun Toub", "Paul Bettany", "Jeff Bridges" ] }, "pegi" : 13, "genero" : [ "Ciencia Ficción", "Acción", "Superhéroes" ], "pais" : [ "Estados Unidos" ], "duracion" : 126, "date" : "2008-04-30", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35b"), "titulo" : "Avatar", "precioentrada" : 8, "personal" : { "direccion" : [ "James Cameron" ], "protagonista" : 
[ "Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Michelle Rodríguez", "Stephen Lang", "Giovanni Ribisi", "Joel David Moore" ] }, "pegi" : 7, "genero" : [ "Ciencia Ficción", "Aventura", "Acción", "Fantástico", "Animación" ], "pais" : [ "Estados Unidos" ], "duracion" : 178, "date" : "2009-08-16", "color" : 
true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35c"), "titulo" : "Los Tres Mosqueteros", "precioentrada" : 5, "personal" : { "direccion" : [ "Fred Niblo" ], "protagonista" : [ "Douglas Fairbanks", "Eugene Pallette", "Sidney Franklin", "Nigel De Brulier" ] }, "pegi" : "TP", "genero" : [ "Capa y espada", "Mudo" ], "pais" : [ "Estados Unidos" ], "duracion" : 118, "date" : "1921-08-09", "color" : false }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35d"), "titulo" : "E.T., el extraterrestre", "precioentrada" : 5, "personal" : { "direccion" : [ "Steven Spielberg" 
], "protagonista" : [ "Henry Thomas", "Robert MacNaughton", "Drew Barrymore", "Dee Wallace", "Peter Coyote" ] }, "pegi" : "TP", "genero" : [ "Ciencia Ficción" ], "pais" : [ "Estados Unidos" ], "duracion" : 115, "date" : "1982-07-14", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35e"), "titulo" : "Tenet", "precioentrada" : 8, "personal" : { "direccion" : [ "Christopher Nolan" ], "protagonista" : [ "John David Washington", "Robert Pattinson", "Elizabeth Debicki", "Dimple Kapadia", "Michael Caine", "Kenneth Branagh" ] }, "pegi" : 14, "genero" : [ "Ciencia Ficción", "Thriller", "Espía" ], "pais" : [ "Estados Unidos", "Reino Unido" ], "duracion" : 150, "date" : "2020-08-10", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35f"), "titulo" : "Spider-Man", "precioentrada" : 5, "personal" : { "direccion" : [ "San Raimi" ], "protagonista" : 
[ "Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco", "Cliff Robertson", "J. K. Simmons" ] }, "pegi" : 7, "genero" : [ "Ciencia Ficción", "Acción", "Superhéroes", "Drama" ], "pais" : [ "Estados Unidos" ], "duracion" : 121, "date" : "2002-12-15", "color" : true }
*/
/*Mi primo me recomendó una película que tenía las siguientes características pero no se acordaba del nombre.
-Que fuese a color
-Que fuese de superhéroes
-Que se estrenara antes del 2005*/
db.peliculas.find( { $and: [ { color:true }, { genero: "Superhéroes" }, { date:new Date( { $lt: "2005-01-01" } )} ] } )
/*
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35f"), "titulo" : "Spider-Man", "precioentrada" : 5, "personal" : { "direccion" : [ "San Raimi" ], "protagonista" : 
[ "Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco", "Cliff Robertson", "J. K. Simmons" ] }, "pegi" : 7, "genero" : [ "Ciencia Ficción", "Acción", "Superhéroes", "Drama" ], "pais" : [ "Estados Unidos" ], "duracion" : 121, "date" : "2002-12-15", "color" : true }
*/
//Tengo como máximo 115 minutos para ver una película y me apetece ver una de animación.
db.peliculas.find( { $and: [ { duracion: { $lt: 115 } }, { genero: "Animación" } ] } )
/*
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a34d"), "titulo" : "Ice Age", "precioentrada" : 5, "personal" : { "direccion" : [ "Chris Wedge", "Carlos Saldanha" ], "protagonista" : [ "Manny", "Sid", "Diego", "Scrat", "Roshan", "Soto", "Dodo", "Carl", "Frank", "Ken" ] }, "pegi" : 3, "genero" : [ "Animación", "Comedia", 
"Ciencia ficción", "Infantil" ], "pais" : [ "Estados Unidos" ], "duracion" : 81, "date" : "2002-02-08", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a353"), "titulo" : "Robots", "precioentrada" : 5, "personal" : { "direccion" : [ "Chris Wedge", "Carlos Saldanha" ], 
"protagonista" : [ "Ewan McGregor", "Halle Berry", "Greg Kinnear", "Mel Brooks", "Drew Carey" ] }, "pegi" : 16, "genero" : [ "Animación", "Comedia", "Infantil" ], "pais" : [ "Estados Unidos" ], "duracion" : 89, "date" : "2005-02-02", "color" : true }
*/
//Quiero ver todas las películas que hay en esta cartelera de un director que sé que se apellida Spielberg o Spielverg pero no se su nombre.
db.peliculas.find( { "personal.direccion": { $regex: /Spiel.erg$/ } } )

/*{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a355"), "titulo" : "Parque Jurásico", "precioentrada" : 5, "personal" : { "direccion" : [ "Steven Spielberg" ], "protagonista" : [ "Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "Samuel L. Jackson" ] }, "pegi" : 12, "genero" : [ "Ciencia Ficción", "Aventura", "Acción", "Suspense" ], "pais" : [ "Estados Unidos" ], "duracion" : 127, "date" : "1993-07-26", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35d"), "titulo" : "E.T., el extraterrestre", "precioentrada" : 5, "personal" : { "direccion" : [ "Steven Spielberg" 
], "protagonista" : [ "Henry Thomas", "Robert MacNaughton", "Drew Barrymore", "Dee Wallace", "Peter Coyote" ] }, "pegi" : "TP", "genero" : [ "Ciencia Ficción" ], "pais" : [ "Estados Unidos" ], "duracion" : 115, "date" : "1982-07-14", "color" : true }
*/
/*Quiero ir al cine a ver películas modernas del año 2000 hasta hoy y tengo 28 euros para el cine.
Por lo tanto, tengo que elegir entre ver 3 películas de 8 euros o 5 películas de 5 euros.
Para elegir entre una opción u otra quiero saber qué peliculas hay de 8 euros y de 5 euros del año 2000 hasta hoy*/
db.peliculas.find( { 
    $or: [ 
        {date:( { $gte: new Date ("2000-01-01") }), precioentrada: 8},
        {date:( { $gte: new Date ("2000-01-01") }), precioentrada: 5}
    ]
}).pretty()


/*
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a34e"), "titulo" : "Lo imposible", "precioentrada" : 8, "personal" : { "direccion" : [ "Juan Antonio Bayona" ], "protagonista" : [ "Naomi Watts", "Ewan McGregor", "Tom Holland", "Geraldine Chaplin" ] }, "pegi" : 12, "genero" : [ "Catástrofe", "Drama" ], "pais" : [ "España" 
], "duracion" : 113, "date" : "2012-05-16", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a356"), "titulo" : "Interstellar", "precioentrada" : 8, "personal" : { "direccion" : [ "Christopher Nolan" ], "protagonista" : [ "Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Matt Damon" ] }, "pegi" : 12, "genero" : [ "Ciencia Ficción" ], "pais" : [ "Estados Unidos", "Reino Unido", "Canadá" ], "duracion" : 169, "date" : "2014-04-05", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35b"), "titulo" : "Avatar", "precioentrada" : 8, "personal" : { "direccion" : [ "James Cameron" ], "protagonista" : 
[ "Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Michelle Rodríguez", "Stephen Lang", "Giovanni Ribisi", "Joel David Moore" ] }, "pegi" : 7, "genero" : [ "Ciencia Ficción", "Aventura", "Acción", "Fantástico", "Animación" ], "pais" : [ "Estados Unidos" ], "duracion" : 178, "date" : "2009-08-16", "color" : 
true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35e"), "titulo" : "Tenet", "precioentrada" : 8, "personal" : { "direccion" : [ "Christopher Nolan" ], "protagonista" : [ "John David Washington", "Robert Pattinson", "Elizabeth Debicki", "Dimple Kapadia", "Michael Caine", "Kenneth Branagh" ] }, "pegi" : 14, "genero" : [ "Ciencia Ficción", "Thriller", "Espía" ], "pais" : [ "Estados Unidos", "Reino Unido" ], "duracion" : 150, "date" : "2020-08-10", "color" : true }
*/
db.peliculas.find( { $and: [ { date:new Date( { $gte: "2000-01-01" } )}, { precioentrada: 5 } ] } )
/*
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a34d"), "titulo" : "Ice Age", "precioentrada" : 5, "personal" : { "direccion" : [ "Chris Wedge", "Carlos Saldanha" ], "protagonista" : [ "Manny", "Sid", "Diego", "Scrat", "Roshan", "Soto", "Dodo", "Carl", "Frank", "Ken" ] }, "pegi" : 3, "genero" : [ "Animación", "Comedia", 
"Ciencia ficción", "Infantil" ], "pais" : [ "Estados Unidos" ], "duracion" : 81, "date" : "2002-02-08", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a352"), "titulo" : "El orfanato", "precioentrada" : 5, "personal" : { "direccion" : [ "Juan Antonio Bayona" ], "protagonista" : [ "Belén Rueda", "Fernando Cayo", "Roger Príncep", "Geraldine Chaplin" ] }, "pegi" : 16, "genero" : [ "Terror", "Suspense", "Drama" ], "pais" : [ 
"España", "México" ], "duracion" : 100, "date" : "2007-01-30", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a353"), "titulo" : "Robots", "precioentrada" : 5, "personal" : { "direccion" : [ "Chris Wedge", "Carlos Saldanha" ], 
"protagonista" : [ "Ewan McGregor", "Halle Berry", "Greg Kinnear", "Mel Brooks", "Drew Carey" ] }, "pegi" : 16, "genero" : [ "Animación", "Comedia", "Infantil" ], "pais" : [ "Estados Unidos" ], "duracion" : 89, "date" : "2005-02-02", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35a"), "titulo" : "Iron Man", "precioentrada" : 5, "personal" : { "direccion" : [ "Jon Favreau" ], "protagonista" : 
[ "Robert Downey Jr.", "Terrence Howard", "Gwyneth Paltrow", "Shaun Toub", "Paul Bettany", "Jeff Bridges" ] }, "pegi" : 13, "genero" : [ "Ciencia Ficción", "Acción", "Superhéroes" ], "pais" : [ "Estados Unidos" ], "duracion" : 126, "date" : "2008-04-30", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35f"), "titulo" : "Spider-Man", "precioentrada" : 5, "personal" : { "direccion" : [ "San Raimi" ], "protagonista" : 
[ "Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco", "Cliff Robertson", "J. K. Simmons" ] }, "pegi" : 7, "genero" : [ "Ciencia Ficción", "Acción", "Superhéroes", "Drama" ], "pais" : [ "Estados Unidos" ], "duracion" : 121, "date" : "2002-12-15", "color" : true }
*/
/*
ATENCION 
*/
db.peliculas.find( { 
        $and: [ 
            { date:new Date( { $gte: "2000-01-01" } )}, 
            { $or: [ {precioentrada: 5 }, {precioentrada: 8 }] }
        ] 
})

db.peliculas.find( { 
    $and: [ 
        { date:new Date( { $gte: "2000-01-01" }) }, 
        { precioentrada: 5  }
    ] 
})



//La semana que viene voy al cine con mis primos de 7 años a ver una película de aventura o animacion y que sea recomendable para su edad.
db.peliculas.find( { $and: [ { $or: [ { pegi: "TP" }, { pegi: { $lte:7 } } ] } , { $or: [ { genero: "Aventura" }, { genero: "Animación" } ] } ] } )
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a34d"), "titulo" : "Ice Age", "precioentrada" : 5, "personal" : { "direccion" : [ "Chris Wedge", "Carlos Saldanha" ], "protagonista" : [ "Manny", "Sid", "Diego", "Scrat", "Roshan", "Soto", "Dodo", "Carl", "Frank", "Ken" ] }, "pegi" : 3, "genero" : [ "Animación", "Comedia", 
"Ciencia ficción", "Infantil" ], "pais" : [ "Estados Unidos" ], "duracion" : 81, "date" : "2002-02-08", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a351"), "titulo" : "Indiana Jones en busca del arca perdida", "precioentrada" : 8, "personal" : { "direccion" : [ "George Lucas" ], "protagonista" : [ "Harrison Ford" ] }, "pegi" : "TP", "genero" : [ "Aventura", "Acción" ], "pais" : [ "Estados Unidos" ], "duracion" : 115, "date" : "1981-10-27", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35b"), "titulo" : "Avatar", "precioentrada" : 8, "personal" : { "direccion" : [ "James Cameron" ], "protagonista" : 
[ "Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Michelle Rodríguez", "Stephen Lang", "Giovanni Ribisi", "Joel David Moore" ] }, "pegi" : 7, "genero" : [ "Ciencia Ficción", "Aventura", "Acción", "Fantástico", "Animación" ], "pais" : [ "Estados Unidos" ], "duracion" : 178, "date" : "2009-08-16", "color" : 
true }

//El otro día ví una película donde aparecía la actriz Belen Rueda y el director era Juan Antonio Bayona pero no me acuerdo del título y quiero saberlo.
db.peliculas.find( { $and: [ { "personal.direccion": "Juan Antonio Bayona" }, { "personal.protagonista": "Belén Rueda" } ] } )
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a352"), "titulo" : "El orfanato", "precioentrada" : 5, "personal" : { "direccion" : [ "Juan Antonio Bayona" ], "protagonista" : [ "Belén Rueda", "Fernando Cayo", "Roger Príncep", "Geraldine Chaplin" ] }, "pegi" : 16, "genero" : [ "Terror", "Suspense", "Drama" ], "pais" : [ 
    "España", "México" ], "duracion" : 100, "date" : "2007-01-30", "color" : true }
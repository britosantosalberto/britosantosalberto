
db.peliculas.deleteMany({})
db.peliculas.insertMany([
    {
        titulo:"Ice Age", 
        precioentrada:5, 
        personal:{
            direccion:["Chris Wedge", "Carlos Saldanha"], 
            protagonista:["Manny", "Sid", "Diego", "Scrat", "Roshan", "Soto", "Dodo", "Carl", "Frank", "Ken"]
        }, 
          pegi:3, 
        genero:["Animación","Comedia","Ciencia ficción","Infantil"], 
        pais:["Estados Unidos"], 
        duracion: 81, 
        date: new Date("2002-02-08"), 
        color: true 
},
    
    {titulo:"Lo imposible", precioentrada:8, personal:{direccion:["Juan Antonio Bayona"], protagonista:["Naomi Watts", "Ewan McGregor", "Tom Holland", "Geraldine Chaplin"]}, pegi:12, genero:["Catástrofe","Drama"], pais:["España"], duracion: 113, date:new Date( "2012-05-16"), color: true},
    
    {titulo:"La guerra de las galaxias: Episodio IV-Una nueva esperanza", precioentrada:8, personal:{direccion:["George Lucas"], protagonista:["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing", "Alec Guinness", "Anthony Daniels", "Kenny Baker", "Peter Mayhew", "David Prowse", "James Earl Jones"]}, pegi:16, genero:["Ciencia ficción"], pais:["Estados Unidos"], duracion: 121, date:new Date( "1997-11-24"), color: true},
    
    {titulo:"Nosferatu, eine Symphonie des Grauens", precioentrada:3, personal:{direccion:["F. W. Murnau"], protagonista:["Max Schreck","Gustav von Wangenheim","Greta Schröder","Alexander Granach"]}, pegi:"TP", genero:["Terror"], pais:["Alemania"], duracion: 94, date:new Date( "1922-09-17"), color: false},
    
    {titulo:"Indiana Jones en busca del arca perdida", precioentrada:8, personal:{direccion:["George Lucas"], protagonista:["Harrison Ford"]}, pegi:"TP", genero:["Aventura","Acción"], pais:["Estados Unidos"], duracion: 115, date:new Date( "1981-10-27"), color: true},
    
    {titulo:"El orfanato", precioentrada:5, personal:{direccion:["Juan Antonio Bayona"], protagonista:["Belén Rueda", "Fernando Cayo", "Roger Príncep", "Geraldine Chaplin"]}, pegi:16, genero:["Terror","Suspense","Drama"], pais:["España","México"], duracion: 100, date:new Date( "2007-01-30"), color: true},
    
    {titulo:"Robots", precioentrada:5, personal:{direccion:["Chris Wedge", "Carlos Saldanha"], protagonista:["Ewan McGregor", "Halle Berry", "Greg Kinnear", "Mel Brooks", "Drew Carey"]}, pegi:16, genero:["Animación","Comedia","Infantil"], pais:["Estados Unidos"], duracion: 89, date:new Date( "2005-02-02"), color: true},
    
    {titulo:"El gran dictador", precioentrada:3, personal:{direccion:["Charles Chaplin"], protagonista:["Charles Chaplin","Paulette Goddard","Jack Oakie","Reginald Gardiner","Henry Daniell","Billy Gilbert"]}, pegi:"TP", genero:["Comedia","Drama","Sátira"], pais:["Estados Unidos"], duracion: 124, date:new Date( "1940-02-28"), color: false},

    {titulo:"Parque Jurásico", precioentrada:5, personal:{direccion:["Steven Spielberg"], protagonista:["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "Samuel L. Jackson"]}, pegi:12, genero:["Ciencia Ficción","Aventura","Acción","Suspense"], pais:["Estados Unidos"], duracion: 127, date:new Date( "1993-07-26"), color: true},
    
    {titulo:"Interstellar", precioentrada:8, personal:{direccion:["Christopher Nolan"], protagonista:["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine","Matt Damon"]}, pegi:12, genero:["Ciencia Ficción"], pais:["Estados Unidos","Reino Unido","Canadá"], duracion: 169, date:new Date( "2014-04-05"), color: true},
    
    {titulo:"Grease", precioentrada:5, personal:{direccion:["Randal Kleiser"], protagonista:["John Travolta", "Olivia Newton-John", "Stockard Channing", "Jeff Conaway"]}, pegi:"TP", genero:["Comedia romántica","Musical"], pais:["Estados Unidos"], duracion: 110, date:new Date( "1978-07-20"), color: true},
    
    {titulo:"Metrópolis", precioentrada:3, personal:{direccion:["Fritz Lang"], protagonista:["Brigitte Helm","Gustav Fröhlich","Alfred Abel","Rudolf Klein-Rogge"]}, pegi:"TP", genero:["Ciencia Ficción","Expresionismo"], pais:["Alemania"], duracion: 153, date:new Date( "1927-03-04"), color: false},

    {titulo:"Titanic", precioentrada:5, personal:{direccion:["James Cameron"], protagonista:["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Gloria Stuart","Ioan Gruffudd"]}, pegi:12, genero:["Romance","Catástrofe","Drama"], pais:["Estados Unidos"], duracion: 195, date:new Date( "1997-09-23"), color: true},
    
    {titulo:"Iron Man", precioentrada:5, personal:{direccion:["Jon Favreau"], protagonista:["Robert Downey Jr.", "Terrence Howard", "Gwyneth Paltrow", "Shaun Toub","Paul Bettany","Jeff Bridges"]}, pegi:13, genero:["Ciencia Ficción","Acción","Superhéroes"], pais:["Estados Unidos"], duracion: 126, date:new Date( "2008-04-30"), color: true},

    {titulo:"Avatar", precioentrada:8, personal:{direccion:["James Cameron"], protagonista:["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Michelle Rodríguez","Stephen Lang","Giovanni Ribisi","Joel David Moore"]}, pegi:7, genero:["Ciencia Ficción","Aventura","Acción","Fantástico","Animación"], pais:["Estados Unidos"], duracion: 178, date:new Date( "2009-08-16"), color: true},
    
    {titulo:"Los Tres Mosqueteros", precioentrada:5, personal:{direccion:["Fred Niblo"], protagonista:["Douglas Fairbanks","Eugene Pallette","Sidney Franklin","Nigel De Brulier"]}, pegi:"TP", genero:["Capa y espada","Mudo"], pais:["Estados Unidos"], duracion: 118, date:new Date( "1921-08-09"), color: false},

    {titulo:"E.T., el extraterrestre", precioentrada:5, personal:{direccion:["Steven Spielberg"], protagonista:["Henry Thomas", "Robert MacNaughton", "Drew Barrymore", "Dee Wallace","Peter Coyote"]}, pegi:"TP", genero:["Ciencia Ficción"], pais:["Estados Unidos"], duracion: 115, date:new Date( "1982-07-14"), color: true},
    
    {titulo:"Tenet", precioentrada:8, personal:{direccion:["Christopher Nolan"], protagonista:["John David Washington", "Robert Pattinson", "Elizabeth Debicki", "Dimple Kapadia","Michael Caine","Kenneth Branagh"]}, pegi:14, genero:["Ciencia Ficción","Thriller","Espía"], pais:["Estados Unidos","Reino Unido"], duracion: 150, date:new Date( "2020-08-10"), color: true},
    
    {titulo:"Spider-Man", precioentrada:5, personal:{direccion:["San Raimi"], protagonista:["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco","Cliff Robertson","J. K. Simmons"]}, pegi:7, genero:["Ciencia Ficción","Acción","Superhéroes","Drama"], pais:["Estados Unidos"], duracion: 121, date:new Date( "2002-12-15"), color: true},
    
    ])

    > db.peliculas.aggregate( [ {
        $project: {
            date:new Date( {
                $dateFromString: {
                    dateString: '$date',
                    onNull:new Date(0)
                }
            }
        )}
    } ] )
document.addEventListener('DOMContentLoaded', function() {

//Creo lista de objetos de las peliculas de mi html
const movies = [
    {
        imgSrc: "https://image.tmdb.org/t/p/w185/rCpABsHAJz7eKDNgPiAxl6nSFjU.jpg",
        title: "Una esposa de mentira" ,
        year: 2011,
        description: "Tras años de fingir estar casado, un cirujano plástico soltero conoce a la mujer de sus sueños y le pide a su asistente que se haga pasar por su futura exesposa."
    },
    {
        imgSrc: "https://www.lahiguera.net/cinemania/pelicula/10077/sonic_2_la_pelicula-cartel-10332.jpg",
        title: "Sonic la pelicula",
        year: 2022,
        description: "Sonic es un pequeño erizo antropomórfico azul proveniente de otro mundo, quien puede correr a velocidades supersónicas"
    },
    {
        imgSrc: "https://pics.filmaffinity.com/Harry_Potter_y_la_piedra_filosofal-154820574-mmed.jpg",
        title: "Harry Potter",
        year: 2001,
        description: "En esta primera película, Harry Potter, de once años, descubre que es un mago y que debe ir a Hogwarts a comenzar sus estudios de hechicería y magia, pero su talento no viene solo, se acompaña de una maldición que lo dejará atado a Lord Voldemort, quien buscará su muerte hasta el final de la historia."
    },
    {
        imgSrc:"https://image.tmdb.org/t/p/original/3jec3aNai5gJgU20n5yo30fnpz1.jpg",
        title: "Soldado de elite",
        year: 2022,
        description: "Es un Soldado Pirata pero más robusto y poderoso. Al igual que sus contrapartes comunes, utiliza un par de guadañas pero más alargadas, lo que le permite tener mayor alcance y además son más dañinas. Al igual que su poder, su resistencia es mucho mayor y las armas comunes le ocasionan daños menores."
    },
    {
        imgSrc: "https://m.media-amazon.com/images/I/81y0foYjoFL._AC_UF1000,1000_QL80_.jpg",
        title: "Spider-Man: Sin camino a casa",
        year: 2021,
        description: "Peter Parker asume su nueva identidad como El Hombre Araña y regresa a vivir con su tía después de su aventura con Los Vengadores. Al volver, mientras sigue bajo la tutela de Tony Stark, descubre que ha surgido un nuevo y despiadado enemigo que pretende destruir todo lo que ama: el Buitre."
    },
    {
        imgSrc: "https://www.universalpictures.com.ar/tl_files/content/movies/bad_guys/posters/01.jpg",
        title: "Los tipos malos",
        year: 2022,
        description: "un equipo de increíbles animales bandidos se prepara para enfrentarse al golpe más complicado de su vida: convertirse en ciudadanos modélicos."
    },
    {
        imgSrc: "https://pics.filmaffinity.com/Shrek-903764423-large.jpg",
        title: "Shrek",
        year: 2008,
        description: "Shrek es un gran ogro verde que vive en un pantano. Allí reside felizmente, asustando a los humanos que se aventuran o se pierden, hasta que un día descubre que el lugar ha sido invadido por personajes de cuentos de hadas que han sido expulsados de la comarca por el villano Lord Farquaad."
    },
    {
        imgSrc: "https://imageio.forbes.com/specials-images/imageserve/639cb80549fa2d228bf3181c/Official-Dolby-Cinema-poster-for--Avatar--The-Way-of-Water-/960x0.jpg?height=1053&width=711&fit=bounds",
        title: "Elementos",
        year: 2022,
        description: "En Elementos (2023) se nos cuenta una historia fantástica ambientada en un mundo donde seres antropomórficos pertenecientes a los 4 elementos de la naturaleza, logran convivir con sus diferencias en una gran metrópolis llamada Ciudad Elementos, la cual se asemeja mucho a Nueva York."
    },
    {
        imgSrc: "https://www.cinevistablog.com/wp-content/uploads/2016/11/resena-de-moana-un-mar-de-aventuras-comedia-animada-de-disney_opt2_.jpg",
        title: "Avatar",
        year: 2022,
        description: "En el año 2154, el exmarine Jake Sully es seleccionado para el programa Avatar, un experimento que le pondrá en el cuerpo de un alienígena y que podrá controlar con su propia mente. Él no es científico, pero su compatibilidad genética con su hermano gemelo hace que sea el candidato idóneo tras la muerte de este."
    }
]



const movieList = document.getElementById("movie-list"); // Obtener el elemento principal de la lista
const searchInput = document.getElementById("searchInput"); // Obtener el elemento de búsqueda por titulo
const searchButton = document.getElementById("searchButton"); //Obtener el boton y agregar el evento click + la funcion de las listas
searchButton.addEventListener("click", handleSearch); 

// Recorrer el array de películas para que aparezcan en el HTML y crear las etiquetas
for (let i = 0; i < movies.length; i++) {
    // Crear elementos HTML dinámicamente
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const span = document.createElement("span");

    // Configurar los atributos y contenido de los elementos
    img.src = movies[i].imgSrc; //establece la fuente de la imagen en el elemento de imagen recién creado según la URL 
    img.alt = movies[i].title;
    h2.textContent = movies[i].title;
    span.textContent = movies[i].year;

    // Agregar y ubicar elementos al árbol DOM
    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(span);
    ul.appendChild(li);
    movieList.appendChild(ul);
}

// Función para manejar el evento de búsqueda POR TITULO
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));  // Filtrar películas según el término de búsqueda 

    // Limpiar la lista antes de renderizar las películas filtradas
    movieList.innerHTML = "";

     // Verificar si hay películas filtradas
     if (filteredMovies.length > 0) {
        // Recorrer el array filtrado y crear elementos HTML
        for (let i = 0; i < filteredMovies.length; i++) {
            const ul = document.createElement("ul");
            const li = document.createElement("li");
            const img = document.createElement("img");
            const h2 = document.createElement("h2");
            const span = document.createElement("span");

            img.src = filteredMovies[i].imgSrc;
            img.alt = filteredMovies[i].title;
            h2.textContent = filteredMovies[i].title;
            span.textContent = filteredMovies[i].year;

            li.appendChild(img);
            li.appendChild(h2);
            li.appendChild(span);
            ul.appendChild(li);
            movieList.appendChild(ul);
        }
    } else {
        // Si no hay películas encontradas, agregar un párrafo
        const noMoviesParagraph = document.createElement("p");
        noMoviesParagraph.textContent = "No se encontraron películas.";
        noMoviesParagraph.style.color = "red";
        noMoviesParagraph.style.textAlign = "center";
        noMoviesParagraph.style.fontWeight = "bold";
        noMoviesParagraph.style.width = "100%";
        movieList.appendChild(noMoviesParagraph);
    }
}

//Buscador de peliculas POR AÑO
const yearFilter = document.getElementById("yearFilter");
const buttonYear = document.getElementById("buttonYear");
buttonYear.addEventListener("click", seachYear)

function seachYear() {
    const selectedYear = parseInt(yearFilter.value);
    const searchTerm = searchInput.value.toLowerCase();

    const filteredMoviesYear = movies.filter(movie => movie.year === selectedYear && movie.title.toLowerCase().includes(searchTerm));
    movieList.innerHTML = "";

    // Verificar si hay películas filtradas
    if (filteredMoviesYear.length > 0) {
                // Recorrer el array filtrado y crear elementos HTML
                for (let i = 0; i < filteredMoviesYear.length; i++) {
                    const ul = document.createElement("ul");
                    const li = document.createElement("li");
                    const img = document.createElement("img");
                    const h2 = document.createElement("h2");
                    const span = document.createElement("span");
        
                    img.src = filteredMoviesYear[i].imgSrc;
                    img.alt = filteredMoviesYear[i].title;
                    h2.textContent = filteredMoviesYear[i].title;
                    span.textContent = filteredMoviesYear[i].year;
        
                    li.appendChild(img);
                    li.appendChild(h2);
                    li.appendChild(span);
                    ul.appendChild(li);
                    movieList.appendChild(ul);
                    } 
                } else {
                // Si no hay películas encontradas, agregar un párrafo
                const paragraph = document.createElement("p");
                paragraph.textContent = "No se encontraron películas con ese año.";
                paragraph.style.color = "red";
                paragraph.style.textAlign = "center";
                paragraph.style.fontWeight = "bold";
                paragraph.style.width = "100%";
                movieList.appendChild(paragraph);    }
}

});
document.addEventListener('DOMContentLoaded', function() {

//Creo lista de objetos de las peliculas de mi html
const movies = [
    {
        imgSrc: "https://image.tmdb.org/t/p/w185/rCpABsHAJz7eKDNgPiAxl6nSFjU.jpg",
        title: "Una esposa de mentira" ,
        year: 2011,
        description: "Tras años de fingir estar casado, un cirujano plástico soltero conoce a la mujer de sus sueños y le pide a su asistente que se haga pasar por su futura exesposa.",
        trailer: "https://www.youtube.com/watch?v=Q_kkTZG3mBw", 
        imgModal: "png/imgModal1.jpg"
    },
    {
        imgSrc: "https://www.lahiguera.net/cinemania/pelicula/10077/sonic_2_la_pelicula-cartel-10332.jpg",
        title: "Sonic la pelicula",
        year: 2022,
        description: "Sonic es un pequeño erizo antropomórfico azul proveniente de otro mundo, quien puede correr a velocidades supersónicas",
        trailer: "https://www.youtube.com/watch?v=SDrFPgdZqko",
        imgModal: "png/imgModal2.jpg"
    },
    {
        imgSrc: "https://pics.filmaffinity.com/Harry_Potter_y_la_piedra_filosofal-154820574-mmed.jpg",
        title: "Harry Potter",
        year: 2001,
        description: "En esta primera película, Harry Potter, de once años, descubre que es un mago y que debe ir a Hogwarts a comenzar sus estudios de hechicería y magia, pero su talento no viene solo, se acompaña de una maldición que lo dejará atado a Lord Voldemort, quien buscará su muerte hasta el final de la historia.",
        trailer: "https://www.youtube.com/watch?v=LLAaW1EgyY8",
        imgModal: "png/imgModal3.jpg"
    },
    {
        imgSrc:"https://image.tmdb.org/t/p/original/3jec3aNai5gJgU20n5yo30fnpz1.jpg",
        title: "Soldado de elite",
        year: 2022,
        description: "Es un Soldado Pirata pero más robusto y poderoso. Al igual que sus contrapartes comunes, utiliza un par de guadañas pero más alargadas, lo que le permite tener mayor alcance y además son más dañinas. Al igual que su poder, su resistencia es mucho mayor y las armas comunes le ocasionan daños menores.",
        trailer: "https://www.youtube.com/watch?v=c4V5C3-QnXI",
        imgModal: "png/imgModal4.jpg"
    },
    {
        imgSrc: "https://m.media-amazon.com/images/I/81y0foYjoFL._AC_UF1000,1000_QL80_.jpg",
        title: "Spider-Man",
        year: 2021,
        description: "Peter Parker asume su nueva identidad como El Hombre Araña y regresa a vivir con su tía después de su aventura con Los Vengadores. Al volver, mientras sigue bajo la tutela de Tony Stark, descubre que ha surgido un nuevo y despiadado enemigo que pretende destruir todo lo que ama: el Buitre.",
        trailer: "https://www.youtube.com/watch?v=t06RUxPbp_c",
        imgModal: "png/imgModal5.jpg"
    },
    {
        imgSrc: "https://www.universalpictures.com.ar/tl_files/content/movies/bad_guys/posters/01.jpg",
        title: "Los tipos malos",
        year: 2022,
        description: "un equipo de increíbles animales bandidos se prepara para enfrentarse al golpe más complicado de su vida: convertirse en ciudadanos modélicos.",
        trailer: "https://www.youtube.com/watch?v=51I5tvvHxtI",
        imgModal: "png/imgModal6.jpg"
    },
    {
        imgSrc: "https://pics.filmaffinity.com/Shrek-903764423-large.jpg",
        title: "Shrek",
        year: 2008,
        description: "Shrek es un gran ogro verde que vive en un pantano. Allí reside felizmente, asustando a los humanos que se aventuran o se pierden, hasta que un día descubre que el lugar ha sido invadido por personajes de cuentos de hadas que han sido expulsados de la comarca por el villano Lord Farquaad.",
        trailer: "https://www.youtube.com/watch?v=CwXOrWvPBPk",
        imgModal: "png/imgModal7.jpg"
    },
    {
        imgSrc: "https://imageio.forbes.com/specials-images/imageserve/639cb80549fa2d228bf3181c/Official-Dolby-Cinema-poster-for--Avatar--The-Way-of-Water-/960x0.jpg?height=1053&width=711&fit=bounds",
        title: "Avatar",
        year: 2022,
        description: "En el año 2154, el exmarine Jake Sully es seleccionado para el programa Avatar, un experimento que le pondrá en el cuerpo de un alienígena y que podrá controlar con su propia mente. Él no es científico, pero su compatibilidad genética con su hermano gemelo hace que sea el candidato idóneo tras la muerte de este.",
        trailer: "https://www.youtube.com/watch?v=CpXJHWSXJW0",
        imgModal: "png/imgModal8.jpg"
    },
    {
        imgSrc: "https://www.cinevistablog.com/wp-content/uploads/2016/11/resena-de-moana-un-mar-de-aventuras-comedia-animada-de-disney_opt2_.jpg",
        title: "Moana",
        year: 2022,
        description: "Moana, una joven aventurera, se embarca en un peligroso viaje, para cumplir con una misión incompleta de sus ancestros. Durante su viaje conocerá a su héroe, un semidiós legendario llamado Maui, y juntos recorrerán el oceáno en un viaje lleno de misterios y aventuras.",
        trailer: "https://www.youtube.com/watch?v=LKFuXETZUsI",
        imgModal: "png/imgModal9.jpg"
    },
    {
        imgSrc: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/521295.jpg",
        title: "Mi villano favorito",
        year: 2010,
        description: "Gru (Steve Carell) es un malo que disfruta haciendo maldades a los demás. Desde congelar la cola de clientes en una hamburguesería, hasta crear un globo en forma de animal y dárselo a un niño sólo para tener el placer de hacerlo explotar, Gru hace muchas de las cosas que hemos deseado hacer alguna vez en nuestra vida.",
        trailer: "https://www.youtube.com/watch?v=B7S4KodYFCM",
        imgModal: "png/imgModal10.jpg"
    },
    {
        imgSrc: "https://play-lh.googleusercontent.com/ejxt_xZtEn3RXO3vzLPTsnnHwaotH_h36_eEP3fyRydKBaD0Bh2CLGC_ZyM4UZx8lmg=w240-h480-rw",
        title: "Mis simpatia",
        year: 2000,
        description: "Sandra Bullock está de vuelta como la agente del FBI Gracie Hart, quien debe trabajar de encubierto con una nueva compañera, la agente Fuller (Regina King), cuando la actual Miss America y Stan Fields son secuestrados en Las Vegas.",
        trailer: "https://www.youtube.com/watch?v=LwrEnPYHsyQ",
        imgModal: "png/imgModal11.jpg"
    },
    {
        imgSrc: "https://i.pinimg.com/736x/1e/bb/1b/1ebb1b9aaabcc0308066a65557919df2.jpg",
        title: "Hombres de negro",
        year: 2002,
        description: "Los Hombres de negro serían, según la tradición contemporánea más popular y la especulación de algunos grupos creyentes en el fenómeno extraterrestre, agentes secretos gubernamentales o extragubernamentales encargados de ayudar a ocultar una presencia extraterrestre en la Tierra.",
        trailer: "https://www.youtube.com/watch?v=9fEyWV4d7dw",
        imgModal: "png/imgModal12.jpg"
    },
]

const movieList = document.getElementById("movie-list"); 
const searchInput = document.getElementById("searchInput"); 
const searchButton = document.getElementById("searchButton"); 

searchButton.addEventListener("click", handleSearch);

// Crear las películas dinámicamente
for (let i = 0; i < movies.length; i++) {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const h2 = document.createElement("h2");
    const span = document.createElement("span");

    img.src = movies[i].imgSrc;
    img.alt = movies[i].title;
    h2.textContent = movies[i].title;
    button.textContent = "Resumen";
    button.classList.add("modal-button");
    button.setAttribute("data-index", i);
    span.textContent = movies[i].year;

    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
    movieList.appendChild(ul);
}

// Seleccionar el modal y elementos
const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.getElementById('close-modal');
    const imgModal = document.getElementById('imgModal');
    const trailermovie = document.getElementById('trailer-movie');

    // Usar event delegation para manejar eventos en los botones de resumen
    document.getElementById('movie-list').addEventListener('click', function (event) {
        if (event.target.classList.contains("modal-button")) {
            const movieIndex = event.target.getAttribute("data-index");
            const movie = movies[movieIndex];
            showModal(movie.title, movie.description, movie.trailer, movie.imgModal); // Cambié imgSrc por imgModal
        }
    });

// Función para mostrar el modal
function showModal(title, description, trailer, imgModalSrc) {
    modal.style.visibility = "visible"; 
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    imgModal.src = imgModalSrc; 
    imgModal.alt = title;

    // Convertir la URL en embed solo si hay un tráiler válido
    if (trailer.includes("v=")) {
        const videoId = trailer.split("v=")[1].split("&")[0]; 
        trailermovie.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        trailermovie.src = "";
    }

    modal.classList.add('mostrar'); 
}

// Cerrar el modal con animación
closeButton.addEventListener('click', function () {
    modal.classList.remove('mostrar');
    
    setTimeout(() => {
        modal.style.visibility = "hidden";
        trailermovie.src = ""; // Limpiar el video
    }, 300);
});

// Función para manejar el evento de búsqueda POR TITULO
function handleSearch(event) {
    event.preventDefault(); // Prevenir la recarga de la página por defecto

    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));

    // Crear una cadena HTML con las películas filtradas con map
    const htmlString = filteredMovies.map(movie => `
        <ul>
            <li>
                <img src="${movie.imgSrc}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <button class="modal-button">Resumen</button>
                <span>${movie.year}</span>
            </li>
        </ul>
    `).join(''); //Join crea todo en una subcadena 

    // Asignar la cadena HTML a movieList
    movieList.innerHTML = htmlString || '<p style="color: red; text-align: center; font-weight: bold; width: 100%;">No se encontraron películas.</p>';

    // Reemplazar la búsqueda en la URL sin recargar la página
    const searchUrl = `${encodeURIComponent(searchTerm)}`;
    window.history.replaceState({ search: searchTerm }, null, searchUrl);
}

//Buscador de peliculas POR AÑO
const yearFilter = document.getElementById("yearFilter");
const buttonYear = document.getElementById("buttonYear");
buttonYear.addEventListener("click", seachYear)

function seachYear() {
    const selectedYear = parseInt(yearFilter.value);
    const searchTerm = searchInput.value.toLowerCase();

    const filteredMoviesYear = movies.filter(movie => movie.year === selectedYear && movie.title.toLowerCase().includes(searchTerm));

    // Crear una cadena HTML con las películas filtradas por año usando map
    const htmlString = filteredMoviesYear.map(movie => `
        <ul>
            <li>
                <img src="${movie.imgSrc}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <button class="modal-button">Resumen</button>
                <span>${movie.year}</span>
            </li>
        </ul>
    `).join('');

    // Asignar la cadena HTML a movieList
    movieList.innerHTML = htmlString || '<p style="color: red; text-align: center; font-weight: bold; width: 100%;">No se encontraron películas con ese año.</p>';
     
    // Reemplazar la búsqueda en la URL sin recargar la página
     const searchUrl = `${encodeURIComponent(searchTerm)}`;
     window.history.replaceState({ search: searchTerm }, null, searchUrl);
}

//Agregar peliculas 
function renderMovies(movies) {
    // Obtener el elemento de la lista de películas
    const movieList = document.getElementById("movie-list");

    // Limpiar la lista antes de renderizar las películas
    movieList.innerHTML = "";

    // Recorrer el array de películas y crear elementos HTML para cada una
    movies.forEach(function(movie) {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const img = document.createElement("img");
        const button = document.createElement("button");
        const h2 = document.createElement("h2");
        const span = document.createElement("span");

        img.src = movie.imgSrc;
        img.alt = movie.title;
        button.textContent = "Resumen";
        button.id = "resumen-btn"
        h2.textContent = movie.title;
        span.textContent = movie.year;

        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(button)
        li.appendChild(span);
        ul.appendChild(li);
        movieList.appendChild(ul);
    });
}

const movieNew = document.getElementById("formMovie");

movieNew.addEventListener("submit", function(event) {
    event.preventDefault();

    //Obtengo los valores del form 
    const title = document.getElementById("title").value;
    const imgSrc = document.getElementById("imgSrcInput").value;
    const description = document.getElementById("description").value;
    const year = parseInt(document.getElementById("year").value);

    if (title && imgSrc && description && !isNaN(year)) {
        
        const newMovie = {
            title: title,
            imgSrc: imgSrc,
            year: year,
            description: description
        };

        movies.push(newMovie);

        renderMovies(movies);

        movieNew.reset();
    } else {
         // Mostrar un mensaje de error si algún campo está vacío
         alert("Todos los campos son obligatorios. Por favor, completa el formulario.");
    }
})
});
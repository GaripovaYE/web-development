
function addTegs(filename, title, review){
    return '<img class="main_screen" src="' + filename + '" alt="Постер">' + 
           '<h3>' + title + '</h3>' + 
           '<p class="film_description">' + review + '</p>';
}

function createFilmDescription(filmPos){
    const newFilmBlock = document.createElement("div");
    newFilmBlock.classList.add("film_block");
    newFilmBlock.id = allFilms[filmPos].title;
    newFilmBlock.innerHTML = addTegs(allFilms[filmPos].screen, allFilms[filmPos].title, allFilms[filmPos].review);
    return newFilmBlock;                             
}

function onRightClick(){
    films = document.getElementById('films');
    oneFilm = document.getElementById(allFilms[firstFilmInWindow].title);
    films.removeChild(oneFilm);
    let nextFilm = (firstFilmInWindow + countOfFilmsInWindow) % fullFilmsCount;
    const newMovieBlock = createFilmDescription(nextFilm);
    films.appendChild(newMovieBlock); 
    firstFilmInWindow = (firstFilmInWindow + 1) % fullFilmsCount;
}

function onLeftClick(){
    films = document.getElementById('films');
    let lastFilm = (firstFilmInWindow + countOfFilmsInWindow - 1) % fullFilmsCount;
    oneFilm = document.getElementById(allFilms[lastFilm].title);
    films.removeChild(oneFilm);    
    let prevFilm = (firstFilmInWindow - 1 + fullFilmsCount) % fullFilmsCount;
    const newMovieBlock = createFilmDescription(prevFilm);
    referenceElement = document.getElementById(allFilms[firstFilmInWindow].title);
    films.insertBefore(newMovieBlock, referenceElement); 
    firstFilmInWindow = (firstFilmInWindow - 1 + fullFilmsCount) % fullFilmsCount;
}

function run(){
    const addMovieToRight = document.getElementById("right_rarr");
    addMovieToRight.addEventListener('click', onRightClick);
    const addMovieToLeft = document.getElementById("left_rarr");
    addMovieToLeft.addEventListener('click', onLeftClick);
}

let firstFilmInWindow = 0;
const countOfFilmsInWindow = 4;
const fullFilmsCount = 10;
window.onload = run
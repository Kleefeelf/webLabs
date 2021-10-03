class Film {
    constructor(name, duration, rating) {
        this.name = name;
        this.duration = duration;
        this.rating = rating;
    }
}

var filmList = [];
var totalHrs = null;
var filmId = 0;

function addFilmCard() {
    let name = document.getElementById("input-film-name").value;
    let duration = document.getElementById("input-duration").value;
    let rating = document.getElementById("input-film-rating").value;
    let film = new Film(name, duration, rating);
    const filmCard = `
    <div class="film" id=${filmId}>        
        <p class="film-name">${film.name}</p>  
        <p class="duration">${film.duration} min</p>
        <p class="film-rating">${film.rating}</p>                
    </div>
    `;
    filmList.push(film)
    console.log(filmList)
    document.getElementById("films").insertAdjacentHTML('beforeend', filmCard);
    totalHrs += Number(film.duration);
    console.log(totalHrs)
    ++filmId;
}

function sortByName() {
    films = document.getElementById("films")
    console.log(films.children[0].children[0].innerText)
    films.children[0].children[0].innerText = ako
    console.log(films.children[0].children[0].innerText)
}

function getName(film) {
    let x = document.getElementsByClassName("film")
    return String(x.ma)
}

function showTotalHrs() {
    let time = "Total hrs: " + totalHrs
    document.getElementById("totalTime").innerHTML = time
}

function deleteFilm() {
    let div = document.getElementsByClassName("film")
    while(div[0]) {
        div[0].parentNode.removeChild(div[0])               
    }
    filmList=[] 
}

function search() {
    let input = document.getElementById("search")
    let regex = input.value.toUpperCase()
    let films = document.getElementsByClassName("film-name")

    for (let i = 0; i < films.length; i++) {    
        if (films[i].innerText.toUpperCase().includes(regex)) {
            films[i].style.display = "block"
            films[i].parentElement.style.display = "flex"
        }
        else {
            films[i].style.display = "none"
            films[i].parentElement.style.display = "none"
        }
    }
}

function startEditingCard() {
    let x = document.getElementsByClassName("film")
    for(let i = 0; i < filmList.length; i++) {
        x[i].contentEditable = 'true'
    }
}

function stopEditingCard() {
    let x = document.getElementsByClassName("film")
    for(let i = 0; i < filmList.length; i++) {        
        x[i].contentEditable = 'false'
    }
}
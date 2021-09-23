class Film {
    constructor(name, duration, rating) {
        this.name = name;
        this.duration = duration;
        this.rating = rating;
    }
}

var filmList = [];
var totalHrs = null;

function addFilmCard() {
    let name = document.getElementById("input-film-name").value;
    let duration = document.getElementById("input-duration").value;
    let rating = document.getElementById("input-film-rating").value;
    let film = new Film(name, duration, rating);
    const filmCard = `
    <div class="film">
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
}

function sortByName() {
    let i = 0;
    filmList.sort(function(a, b) {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
    });    
    console.log(filmList)
    let div = document.getElementsByClassName("film")
    while(div[0]) {
        div[0].parentNode.removeChild(div[0])        
    }
    while(i < filmList.length) {
        console.log(filmList[i-1])
        i++;        
        let film = filmList[i-1]
        const filmCard = `
        <div class="film">
            <p class="film-name">${film.name}</p>
            <p class="duration">${film.duration} min</p>
            <p class="film-rating">${film.rating}</p>
        </div>
        `;
        console.log(film)
        document.getElementById("films").insertAdjacentHTML('beforeend', filmCard);
        
    }
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
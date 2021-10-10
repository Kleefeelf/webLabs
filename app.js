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
    if (inputValidation() === false) {
        return false
    }
    else {
    let name = document.getElementById("input-film-name").value;
    let duration = document.getElementById("input-duration").value;
    let rating = document.getElementById("input-film-rating").value;
    let film = new Film(name, duration, rating);
    const filmCard = `
    <div class="film" id=${filmId}>        
        <p class="film-name">${film.name}</p>  
        <p class="duration">${film.duration} min</p>
        <p class="film-rating">${film.rating}</p>  
        <div class="edit-wrapper">
            <a class="film-edit" href="./editpage.html">edit</a>    
        </div>                  
    </div>
    `;
    filmList.push(film)
    console.log(filmList)
    document.getElementById("films").insertAdjacentHTML('beforeend', filmCard);
    totalHrs += Number(film.duration);
    console.log(totalHrs)    
    }
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
    
    console.log(films.item)

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

function closeModal() {
    let modalWrapper = document.querySelector(".modal-wrapper")
    modalWrapper.classList.remove("modal-active")
}

function inputValidation() {
    let modalWrapper = document.querySelector(".modal-wrapper")
    let error = document.querySelector(".error-text")
    let name = document.getElementById("input-film-name").value;
    let duration = document.getElementById("input-duration").value;
    let rating = document.getElementById("input-film-rating").value;
    if (name == "") {
        console.log("error")
        modalWrapper.classList.add("modal-active")
        error.innerHTML = "Name must be filled in"
        return false
    }
    
    if (duration < 1 || duration === undefined) {
        console.log(duration)
        modalWrapper.classList.add("modal-active")
        error.innerHTML = "Write correct film duration"
        return false
    }

    if (rating < 1 || rating > 5 || rating == undefined) {
        modalWrapper.classList.add("modal-active")
        error.innerHTML = "Rating must be 1-5"
        return false
    }
}


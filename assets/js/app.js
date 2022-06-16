
let cl = console.log;

const showModel = document.getElementById("showModel");
const backDrop = document.getElementById("backDrop");
const myModel = document.getElementById("myModel");
const movieform = document.getElementById("movieform");
const hideModel = Array.from(document.querySelectorAll(".hideModel"));
const AddMovieBtn = document.getElementById("AddMovieBtn");
const title = document.getElementById("title");
const url = document.getElementById("url");
const rating = document.getElementById("rating");
const movieContainer = document.getElementById("movieContainer");

let movieArray = [];

const handleBackDropModel = () => {
    backDrop.classList.toggle("show");
    myModel.classList.toggle("show");
}

const showModelHandler = () => {
    // cl("event triggerd")
    handleBackDropModel()
}


                {/* <div class="col-md-4">
                <div class="card movieCard">
                    <div class="card-body">
                        <figure>
                            <img src="" alt="" class="img-responsive">
                            <figcaption>
                                <h3 class="title">
                                    Andhadhund
                                </h3>
                                <p class="rating">
                                    5/5
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                </div> */}




const addMovieHandler = (e) => {
    e.preventDefault();
    let obj = {
        titleName : title.value,
        imgUrl : url.value,
        ratingValue : rating.value 
    }
    movieArray.push(obj);
    movieform.reset();
    handleBackDropModel();
    // cl("Hello", movieArray); 
    let result = "";
    movieArray.forEach(movie => {
        result += `<div class="col-md-4 mt-4">
                        <div class="card movieCard">
                            <div class="card-body">
                                <figure>
                                    <img src="${movie.imgUrl}" alt="" class="img-responsive">
                                <figcaption>
                                    <h3 class="title">Title: ${movie.titleName}</h3>
                                    <p class="rating">Rating: ${movie.ratingValue}</p>
                                </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>`;
    })
    movieContainer.innerHTML = result;
}

showModel.addEventListener("click", showModelHandler);
backDrop.addEventListener("click", handleBackDropModel);
movieform.addEventListener("submit", addMovieHandler);

hideModel.forEach(ele => {
    ele.addEventListener("click", handleBackDropModel)
})
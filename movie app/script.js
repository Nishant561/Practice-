const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const search = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    showMovies(data);
}
getMovies(apiUrl);

const movieBox = document.querySelector(".movie-box");

const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.results.forEach((result) => {
        const imagePath = result.poster_path === null ? "img/image-missing.png" : imgPath + result.poster_path;
        const box1 = document.createElement("div");
        box1.classList.add("box");
        box1.innerHTML = `
            <img class="op" src="${imagePath}">
            <div class="overview">
                <h4 class="h4-of-overview">${result.original_title}</h4>
                <h4>${result.vote_average}</h4>
                <p>${result.overview}</p>
            </div>
        `;
        movieBox.appendChild(box1);

        // Add event listeners to each box
        box1.addEventListener("mouseenter", () => {
            const op = box1.querySelector(".op");
            op.style.opacity = "0.4";
            const overview = box1.querySelector(".overview");
            overview.style.transform = "translateY(0%)";
        });

        box1.addEventListener("mouseleave", () => {
            const op = box1.querySelector(".op");
            op.style.opacity = "0.7";
            const overview = box1.querySelector(".overview");
            overview.style.transform = "translateY(100%)";
        });
    });
}


document.querySelector("#search").addEventListener(
    "keyup",
    (event)=>{
        if(event.target.value != ""){
            getMovies(search + event.target.value);
        }
        else{
            getMovies(apiUrl);
        }
    }


)
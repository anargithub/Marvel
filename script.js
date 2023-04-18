// marvel 

const PUBLIC_KEY = "c6dd40b9f48c0cabc9c581e871f8e3ef"
const PRIVATE_KEY = "e4c7ff34da7f375e40ccf4db63bad4d5b899c774"
const BASE_URL = "https://gateway.marvel.com"

async function makeQuery(endpoint){
    const ts = new Date().getTime()
    const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
    const response = await fetch(`${BASE_URL + endpoint}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
    return await response.json()


}
makeQuery('/v1/public/comics')

async function showMovies() {
    const {data} = await makeQuery('/v1/public/comics')
    const div = document.querySelector('div')
    console.log(data)

    div.innerHTML = ""
    for (let movie of data.results) {
       
        div.innerHTML += `
            <div class="movie">   
                <div 
                    class="movie_image"
                    style="background-image: url(${movie.thumbnail.path}.${movie.thumbnail.extension})">
                </div> 
                <p>${movie.title}</p>
   
            </div>`
    }

}
showMovies()
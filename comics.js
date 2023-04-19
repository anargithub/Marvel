let getComic = localStorage.getItem("characterId")
console.log(getComic)

// const PUBLIC_KEY = "c6dd40b9f48c0cabc9c581e871f8e3ef"
// const PRIVATE_KEY = "e4c7ff34da7f375e40ccf4db63bad4d5b899c774"
// const BASE_URL = "https://gateway.marvel.com"

// async function makeQuery(endpoint){
//     const ts = new Date().getTime()
//     const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
//     const response = await fetch(BASE_URL + endpoint + `?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`)
//     const {data} = await response.json()
//     return data


// }

async function drawComics() {
    const {results} = await makeQuery(`/v1/public/characters/${getComic}/comics`)
    const actorComics = document.querySelector('.actorComics')  
    
    actorComics.innerHTML = ""
    for (let comic of results) {
       
        actorComics.innerHTML += `
            <div class="actors">             
                <p>${comic.title}</p>
            </div>`
    }
}
drawComics()

// write your code here
const baseUrl = ' http://localhost:3000/ramens'

document.addEventListener('DOMContentLoaded', () => {

function fetchData(){    
fetch(baseUrl)
.then(response => response.json())
.then(ramenData => ramenData.forEach(data => appendData(data))) 
}
fetchData()

const appendData = (data) => {
    const imgDiv = document.getElementById("ramen-menu")
    const img = document.createElement("img")
    img.src = data.image
    imgDiv.appendChild(img)
    img.addEventListener("click", () => updateProfile(data))

  

}

const updateProfile = (data) => {
    const ramDetails = document.getElementById("ramen-detail")
    ramDetails.innerHTML = `<img class="detail-image" src="${data.image}" alt="${data.name}" />
                              <h2 class="name">${data.name}</h2>
                              <h3 class="restaurant">${data.restaurant}</h3>`

const ratings = document.getElementById("rating-display")
ratings.innerText = data.rating 
const comments = document.getElementById("comment-display")
comments.innerText = data.comment
} 

function updateFromForm(){
const form = document.getElementById("new-ramen")
console.log(form)
form.addEventListener("submit", (e) => {
    e.preventDefault()   
    const name = form.name.value
    const restaurant = form.restaurant.value
    const rating = form.rating.value
    const image  = form.image.value
    console.log(image)

    (document.getElementById("ramen-menu").innerHTML += `<img src="${image}"/>`).addEventListener("click", () => updateProfile(data))
   
    console.log(name)
   
})
}
updateFromForm()

})

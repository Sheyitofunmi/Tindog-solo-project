import dogData from './data.js'
import Dog from './Dog.js'

let dogIndex = 0

// Reject Button
document.getElementById("btn-nope").addEventListener("click",function(){
    document.getElementById("img-nope").style.visibility = "visible"
    document.getElementById("img-like").style.visibility = "hidden"
    reject()
    setDog()
})

// Like Button
document.getElementById("btn-like").addEventListener("click",function(){
    document.getElementById("img-like").style.visibility = "visible"
    document.getElementById("img-nope").style.visibility = "hidden"
    like()
    setDog()
})

// Set Dog
function setDog(){
    setTimeout(()=>{
        render(dogIndex)
    },1000)
    dogIndex++
    if (dogIndex > 2){
        dogIndex = 0
    }
}

// Get Dog
function getDog(dogIndex){
    let dog = new Dog(dogData[dogIndex])
    return dog
}

// Render Dog
function render(dogIndex){       
    dog = getDog(dogIndex)
    document.getElementById('dog').innerHTML = dog.getDogHtml()
        if (dogData[dogIndex].hasBeenSwiped === true && 
            dogData[dogIndex].hasBeenLiked === false){
                document.getElementById("img-nope").style.visibility = "visible"
                document.getElementById("img-like").style.visibility = "hidden"
        } else if(dogData[dogIndex].hasBeenSwiped === true && 
            dogData[dogIndex].hasBeenLiked === true) {
                document.getElementById("img-nope").style.visibility = "hidden"
                document.getElementById("img-like").style.visibility = "visible"
        }
}

// Reject
function reject(){
    dogData[dogIndex].hasBeenSwiped = true
    dogData[dogIndex].hasBeenLiked = false
}

// Like
function like(){
    dogData[dogIndex].hasBeenSwiped = true
    dogData[dogIndex].hasBeenLiked = true
}

// Initial Render
let dog = getDog(dogIndex)
render(dogIndex)
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

firstFetch()
secondFetch()

function firstFetch() {
    fetch(imgUrl) 
        .then(r => r.json())
        .then(data => data.message.forEach(imgCallBack))

}

function imgCallBack(dog) {
    
    const dogImage = document.createElement('img')

    dogImage.src = dog

    const dogContainer = document.getElementById ('dog-image-container')
    
    dogContainer.append(dogImage)

}

function secondFetch() {
    fetch(breedUrl) 
        .then(r => r.json())
        .then(data => console.log(data.message.keys))

}

function breedCallBack(breed) {

    const breedList = document.getElementById ('dog-breeds')

    const breedText = document.createElement ('li') 

    breedText.innerText = breed

    breedList.append(breedText)
}
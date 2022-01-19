const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

console.log('%c HI', 'color: firebrick')

const firstFetch = fetch(imgUrl) 
    .then(r => r.json())
    .then(data => data.forEach(imgCallBack))

    //firstFetch();


const imgCallBack = function(dog) {
    const dogImage = document.querySelector("#dog-image-container");
    //dog.innerHTML = firstFetch
    
}
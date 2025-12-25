// Array of image paths
const img = [
    "./img/p-1.jpg",
    "./img/p-2.jpg",
    "./img/p-3.jpg",
    "./img/p-4.jpg",
    "./img/p-5.jpg",
    "./img/p-6.jpg",
]

// Variable to track current image index
let index = 0;

// Selecting image element from DOM
const slide = document.getElementById("slid")

// Function for Previous button
const prevClick = () =>{
    index--;

    // If index goes below 0, jump to last image
    if(index <0 ){
        index = img.length-1;
    }

    // Change image source
    slide.src=img[index]
    
}

// Automatically change image every 4 seconds
setInterval(nextClick = () =>{
    index++;

    // If index exceeds array length, reset to first image
    if(index >= img.length-1 ){
        index = 0;
    }

    slide.src=img[index]

},4000)


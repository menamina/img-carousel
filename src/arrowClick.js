let currentIndex = 0;

export function rightClick(images){

    return function right(){
    const imgFrame = document.querySelector(".imgQueue");
    imgFrame.textContent = "";

    const imgInsert = document.createElement("img");
    imgInsert.classList.add("picture");
    const index = images[currentIndex];
    imgInsert.src = index;
    imgFrame.appendChild(imgInsert);

    currentIndex++;
    if (currentIndex >= images.length){
        currentIndex = 0;
    }
    };


}


export function leftClick(images){

    return function right(){
    const imgFrame = document.querySelector(".imgQueue");
    imgFrame.textContent = "";

    const imgInsert = document.createElement("img");
    imgInsert.classList.add("picture");
    const index = images[currentIndex];
    imgInsert.src = index;
    imgFrame.appendChild(imgInsert);

    currentIndex--;
    if (currentIndex < 0){
        currentIndex = images.length -1;
    }
    };
    
}
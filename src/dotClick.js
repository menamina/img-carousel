export function dotClick(dotNum, array){
    const frame = document.querySelector(".imgQueue");
    frame.textContent = "";

    const insertIntoFrame = document.createElement("img");
    insertIntoFrame.classList.add("picture");

    const displayImage = array[dotNum];
    insertIntoFrame.src = displayImage;
    frame.appendChild(insertIntoFrame);
    

}
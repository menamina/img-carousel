export function dotClick(selectedDot, array){
    const frame = document.querySelector(".imgQueue");
    frame.textContent = "";

    const insertIntoFrame = document.createElement("img");
    insertIntoFrame.classList.add("picture");

    const displayImage = array[selectedDot];
    insertIntoFrame.src = displayImage;
    frame.appendChild(insertIntoFrame);
    
}
// const button = document.getElementById("button")

// function deleteHandler(e){
//     e.target.remove();
// }

// function addingEventListener() {
//      button.addEventListener("clicked", deleteHandler)

// }
const button = document.getElementById("button");

function deleteHandler(e) {
    e.target.remove();
}

function addingEventListener() {
    button.addEventListener("click", deleteHandler);
}

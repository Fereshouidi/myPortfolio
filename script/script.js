

let ulExistance = false
const handleUL = () => {
    const ul = document.getElementById("ul");

    if(ulExistance){
        ulExistance = !ulExistance;
         ul.classList = "ul-invisible";
         ul.classList.remove("ul-visible");
    }else{
        ulExistance = !ulExistance;
         ul.classList.remove("ul-invisible");
         ul.classList = "ul-visible";
    }
}
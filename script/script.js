

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



const project_list = [
    {
        id: 1,
        tittle: 'messager web app',
        image: 'images/_89240508-33eb-4b20-bf1f-ab32b4d3bf1a.jpg',
        short_discription: "application for chatting",
    },
    {
        id: 2,
        tittle: 'app 2',
        image: 'images/profileIMG2.jpg',
        short_discription: "Script Writing & Video Production",
    },
    {
        id: 3,
        tittle: 'app 3',
        image: 'images/profileIMG2.jpg',
        short_discription: "Script Writing & Video Production",
    },
]

const show_more_detail = (id, index) => {
    const more_details_div = document.getElementById("more-detail");
        more_details_div.style.display = 'flex';
        //alert(project_list[index].tittle);
    
}
const close_more_detail = () => {
    const more_details_div = document.getElementById("more-detail");
        more_details_div.style.display = 'none';
    
}


// let more_details_div_showing = false;
// const handle_more_detail = (id, index) => {
//     const more_details_div = document.getElementById("more-detail");
//     if(more_details_div_showing){
//         more_details_div.style.display = 'none';
//         more_details_div_showing = false;
//     }else{
//         more_details_div.style.display = 'flex';
//         more_details_div_showing = true;
//     }
//     //alert(project_list[index].tittle);
    
// }

const project_content = document.getElementById("project-content")

project_list.map((project, index) => {
    const project_div = `<div class="project-card">
    <div class="project-image">
      <img class="img_prg" src=${project.image}>
    </div>
    <div class="project-info">
      <span class="s">${project.short_discription} </span>
      <div class="aaa">
        <h3 class="h3">${project.tittle}</h3>
        <span class="more_details" onClick="show_more_detail(${project.id}, ${index})">more details</span>
      </div>
    </div>
  </div>`;

  project_content.innerHTML += project_div;
})


console.log(project_list[0]);

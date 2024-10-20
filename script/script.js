


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
        image: [
                  'images/messager_web_app.jpg', 
                  'images/att.7TpWR8dR9OO-7N3EmHtqko59V0KAh-4fJmSYcbVjus8.jpg',
                  'images/att.aNLnK8CIPNO4h97b_mGnaHIcL-8k_SocrRjNBX3IR3A.jpg',
                  'images/att.CRI0zATBmR15cvjvy1MAjxhQRqjp33JVc8N7v77xs_g (1).jpg',
                  'images/att.CRI0zATBmR15cvjvy1MAjxhQRqjp33JVc8N7v77xs_g.jpg',
                  'images/att.EIGVzJaTCkkM8-svykq4Pv9FdTruM3q_C9-5_L9eojk (1).jpg',
                  'images/att.EIGVzJaTCkkM8-svykq4Pv9FdTruM3q_C9-5_L9eojk.jpg',
                  'images/att.n--5tG54-av8aVHkEtO8jV_cNcplRHapaKSN7UwQ_6w (1).jpg',
                  'images/att.P4rHBl4gwx6zbUk6zHM8uJ6u6jiOFjKXS9cD1H32WBA (1).jpg',
                  'images/att.P4rHBl4gwx6zbUk6zHM8uJ6u6jiOFjKXS9cD1H32WBA (1).jpg',
                  'images/att.tw0fKLXJLPzI9t1sIpoRpq68cG2Co-6Y3jxXh_jSHCY (1).jpg',
                  'images/att.tw0fKLXJLPzI9t1sIpoRpq68cG2Co-6Y3jxXh_jSHCY.jpg',
                  'images/att.upgwFYJmuq5MYd_WNwkx-5Z8zVUDr-9MGYWN9RglR64 (1).jpg', 
                  'images/att.upgwFYJmuq5MYd_WNwkx-5Z8zVUDr-9MGYWN9RglR64.jpg', 
                  'images/att.vt_q_VZU0KFyDOM2ZY0C2WChLh3k2nT5KbbtJy5_Px4 (1).jpg', 
                  'images/att.vt_q_VZU0KFyDOM2ZY0C2WChLh3k2nT5KbbtJy5_Px4.jpg', 
                  'images/att.WsKyL_sMRK5sqrTDK3zMB1uAneQ_dNT3hpHVkTEGWKg.jpg', 
                  'images/att.xhYp09tL8MonMzatB6tUFZshVHAs4kDEANF4Srtsc7Y.jpg', 
                  'images/att.xhYp09tL8MonMzatB6tUFZshVHAs4kDEANF4Srtsc7Y.jpg', 
                ],
        short_discription: "application for chatting",
        about: 'example about',
        discription: 'example discription'
    },
    {
        id: 2,
        tittle: 'app 2',
        image: ['images/profileIMG2.jpg'],
        short_discription: "Script Writing & Video Production",
        about: 'example about',
        discription: 'example discription'
    },
    {
        id: 3,
        tittle: 'app 3',
        image: ['images/profileIMG2.jpg'],
        short_discription: "Script Writing & Video Production",
        about: 'example about',
        discription: 'example discription'
    },
]




const show_image = (image) => {
    const more_details_content = document.getElementById("content");
    const show_img = document.getElementById('show-img');
    more_details_content.style.overflow = 'hidden';
    show_img.style.display = 'flex';
    show_img.innerHTML = `
        <i class="fas fa-times" onclick="close_image()"></i>
        <img src="${image}" alt="">
    `;
}
const close_image = () => {
    const more_details_content = document.getElementById("content");
    const show_img = document.getElementById('show-img');
    show_img.style.display = 'none';
    more_details_content.style.overflow = 'scroll';
}

const show_more_detail = (id, index) => {
    const more_details_div = document.getElementById("more-detail");
    const images_container = document.getElementById('images-container');
    more_details_div.style.display = 'flex';
    
    let imagesHTML = '';
    project_list[index].image.forEach((image_, index) => {
        imagesHTML += `<img src="${image_}" onClick="show_image('${image_}')" alt="">`;
    });

    const container_div = `
      <div id="content">
        <div id="project-details-header">
          <h2 id="project-name">${project_list[index].tittle}</h2>
          <i class="fas fa-times" onclick="close_more_detail()"></i>
        </div>
        <div id="about">
          <h2>about</h2>
          <p>${project_list[index].about}</p>
        </div>
        <div id="images">
          <h2>images</h2>
          <div id="images-container"> 
              ${imagesHTML}
          </div>
        </div>
        <div id="discription">
          <h2>discription</h2>
          <p>${project_list[index].discription}</p>
        </div>
        <div id='show-img'>
        </div>
      </div>`;

    more_details_div.innerHTML = container_div;
};

const close_more_detail = () => {
    const more_details_div = document.getElementById("more-detail");
        more_details_div.style.display = 'none';
    
}



const project_content = document.getElementById("project-content")

project_list.map((project, index) => {
    const project_div = `<div class="project-card">
    <div class="project-image">
      <img class="img_prg" src=${project.image[0]}>
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

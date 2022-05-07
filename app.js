const data = [
    { 
      img: "./images/profile-1.jpg",
      name: "Abby Marshall",
      job: "Graphic Designer",
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aut eos odit saepe? Fugiat quaerat quia undeanimi adipisci provident aperiam, cumque suscipit voluptas illo corrupti rem, totam, nobis perferendis!Natus aut eos odit saepe? Fugiat quaerat quia undeanimi"
},
{ 
    img: "./images/profile-2.jpg",
    name: "Sarah Brandon",
    job: "Web Developer",
    bio: "Lorem ipsum dolor, cumque suscipit voluptas illo corrupti rem, totam, nobis perferendis sit amet consectetur adipisicing elit. Natus aut eos odit saepe? Fugiat quaerat quia undeanimi adipisci provident aperiam, cumque suscipit voluptas illo corrupti rem, totam, nobis perferendis!"
},
{ 
    img: "./images/profile-3.jpg",
    name: "Michael Maddon",
    job: "Data Scientist",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aut eos odit saepe? Fugiat quaerat quia undeanimi adipisci provident aperiam, cumque suscipit voluptas tetur adipisicing elit. Natus aut eos odit saepe? Fugiat quaerat quia illo corrupti rem, totam, nobis perferendis!"
},
{ 
    img: "./images/profile-4.jpg",
    name: "Gabriel Boyle",
    job: "Project Manager",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aut eos odit saepe? Fugiat quaerat quia undeanimi adipisci provident aperiam, cumque suscipit voluptas illo corrupti rem, totam, nobis perferendis!"
}
];

const container = document.querySelector(".container");
const previus = document.querySelector(".previus-btn");
const next = document.querySelector(".next-btn");
let count = 0;

function createPerson(){
    
    container.innerHTML = `<img src= ${data[count].img}>
    <h2 class="name">${data[count].name}</h2>
    <h3 class="job-description">${data[count].job}</h3>
    <p>${data[count].bio}</p>`
}   

next.addEventListener("click", function(){
   count++;
   if(count >= data.length){
       count = 0;
   }
   createPerson();   
});

previus.addEventListener("click", function(){
    count--;
    if(count < 0){
        count = data.length -1;
    }
    createPerson();
});

createPerson();
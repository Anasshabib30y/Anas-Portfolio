

const reviews = [
    {
        id: 1, 
        name : 'mohamed Ahmed',
        job : 'web devaloper',
        img : 'imges/images (1).jpeg',
        info : 'Iam very happy with this web site!'
    },
    {
        id: 2, 
        name : 'Ahmed mohamed',
        job : 'web devaloper',
        img : 'imges/images (2).jpeg',
        info : 'Iam very happy with this web site!'
    },{
        id: 3, 
        name : 'Ali mohamed',
        job : 'web devaloper',
        img : 'imges/images.jpeg',
        info : 'Iam very happy with this web site!'
    },{
        id: 4, 
        name : 'moqmen Ahmed',
        job : 'web devaloper',
        img : 'imges/تنزيل (1).jpeg',
        info : 'Iam very happy with this web site!'
    },{
        id: 5, 
        name : 'Abdulrahman Ahmed',
        job : 'web devaloper',
        img : 'imges/تنزيل (2).jpeg',
        info : 'Iam very happy with this web site!'
    },{
        id: 6, 
        name : 'mazen Ali',
        job : 'web devaloper',
        img : 'imges/تنزيل (3).jpeg',
        info : 'Iam very happy with this web site!'
    },{
        id: 7, 
        name : 'sofian Ahmed',
        job : 'web devaloper',
        img : 'imges/تنزيل.jpeg',
        info : 'Iam very happy with this web site!'
    },
]



const img = document.getElementById('person-img');

const auther = document.getElementById('author');

const job = document.getElementById("job");

const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");

const nextBtn = document.querySelector('.next-btn');

const randomBtn = document.querySelector('.random-btn');

let currentitem = 0;

window.addEventListener('DOMContentLoaded',()=>{
    const item = reviews[currentitem];

    img.src = item.img;

    auther.textContent = item.name;

    job.textContent = item.job;

    info.textContent = item.info;
})

function showPerson(person){
    const item = reviews[person];

    img.src = item.img;

    auther.textContent = item.name;

    job.textContent = item.job;

    info.textContent = item.info;
}

nextBtn .addEventListener('click', ()=>{
    currentitem++;
    if(currentitem>reviews.length-1){
        currentitem = 0;
         
    }
    showPerson(currentitem);
})

prevBtn .addEventListener('click', ()=>{
    currentitem--;
    if(currentitem<0){
        currentitem = reviews.length - 1;
         
    }
    showPerson(currentitem);
})

randomBtn.addEventListener('click',()=>{
    currentitem = Math.floor(Math.random()*reviews.length)
    showPerson(currentitem);
})
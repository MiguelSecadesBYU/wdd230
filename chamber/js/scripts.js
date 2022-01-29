const year = document.querySelector('#year');
year.innerHTML = new Date().getFullYear();


document.getElementById("modify").innerHTML = document.lastModified

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x= document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("date"); // for european/family history format with day first.

// derive the current date using a date object
//const now = new Date();
//const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full" }).format(now);

const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(today);

document.getElementById('currentDate').innerHTML = `<em>${fulldate}</em>`;

//datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

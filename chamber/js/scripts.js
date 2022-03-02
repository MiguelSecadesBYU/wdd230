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

const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(today);

document.getElementById('currentDate').innerHTML = `<em>${fulldate}</em>`;


let dayOfWeek;
const banner = document.getElementById("banner");
dayOfWeek = today.getDay();
if (dayOfWeek === 1 || dayOfWeek === 2){
  //  document.getElementById("banner").classList.toggle("open");
    
    banner.style.display = "block";
    
}else{
    document.getElementById("banner").style.visibility='hiden';
    banner.style.display = "none";
}



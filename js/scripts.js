const year = document.querySelector('#year');
function date() {
    year.innerHTML = new Date().getFullYear();
};

document.getElementById("modify").innerHTML = document.lastModified

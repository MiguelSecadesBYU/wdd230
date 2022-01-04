const year = document.querySelector('#year');
function date() {
    year.innerHTML = new Date().getFullYear();
};

    date();

let d = new Date();

let fulldate = d.getDay() + " / " + d.getMonth() + " / " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
document.getElementById("last_updated").textContent = fulldate;

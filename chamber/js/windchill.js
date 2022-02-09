const temp = document.getElementById("temperature");
const wspeed = document.getElementById("windSped");

const windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wspeed,0.16)) + (0.4275*temp*Math.pow(wspeed,0.16));

const roundedWindChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= roundedWindChill;
//document.getElementById('windChill').innerHTML = `<em>${roundedWindChill}</em>`;
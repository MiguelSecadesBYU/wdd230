const requestURL = 'https://miguelsecadesbyu.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.directory');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    business.forEach(displayBusiness);
  });


  function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
   // let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
   // logo.setAttribute('src', business.imageurl);
  //  logo.setAttribute('alt', 'Logo of  ' + business.name);
    //logo.setAttribute('loading', 'lazy');
     
   
    // Change the textContent property of the p elements to contain the business info
    address.textContent = business.address;
    phone.textContent = business.phone;
    website.textContent = business.website;
  

    // Add/append the section(card) with the h2 element
    //card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

      
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }


  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bList").onclick = () => {
     // document.getElementsByClassName("directory").classList.remove("grid");
      cards.classList.remove("grid");
      console.log("List View");
    };
    document.getElementById("bGrid").onclick = () => {
     // document.getElementsByClassName("directory").classList.add("grid");
      cards.classList.add("grid");
      console.log("Card View");
    };
  });
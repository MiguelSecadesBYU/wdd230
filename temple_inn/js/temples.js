const requestURL = 'https://miguelsecadesbyu.github.io/wdd230/temple_inn/data/temples.json';
const cards = document.querySelector('.temples');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];
    temple.forEach(displayTemples);
  });


  function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let image = document.createElement('img');
    let temple_name = document.createElement('em');
    let location = docuent.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    
  
    
    logo.setAttribute('src', temple.imageurl);
    logo.setAttribute('alt', 'Logo of  ' + tample.templeName);
    logo.setAttribute('loading', 'lazy');
     
   
    
    temple_name.textContent = temple.templeName;
    address.textContent = temple.address;
    phone.textContent = temple.phone;
    email.textContent = temple.email;
    services.textContent = temple.services;
  

    // Add/append the section(card) with the h2 element
    card.appendChild(temple_name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);

      
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }



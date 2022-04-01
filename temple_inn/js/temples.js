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
    let temple_name = document.createElement('h2');
    let location = document.createElement('p');
    let address  = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let like = document.createElement('img');
    
  
    
    image.setAttribute('src', temple.imageUrl);
    image.setAttribute('alt', 'images/like.png');
    image.setAttribute('loading', 'lazy');

    like.setAttribute('src', temple.imageUrl);
     
   
    
    temple_name.textContent = temple.templeName;
    address .textContent = 'Address: ' + temple.address;
    location.textContent = 'Location: ' + temple.location;
    phone.textContent = 'Phone: ' + temple.phone;
    email.textContent = 'Email: ' + temple.email;
    services.textContent = 'Services: ' + temple.services;
  

    // Add/append the section(card) with the h2 element
    card.appendChild(image);
    card.appendChild(temple_name); 
    card.appendChild(address);
    card.appendChild(location);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(like);
      
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }



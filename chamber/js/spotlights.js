const requestURL = 'https://miguelsecadesbyu.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.spotLights');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
   let spotlight = businesses.filter(
      (a) => a.membership == "gold" || a.membership == "silver"
    )
        spotlight = spotlight.sort(() => Math.random() - 0.5);
        displaybusinesses(spotlight[0]);
        displaybusinesses(spotlight[1]);
        displaybusinesses(spotlight[2]);
  });

  function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('em');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', 'Logo of  ' + business.name);
    logo.setAttribute('loading', 'lazy');
     
   
    // Change the textContent property of the p elements to contain the business info
    name.textContent = business.name;
    phone.textContent = business.phone;
    website.textContent = business.website;
  

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(name);
      
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }
 

 let searchBtn = document.getElementById("search-btn");
 let countryInp = document.getElementById("country-inp");
 let result = document.getElementById("result");

 searchBtn.addEventListener("click", () => {
     let countryName = countryInp.value;
     let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
      fetch(finalUrl).then((response) => response.json()).then((data) => {
          console.log(data);
          console.log(finalUrl);
          console.log("Done");
          result.innerHTML = `
          <div class="wrapper">
          <div class="data-wrapper">
              <img src="${data[0].flags.png}" alt="flag">
          </div>
          <div class="wrapper">
          <div class="data-wrapper">
              <h2>${data[0].name.common}</h2>
          </div>
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Capital: <span>${data[0].capital}</span></h4>
              </div></div>
              <div class="wrapper">
          <div class="data-wrapper">
              <h4>Continent: <span>${data[0].continents}</span></h4>
              </div></div>
              <div class="wrapper">
          <div class="data-wrapper">
              <h4>Population: <span>${data[0].population}</span></h4>
              </div></div>
              <div class="wrapper">
          <div class="data-wrapper">
               <h4>currency: <span>${data[0].currencies
                [Object.keys(data[0].currencies)].name}-
                ${Object.keys(data[0].currencies)}
                </span></h4>
          </div></div>
          <div class="wrapper">
          <div class="data-wrapper">
              <h4>Comon languages: <span>${Object.values(data[0].languages).toString()
                .split(",").join(", ")
              }</span></h4>
              </div></div>
      
          `
      })
      .catch(() => {
          if (countryName.length == 0) {
              result.innerHTML = `<h3 class="msg">Please enter a country name</h3>`
          } else {
              result.innerHTML = `<h3 class="msg">Country not found</h3>`
          }
      })
 })



 countryInp.addEventListener("keyup", (e) => {
     if (e.key == "Enter") {
         searchBtn.click();
     }
 })
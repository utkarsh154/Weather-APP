const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d55cc544bmshf82737f6750a255p1f65b3jsna0b810dd014b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;

      
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value)
});

getWeather("Durgapur")


  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      delhicloud_pct.innerHTML = response.cloud_pct;
      delhiTemp.innerHTML = response.temp;
      // delhitemp2.innerHTML = response.temp;
      delhifeels_like.innerHTML = response.feels_like;
      delhihumidity.innerHTML = response.humidity;
      // delhihumidity2.innerHTML = response.humidity;
      delhimin_temp.innerHTML = response.min_temp;
      delhimax_temp.innerHTML = response.max_temp;
      delhiwind_speed.innerHTML = response.wind_speed;
      // delhiwind_speed2.innerHTML = response.wind_speed;
      delhiwind_degrees.innerHTML = response.wind_degrees;
      delhisunrise.innerHTML = response.sunrise;
      delhisunset.innerHTML = response.sunset;

      
    })
    .catch((err) => console.error(err));

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        kolcloud_pct.innerHTML = response.cloud_pct;
        kolTemp.innerHTML = response.temp;
        // delhitemp2.innerHTML = response.temp;
        kolfeels_like.innerHTML = response.feels_like;
        kolhumidity.innerHTML = response.humidity;
        // delhihumidity2.innerHTML = response.humidity;
        kolmin_temp.innerHTML = response.min_temp;
        kolmax_temp.innerHTML = response.max_temp;
        kolwind_speed.innerHTML = response.wind_speed;
        // delhiwind_speed2.innerHTML = response.wind_speed;
        kolwind_degrees.innerHTML = response.wind_degrees;
        kolsunrise.innerHTML = response.sunrise;
        kolsunset.innerHTML = response.sunset;
  
        
      })
      .catch((err) => console.error(err));

      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
    
          mubTemp.innerHTML = response.temp;
          mubfeels_like.innerHTML = response.feels_like;
          mubhumidity.innerHTML = response.humidity;
          mubmin_temp.innerHTML = response.min_temp;
          mubmax_temp.innerHTML = response.max_temp;
          mubwind_speed.innerHTML = response.wind_speed;
          mubcloud_pct.innerHTML = response.cloud_pct;
          mubwind_degrees.innerHTML = response.wind_degrees;
          mubsunrise.innerHTML = response.sunrise;
          mubsunset.innerHTML = response.sunset;
    
          
        })
        .catch((err) => console.error(err));

        fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
      
            chcloud_pct.innerHTML = response.cloud_pct;
            chTemp.innerHTML = response.temp;
            chfeels_like.innerHTML = response.feels_like;
            chhumidity.innerHTML = response.humidity;
            chmin_temp.innerHTML = response.min_temp;
            chmax_temp.innerHTML = response.max_temp;
            chwind_speed.innerHTML = response.wind_speed;
            chwind_degrees.innerHTML = response.wind_degrees;
            chsunrise.innerHTML = response.sunrise;
            chsunset.innerHTML = response.sunset;
      
            
          })
          .catch((err) => console.error(err));

          fetch(
            "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York",
            options
          )
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
        
              nycloud_pct.innerHTML = response.cloud_pct;
              nyTemp.innerHTML = response.temp;
              nyfeels_like.innerHTML = response.feels_like;
              nyhumidity.innerHTML = response.humidity;
              nymin_temp.innerHTML = response.min_temp;
              nymax_temp.innerHTML = response.max_temp;
              nywind_speed.innerHTML = response.wind_speed;
              nywind_degrees.innerHTML = response.wind_degrees;
              nysunrise.innerHTML = response.sunrise;
              nysunset.innerHTML = response.sunset;
        
              
            })
            .catch((err) => console.error(err));

            fetch(
              "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai",
              options
            )
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
          
                dbcloud_pct.innerHTML = response.cloud_pct;
                dbTemp.innerHTML = response.temp;
                dbfeels_like.innerHTML = response.feels_like;
                dbhumidity.innerHTML = response.humidity;
                dbmin_temp.innerHTML = response.min_temp;
                dbmax_temp.innerHTML = response.max_temp;
                dbwind_speed.innerHTML = response.wind_speed;
                dbwind_degrees.innerHTML = response.wind_degrees;
                dbsunrise.innerHTML = response.sunrise;
                dbsunset.innerHTML = response.sunset;
          
                
              })
              .catch((err) => console.error(err));


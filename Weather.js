window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription= document.querySelector('.temperature-description');
    let temperatureDegree= document.querySelector('.temperature-degree');
    let humidity1= document.querySelector('.humidity');
    if(navigator.geolocation){

       navigator.geolocation.getCurrentPosition
       (position => {
           long = position.coords.longitude;
           lat= position.coords.latitude;
      // console.log(position);
       const proxy="https://cors-anywhere.herokuapp.com/";
       const api =`${proxy}https://api.darksky.net/forecast/06daf1b08d6ad3279840f9c177abdaff/${lat},${long}`;
  
       fetch(api)
       .then(response =>{
           return response.json();

       })
       .then(data =>{
           console.log(data);
           const {temperature , summary,humidity}=data.currently;
           let temp=(temperature -32)*(5/9);
           temperatureDegree.textContent= "Current Weather is"+" "+parseInt(temp)+"°C";
           temperatureDescription.textContent="Info : "+summary;
           humidity1.textContent ="humidity : "+humidity;
         
       });
       });
    
    } 
});
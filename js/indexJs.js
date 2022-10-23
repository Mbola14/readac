var province;
var region;
var district;
var commune;



window.onload = function ()
{
    province = document.getElementById('province');
    region = document.getElementById('region');
    district = document.getElementById('district');
    commune = document.getElementById('commune');

    region.disabled = true;
    district.disabled = true;
    commune.disabled = true;
}


    function setProvince() {
      var xhr; 
      try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
      catch (e) 
      {
          try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
          catch (e2) 
          {
             try {  xhr = new XMLHttpRequest();  }
             catch (e3) {  xhr = false;   }
           }
      }

      xhr.onreadystatechange  = function() 
      { 
         if(xhr.readyState  == 4){
          if(xhr.status  == 200){
              var retour = xhr.responseText;
              region.innerHTML = retour;
              console.log(retour);
          } else {
              document.dyn="Error code " + xhr.status;
          }
          }
      };  

      // Configurez la requête
      xhr.open("GET", "province.php?province="+province.value, false);
  
      // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
      xhr.send(null);
    }      


    function setRegion() {
      var xhr; 
      try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
      catch (e) 
      {
          try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
          catch (e2) 
          {
             try {  xhr = new XMLHttpRequest();  }
             catch (e3) {  xhr = false;   }
           }
      }


      xhr.onreadystatechange  = function() 
      { 
         if(xhr.readyState  == 4){
          if(xhr.status  == 200){
              var retour = xhr.responseText;
              district.innerHTML = retour;
              console.log(retour);
          } else {
              document.dyn="Error code " + xhr.status;
          }
          }
      };

      // Configurez la requête
      xhr.open("GET", "region.php?region="+region.value, false);
  
      // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
      xhr.send(null);
    }


    function setDistrict() {
      var xhr; 
      try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
      catch (e) 
      {
          try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
          catch (e2) 
            {
             try {  xhr = new XMLHttpRequest();  }
             catch (e3) {  xhr = false;   }
            }
      }

      xhr.onreadystatechange  = function() 
      { 
         if(xhr.readyState  == 4){
          if(xhr.status  == 200){
              var retour = xhr.responseText;
              commune.innerHTML = retour;
              console.log(retour);
          } else {
              document.dyn="Error code " + xhr.status;
          }
          }
      };  

      // Configurez la requête
      xhr.open("GET", "district.php?district="+district.value, false);
  
      // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
      xhr.send(null);
    }      


    function setCommune() {
      var xhr; 
      try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
      catch (e) 
      {
          try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
          catch (e2) 
          {
             try {  xhr = new XMLHttpRequest();  }
             catch (e3) {  xhr = false;   }
           }
      }

      xhr.addEventListener("load", function(event) {
        $msg=(event.target.responseText!="")?event.target.responseText:"OK";
        alert($msg);
      });

      // Definissez ce qui se passe en cas d'erreur
        xhr.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal passé.');
      });  

      xhr.onreadystatechange  = function() 
      { 
         if(xhr.readyState  == 4){
          if(xhr.status  == 200){
              var retour = xhr.responseText;
              region.innerHTML = retour;
              console.log(retour);
          } else {
              document.dyn="Error code " + xhr.status;
          }
          }
      };  

      // Configurez la requête
      xhr.open("GET", "province.php?province="+province.value, false);
  
      // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
      xhr.send(null);
    }      




function change_province(){
    console.log("province changed");

    if ( province.value != 0){
        console.log(province.value);
        setProvince();
        region.disabled = false;
    }
}


function change_region(){
    console.log("province changed");

    if ( region.value != 0){
        console.log(region.value)
        setRegion();
        district.disabled = false;
    }
}


function change_district(){
    console.log("province changed");

    if ( district.value != 0){
        console.log(district.value)
        setDistrict();
        commune.disabled = false;
    }
}


function change_commune(){
    console.log("province changed");

    if ( commune.value != 0){
        console.log(province.value)
        region.disabled = false;
    }

}

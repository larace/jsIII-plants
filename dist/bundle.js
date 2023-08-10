(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("plantForm"),t=document.getElementById("recommendations"),n=(document.querySelector(".get-plant-button"),document.querySelector(".clear-button")),s=document.getElementById("plantCard");let i,o;e.addEventListener("submit",(n=>{if(n.preventDefault(),i=new FormData(e),e.checkValidity()){const e=i.get("plantPlacement"),t=i.get("receiveDirectSunlight"),n=i.get("hasPets"),a=i.get("wateringHabits"),c=i.get("stylePreference"),m=i.getAll("extraElements");o=function(){const e={pot:{}};return{setName:function(t){return e.name=t,this},setSoil:function(t){return e.soil=t,this},setPotMaterial:function(t){return e.pot.material=t,this},setPotStyle:function(t){return e.pot.style=t,this},setPotColor:function(t){return e.pot.color=t,this},setExtras:function(t){return e.extras=t,this},build:function(){return e}}}().setName(function(e,t){return"inside-indirect"===e?"yes"===t?"Sansevieria":"Boston Fern":"inside-direct"===e?"yes"===t?"Aglaonema":"Monstera":"outside"===e?"yes"===t?"Aloe Vera":"Cactus":void 0}(e,n)).setSoil((l=t,"yes"===l?"Composted soil":"Fertilized soil")).setPotMaterial((r=a,"overwater"===r?"Clay Pot":"underwater"===r||"neither"===r?"Ceramic Pot":void 0)).setPotStyle(function(e){return"minimalism"===e?"Simple":"simple"===e?"Simple Decorated":"colorful"===e?"Painted Decorated":void 0}(c)).setPotColor(function(e){return"minimalism"===e?"clay":"simple"===e?"blue":"colorful"===e?"yellow":void 0}(c)).setExtras(m).build(),function(e){const t="Assets/",n=`\n      <h2>${e.name}</h2>\n      <div class="plant-composition">\n        <img src="${t}${e.pot.style.replace(/\s/g,"-")}-${e.pot.material.replace(/\s/g,"-")}.png" alt="Maceta">\n        ${e.extras.includes("pebbles")?`<img src="${t}pebbles.png" alt="Pebbles">`:""}\n        ${e.extras.includes("smaller-plants")?`<img src="${t}mini-plants.png" alt="Mini Plants">`:""}\n        ${e.extras.includes("moss-pole")?`<img src="${t}moss-pole.png" alt="Moss Pole">`:""}\n        <img src="${t}${e.soil.split(" ").reverse().join("-")}.png" alt="Tierra">\n        <img src="${t}plant-${e.name.replace(/\s/g,"-")}.png" alt="Planta">\n      </div>\n      <p><strong>Soil:</strong> ${e.soil}</p>\n      <p><strong>Pot:</strong> ${e.pot.style} ${e.pot.material} (${e.pot.color})</p>\n      <p><strong>Extras:</strong> ${e.extras.join(", ")}</p>\n    `;s.innerHTML+=n,s.classList.remove("hidden")}(o)}else t.innerHTML="",s.classList.add("hidden");var r,l})),n.addEventListener("click",(()=>{e.reset(),t.innerHTML="",s.innerHTML=""}))}))})();
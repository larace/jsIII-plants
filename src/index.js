import { createPlantRecommendation } from "./modules/object.js";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('plantForm');
  const recommendationsDiv = document.getElementById('recommendations');
  const getPlantButton = document.querySelector('.get-plant-button');
  const clearButton = document.querySelector('.clear-button');
  const plantCard = document.getElementById('plantCard');

  let formData; // Declarar formData en el alcance global
  let plantRecommendation; // Declarar plantRecommendation en el alcance global

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formData = new FormData(form); // Asignar el valor de formData dentro del evento submit

    if (form.checkValidity()) {
      const plantPlacement = formData.get('plantPlacement');
      const receiveDirectSunlight = formData.get('receiveDirectSunlight');
      const hasPets = formData.get('hasPets');
      const wateringHabits = formData.get('wateringHabits');
      const stylePreference = formData.get('stylePreference');
      const extraElements = formData.getAll('extraElements');

      // Construir el objeto de recomendación de planta utilizando el patrón Builder con chaining
      plantRecommendation = createPlantRecommendation()
        .setName(getPlantName(plantPlacement, hasPets))
        .setSoil(getSoilType(receiveDirectSunlight))
        .setPotMaterial(getPotMaterial(wateringHabits))
        .setPotStyle(getPotStyle(stylePreference))
        .setPotColor(getPotColor(stylePreference))
        .setExtras(extraElements)
        .build();

      // Mostrar la ficha de planta con la recomendación
      showPlantCard(plantRecommendation);
    } else {
      // Si el formulario no es válido, no mostramos las recomendaciones ni la ficha de planta
      recommendationsDiv.innerHTML = '';
      plantCard.classList.add('hidden');
    }
  });

  clearButton.addEventListener('click', () => {
    form.reset();
    recommendationsDiv.innerHTML = '';
    plantCard.innerHTML = '';
  });

  function showPlantCard(plant) {
    const imagesPath = "Assets/";
   // Ruta de la carpeta que contiene las imágenes
    const plantCardHTML = `
      <h2>${plant.name}</h2>
      <div class="plant-composition">
        <img src="${imagesPath}${plant.pot.style.replace(/\s/g, '-')}-${plant.pot.material.replace(/\s/g, '-')}.png" alt="Maceta">
        ${plant.extras.includes("pebbles") ? `<img src="${imagesPath}pebbles.png" alt="Pebbles">` : ''}
        ${plant.extras.includes("smaller-plants") ? `<img src="${imagesPath}mini-plants.png" alt="Mini Plants">` : ''}
        ${plant.extras.includes("moss-pole") ? `<img src="${imagesPath}moss-pole.png" alt="Moss Pole">` : ''}
        <img src="${imagesPath}${plant.soil.split(' ').reverse().join('-')}.png" alt="Tierra">
        <img src="${imagesPath}plant-${plant.name.replace(/\s/g, '-')}.png" alt="Planta">
      </div>
      <p><strong>Soil:</strong> ${plant.soil}</p>
      <p><strong>Pot:</strong> ${plant.pot.style} ${plant.pot.material} (${plant.pot.color})</p>
      <p><strong>Extras:</strong> ${plant.extras.join(', ')}</p>
    `;
    const customizeButton = document.createElement('button');
    customizeButton.textContent = 'Customize';
    customizeButton.classList.add('customize-button');
    customizeButton.addEventListener('click', () => {
      localStorage.setItem('plantRecommendation', JSON.stringify(plantRecommendation));
      window.location.href = 'customization.html'; // Cambia la URL a la correcta
    });

    plantCard.innerHTML = plantCardHTML;
    plantCard.appendChild(customizeButton);
    plantCard.classList.remove('hidden');
  }
  
  // Funciones para obtener la información correspondiente a las respuestas del formulario
  function getPlantName(placement, hasPets) {
    if (placement === 'inside-indirect') {
      return hasPets === 'yes' ? 'Sansevieria' : 'Boston Fern';
    } else if (placement === 'inside-direct') {
      return hasPets === 'yes' ? 'Aglaonema' : 'Monstera';
    } else if (placement === 'outside') {
      return hasPets === 'yes' ? 'Aloe Vera' : 'Cactus';
    }
  }

  function getSoilType(sunlight) {
    return sunlight === 'yes' ? 'Composted soil' : 'Fertilized soil';
  }

  function getPotMaterial(wateringHabit) {
    if (wateringHabit === 'overwater') {
      return 'Clay Pot';
    } else if (wateringHabit === 'underwater' || wateringHabit === 'neither') {
      return 'Ceramic Pot';
    }
  }

  function getPotStyle(stylePreference) {
    if (stylePreference === 'minimalism') {
      return 'Simple';
    } else if (stylePreference === 'simple') {
      return 'Simple Decorated';
    } else if (stylePreference === 'colorful') {
      return 'Painted Decorated';
    }
  }

  function getPotColor(stylePreference) {
    if (stylePreference === 'minimalism') {
      return 'clay';
    } else if (stylePreference === 'simple') {
      return 'blue';
    } else if (stylePreference === 'colorful') {
      return 'yellow';
    }
  }
});

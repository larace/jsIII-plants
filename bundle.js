import { plants, pots, extras } from './data.js';
import { RecommendationBuilder } from './recommendationBuilder.js';

// Obtener el formulario y las respuestas
const form = document.getElementById('plant-form');
const placement = form.elements['placement'].value;
const directSunlight = form.elements['direct-sunlight'].value;
const pets = form.elements['pets'].value;
const watering = form.elements['watering'].value;
const style = form.elements['style'].value;
const extrasChecked = Array.from(form.elements['extras'])
  .filter(element => element.checked)
  .map(element => element.value);

// Generar la recomendación basada en las respuestas
const recommendationBuilder = new RecommendationBuilder();

// Determinar el nombre de la planta
const plant = plants.find(p => p.toxicity === pets && p.name.toLowerCase() === placement.toLowerCase());
if (plant) {
  recommendationBuilder.withName(plant.name);
}

// Determinar el tipo de suelo según la exposición al sol
const soilType = directSunlight === 'Yes' ? 'Composted Soil' : 'Fertilized Soil';
recommendationBuilder.withSoilType(soilType);

// Determinar el material y estilo de la maceta
const pot = pots[style];
recommendationBuilder.withPotMaterial(pot.material).withPotStyle(pot.style);

// Determinar el color de la maceta
recommendationBuilder.withPotColor(placement.toLowerCase());

// Agregar extras seleccionados
extrasChecked.forEach(extra => recommendationBuilder.addExtra(extra));

// Construir la recomendación
const recommendation = recommendationBuilder.build();

// Mostrar la recomendación en la consola
console.log(recommendation);
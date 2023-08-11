export function showCustomizationPreview(plant) {
    const imagesPath = "Assets/";
  
    const customizationPreview = document.getElementById('customization-preview');
    customizationPreview.innerHTML = `
      <h2>${plant.name}</h2>
      <div class="plant-composition">
        <img src="${imagesPath}${plant.pot.style.replace(/\s/g, '-')}-${plant.pot.material.replace(/\s/g, '-')}.png" alt="Maceta">
        ${plant.extras.includes("pebbles") ? `<img src="${imagesPath}pebbles.png" alt="Piedritas">` : ''}
        ${plant.extras.includes("smaller-plants") ? `<img src="${imagesPath}mini-plants.png" alt="Mini Plantas">` : ''}
        ${plant.extras.includes("moss-pole") ? `<img src="${imagesPath}moss-pole.png" alt="Moss Pole">` : ''}
        <img src="${imagesPath}${plant.soil.split(' ').reverse().join('-')}.png" alt="Bolsa del tipo de suelo">
        <img src="${imagesPath}plant-${plant.name.replace(/\s/g, '-')}.png" alt="Planta">
      </div>
      <p><strong>Name:</strong> ${capitalizeFirstLetter(plant.name)}</p>
      <p><strong>Soil:</strong> ${plant.soil}</p>
      <p><strong>Pot:</strong> ${getPotDescription(plant.pot)}</p>
      <p><strong>Extras:</strong> ${plant.extras.join(', ')}</p>
    `;
  }

    // Función para mostrar la personalización
export  function showCustomization(customization) {
        const imagesPath = "Assets/";
      
        const customizationPreview = document.getElementById('customization-preview');
        customizationPreview.innerHTML = `
          <h2>Your Customized Plant</h2>
          <div class="plant-composition">
          </div>
          <p><strong>Name:</strong> ${capitalizeFirstLetter(customization.plantType)}</p>
          <p><strong>Soil:</strong> ${customization.soilType}</p>
          <p><strong>Pot:</strong> ${getPotDescription(customization.pot)}</p>
          <p><strong>Extras:</strong> ${customization.extras.join(', ')}</p>
        `;

        const plantComposition = customizationPreview.querySelector('.plant-composition');
        plantComposition.innerHTML = `
        <img src="${imagesPath}pots/${customization.pot.material.toLowerCase()}-${customization.pot.decorations ? 'decorated' : 'undecorated'}-${customization.pot.color.toLowerCase()}.png" alt="Pot">
        ${customization.extras.includes("Pebbles") ? `<img src="${imagesPath}pebbles.png" alt="Pebbles">` : ''}
        ${customization.extras.includes("Smaller plants") ? `<img src="${imagesPath}mini-plants.png" alt="Mini Plants">` : ''}
        ${customization.extras.includes("Moss pole") ? `<img src="${imagesPath}moss-pole.png" alt="Moss Pole">` : ''}
        <img src="${imagesPath}soil-${customization.soilType.toLowerCase().replace(/\s/g, '-')}.png" alt="Bolsa del tipo de suelo">
        <img src="${imagesPath}plant-${customization.plantType.toLowerCase().replace(/\s/g, '-')}.png" alt="Plant">
        `;
      }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function getPotDescription(pot) {
    let description = `${pot.material.toLowerCase()} pot`;
    if (pot.decorations) {
      description += ` with ${pot.material.toLowerCase()} decorations`;
    }
    description += ` (${pot.color.toLowerCase()})`;
    return description;
  }
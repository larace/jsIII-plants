import Observer from './modules/observer.js';
import {showCustomizationPreview, showCustomization} from "./modules/preview.js";

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el objeto de recomendación desde el almacenamiento local
    const plantRecommendationJSON = localStorage.getItem('plantRecommendation');
    const plantRecommendation = JSON.parse(plantRecommendationJSON);
  
    // Verificar si el objeto de recomendación existe antes de mostrar el preview
    if (plantRecommendation) {
      showCustomizationPreview(plantRecommendation);
    }
  
    const potColorToggle = document.getElementById('potColorToggle');
    const potColorOptions = document.getElementById('potColorOptions');
  
    potColorToggle.addEventListener('change', () => {
      potColorOptions.style.display = potColorToggle.checked ? 'block' : 'none';
    });
  
    const customizationForm = document.getElementById('customizationForm');
    const customizationPreview = document.getElementById('customization-preview');
  
    const customizationObserver = new Observer();
  
    const previewObserver = {
      update: function(customization) {
        showCustomizationPreview(customization);
      }
    };
  
    const textObserver = {
      update: function(customization) {
        showCustomizationText(customization);
      }
    };
  
    customizationObserver.subscribe(previewObserver);
    customizationObserver.subscribe(textObserver);
  
    customizationForm.addEventListener('change', () => {
      const customization = getCustomizationFromForm();
      customizationObserver.notifyObservers(customization);
    });
  
    customizationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const customization = getCustomizationFromForm();
      customizationObserver.notifyObservers(customization);
      // Aquí puedes realizar acciones adicionales, como guardar la personalización en el almacenamiento local
    });

    customizationForm.addEventListener('change', () => {
      // Obtener los valores del formulario
      const potMaterial = document.querySelector('input[name="potMaterial"]:checked').value;
      const potDecorations = document.querySelector('input[name="potDecorations"]').checked;
      const potColorToggleValue = document.querySelector('input[name="potColorToggle"]').checked;
      const potColor = potColorToggleValue ? document.querySelector('input[name="potColor"]:checked').value : 'unpainted';
      const plantType = document.querySelector('select[name="plantType"]').value;
      const soilType = document.querySelector('input[name="soilType"]:checked').value;
      const extrasArray = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(input => input.value);
  
      // Construir el objeto de personalización
      const customization = {
        pot: {
          material: potMaterial,
          decorations: potDecorations,
          color: potColor
        },
        plantType: plantType,
        soilType: soilType,
        extras: extrasArray
      };
  
      // Mostrar el preview de personalización
      showCustomization(customization);
    });
  });
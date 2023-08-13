const { describe, test, expect } = require('@jest/globals');
const { createPlantRecommendation } = require('../modules/object.js');

describe('Recomendaciones de Plantas - Interfaz de Usuario', () => {
  test('Verifica que se muestren los textos esperados', async () => {
    // Simular los valores del formulario
    const formData = new FormData();
    formData.set('plantPlacement', 'inside-indirect');
    formData.set('receiveDirectSunlight', 'no');
    formData.set('hasPets', 'no');
    formData.set('wateringHabits', 'underwater');
    formData.set('stylePreference', 'simple');
    formData.set('extraElements', ['pebbles']);

    // Obtener la recomendación
    const plantRecommendation = createPlantRecommendation(formData).build();

    // Simular el documento DOM para el test
    document.body.innerHTML = `
      <div id="plantCard"></div>
    `;

    require('../index.js');

    // Verificar si los textos esperados se muestran en la interfaz
    const plantCard = document.getElementById('plantCard');
    expect(plantCard.innerHTML).toContain('Boston Fern');
    expect(plantCard.innerHTML).toContain('Premium fertilized soil');
    expect(plantCard.innerHTML).toContain('Ceramic pot simple');
    expect(plantCard.innerHTML).toContain('Unpainted');
    expect(plantCard.innerHTML).toContain('Pebbles');
  });
});

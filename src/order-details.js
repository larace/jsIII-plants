import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  async function fetchInventory(productType, itemId) {
    const apiUrl = `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/${productType.toLowerCase()}/${itemId.toLowerCase()}`;
  
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching inventory:', error);
      return null;
    }
  }
  async function fetchPlantDescription(plantId) {
    const apiUrl = `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/${plantId.toLowerCase()}`;
  
    try {
      const response = await axios.get(apiUrl);
      return response.data.description;
    } catch (error) {
      console.error('Error fetching plant description:', error);
      return 'Description not available.';
    }
  }

    const productDetailsContainer = document.getElementById('productDetails');
    const backToCustomizationButton = document.getElementById('backToCustomizationButton');
    const inventoryAlertContainer = document.querySelector('.inventory-alert');
    const orderNowButton = document.getElementById('orderNowButton');
  
    const orderDetailsJSON = localStorage.getItem('orderDetails');
    const orderDetails = JSON.parse(orderDetailsJSON);
  
    if (orderDetails) {
      const plantDescription = fetchPlantDescription(orderDetails.plantType);
      const plantDescriptionElement = document.createElement('p');
      plantDescriptionElement.textContent = plantDescription;
  
      // Agrega la descripción al contenido del acordeón "Plant description"
      const plantDescriptionAccordionContent = document.querySelector('.accordion-content[data-accordion="Plant description"]');
      plantDescriptionAccordionContent.appendChild(plantDescriptionElement);

        const imagesPath = "Assets/"
        const productDetailsHTML = `
          <h2>Product Details</h2>
          <div class="product-preview">
            <h3>Preview of Your Order</h3>
            <div class="preview-images">
            <img src="${imagesPath}plant-${orderDetails.plantType.replace(/\s/g, '-')}.png" alt="Planta">
            <img src="${imagesPath}pots/${orderDetails.pot.material.toLowerCase()}-${orderDetails.pot.decorations ? 'decorated' : 'undecorated'}-${orderDetails.pot.color.toLowerCase()}.png" alt="Pot">
            <img src="${imagesPath}soil-${orderDetails.soilType.toLowerCase().replace(/\s/g, '-')}.png" alt="Bolsa del tipo de suelo">
            ${orderDetails.extras.includes("Pebbles") ? `<img src="${imagesPath}pebbles.png" alt="Pebbles">` : ''}
            ${orderDetails.extras.includes("Smaller plants") ? `<img src="${imagesPath}mini-plants.png" alt="Mini Plants">` : ''}
            ${orderDetails.extras.includes("Moss pole") ? `<img src="${imagesPath}moss-pole.png" alt="Moss Pole">` : ''}
            </div>
          </div>
          <div class="order-information">
            <h3>Order Information</h3>
            <p><strong>Name:</strong> ${capitalizeFirstLetter(orderDetails.plantType)}</p>
            <p><strong>Soil:</strong> ${orderDetails.soilType}</p>
            <p><strong>Pot:</strong> ${orderDetails.pot.material} ${orderDetails.pot.decorations ? '(Decorated)' : 'Simple'}</p>
            <p><strong>Color:</strong> ${orderDetails.pot.color}</p>
            <p><strong>Extras:</strong> ${orderDetails.extras.join(', ')}</p>
          </div>
          <div class="product-price">
          <p><strong>Price:</strong> $XX.XX</p>
          </div>
        `;
  
        productDetailsContainer.innerHTML = productDetailsHTML;
        backToCustomizationButton.addEventListener('click', () => {
            // Redirigir al usuario de vuelta al view de customización (reemplaza 'customization.html' con la ruta correcta)
            window.location.href = 'customization.html';
          });
    } else {
      productDetailsContainer.innerHTML = '<p>No product details found.</p>';
    }

    const lowInventoryItems = orderDetails.extras.some(item => item.inventory < 10);
    const outOfStockItems = orderDetails.extras.some(item => item.inventory === 0);
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');
      header.addEventListener('click', () => {
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          // Cerrar todos los demás acordeones antes de abrir el actual
          accordions.forEach(otherAccordion => {
            if (otherAccordion !== accordion) {
              otherAccordion.querySelector('.accordion-content').style.display = 'none';
            }
          });
          content.style.display = 'block';
        }
      });
    });
    const itemPrices = {
        'Aglaonema': 12.99,
        'Aloe Vera': 5.25,
        'Boston Fern': 10.25,
        'Cactus': 8.25,
        'Monstera': 18.00,
        'Peace Lily': 8.75,
        'Sansevieria': 5.75,
        'Clay pot simple': 3.00,
        'Clay pot decorated': 4.00,
        'Clay pot painted': 4.00,
        'Clay pot painted and decorated': 5.00,
        'Ceramic pot simple': 5.00,
        'Ceramic pot decorated': 6.00,
        'Ceramic pot painted': 6.00,
        'Ceramic pot painted and decorated': 7.00,
        'composted': 3.25,
        'fertilized': 5.00,
        'drainage': 5.50,
        'Moss Pole': 2.25,
        'Pebbles': 2.00,
        'Mini plants': 3.75
      };
    
      const priceList = document.getElementById('priceList');
      const totalPriceElement = document.querySelector('.total-price');
    
      let totalPrice = 0;
    
        // Calcular el precio de los extras y mostrar desglose
        orderDetails.extras.forEach(extra => {
            const extraPrice = itemPrices[extra];
            if (typeof extraPrice === 'number') {
              totalPrice += extraPrice;
              const listItem = document.createElement('li');
              listItem.textContent = `${extra}: $${extraPrice.toFixed(2)}`;
              priceList.appendChild(listItem);
            }
          });
        
          // Calcular el precio de la maceta (pot) y mostrar desglose
          const potMaterial = orderDetails.pot.material;
          const potDecorations = orderDetails.pot.decorations;
          const potColor = orderDetails.pot.color;
        
          const potMaterialPrice = (potMaterial === 'Clay') ? 3.00 : 5.00;
          const potDecorationsPrice = potDecorations ? 1.00 : 0.00;
          const potColorPrice = (potColor === 'unpainted') ? 0.00 : 1.00;
        
          const potTotalPrice = potMaterialPrice + potDecorationsPrice + potColorPrice;
          totalPrice += potTotalPrice;
        
          const potListItem = document.createElement('li');
          potListItem.textContent = `Pot (${potMaterial} - ${potColor} - ${potDecorations ? 'Decorated' : 'Not Decorated'}): $${potTotalPrice.toFixed(2)}`;
          priceList.appendChild(potListItem);
        
          // Calcular el precio de la planta y mostrar desglose
          const plantType = orderDetails.plantType;
          const plantPrice = itemPrices[plantType];
          if (typeof plantPrice === 'number') {
            totalPrice += plantPrice;
            const plantListItem = document.createElement('li');
            plantListItem.textContent = `Plant (${plantType}): $${plantPrice.toFixed(2)}`;
            priceList.appendChild(plantListItem);
          }
        
          // Calcular el precio del tipo de suelo y mostrar desglose
          const soilType = orderDetails.soilType;
          const soilPrice = itemPrices[soilType];
          if (typeof soilPrice === 'number') {
            totalPrice += soilPrice;
            const soilListItem = document.createElement('li');
            soilListItem.textContent = `Soil (${soilType}): $${soilPrice.toFixed(2)}`;
            priceList.appendChild(soilListItem);
          }
        
          // Mostrar el desglose de precios y la suma final
        
          const totalListItem = document.createElement('li');
          totalListItem.textContent = `Total: $${totalPrice.toFixed(2)}`;
          totalPriceElement.appendChild(totalListItem);

          async function updateInventoryAlerts() {
            // Verificar el inventario de las plantas
            const plantInventory = await fetchInventory('plant', orderDetails.plantType);
            const plantLowInventory = plantInventory && plantInventory.quantity < 10;
            const plantOutOfStock = plantInventory && plantInventory.quantity === 0;
        
            // Verificar el inventario del suelo
            const soilInventory = await fetchInventory('soil', orderDetails.soilType);
            const soilLowInventory = soilInventory && soilInventory.quantity < 10;
            const soilOutOfStock = soilInventory && soilInventory.quantity === 0;
        
            // Verificar el inventario de la maceta (pot)
            // const potInventory = await fetchInventory('pot', orderDetails.pot.material);
            // const potLowInventory = potInventory && potInventory.quantity < 10;
            // const potOutOfStock = potInventory && potInventory.quantity === 0;    

    if (outOfStockItems) {
        inventoryAlertContainer.innerHTML = '<p class="out-of-stock">One of the items in your order is out of stock. Please check the inventory alerts.</p>';
        orderNowButton.disabled = true;
      } else if (lowInventoryItems) {
        inventoryAlertContainer.innerHTML = '<p class="low-inventory">One of the items in your order has limited stock. Order soon!</p>';
        orderNowButton.disabled = false;
      } else {
        inventoryAlertContainer.innerHTML = '<p class="in-stock">In Stock</p>';
        orderNowButton.disabled = false;
      }
    }
    updateInventoryAlerts();
  

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
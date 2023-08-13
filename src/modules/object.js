function createPlantRecommendation() {
  const recommendation = {
    pot: {},
  };

  return {
    setName: function(name) {
      recommendation.name = name;
      return this;
    },
    setSoil: function(soil) {
      recommendation.soil = soil;
      return this;
    },
    setPotMaterial: function(material) {
      recommendation.pot.material = material;
      return this;
    },
    setPotStyle: function(style) {
      recommendation.pot.style = style;
      return this;
    },
    setPotColor: function(color) {
      recommendation.pot.color = color;
      return this;
    },
    setExtras: function(extras) {
      recommendation.extras = extras;
      return this;
    },
    build: function() {
      return recommendation;
    },
  };
}

module.exports = {
  createPlantRecommendation
};
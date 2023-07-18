export class RecommendationBuilder {
  constructor() {
    this.name = '';
    this.soil = '';
    this.potMaterial = '';
    this.potStyle = '';
    this.potColor = '';
    this.extras = [];
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withSoilType(soil) {
    this.soil = soil;
    return this;
  }

  withPotMaterial(material) {
    this.potMaterial = material;
    return this;
  }

  withPotStyle(style) {
    this.potStyle = style;
    return this;
  }

  withPotColor(color) {
    this.potColor = color;
    return this;
  }

  addExtra(extra) {
    this.extras.push(extra);
    return this;
  }

  build() {
    return {
      name: this.name,
      soil: this.soil,
      pot: `${this.potMaterial} pot (${this.potStyle})`,
      color: this.potColor,
      extras: this.extras,
    };
  }
}

  
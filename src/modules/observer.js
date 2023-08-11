// Implementación del patrón Observer
class Observer {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  // Exportar la clase Observer para su uso en otros módulos
  export default Observer;
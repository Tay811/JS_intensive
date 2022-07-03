
class Car {
    #brand;
    #model;
    #yearOfManufacturing; 
    #maxSpeed;
    #maxFuelVolume; 
    #fuelConsumption; 
    #currentFuelVolume = 0; 
    #isStarted = false;
    #mileage = 0;

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume,
        fuelConsumption, currentFuelVolume, isStarted = false, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#yearOfManufacturing = yearOfManufacturing;
        this.#maxSpeed = maxSpeed;
        this.#maxFuelVolume = maxFuelVolume;
        this.#fuelConsumption = fuelConsumption;
        this.#currentFuelVolume = currentFuelVolume;
        this.#isStarted = isStarted;
        this.#mileage = mileage;
    }


     
    get brand() {
        return this.#brand;
      }
    get model() {
        return this.#model;
      }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
      }
    get maxSpeed() {
        return this.#maxSpeed;
      }
    get maxFuelVolume() {
        return this.#maxFuelVolume;
      }
    get fuelConsumption() {
        return this.#fuelConsumption;
      }
    get currentFuelVolume() {
        return this.#currentFuelVolume;
      }
    get isStarted() {
        return this.#isStarted;
      }
    get mileage() {
        return this.#mileage;
      }


    set brand(value) {
        if (typeof value !== 'string' || typeof value === 'undefined' || value == null) {
          throw new Error('Название должно быть строкой!');
        }
        if (value.length < 1) {
          throw new Error('Слишком короткое название!');
        }
        if (value.length > 50) {
          throw new Error('Слишком длинное название!');
        }
        this.#brand = value;
    }

    set model(value) {
        if (typeof value !== 'string' || typeof value === 'undefined' || value == null) {
          throw new Error('Название должно быть строкой!');
        }
        if (value.length < 1) {
          throw new Error('Слишком короткое название!');
        }
        if (value.length > 50) {
          throw new Error('Слишком длинное название!');
        }
        this.#model = value;
    }

    set yearOfManufacturing (value) {
        if (typeof value !== 'number' || isNaN(value) || typeof value == 'undefined' || value == null) {
          throw new Error('Здесь должно быть число!');
        }
        if (value < 1900) {
          throw new Error('Уже не обслуживается!');
        }
        if (value > 2022) {
          throw new Error('Марти Макфлай, ты ли это?');
        }
        this.#yearOfManufacturing = value;
    }

    set maxSpeed(value) {
        if (typeof value !== 'number' || isNaN(value) || typeof value === 'undefined' || value == null) {
          throw new Error('Введите числовое значение!');
        }
        if (value < 100) {
          throw new Error('Слишком медленно!');
        }
        if (value > 300) {
          throw new Error('Чересчур быстро!');
        }
        this.#maxSpeed = value;
    }

    set maxFuelVolume(value) {
        if (typeof value !== 'number' || isNaN(value) || typeof value === 'undefined' || value == null) {
          throw new Error('Введите числовое значение!');
        }
        if (value < 5) {
          throw new Error('Мало!');
        }
        if (value > 20) {
          throw new Error('Перебор!');
        }
        this.#maxFuelVolume = value;
      }

    set fuelConsumption(value) {
        if (typeof value !== 'number' || isNaN(value) || typeof value === 'undefined' || value == null) {
          throw new Error('Введите числовое значение!');
        }
        this.#fuelConsumption = value / 100;
    }

    start() {
        if (this.#isStarted == true) {
          throw new Error('Машина уже заведена');
        }
        else{
        this.#isStarted = true;
        }
      }

    shutDownEngine() {
        if (this.#isStarted === false) {
          throw new Error('Машина ещё не заведена');
        }
        else {
        this.#isStarted = false;
        }
    }

    fillUpGasTank(fuel) {
        if (typeof(fuel) !== 'number') {
          throw new Error('Неверное количество топлива для заправки');
        }
        if (fuel <= 0 || isNaN(fuel) ) {
          throw new Error('Неверное количество топлива для заправки')
        }
        if (fuel + this.#currentFuelVolume > this.#maxFuelVolume) {
          throw new Error('Топливный бак переполнен');
        }
        this.#currentFuelVolume += fuel;
      }

    drive(speed, hours) {
        const distance = speed * hours;
        const consFuel = (this.#fuelConsumption * distance) / 100;
    
        if (typeof(speed) !== 'number' || speed <= 0 || value == null) {
          throw new Error('Неверная скорость');
        }
    
        if (typeof(hours) !== 'number' || hours <= 0 || value == null) {
          throw new Error('Неверное количество часов');
        }
    
        if (speed > this.#maxSpeed) {
          throw new Error('Машина не может ехать так быстро');
        }
    
        if (this.#isStarted === false) {
          throw new Error('Машина должна быть заведена, чтобы ехать');
        }
    
        if (consFuel > this.#currentFuelVolume) {
          throw new Error('Недостаточно топлива');
        }
    
        this.#currentFuelVolume -= consFuel;
        this.#mileage += distance;
    }
}



module.exports = { Car };
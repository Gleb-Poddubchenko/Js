class Shape3D {
  constructor(name) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Имя должно быть непустой строкой');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  calculateVolume() {
    throw new Error('Метод calculateVolume должен быть реализован в наследниках');
  }
}

class Sphere extends Shape3D {
  constructor(name, radius) {
    super(name);
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  calculateVolume() {
    return (4 / 3) * Math.PI * Math.pow(this._radius, 3);
  }
}

class Cube extends Shape3D {
  constructor(name, side) {
    super(name);
    this._side = side;
  }

  get side() {
    return this._side;
  }

  set side(value) {
    this._side = value;
  }

  calculateVolume() {
    return Math.pow(this._side, 3);
  }
}

class Cylinder extends Shape3D {
  constructor(name, radius, height) {
    super(name);
    this._radius = radius;
    this._height = height;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  calculateVolume() {
    return Math.PI * Math.pow(this._radius, 2) * this._height;
  }
}

function getVolume3DShape(shape) {
  if (!(shape instanceof Shape3D)) {
    throw new Error('Передан неверный объект');
  }
  return shape.calculateVolume();
}


const sphere = new Sphere('Сфера', 5);
console.log(getVolume3DShape(sphere)); 

const cube = new Cube('Куб', 3);
console.log(getVolume3DShape(cube)); 

const cylinder = new Cylinder('Цилиндр', 4, 6);
console.log(getVolume3DShape(cylinder));


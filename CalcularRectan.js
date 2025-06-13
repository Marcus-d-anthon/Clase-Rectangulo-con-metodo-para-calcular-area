// 1. Clase Rectangulo con método para calcular área
// Ejercicio: Crea una clase Rectangulo con base y altura, y un método area() que retorne el área.

class Rectangulo {
  constructor(base, altura){
    this.base = base;
    this.altura = altura;
  }

  area(){
    return this.base * this.altura;
  }
}

const Rectan = new Rectangulo(5, 3);
console.log("Área del rectángulo:", Rectan.area());

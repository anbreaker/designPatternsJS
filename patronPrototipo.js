const perro = {
  raza: 'Kilterrier',
  ladrar: function () {
    console.log(`Guau, soy un ${this.raza}`);
  },
};

const kiltro = Object.create(perro);
kiltro.ladrar();

kiltro.raza = 'SuperPerro';
kiltro.ladrar();

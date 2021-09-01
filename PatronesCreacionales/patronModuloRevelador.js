// Módulo revelador "singleton"
const result = (() => {
  const ver = {};

  return {
    a: () => console.log(ver),
    b: (key, value) => (ver[key] = value),
  };
})();

result.a();
result.b('queso', 'cabra');
result.a();
console.log(result.a);

//

const modulo = {
  prop: 'mi prop',
  config: {
    languaje: 'es',
    cache: true,
  },

  setconfig: (conf) => {
    modulo.config = conf;
  },

  isCacheEnabled: () => {
    console.log(modulo.config ? 'yes' : 'no');
  },
};

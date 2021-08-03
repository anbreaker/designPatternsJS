const Users = (() => {
  const api = 'https://jsonplaceholder.typicode.com/users';

  return {
    listar: async () => {
      const response = await fetch(api);
      const data = response.json();
      console.log(data);

      return data;
    },

    crear: async (data) => {
      return await fetch(api, {
        type: 'POST',
        body: JSON.stringify(data),
      }).then((data) => data.json());
    },
  };
})();

Users.listar().then(console.log);

// Go to Browser an copy paste XD

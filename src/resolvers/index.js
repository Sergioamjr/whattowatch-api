const kittens = [
  { name: 'Batman', color: 'preta' },
  { name: 'Gisele', color: 'marrom' },
  { name: 'Gordinha', color: 'preta' },
  { name: 'Cersei', color: 'preta' },
  { name: 'São Paulina', color: 'preta' },
  { name: 'Arya', color: 'preta' },
  { name: 'Pitchuquinha', color: 'preta' },
];

const Query = {
  hi: () => 'Hello Graphql!',
  getKitten: (_, { name }) => {
    console.log('name', _);
    return kittens.find((kitten) => kitten.name === name);
  },
};

module.exports = {
  Query,
};

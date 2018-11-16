import 'isomorphic-fetch';

export const chain = async arr => {
  const rez = [];
  for (let i = 0; i < arr.length; i++) {
    await fetch(arr[i])
      .then(resp => resp.json())
      .then(resp => rez.push(resp));
  }
  return rez;
};

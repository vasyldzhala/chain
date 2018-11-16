import 'isomorphic-fetch';

export const chain = async arr => {
  const rez = [];
  for (let i = 0; i < arr.length; i++) {
    await fetch(arr[i]).then(res => res.json()).then(r => rez.push(r));
  }
  return rez;
};

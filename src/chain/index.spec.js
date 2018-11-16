import {chain} from './index';

describe('chain::', () => {
  const arr = [
    'http://jsonplaceholder.typicode.com/posts/1',
    'http://jsonplaceholder.typicode.com/posts/2',
    'http://jsonplaceholder.typicode.com/posts/3'
  ];

  it('Should return promise', () => {
    expect(typeof chain(arr)).toEqual('object');
  });

  it('Should return first request', () => {
    return chain(arr).then( r => expect( r[0].id ).toEqual(1));
  });
  it('Should return second request', () => {
    return chain(arr).then( r => expect( r[1].id ).toEqual(2));
  });
  it('Should return last request', () => {
    return chain(arr).then( r => expect( r[2].id ).toEqual(3));
  });
});


// import * as request from 'supertest';
// import * as app from '../src/app-server';

import { hello } from '../src/index';
import { expect } from 'chai';
import 'mocha';

// describe('index', () => {
//   it('shows index page', (done) => {
//     request(app).get('/')
//       .expect(200)
//       .expect('/Reiskosten/', done);
//   })
// })

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Hello world!');
  });

});

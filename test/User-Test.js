const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
let testUser

describe('User', () => {
  beforeEach((done) => {
    testUser = new User;
  done();
  })

  it('should be a function', () => {
    expect(User).to.be.a('function')
  });

  it('should be an instance of User', () => {
    expect(testUser).to.be.an.instanceof(User)
  });
});

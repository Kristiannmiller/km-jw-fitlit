const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
let testUser

describe('User', () => {
  beforeEach((done) => {
    testUser = new User(15,'Ezequiel Feest', '78801 Lauryn Plain, Lake Elinor MN 27856-9054', 'Anthony_Toy@hotmail.com', 4.4, 5000, [33, 14, 3, 43, 35]);
  done();
  })

  it('should be a function', () => {
    expect(User).to.be.a('function')
  });

  it('should be an instance of User', () => {
    expect(testUser).to.be.an.instanceof(User)
  });

  it('should create a parameter for each users data', () => {
    expect(testUser.id).to.equal(15)
  })
});

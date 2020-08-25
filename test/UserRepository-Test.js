const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository')
let testRepository

describe('UserRepository', () => {
  beforeEach((done) => {
    testRepository = new UserRepository;
done();
})

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function')
  });

  it('should be an instance of UserRepository', () => {
    expect(testRepository).to.be.an.instanceof(UserRepository);
  });
});
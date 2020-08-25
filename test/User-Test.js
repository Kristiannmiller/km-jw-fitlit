const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const userData = [
  {
    "id": 15,
    "name": "Ezequiel Feest",
    "address": "78801 Lauryn Plain, Lake Elinor MN 27856-9054",
    "email": "Anthony_Toy@hotmail.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
      26,
      20
    ]
  },
  {
    "id": 20,
    "name": "Ora O'Connell",
    "address": "79585 Tania Ports, North Lillie MI 38947-4029",
    "email": "Audreanne.Gulgowski6@yahoo.com",
    "strideLength": 3.4,
    "dailyStepGoal": 8000,
    "friends": [
      15,
      13,
      26
    ]
  },
  {
    "id": 13,
    "name": "Tom Schmeler",
    "address": "1524 Clemmie River, Newtonbury RI 02849-3159",
    "email": "Leopoldo.Sauer@gmail.com",
    "strideLength": 3.2,
    "dailyStepGoal": 4000,
    "friends": [
      26,
      20
    ]
  },
  {
    "id": 26,
    "name": "Greta Corkery",
    "address": "99020 Botsford Knoll, Lake Cecil ID 44141",
    "email": "Virgil28@hotmail.com",
    "strideLength": 3,
    "dailyStepGoal": 12000,
    "friends": [
      15,
      13,
      20
    ]
  },
];


describe('User', () => {
  // beforeEach(() => {
  //   testUser1 = new User(data[0]);
  //   testUser2 = new User(data[1]);
  //   testUser3 = new User(data[2]);
  //   testUser4 = new User(data[3]);
  // });

  it('should be a function', () => {
    expect(User).to.be.a('function')
  });

  it('should be an instance of User', () => {
    let testUser1 = new User(userData[0]);
    expect(testUser1).to.be.an.instanceof(User)
  });

  it('should create a parameter for each users data', () => {
    expect(testUser1.id).to.equal(15)
  })
  it('it should be able to access another Users data from the datafile', () => {
    expect(testUser2.id).to.equal(26)
    expect(testUser2.name).to.equal('Greta Corkery')
  })
});

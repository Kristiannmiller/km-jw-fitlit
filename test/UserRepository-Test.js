const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository')
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

describe('UserRepository', () => {
  // beforeEach(() => {
  //   testRepository = new UserRepository;
  // })

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function')
  });

  it('should be an instance of UserRepository', () => {
    let testRepository = new UserRepository;
    expect(testRepository).to.be.an.instanceof(UserRepository);
  });

  it('should hold on to all of the user objects', () => {
    let testRepository = new UserRepository(userData);
    expect(testRepository.data[0].id).to.equal(15)
    expect(testRepository.data[1].id).to.equal(20)
    expect(testRepository.data[2].id).to.equal(13)
    expect(testRepository.data[3].id).to.equal(26)
  })
  it('should be able to access user data by id', () => {
    let testRepository = new UserRepository(userData);
    expect(testRepository.findUserById(15)).to.deep.equal(userData[0])
  })
});

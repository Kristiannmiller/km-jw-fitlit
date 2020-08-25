const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
let testUser

describe('User', () => {
  beforeEach(() => {
    testUser7 = new User(userData[1]);
    testUser = new User(15,'Ezequiel Feest', '78801 Lauryn Plain, Lake Elinor MN 27856-9054', 'Anthony_Toy@hotmail.com', 4.4, 5000, [26, 20]);
    testUser2 = new User(26, 'Greta Corkery', '99020 Botsford Knoll, Lake Cecil ID 44141', 'Virgil28@hotmail.com', 3, 12000, [15,13,20]);
    testUser3 = new User(13, 'Tom Schmeler', '1524 Clemmie River, Newtonbury RI 02849-3159', 'Leopoldo.Sauer@gmail.com', 3.2, 4000, [26,20])
    testUser4 = new User(20, 'Ora O\'Connell', '79585 Tania Ports, North Lillie MI 38947-4029', 'Audreanne.Gulgowski6@yahoo.com', 3.4, 8000, [13,15,26])
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
  it('it should be able to access another Users data from the datafile', () => {
    expect(testUser2.id).to.equal(26)
    expect(testUser2.name).to.equal('Greta Corkery')
  })
});

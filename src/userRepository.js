

class UserRepository {
  constructor(data){
    this.data = data
    //access user data by id
    //the average step goal amoungst all users

    }
    findUserById(id) {
      let foundUser = this.data.find(user => user.id === id)
      return foundUser
    }

  // let futureKitties = kitties.map(kitty => {
  //       kitty.age = kitty.age + 2
  //       return kitty
  // myObj = myArrayOfObjects.find(obj => obj.prop === ‘something’);
/*
{
  "id": 15,
  "name": "Ezequiel Feest",
  "address": "78801 Lauryn Plain, Lake Elinor MN 27856-9054",
  "email": "Anthony_Toy@hotmail.com",
  "strideLength": 4.4,
  "dailyStepGoal": 5000,
  "friends": [
    10,
    23,
    35,
    20,
    5
  ]
},
*/
}
if (typeof module !== 'undefined') {
  module.exports = UserRepository;
} else {
  module.exports = UserRepository;
}

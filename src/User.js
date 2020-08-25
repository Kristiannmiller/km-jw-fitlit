
class User {
  constructor(data){
    this.id = data.id,
    this.name = data.name,
    this.address = data.address,
    this.email = data.email,
    this.strideLength = data.strideLength,
    this.dailyStepGoal = data.dailyStepGoal,
    this.friends = data.friends;
  }
  displayFirstName() {
    // take this.name and nix the last name
    // use the space as an indicator
    let nameArray = this.name.split(' ')
    let firstNameOnlyArray = nameArray.splice(0, 1)
    let firstName = firstNameOnlyArray.toString()
    return firstName
  }
}

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
if (typeof module !== 'undefined') {
  module.exports = User;
} else {
  module.exports = User;
}

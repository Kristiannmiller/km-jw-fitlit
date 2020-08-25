
class User {
  constructor(id, name, address, email, strideLength, dailyStepGoal, friends){
    this.id = id,
    this.name = name,
    this.address = address,
    this.email = email,
    this.strideLength = strideLength,
    this.dailyStepGoal = dailyStepGoal,
    this.friends = friends;
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

module.exports = User

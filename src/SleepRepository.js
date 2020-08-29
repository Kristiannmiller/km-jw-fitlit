class SleepRepository {
  constructor(allUserData){
    this.allUserData = allUserData
    }
    findUserById(id) {
      let userSleepData = this.allUserData.filter(userData => userData.userID === id)
      return userSleepData
    }
    selectWeek(endingDate){
      let endingDateIndex =
      this.allUserData.findIndex(sleepData => sleepData.date === endingDate)
      console.log(endingDateIndex)
      let weekOfSleep = this.allUserData.slice(endingDateIndex-6, endingDateIndex+1)
      return weekOfSleep
    }
    getSleepQualityAverage(){
      let averageSleepQuality = this.allUserData.reduce((acc, user) => {
        acc += user.sleepQuality
        return acc
      }, 0 )/this.allUserData.length;
      let result = averageSleepQuality.toFixed(2)
      return parseFloat(result)
    }
    getAverageWeeklySleepQualityForUser(id, endingDate){
      //selectWeek(endingDate)
      let averageSleepQualityForUser = this.allUserData.id.reduce((acc, user) => {
        acc += user.sleepQuality
        return acc
      }, 0)/7
    }
    findGoodSleepers (endingDate){
      console.log('this is the fifth test', this.selectWeek('2019/06/23'))
      //this.getAverageWeeklySleepQualityForUser()
      const currentUser = this.allUserData.findUserById()
      this.allUserData.findUserById()
        /7
    //the sleepData contains an array of objects with all the users sleep information, including ID, and sleep quality, on any given night
    //we want to  create an array of objects with 1 key value pair: userID, and sleepQuality average for a given week

    //1.we want to start by selecting the week
    //2. we want to return a shallow copy of the sleepData array that returns all userObjects for that week
    //3. We will assign this array to a variable.
    //4. we will use filter over this variable to return a shallower array of only the users whos Average sleepquality value is greater than 3.

    //if our first function returns an array of all objects with a user id of blank,
    //our second function would return a new array of the user id and their average sleep quality over a
    //given week
    //another function will return only userids that average sleepquality of greater than 3 for the given week
  }
  findBestSleeper(date){
    const targetDateData = this.allUserData.filter(sleepData => sleepData.date === date)
    console.log(targetDateData)
    const bestSleeper = targetDateData.sort((a,b) => {
      return  b.hoursSlept - a.hoursSlept
    })
    if (bestSleeper[0].hoursSlept == bestSleeper[1].hoursSlept){
      return ("It's a tie between " + bestSleeper[0] + " and " + bestSleeper[1] +"!")
    } else {
    return bestSleeper[0]
    }
  }
}
  if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
  }

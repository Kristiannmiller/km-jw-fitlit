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
      let weekOfSleep = this.allUserData.slice(endingDateIndex-6, endingDateIndex+1)
      console.log(weekOfSleep)
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
      selectWeek(endingDate)
      let averageSleepQualityForUser = this.allUserData.id.reduce((acc, user) => {
        acc += user.sleepQuality
        return acc
      }, 0)/7
    }
    findGoodSleepers (endingDate){
      this.selectWeek('2019/06/23')
      const currentUser = this.allUserData.findUserById()
      this.allUserData.findUserById()
        /7
    //the sleepData contains an array of objects with all the users sleep information, including ID, and sleep quality, on any given night
    //we want to  create an array of objects with 1 key value pair: userID, and sleepQuality average for a given week

    //1.we want to start by selecting the week
    //2. we want to return a shallow copy of the sleepData array that returns all userObjects for that week
    //3. We will assign this array to a variable.
    //4. we will use filter over this variable to return a shallower array of only the users whos Average sleepquality value is greater than 3.
}
}
  if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
  }

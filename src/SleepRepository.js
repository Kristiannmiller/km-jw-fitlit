class SleepRepository {
  constructor(allUserData){
    this.allUserData = allUserData
    }
    findUserById(id) {
      let userSleepData = this.allUserData.filter(userData => userData.userID === id)
      return userSleepData
    }
    getSleepQualityAverage (){
    let averageSleepQuality = this.allUserData.reduce((acc, user) => {
      acc += user.sleepQuality
    return acc
  }, 0 )/this.allUserData.length;
    var result = averageSleepQuality.toFixed(2)
    return parseFloat(result)
  }
}

  if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
  }

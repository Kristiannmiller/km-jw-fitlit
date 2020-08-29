class SleepRepository {
  constructor(allUserData){
    this.allUserData = allUserData
    }
    findUserById(id) {
      let userSleepData = this.allUserData.filter(userData => userData.userID === id)
      return userSleepData
    }
    selectDay(endingDate){
      let endingDateIndex = this.allUserData.filter(sleepData => sleepData.date === endingDate)
      let week = this.allUserData.slice(endingDateIndex.date-6, endingDateIndex.date+1)
      console.log("this day", endingDateIndex)
      return week
    }
    //filter the user data to include only unique IDs
    //have the weekly average thingy run on each of those arrays
    //put them results into an array
    //.sort() on those results
    //return ... the ones more than 3.
    getSleepQualityAverage(){
      let averageSleepQuality = this.allUserData.reduce((acc, user) => {
        acc += user.sleepQuality
        return acc
      }, 0 )/this.allUserData.length;
      let result = averageSleepQuality.toFixed(2)
      return parseFloat(result)
    }
    getAverageWeeklySleepQualityForAUser(id, endingDate){
      let averageSleepQualityForAUser = this.allUserData.reduce((acc, user) => {
        acc += user.sleepQuality
        console.log("this is what it is returning", acc)
        return acc/this.allUserData.length
      }, 0)
      return averageSleepQualityForAUser
    }

    findGoodSleepers (endingDate){
      //call findUserById 4 times to get users 1-4 and all their week
      //call selectDay to filter each user's data into a week
      //call the getAverageWeeklySleepQualityForUser
      //filter the users who have a quality over 3
      //return those users

      console.log("this is what it is returning", userArray)
      let selectedDay = this.selectDay('2019/06/23')
      let allUserAverage = selectedDay.reduce((acc, user) => {
        acc += user.sleepQuality/7
        return acc
      }, 0)
      return allUserAverage
    }
    
  findBestSleeper(date){
    const targetDateData = this.allUserData.filter(sleepData => sleepData.date === date)
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

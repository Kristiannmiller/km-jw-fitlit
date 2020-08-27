class HydrationRepository {
  constructor(allUserData){
    this.allUserData = allUserData
    }
    findUserById(id) {
      //return an array of objects containing all user hydration stats
      let userWaterIntake = this.allUserData.filter(userData => userData.userID === id)
      return userWaterIntake
    }
  }
  if (typeof module !== 'undefined') {
    module.exports = HydrationRepository;
  } else {
    module.exports = HydrationRepository;
  }

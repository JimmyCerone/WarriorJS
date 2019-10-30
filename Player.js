class Player {
  // health check
  constructor() {
      this.health = 20;
  }

  playTurn(warrior) {
      // if you're busted up, be careful
      if (this.isBustedUp(warrior)) {
          // if your current health is less than the last turn
          if(this.health > warrior.health()) {
            // if the warrior is in front of you, attack
            if(this.isEnemy(warrior)) {
              warrior.attack();
            }
            // if the warrior isn't right in front of you, walk towards them
            else if(!this.isEnemy(warrior)) {
              warrior.walk();
            }
          }
          // if there's no enemy and you are losing health, heal up
          else if(!this.isEnemy(warrior)) {
            warrior.rest();
          }
          else {
            // if you aren't losing health, walk back
            if(this.isEnemy(warrior)) {
              warrior.walk('backward');
            }
            // if you are away, rest
            else {
              warrior.rest();
            }
          }
      }
      // if you're all good, walk forward or attack
      else {
        // if there's an enemy, attack
        if(this.isEnemy(warrior)) {
            warrior.attack();
        }
        // otherwise go find one
        else {
            warrior.walk();
        }
      }
      this.health = warrior.health();
  }

  // checks to see if your health is higher than 15
  isBustedUp(warrior) {
    return warrior.health() < 20;
  }

  // checks to see if there is an enemy in front of you
  // returns true if there is
  isEnemy(warrior) {
      return !(warrior.feel().isEmpty());
  }

}

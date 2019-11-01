class Player {
  // health check
  constructor() {
      this.health = 20;
      this.state = '';
  }

  playTurn(warrior) {
      this.state = this.stateFinder(warrior);
      switch(this.state) {
        case 'hurt':
          warrior.rest();
          break;
        case 'healthy':
          if(this.isEnemy(warrior)) {
            warrior.attack();
          }
          else {
            warrior.walk();
          }
          break;
        default:
          warrior.think("I am losing");
      }
      this.health = warrior.health();
  }

  stateFinder(warrior) {
      if(this.health == 20) {
          return 'healthy';
      }
      else {
         return 'hurt';
      }
  }

  isEnemy(warrior) {
    if(warrior.feel().isUnit()) {
        return warrior.feel().getUnit().isEnemy();
    }
    else {
      return false;
    }
  }

}

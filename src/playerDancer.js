var makePlayerDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$sprite = $('<img></img>');
  this.$dancer.append(this.$sprite);
  this.hasBall = false;
  this.team = window.dancers;
  this.turnover = 0;
};

  makePlayerDancer.prototype = Object.create(makeDancer.prototype);
  makePlayerDancer.prototype.constructor = makePlayerDancer;
  makePlayerDancer.prototype.move = function(){
    this.$dancer.animate({"left": "+=50px"}, "slow");
    this.$dancer.animate({"left": "-=50px"}, "slow");

  }

  makePlayerDancer.prototype.step = function(){
    makeDancer.prototype.step.call(this);
    this.move();
    if (this.hasBall && this.team.length > 1){
      this.passBall();
    }
  };

  makePlayerDancer.prototype.passBall = function(){
    var pass = Math.random();
    var toTeam;
    var teamLength;
    if(pass < this.turnover) {
      toTeam = window.teams[Math.floor(Math.random() *
       window.teams.length )];
      if(toTeam.length === 0) {
        toTeam = this.team;
      }
    } else { toTeam = this.team; }

    var toPlayer = toTeam[Math.floor(Math.random() *
                                        toTeam.length)];
    this.hasBall = false;
    toPlayer.catchBall();

  }

  makePlayerDancer.prototype.catchBall = function(){
    window.ball.$node.animate({top: this.topPos,
                              left: this.leftPos}, "slow");
    console.log('caughtBall');
    this.hasBall = true;
  }

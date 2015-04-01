var makeDukeDancer = function(top, left, timeBetweenSteps){
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.duke.push(this);
  this.$sprite.attr('src', 'assets/duke-sprite.gif');
  this.team = window.duke;
  this.turnover = 0.2;

};

  makeDukeDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeDukeDancer.prototype.constructor = makeDukeDancer
  makeDukeDancer.prototype.move = function(){
    this.$dancer.animate({"top": "+=50px"})
    this.$dancer.animate({"top": "-=50px"})

  }
  makeDukeDancer.prototype.step = function(){
    makePlayerDancer.prototype.step.call(this);
    this.move();
  };

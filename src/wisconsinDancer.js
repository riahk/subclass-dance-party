var makeWiscoDancer = function(top, left, timeBetweenSteps){
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.wisco.push(this);
  this.team = window.wisco;
  this.turnover = 0.3;
  this.$sprite.attr('src', 'assets/wisconsin-sprite.gif');
};

  makeWiscoDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeWiscoDancer.prototype.constructor = makeWiscoDancer;

  makeWiscoDancer.prototype.step = function(){
    makePlayerDancer.prototype.step.call(this);
  };

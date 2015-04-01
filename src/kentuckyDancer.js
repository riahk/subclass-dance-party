var makeKentuckyDancer = function(top, left, timeBetweenSteps){
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.kentucky.push(this);
  this.team = window.kentucky;
  this.turnover = 0.3;
  this.$sprite.attr('src', 'assets/kentucky-sprite.gif');
};

  makeKentuckyDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeKentuckyDancer.prototype.constructor = makeKentuckyDancer;

  makeKentuckyDancer.prototype.step = function(){
    makePlayerDancer.prototype.step.call(this);
  };

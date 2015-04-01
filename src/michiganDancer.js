var makeMichiganDancer = function(top, left, timeBetweenSteps){
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.michigan.push(this);
  this.team = window.michigan;
  this.turnover = 0.4;
  this.$sprite.attr('src', 'assets/michigan-sprite.gif');
};

  makeMichiganDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeMichiganDancer.prototype.constructor = makeMichiganDancer;

  makeMichiganDancer.prototype.step = function(){
     makePlayerDancer.prototype.step.call(this);
  };

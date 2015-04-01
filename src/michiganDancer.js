var makeMichiganDancer = function(top, left, timeBetweenSteps){
  // debugger;
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.michigan.push(this);
  this.team = window.michigan;
  this.turnover = 0.4;
  this.$sprite.attr('src', 'assets/michigan-sprite.gif');
  // this.$dancer.addClass("michigan");
};

  makeMichiganDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeMichiganDancer.prototype.constructor = makeMichiganDancer;

  makeMichiganDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
     makePlayerDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  };

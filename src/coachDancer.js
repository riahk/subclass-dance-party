var makeCoachDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

  makeCoachDancer.prototype = Object.create(makeDancer.prototype);
  makeCoachDancer.prototype.constructor = makeCoachDancer;

  makeCoachDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$dancer.animate({"left": "+=50px"}, "slow");
    // this.$dancer.animate({"right": "+=50px"}, "slow");
    this.$dancer.toggle();
  };

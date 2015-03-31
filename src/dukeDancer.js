var makeDukeDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  window.duke.push(this.$node);
};

  makeDukeDancer.prototype = Object.create(makeDancer.prototype);
  makeDukeDancer.prototype.constructor = makeDukeDancer;

  makeDukeDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

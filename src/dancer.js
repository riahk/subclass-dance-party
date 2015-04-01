// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this.topPos = top;
  this.leftPos = left;
  this.interval = timeBetweenSteps;
  this.$node = $('<div class="container"></div>');
  this.$dancer = $('<span class="dancer"></span>');
  this.$node.append(this.$dancer);
  this.step();

  this.setPosition(this.topPos, this.leftPos);
  window.dancers.push(this);

};

  makeDancer.prototype.setPosition = function(top, left){
    this.topPos = top;
    this.leftPos = left;

    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.step = function(){
    setTimeout(this.step.bind(this), this.interval);
  };


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
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    this.topPos = top;
    this.leftPos = left;

    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.interval);
  };


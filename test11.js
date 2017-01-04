var get = {
  rgb: function(r,g,b) {
    return 'rgb('+r+','+g+','+b+')';
  },
  id: function(n) {
    return document.getElementById(n);
  },
  tag: function(n,v) {
    if(v === undefined) v = 1;
    return document.getElementsByTagName(n)[v-1];
  },
  class: function(n,v) {
    if(v === undefined) v = 1;
    return document.getElementsByClassName(n)[v-1];
  },
  rand: function(a,b) {
    if(b === undefined) {
      b = a+1;
      a = 0;
    } else b = b+1;
    return Math.floor(Math.random()*(b-a))+a;
  },
  upper: function(s) {
    return s.toUpperCase();
  },
  lower: function(s) {
    return s.toLowerCase();
  }
};

$( document ).ready(function() {
  $('.tab').click(function() {
    let tabindex = $(this).attr('id').split('-')[1];
    // Hide all guns that are not of the tab you are using.
    for( var i = 0 ; i < guncounter ; i++) {
      if(i != tabindex) {
        guns[i].on(false);
      }
    }

    if(typeof guns[tabindex] !== 'undefined') {
      clog('old gun');
      guns[tabindex].on(true);
    }
    else {
      clog('new gun');
    }
  });
});

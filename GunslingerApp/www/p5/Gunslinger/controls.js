$( document ).ready(function() {
  $('.tab').click(function() {
    let tabindex = $(this).attr('id').split('-')[1];
    // Hide all guns that are not of the tab you are using.
    for( var i = 0 ; i < guncounter ; i++) {
      if(i != tabindex) {
        guns[i].on(false);
      }
    }
    $('.tab').removeClass('tab-active');
    $(this).addClass('tab-active');

    if(typeof guns[tabindex] !== 'undefined') {
      guns[tabindex].on(true);
      $('.fire').attr('id', 'fire-gun-' + tabindex);
      $('.reload').attr('id', 'reload-gun-' + tabindex);
    }
    else {
      $('#input-box').removeClass('offscreen');
    }
  });

  $('#input-box .close-button').click(function() {
    $('#input-box').addClass('offscreen');
  });

  $('#input-box .submit-gun').click(function() {
    let name     = $('#name-input').val();
    let chambers = $('#chamber-input').val();
    $('#name-input').val('');
    $('#chamber-input').val('1');
    addgun(name, chambers);
    $('#input-box').addClass('offscreen');
  });
});

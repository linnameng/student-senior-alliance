$(document).ready( function() {
  $('body').on('click','#btn-search-jobs',function(){
    var content_id = $("#category-select").val();
    $('#search-results').hide().html($(content_id).html()).show(500);
    return false;
  });

  $('body').on('click','#btn-contact-john',function(){
    var content_id = $(this).attr('href');
    $('#search-current-page').hide().html($(content_id).html()).show(500);
    $('#search-page-results').hide();
    return false;
  });

  $('body').on('click','#btn-contact-mary',function(){
    var content_id = $(this).attr('href');
    $('#search-current-page').hide().html($(content_id).html()).show(500);
    $('#search-page-results').hide();
    return false;
  });

  $('body').on('click','#btn-contact-bob',function(){
    var content_id = $(this).attr('href');
    $('#search-current-page').hide().html($(content_id).html()).show(500);
    $('#search-page-results').hide();
    return false;
  });

  $('body').on('click','#btn-contact-this-person',function(){
      var content_id = $(this).attr('href');
      $('#search-current-page').hide().html($(content_id).html()).show(500);
      return false;
  });

  $('body').on('click','#btn-send-message',function(){
      var content_id = $(this).attr('href');
      $('#search-current-page').hide().html($(content_id).html()).show(500);
      return false;
  });
 });
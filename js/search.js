$(document).ready( function() {
  $('body').on('click','#btn-search-jobs',function(){
    var content_id = $("#category-select").val();
    $('#search-results').hide().html($(content_id).html()).show(500);
    return false;
  });

  $('body').on('click','#btn-contact',function(){
    $('#search-page-results').hide();
    $('#posting-details').show(500);
    return false;
  });

  $('body').on('click','#btn-contact-this-person',function(){
      $('#posting-details').hide();
      $('#posting-contact').show(500);
      return false;
  });

  $('body').on('click','#btn-send-message',function(){
      $('#posting-contact').hide();
      $('#contact-complete').show(500);
      return false;
  });

  $('#search').on('click','.breadcrumb li a',function(){
    var content_id = $(this).attr('href');
    var parent_id = $(this).closest('div').attr('id');

    $('#' + parent_id).hide();
    $('#' + content_id).show(500);

    return false;
  });

 });
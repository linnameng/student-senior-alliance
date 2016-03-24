$(document).ready( function() {

  // Show search results for the selected category

  $('body').on('click','#btn-search-jobs',function(){
    var content_id = $("#category-select").val();
    $('#search-results').hide().html($(content_id).html()).show(500);
    return false;
  });

  // Click a Contact link in the search results table

  $('body').on('click','#btn-contact',function(){
    var content_id = $(this).attr('href');
    var parent_id = $(this).closest('div').attr('id');

    $('#search-page-results').hide();
    $('#' + content_id).show(500);
    return false;
  });

  // Contact the user after viewing their posting details

  $('body').on('click','#btn-contact-this-person',function(){
    var content_id = $(this).attr('href');
    var parent_id = $(this).closest('div').attr('id');

    $('#' + parent_id).hide();
    $('#' + content_id).show(500);
      return false;
  });

  // Send the email form and show success page

  $('body').on('click','#btn-send-message',function(){
    var parent_id = $(this).parents().eq(3).attr('id'); //get parent 3 levels up

    $('#' + parent_id).hide();
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
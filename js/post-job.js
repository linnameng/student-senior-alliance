$(document).ready( function() {

  $('body').on('click','#btn-step-2',function(){
    var content_id = $(this).attr('href');
    $('#post-job-step-1').hide();
    $('#post-job-container').hide().html($(content_id).html()).show(500);
   
    return false;
  });

  $('body').on('click','#btn-step-3',function(){
    var content_id = $(this).attr('href');
    $('#post-job-container').hide().html($(content_id).html()).show(500);
   
    return false;
  });

  $('body').on('click','#btn-step-4',function(){
    var content_id = $(this).attr('href');
    $('#post-job-container').hide().html($(content_id).html()).show(500);
   
    return false;
  });

 });
$(document).ready( function() {

  $('body').on('click','#btn-step-2',function(){
    $('#post-job-step-1').hide();
    $('#post-job-step-2').show(500);
    return false;
  });

  $('body').on('click','#btn-step-3',function(){
    $('#post-job-step-2').hide();
    $('#post-job-step-3').show(500);
   
    return false;
  });

  $('body').on('click','#btn-step-4',function(){
    $('#post-job-step-3').hide();
    $('#post-job-step-4').show(500);
   
    return false;
  });

  $('#post').on('click','.breadcrumb li a',function(){
    var content_id = $(this).attr('href');
    var parent_id = $(this).closest('div').attr('id');

    $('#' + parent_id).hide();
    $(content_id).show(500);

    return false;
  });

 });
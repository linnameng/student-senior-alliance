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

  $('body').on('click','.breadcrumb',function(){
    var content_id = $(this).attr('href');
    this.hide();
    content_id.show();
    return false;
  });
      

 });
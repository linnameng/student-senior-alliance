$(document).ready( function() {

  // Navigate to Offering page

  $('body').on('click','#btn-step-2',function(){
    $('#post-job-step-1').hide();
    $('#post-job-step-2').show(500);
    return false;
  });

  // Confirmation page

  $('body').on('click','#btn-step-3',function(){
    $('#post-job-step-2').hide();
    $('#post-job-step-3').show(500);

    var categories_requesting = [];
    $('#checkboxes-requesting input:checked').each(function() {
      var label = $("label[for='"+$(this).attr("id")+"']");
      categories_requesting.push(label.text());
    });

    var categories_offering = [];
    $('#checkboxes-offering input:checked').each(function() {
      var label = $("label[for='"+$(this).attr("id")+"']");
      categories_offering.push(label.text());
    });

    $.each(categories_requesting, function(index, value) {
      //alert(value);
      $('#new-posting-requesting').append("<h4>"+value+"</h4>");
    });

    $.each(categories_offering, function(index, value) {
      //alert('offering'+value);
      $('#new-posting-offering').append("<h4>"+value+"</h4>");
    });
   
    return false;
  });

  // Return to Home message page

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
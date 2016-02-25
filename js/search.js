$(document).ready( function() {
    $('#btn-search-jobs').click(function() {
     	var content_id = $("#category-select").val();
        $('#search-results').hide().html($(content_id).html()).show(500);
        return false;
    });

    $('#btn-contact').click(function() {
     	var content_id = $(this).attr('href');
        $('#search').hide().html($(content_id).html()).show(500);
        return false;
    });
 });
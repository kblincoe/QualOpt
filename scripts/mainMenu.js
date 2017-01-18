$(document).ready(function(){
    console.log(localStorage.getItem('token'));
    $.ajax({ url: "http://localhost:8080/QualOptServer/services/user/allstudies",
        headers : {
           Authorization : 'Bearer ' + localStorage.getItem('token')
        },
        context: document.body,
        success: function(data){
           alert("done");
           console.log(data);
           $.each(data, function(i, item) {
               var $tr = $('<tr>').append(
                   $('<td>').text(item.name)
               ).appendTo('#studytable');
               console.log($tr.wrap('<p>').html());
           });
           $('table tr').addClass('clickable-row');
           $(".clickable-row").click(function() {
               var $name = $(this).closest("tr").text();         // Retrieves the text within <td>
               $.each(data, function(i, item) {
                    if(item.name == $name){
                        localStorage.setItem('selectedStudy', JSON.stringify(item));
                        console.log('retrieved study = ', JSON.parse(localStorage.getItem('selectedStudy')));
                    }
               });
               window.location.href = "StudySummary.html";
           });
        }
    });
});
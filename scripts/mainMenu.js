$(document).ready(function(){
    $.ajax({ url: "http://localhost:8080/QualOptServer/services/user/allstudies",
        context: document.body,
        success: function(data){
           alert("done");
           console.log(data);
        }
    });
});
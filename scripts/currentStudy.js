$(document).ready(function(){
    var study = JSON.parse(localStorage.getItem('selectedStudy'));
    console.log(study);
    $('#studyname').val(study.name);
    $('#studydescription').val(study.description);
    $('#studyincentive').val(study.incentive);
    if(study.haspay){
        $('#haspay').prop('checked', true);
    }else{
        $('#haspay').prop('checked', false);
    }
    console.log(JSON.stringify(study));
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/QualOptServer/services/user/currentstudy",
        headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
        },
        contentType: "text/plain",
        data: JSON.stringify(study),
        success: function() {
        }
    });
});

function goToEmail(){
    window.location.href = "EmailDraft.html";
}
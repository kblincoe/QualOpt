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

});
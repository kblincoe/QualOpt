$("#filter").submit(function(event){
    event.preventDefault();
     $.ajax({
         type: "POST",
         url: "http://localhost:8080/QualOptServer/services/user/filter",
         headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
         },
         data: $(this).serialize(),
         success: function() {
            // callback code here
            alert("Submitted!");
            window.location.href = "EmailDraft.html";
         }
        });
});
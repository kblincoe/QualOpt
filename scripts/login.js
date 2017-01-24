$("#login").submit(function(event){
    event.preventDefault();
     $.ajax({
         type: "POST",
         url: "http://localhost:8080/QualOptServer/services/user/login",
         data: $(this).serialize(),
         success: function(xhr) {
            // callback code here
            alert("Submitted!");
            console.log(xhr.token);
            localStorage.setItem('token', xhr.token);
            window.location.href = "MainMenu.html";
         },error: function(xhr){
            if(xhr.status == 403){
                alert("Login failed. Please check that the email and password entered are correct");
            }else{
                alert("Something went wrong.");
                console.log(xhr);
            }
         }
        });
});

$(document).ready(function() {

    function getUsersList() {
        
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://quatrainserver.herokuapp.com/api/users",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
            }
        });
    }
    getUsersList();

        $('#btnLogin').on('click', function(event) {
            
            // prevent form default behaviour
            event.preventDefault();

            // disabled the submit button
            $("#btnLogin").prop("disabled", true);

            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/https://quatrainserver.herokuapp.com/api/login",
                type: "POST",
                data: {
                    email: jQuery('[name=user_email]').val(),
                    password: jQuery('[name=user_password]').val()
                },
                dataType: 'json',
                success: function(result) {
                    console.log("SUCCESS : ", result);
                        if((result + '').length > 0){
                            window.location.href = "index.html"
                        } else {
                            alert("Username or Password are Incorrect")
                        }
                        window.localStorage.setItem('user', JSON.stringify(result));
                    $("#btnLogin").prop("disabled", false);
                }
            });

        });



}); 
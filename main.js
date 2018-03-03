
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// javascript Document
window.onload = function() {

    var nameField = document.getElementById("name");

    nameField.onfocus = function(){
        if(nameField.Value == "yourname"){
            nameField.Value = "";
            nameField.style.color ="#000";
        }
    };
    nameField.onblur = function(){
      if(nameField.Value == ""){
          nameField.Value = "your name";
          nameField.style.color = "white";
      }
    };

    var emailField = document.getElementById("email");

    emailField.onfocus = function(){
        if(emailField.Value == "your email"){
            emailField.Value = "";
            emailField.style.color ="red";
        }
    };
    nameField.onblur = function(){
      if(emailField.Value == ""){
          emailField.Value = "your email";
          emailField.style.color = "red";
      }
    };
    document.getElementById("name").style.color="red";
    document.getElementById("email").style.color="red";
}
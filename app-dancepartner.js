let loginForm = document.getElementById("myForm");

const url = 'https://script.google.com/macros/s/AKfycbw4q26iWt9naQeQC_c1P1yCuujXsG_i1Qm7hHcd9O3bN8QPPZFXa-covsE9A_xQjxE/exec';

function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function(event) {
        event.preventDefault();
      });
    }
  }
window.addEventListener('load', preventFormSubmit);



// Make a POST request with form data.
var resumeBlob = "cc.png";
var formData = {
  'name': 'Bob Smith',
  'email': 'bob@example.com',
  'resume': resumeBlob
};
// Because payload is a JavaScript object, it is interpreted as
// as form data. (No need to specify contentType; it automatically
// defaults to either 'application/x-www-form-urlencoded'
// or 'multipart/form-data')
var options = {
  'method' : 'post',
  'payload' : formData
};

// or 'multipart/form-data'
var payment_array = [];


function handleFormSubmit(formObject){
    console.log("START UPLOADING");
  var firstname = document.getElementById("first_name").value;
  var lastname = document.getElementById("about").value;
  var phone = document.getElementById("language").value;
  var leader_jn = document.getElementById("levelDancing").value;
  var email = document.getElementById("email").value;
  var promocode = document.getElementById("city").value;
  
if(firstname != '' && lastname != ''   && leader_jn != ''  && email != '' && phone != '' && promocode != '') {
  document.getElementById("summit").disabled = true;
  //google.script.run.withSuccessHandler(updateUrl).withFailureHandler(onFailure).uploadFiles(formObject);
  console.log(formObject);
  document.getElementById("display_success").innerHTML = "Loading your Subscription/ Deine Anmeldung wird hochgeladen";
  document.getElementById("output").innerHTML = "";

  payment_array.length = 0;
  payment_array.push("TEST",email,firstname,lastname,phone,leader_jn,promocode);

  //formData.append('data', JSON.stringify(formObject)); 
  var formData = $('form#myForm :input').serialize();
        console.log(formData)


        $.ajax({
          url: url
          , method: 'POST'
          , data: formData
          , success: function (data) {
              console.log(data);
              document.getElementById("display_success").innerHTML = "Subscription completed!";
              document.getElementById("output").innerHTML = "";
              return rep.json()
          }
      })


        fetch(url, {
          method: 'POST'
          , body: formData
        }).then(function (rep) {
          return rep.json()
        }).then(function (data) {
           console.log("Subscribed");
           document.getElementById("display_success").innerHTML = "Subscription completed!";
           document.getElementById("output").innerHTML = "";
        })

} else {
  var alert = "There are misssing informations, please fill out the form/ Die Angaben sind unvollständig, bitte füllen Sie das Formular aus";
  document.getElementById("output").innerHTML = '<div class="alert alert-danger" role="alert">'+ alert +'!</div>'; 
}
}


    // Save Booking hl
    function sData(arr) {
        let formData = new FormData();
        formData.append('data', JSON.stringify(arr));
        console.log("posting registration in API")
        fetch(url, {
          method: 'POST'
          , body: formData
        }).then(function (rep) {
          return rep.json()
        }).then(function (data) {
           console.log("Subscribed");
        })
      };


function updateUrl(url) {
var div = document.getElementById('output');
if(isValidURL(url)){
  div.innerHTML = '<div class="alert alert-success" role="alert"><a href="' + url + '">Registration with Foto uploaded was successfully!/Registrierung mit Foto war erfolgreich!</a></div>';
  document.getElementById("myForm").reset();
}else{
  //Show warning message if file is not uploaded or provided
  div.innerHTML = '<div class="alert alert-danger" role="alert">'+ url +'!</div>';
}
}

function onFailure(error) {
var div = document.getElementById('output');
div.innerHTML = '<div class="alert alert-danger" role="alert">'+ error.message +'!</div>';
}



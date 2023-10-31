//GENERAL VARIABLES
const listElement = document.querySelector('.review_side');
const postTemplate = document.getElementById('single-post');
const url = 'https://script.google.com/macros/s/AKfycbx_kmT8bjwRM-c7MtEcu86kutKCIm6xgUu8VrRJHa9i9Q3sSrNhMYkz93e-FSRLSys/exec';
const users= [];

///DEFINE BUTTON FILTERS AND EVENT LISTENERS
const btn_female =  document.getElementById('followers');
btn_female.addEventListener("click", function(){
    filterUsers("Female/Follower");
}, false);
const btn_male =  document.getElementById('leaders');
btn_male.addEventListener("click", function(){
    filterUsers("Male/Leader");
}, false);



/// PASS FILTER TO USERS
function filterUsers(filter_value) {
    listElement.innerHTML="";

    for (const post of users) {
        if (post[2]==filter_value){
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector(".city").textContent = post[8];
            postEl.querySelector('h3').textContent = post[7];
            postEl.querySelector('span').textContent = post[2];
            postEl.querySelector('h2').textContent = post[1].toUpperCase();
            postEl.querySelector('p').textContent = post[3];
            postEl.querySelector(".aboutme").textContent = post[4];
            postEl.querySelector(".idealdancepartner").textContent = post[6];
            postEl.querySelector(".goals").textContent = post[5];
            postEl.querySelector(".customer-container").setAttribute('id',post[0]);
            postEl.querySelector(".customer-container").setAttribute('value',post[0]);
            postEl.querySelector("a").setAttribute("onclick","contactPartner('post[0]');");
            if (post[9]=="Registration saved without a photo / Registrierung ohne Foto gespeichert") {
                postEl.querySelector('img').src = "images/review1.png";
            }   else {
                postEl.querySelector('img').src = post[9];
            }
            listElement.append(postEl);
            
        }
    }
    //$('.bachata').css('display', 'none')
    console.log("BUTTON PRESSED")
}


//// ONLOAD HHTP REQUEST TO GET DATA
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response.posts;
  console.log(listOfPosts)
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector(".city").textContent = post[8];
            postEl.querySelector('h3').textContent = post[7];
            postEl.querySelector('span').textContent = post[2];
            postEl.querySelector('h2').textContent = post[1].toUpperCase();
            postEl.querySelector('p').textContent = post[3];
            postEl.querySelector(".aboutme").textContent = post[4];
            postEl.querySelector(".idealdancepartner").textContent = post[6];
            postEl.querySelector(".goals").textContent = post[5];
            postEl.querySelector(".customer-container").setAttribute('id',post[0]);
            postEl.querySelector(".customer-container").setAttribute('value',post[0]);
            postEl.querySelector("a").setAttribute("onclick","contactPartner('"+post[0]+"');");


            if (post[9]=="Registration saved without a photo / Registrierung ohne Foto gespeichert") {
                postEl.querySelector('img').src = "images/review1.png";
            }   else {
                postEl.querySelector('img').src = post[9];
            }
    listElement.append(postEl);

    users.push(post);
  }
  console.log(users)
};
xhr.send();

//GENERAL FIELDS

urluser='https://script.google.com/macros/s/AKfycbwSTDQj8m9dHS0iTVyr3QDViZ8ItpT6QEQXhgu9QqobhxwZmYIMpJuWoj-umCh7gcM/exec';
const output = document.querySelector('.output');
const btn_login = document.getElementById('loginbutton');
btn_login.addEventListener('click',getLogin);
//get user fields
const emailinput = document.getElementById("User_email");
const nameinput = document.getElementById("User_name");  
const coursesinput = document.getElementById("User_courses");  
const idinput = document.getElementById("User_id");  
const activeinput = document.getElementById("User_active"); 
const lastpaymentinput = document.getElementById("User_lastpayment");  
const saldoinput = document.getElementById("User_saldo");  
const anmerkungeninput = document.getElementById("User_anmerkungen");  
const nextpaymentinput = document.getElementById("User_nextpayment");

function getLogin() { 
    var email_value = document.querySelector('input[name=email-class]').value;
    if (email_value != '') { 
        output.innerHTML = "..loading";
        getUser(email_value);
        
      } else {
        output.innerHTML = "Enter a valid email";
      }
  
  }
  

// get users data 
function getUser(email_value) {
    if (email_value != '') {
      urlapi = urluser+"/exec?code="+email_value
      console.log(urlapi);
      //output.innerHTML = "loading...";
      console.log("fetching user data");
      fetch(urlapi).then(function (rep) {
        return rep.json()
      }).then(function (val) {
        console.log(val);
        output.innerHTML = "";
          var name_user = val.posts[0][1] 
          console.log(name_user);
          if (val.posts[0][1]  == 'No Active User') {
          document.getElementById("name_display").style.display="none";
          document.getElementById("name_display").innerHTML = val.posts[0][1];
          document.getElementById("email_display").innerHTML = email_value;
          document.getElementById("user_message").innerHTML = "Not Registered yet. You have to register to use our partner search services.";
          document.getElementById("user_message2").innerHTML = ""
          document.getElementById("user_message2").setAttribute("href", "dance-partner-registration.html"); 
          emailinput.value = email_value;
          nameinput.value = val.posts[0][3];
          coursesinput.value = val.posts[0][1];
          idinput.value = val.posts[0][0];
          activeinput.value = val.posts[0][2];
          lastpaymentinput.value = val.posts[0][7];
          saldoinput.value = val.posts[0][5];
          anmerkungeninput.value = val.posts[0][6];
          nextpaymentinput.value = val.posts[0][4];

          } 
          else {
          document.getElementById("name_display").style.display="block";
          document.getElementById("name_display").innerHTML = val.posts[0][1];
          document.getElementById("email_display").innerHTML = email_value;
          document.getElementById("user_message").innerHTML = val.posts[0][7];
          document.getElementById("user_message2").innerHTML = "You can contact a user now."
          //document.getElementById("user_message2").innerHTML = val.posts[0][3];
          emailinput.value = email_value;
          nameinput.value = val.posts[0][3];
          coursesinput.value = val.posts[0][1];
          idinput.value = val.posts[0][0];
          activeinput.value = val.posts[0][2];
          lastpaymentinput.value = val.posts[0][7];
          saldoinput.value = val.posts[0][5];
          anmerkungeninput.value = val.posts[0][6];
          nextpaymentinput.value = val.posts[0][4];

        }
        });

      } else {
        output.innerHTML = "Enter a valid email";
      }
}


///CONTACT PARTNER FUNCTION 


function contactPartner(Userid){
    console.log(Userid);

       var name_user = nameinput.value;
       var email_pay = emailinput.value;
       console.log(name_user);
  
      if ( name_user !="No Active User") {

        var displayTable = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"myModal\">";
        displayTable += "<div class=\"modal-dialog\" role=\"document\">";
        displayTable += "<div class=\"modal-content\" >";
        displayTable += "<div class=\"modal-header\ style=\"background-color:#48005f;color:White\">";
        displayTable += "<h5 class=\"modal-title\" id=\"exampleModalLongTitle\" > "+ Userid + "</h5>";
        displayTable += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
        displayTable += "<span aria-hidden=\"true\">×</span>";
        displayTable += "</button>";
        displayTable += "</div>";
        displayTable += "<div class=\"modal-body\">";
        displayTable += "<div class=\"container-fluid\">";
        displayTable += "<div class=\"row\">";
        displayTable += "<div class=\"col\" style=\"font-weight: bold\" ></div>";
        displayTable += "</div>";

        // Gets data from array created in getStates() function

          var espace = ": ";
          displayTable += '<p><strong>SEND A MESSAGE / NACHRICHT SENDEN</strong> </p>';

        displayTable += "<div class=\"row\"> </div>";
        displayTable += "<div class=\"row\"> </div>";
        displayTable += '<form style="background-color:white;color:black">';
        displayTable += '<div class="form-row">';
        displayTable += "<label for=\"disabledTextInput\" style=\"font-weight: bold\" >"+" "+"</label>";
        displayTable += '</div>';
        
        displayTable += '<form id="myForm" onsubmit="handleFormSubmit(this)">';
        displayTable += '<div class="form-row">';
        displayTable += '<label for="firstname" style="font-weight: bold">Name</label>';
        displayTable += "<input type=\"text\" id=\"firstname\" class=\"form-control\" Value=\""+Userid+"\" >";
        displayTable += '</div>';
        displayTable += '<div class="form-row">';
        displayTable += '<label for="lastname" style="font-weight: bold">Message / Nachricht</label>';
        displayTable += '<textarea rows="3" id="lastname" class="form-control" placeholder="Enter Message"></textarea>';
        displayTable += '</div>';
        displayTable += '<div class="form-row">';
        displayTable += '<label for="lastname" style="font-weight: bold">About me/ Über mich</label>';
        displayTable += "<input type=\"text\" id=\"leader_jn\" class=\"form-control\" Value=\""+Userid+"\" >";
        displayTable += '</div>';
        displayTable += '<div class="form-row">';
        displayTable += '<label for="phone" style="font-weight: bold">Phone /Telefonnummer</label>';
        displayTable += '<input type="text" id="phone" class="form-control" aria-describedby="phoneHelp" placeholder="Example +4915344446342" />';
        displayTable += '<small id="phoneHelp" class="form-text text-muted" style="color:yellow" >** not mandatory / nicht erforderlich</small>';
        displayTable += '</div>';
        displayTable += '<div class="form-row">';
        displayTable += '<label for="promocode" style="font-weight: bold">Social Media Profile</label>';
        displayTable += '<textarea rows="1" id="promocode" class="form-control" placeholder="Enter Social Media Profile"></textarea>';
        displayTable += '<small id="phoneHelp" class="form-text text-muted" style="color:yellow" >** not mandatory / nicht erforderlich</small>';
        displayTable += '</div>';
        displayTable += '<div class="form-row">';
        displayTable += '<label for="email" style="font-weight: bold" >Email (mandatory/erforderlich) </label>';
        displayTable += "<input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Enter email\" aria-describedby=\"emailHelp\" Value=\""+Userid+"\" >";
        displayTable += '<small id="emailHelp" class="form-text text-muted" style="color:yellow" >** Check your email is correct.</small>';
        displayTable += '<div id="display_error" style="color: red" ></div>';
        displayTable += '<div id="display_success" style="color: black" ></div>';
        displayTable += '</div>';
        displayTable += '<div class="form-row">';
        displayTable += "<input type=\"button\" value=\"Send Email\" class=\"btn btn-colour-1\" ";
        displayTable += " onclick=\"AddRow('"+Userid+"',"+"'"+Userid+"',"+"'"+Userid+"',"+"'"+Userid+"',"+"'"+Userid+"',"+"'"+Userid+"',"+"'"+Userid+"')\" />";
       
        displayTable += '</div>';       
        displayTable += '</form>';
        displayTable += '<br>';
        displayTable += '<div id="output"></div>';
        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";

        $("#contactModal").html(displayTable);
        $("#myModal").modal();
   
      }
      else { 
        alert ("Please Login or Register first!");  
      }
    } 
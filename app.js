// after loading 
window.addEventListener('DOMContentLoaded', getData);

// call API COURSES
const url = 'https://script.google.com/macros/s/AKfycbw4frixxVaDKqhDgZ3-flTcoUoGKm4l9Ncp6MnOGS45CFSuETrVGH0qoqSYABxYXn_3/exec';
const urluser =  'https://script.google.com/macros/s/AKfycby2r8RZ0zeuXg15SMNCMIWXstCB_VR-7NU_rA0w0_R3-ixnfCgUFcozGh8bKVBfpQLg/exec';

//get buttons 
const output = document.querySelector('.output');
const btnPayment = document.querySelector('.payment');
const btnPayments = document.querySelector('.allpayments');
const btnEmail = document.querySelector('.emailer');
const btnReload = document.querySelector('.ref');

//get fields
//const iName = document.querySelector('input[name=name]');
//const iMes = document.querySelector('input[name=message]');
const repMessage = document.querySelector('.rep');

//event listener buttons 
btnPayment.addEventListener('click', showPaymentModal);
btnPayments.addEventListener('click', showPaymentsModal);
btnReload.addEventListener('click', getData);
btnEmail.addEventListener('click', getUser);
 
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



// gets classes data
 
function getData() {
    	  var today = new Date();
        var d = new Date();
        var day = d.getDay();
        var displayTable = '';
        displayTable += '<div class=\"container float-left\" id=\"tableContainer\" >';
        displayTable += '<table class=\"table table-striped\" id=\"mainTable\" >';
        displayTable += '<thead  class=\"thead-dark\" >';
        displayTable += "<tr>";
        displayTable += "<th></th>";
        displayTable += "<th>Kurs/Course</th>";
        displayTable += "<th>Day/Time</th>";
        displayTable += "<th>Date/Datum</th>";
        displayTable += "</tr>";
        displayTable += '</thead>';
        var coma = ",";

  output.innerHTML = "loading...";

  fetch(url).then(function (rep) {
    return rep.json()
  }).then(function (data) {
    console.log(data);
    output.innerHTML = "";
    data.posts.forEach(function (val) {

        displayTable += "<tr>";
        displayTable += "<td><input type=\"button\" value=\"Anmelden\" class=\"btn btn-colour-1\" ";
        displayTable += " onclick=\"showStates('"+val[0]+"',"+"'"+val[1]+"',"+"'"+val[2]+"',"+"'"+val[3]+"',"+"'"+val[4]+"',"+"'"+val[5]+"',"+"'"+val[6]+"',"+"'"+val[7]+"',"+"'"+val[8]+"',"+"'"+val[11]+"')\" /></td>";
        displayTable += "<td>"+val[1]+"</td>";
        displayTable += "<td>"+val[5]+" "+val[7]+"</td>";
        displayTable += "<td>"+val[8]+"</td>";
        displayTable += "</tr>";

      console.log(val);
      //let html = document.createElement('div');
      //html.innerHTML = val[0] + ' ' + val[1] + ' ' + val[2] + '<br>';
      //output.appendChild(html);
    } 
    )
        displayTable += '</table>';
        displayTable += '</div>';     
        document.getElementById("rowdata").innerHTML = displayTable;
  })
};



// create book class modal

function showStates(id,name,genre,lebel,adress,dia,day_nr,hora,fecha,details)
{
    var name_user = document.getElementById("User_name").value;
    var last_payment = document.getElementById("User_lastpayment").value;
    var last_due_payment = document.getElementById("User_nextpayment").value;
    var active = document.getElementById("User_active").value;
    var user_email = document.getElementById("User_email").value;



    var displayTable = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"myModal\">";
    displayTable += "<div class=\"modal-dialog\" role=\"document\">";
    displayTable += "<div class=\"modal-content\" >";
    displayTable += "<div class=\"modal-header\ style=\"background-color:#48005f;color:White\">";
    displayTable += "<h5 class=\"modal-title\" id=\"exampleModalLongTitle\" > "+ name + "</h5>";
    displayTable += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
    displayTable += "<span aria-hidden=\"true\">×</span>";
    displayTable += "</button>";
    displayTable += "</div>";
    displayTable += "<div class=\"modal-body\">";
    displayTable += "<div class=\"container-fluid\">";
    displayTable += "<div class=\"row\">";
    displayTable += "<div class=\"col\" style=\"font-weight: bold\" ></div>";

    displayTable += "</div>";

    var espace = ": ";
    displayTable += "<div class=\"row\">"+"<strong>Adresse/Address</strong> "+adress+"</div>";
    displayTable += "<div class=\"row\">"+"<strong>Day/Tag </strong> "+espace+dia+"</div>";
    displayTable += "<div class=\"row\">"+"<strong>Time/Uhrzeit </strong> "+espace+hora+"</div>";
    displayTable += "<div class=\"row\">"+"<strong>Date/Datum </strong> "+espace+fecha+"</div>";
    displayTable += "<div class=\"row\">"+"<strong>Details/Mehr Infos </strong> "+espace+details+"</div>";
    displayTable += "<div class=\"row\">"+" "+"</div>";

    displayTable += "<div class=\"row\"> </div>";
    displayTable += "<div class=\"row\"> </div>";
    displayTable += '<form style="background-color:white;color:black">';
    displayTable += '<div class="form-row">';
    displayTable += "<label for=\"disabledTextInput\" style=\"font-weight: bold\" >"+" "+"</label>";
    displayTable += '</div>';
    displayTable += '<div class="form-row">';
    displayTable += '<label for="firstname" style="font-weight: bold">Name</label>';
    displayTable += "<input type=\"text\" id=\"firstname\" class=\"form-control\" Value=\""+name_user+"\" >";
    displayTable += '<small id="nameHelp" class="form-text text-muted" style="color:yellow" >** Check your name is correct.</small>';
    displayTable += '</div>';
    displayTable += '<div class="form-row">';
    displayTable += '<label for="exampleFormControlSelect2" style="font-weight: bold">Registration Type</label>';
    displayTable += '<select class="custom-select" id="leader_jn">';
    displayTable += '<option>Active Member /Mitglied </option>';
    displayTable += '<option>Trial Class / Probestunde</option>';
    displayTable += '<option>Workshops / Workshops</option>';
    displayTable += '</select>';
    displayTable += '</div>';
    displayTable += '<div class="form-row">';
    displayTable += '<label for="promocode" style="font-weight: bold">Membership / Mitgliedschaft</label>';
    displayTable += '<select class="custom-select" id="promocode">';
    displayTable += '<option>Regular Course</option>';
    displayTable += '<option>4-10er Karte</option>';
    displayTable += '<option>Individual Class & Trial Class</option>';
    displayTable += '</select>';
    displayTable += '</div>';
    displayTable += '<div class="form-row">';
    displayTable += '<label for="email" style="font-weight: bold" >Email (mandatory/erforderlich) </label>';
    displayTable += "<input type=\"email\" id=\"email_registration\" class=\"form-control\" aria-describedby=\"emailHelp\" Value=\""+user_email+"\" >";
    displayTable += '<small id="emailHelp" class="form-text text-muted" style="color:yellow" >** Check your email is correct.</small>';
    displayTable += '<div id="display_error" style="color: red" ></div>';
    displayTable += '<div id="display_success" style="color: black" ></div>';
    displayTable += '</div>';
    displayTable += '<div class="form-row">';
    displayTable += '<div id="display_error" style="color: red" ></div>';
    displayTable += '<div id="display_success" style="color: black" ></div>';
    displayTable += '</div>';
    displayTable += '<div class="form-group col-md-3">';
    displayTable += "<input type=\"button\" value=\"Anmelden\" id=\"addRegis\" class=\"btn btn-colour-1\" ";
    displayTable += " onclick=\"AddRow('"+id+"',"+"'"+name+"',"+"'"+adress+"',"+"'"+dia+"',"+"'"+hora+"',"+"'"+fecha+"',"+"'"+details+"',"+"'"+genre+"',"+"'"+last_payment+"',"+"'"+last_due_payment+"',"+"'"+active+"')\" />";
   
    displayTable += '</div>';
    displayTable += "</div>";
    displayTable += "</div>";
    displayTable += "</div>";
    displayTable += "</div>";
    displayTable += "</div>";

    $("#statesModal").html(displayTable);
    $("#myModal").modal();
};



// get users data 
function getUser() {
  var email_value = document.querySelector('input[name=email]').value;
    if (email_value != '') {
      urlapi = urluser+"/exec?mail="+email_value
      console.log(urlapi);
      output.innerHTML = "loading...";
      console.log("fetching user data");
      fetch(urlapi).then(function (rep) {
        return rep.json()
      }).then(function (data) {
        console.log(data);
        output.innerHTML = "";
        data.user.forEach(function (val) {
          console.log(val);
          document.getElementById("name_display").innerHTML = val[3];
          document.getElementById("email_display").innerHTML = email_value;
          emailinput.value = email_value;
          nameinput.value = val[3];
          coursesinput.value = val[1];
          idinput.value = val[0];
          activeinput.value = val[2];
          lastpaymentinput.value = val[7];
          saldoinput.value = val[5];
          anmerkungeninput.value = val[6];
          nextpaymentinput.value = val[4];
          btnPayment.style.display = "block";
          btnPayments.style.display = "block";

        });
        showPayment(data.activepayment);
        showAllePayments(data.historypayments);
      });
      } else {
        output.innerHTML = "If you are user, enter a valid email";
      }
}


// get payments 
function showPayment(payment)
    {

        var espace = ": ";
        console.log(payment); 
        var displayTable = "<div class=\"modal\" data-bs-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" id=\"mypaymodal\">";
        displayTable += "<div class=\"modal-dialog\" role=\"document\">";
        displayTable += "<div class=\"modal-content\" >";
        displayTable += "<div class=\"modal-header\ style=\"background-color:#48005f;color:White\">";
        displayTable += "<h5 class=\"modal-title\" id=\"exampleModalLongTitle\" > "+ "Check Membership Status "+nameinput.innerText+" "+emailinput.innerText+"</h5>";
        displayTable += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
        displayTable += "<span aria-hidden=\"true\">×</span>";
        displayTable += "</button>";
        displayTable += "</div>";
        displayTable += "<div class=\"modal-body\">";
        displayTable += "<div class=\"container-fluid\">";
        displayTable += "<div class=\"row\">";
        displayTable += "<div class=\"col\" style=\"font-weight: bold\" ></div>";
        displayTable += "</div>";
        displayTable += "<div class=\"row\">"+"<strong>If there are active Payments for your Membership they will get show, if not please write us. </strong> "+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>Wenn es aktive Zahlungen deiner Mitgliedschaft gibt, werden diese hier angezeigt, wenn nicht, schreib uns bitte. </strong> "+"</div>";
        displayTable += "<br/>"
        displayTable += "<div class=\"row\">"+"<strong>________Last Payment___________</strong> "+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>User ID </strong> "+espace+idinput.innerText+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>Name </strong> "+espace+nameinput.innerText+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>Email </strong> "+espace+emailinput.innerText+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>Last Payment </strong> "+espace+lastpaymentinput.innerText+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>Last Due Payment Date </strong> "+espace+nextpaymentinput.innerText+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>Saldo </strong> "+espace+saldoinput.innerText+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>More Infos </strong> "+espace+anmerkungeninput.innerText+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>Active Membership (TRUE/FALSE) </strong> "+espace+activeinput.innerText+"</div>";
        displayTable += "<br/>"

        // Gets data from array created in getStates() function

        payment.forEach(function(val,index) 
        {
          var num = index +1;
    
          displayTable += "<div class=\"row\">"+"<strong>________Active Payments___________</strong> "+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>User ID </strong> "+espace+idinput.innerText+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment ID </strong> "+espace+val[6]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Name </strong> "+espace+val[0]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Membership </strong> "+espace+val[1]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Date </strong> "+espace+val[2]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Amount </strong> "+espace+val[3]+" EUR</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Method </strong> "+espace+val[4]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Courses </strong> "+espace+val[5]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Start Date </strong> "+espace+val[7]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>End Date </strong> "+espace+val[8]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>___________________</strong> "+"</div>";

          displayTable += "<div class=\"row\">"+" "+"</div>";

        });

        displayTable += "<div class=\"row\"> </div>";
        displayTable += "<div class=\"row\"> </div>";
        displayTable += '<form style="background-color:white;color:black">';
        displayTable += '<div class="form-row">';
        displayTable += "<label for=\"disabledTextInput\" style=\"font-weight: bold\" >"+" "+"</label>";
        displayTable += '</div>';
        displayTable += '<div class="form-row">';
        displayTable += '</div>';
        displayTable += '<div class="form-group col-md-3">';
        displayTable += "<button type=\"button\" data-dismiss=\"modal\" value=\"Close\" class=\"btn btn-secondary\" ";
        displayTable += " >Close</button>";
       
        displayTable += '</div>';

        

        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";

        $("#payModal").html(displayTable);
        //$("#mypaymodal").appendTo("body").modal('show');
    };   

    function showPaymentModal() {
      $("#mypaymodal").appendTo("body").modal('show');
    };


    function showAllePayments(payments)
    {
        console.log(payments); 
        var displayTable = "<div class=\"modal\" data-bs-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" id=\"mypaymentsModal\">";
        displayTable += "<div class=\"modal-dialog\" role=\"document\">";
        displayTable += "<div class=\"modal-content\" >";
        displayTable += "<div class=\"modal-header\ style=\"background-color:#48005f;color:White\">";
        displayTable += "<h5 class=\"modal-title\" id=\"exampleModalLongTitle\" > "+ "Check Payments History "+nameinput.innerText+" "+emailinput.innerText+"</h5>";
        displayTable += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
        displayTable += "<span aria-hidden=\"true\">×</span>";
        displayTable += "</button>";
        displayTable += "</div>";
        displayTable += "<div class=\"modal-body\">";
        displayTable += "<div class=\"container-fluid\">";
        displayTable += "<div class=\"row\">";
        displayTable += "<div class=\"col\" style=\"font-weight: bold\" ></div>";
        displayTable += "</div>";
        displayTable += "<div class=\"row\">"+"<strong>If there is a payments history it will get show, if not please write us. </strong> "+"</div>";
        displayTable += "<div class=\"row\">"+"<strong>Wenn es eine Zahlungshistorie gibt, wird diese hier angezeigt, wenn nicht, schreib uns bitte. </strong> "+"</div>";

        // Gets data from array created in getStates() function

        payments.forEach(function(item, index) 
        {
          var num = index +1;
          var espace = ": ";
          displayTable += "<div class=\"row\">"+"<strong>___________________</strong> "+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment ID </strong> "+espace+item[0]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Name </strong> "+espace+item[1]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Membership </strong> "+espace+item[6]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Date </strong> "+espace+item[2]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Amount </strong> "+espace+item[3]+" EUR</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Method </strong> "+espace+item[4]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Courses </strong> "+espace+item[5]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Start Date </strong> "+espace+item[7]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>End Date </strong> "+espace+item[8]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>Payment Status </strong> "+espace+item[9]+"</div>";
          displayTable += "<div class=\"row\">"+"<strong>___________________</strong> "+"</div>";

          displayTable += "<div class=\"row\">"+" "+"</div>";

        });

        displayTable += "<div class=\"row\"> </div>";
        displayTable += "<div class=\"row\"> </div>";
        displayTable += '<form style="background-color:white;color:black">';
        displayTable += '<div class="form-row">';
        displayTable += "<label for=\"disabledTextInput\" style=\"font-weight: bold\" >"+" "+"</label>";
        displayTable += '</div>';
        displayTable += '<div class="form-row">';
        displayTable += '</div>';
        displayTable += '<div class="form-group col-md-3">';
        displayTable += "<button type=\"button\" data-dismiss=\"modal\" value=\"Close\" class=\"btn btn-secondary\" ";
        displayTable += " >Close</button>";
       
        displayTable += '</div>';

        

        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";
        displayTable += "</div>";

        $("#paymentsModal").html(displayTable);
    };

    function showPaymentsModal() {
      $("#mypaymentsModal").appendTo("body").modal('show');
    };
    

    function AddRow(id,name,adress,dia,hora,fecha,details,genre,last_payment,last_due_payment,active)
    {
      var firstname = document.getElementById("firstname").value;
      var lastname = "";
      var phone = "01-TEST"
      var leader_jn = document.getElementById("leader_jn").value;
      var promocode = document.getElementById("promocode").value;
      var promocode = document.getElementById("promocode").value;
      var email = document.getElementById("email_registration").value;
      let arr = [firstname, lastname, phone, leader_jn, promocode, email,id,name,adress,dia,hora,fecha,details,genre,last_payment,last_due_payment,active];
      if(firstname != ''   && leader_jn != ''  && email != '' && last_payment != 'Not Registered yet')
      {
      console.log(arr);
      sData(arr);
      document.getElementById("display_success").innerHTML = "Danke/Thank you "+firstname+" "+lastname+" (email: "+email+"). Eine Email von info@alma-dance.com mit der Kursinformationen wurde geschickt. Bitte prüft auch deinen Spamordner. You received just now an Email with the course details. Please check also in your spam folder";
      document.getElementById("display_error").innerHTML = "";
      document.getElementById("addRegis").disabled = true; 
      }
      else if(firstname != ''   && leader_jn != ''  && email != '' && last_payment == 'Not Registered yet')
      {
      console.log(arr);
      sData(arr);
      document.getElementById("display_success").innerHTML = "Danke/Thank you "+firstname+" "+lastname+" (email: "+email+"). Eine Email von info@alma-dance.com mit der Kursinformationen wurde geschickt. Bitte prüft auch deinen Spamordner. You received just now an Email with the course details. Please check also in your spam folder";
      document.getElementById("display_error").innerHTML = "";
      document.getElementById("addRegis").disabled = true; 
      }
      else {
        document.getElementById("display_error").innerHTML = "Please enter name and valid email!";
        document.getElementById("display_success").innerHTML = "";
      }
    }

    // Save Booking hl
function sData(arr) {
 //e.preventDefault();
  repMessage.textContent = "Sending";
  //let val1 = iName.value || 'unknown';
  //let val2 = iMes.value || 'Message';
  //iName.style.display = 'none';
  //iMes.style.display = 'none';
  //btnSave.style.display = 'none';
  //let arr = [val1, val2];
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
    //repMessage.textContent = "Subscribed" ;
    //getData();
  })
}
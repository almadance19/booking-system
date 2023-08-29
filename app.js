// after loading 
window.addEventListener('DOMContentLoaded', getData);

// call API COURSES
const url = 'https://script.google.com/macros/s/AKfycbwZ68iftymLugDqCGkyiszvPHWrDoW0iHYtw0brI9Er-zMtuwE8bKZ_PhetVe8FqKba/exec';
const urluser =  'https://script.google.com/macros/s/AKfycbyk8zKKdNiSt8XhrFT7ONQGjGUcjT69yoHUMhS3no0HWNKgDr-Hror_6PR_W3YJY3xU/exec';

//get buttons 
const output = document.querySelector('.output');
//const btnSave = document.querySelector('.saver');
const btnEmail = document.querySelector('.emailer');
const btnReload = document.querySelector('.ref');

//get fields
//const iName = document.querySelector('input[name=name]');
//const iMes = document.querySelector('input[name=message]');
const repMessage = document.querySelector('.rep');

//event listener buttons 
//btnSave.addEventListener('click', sData);
btnReload.addEventListener('click', getData);
btnEmail.addEventListener('click', getUser);
 


function getUser() {
  urlapi = urluser+"/exec?mail="+document.querySelector('input[name=email]').value
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
      document.getElementById("name").innerHTML = val[3];
      document.getElementById("email").innerHTML = document.querySelector('input[name=email]').value;
    })
  })
}



function sData(e) {
  e.preventDefault();
  repMessage.textContent = "Sending";
  let val1 = iName.value || 'unknown';
  let val2 = iMes.value || 'Message';
  iName.style.display = 'none';
  iMes.style.display = 'none';
  btnSave.style.display = 'none';
  let arr = [val1, val2];
  let formData = new FormData();
  formData.append('data', JSON.stringify(arr));
  fetch(url, {
    method: 'POST'
    , body: formData
  }).then(function (rep) {
    return rep.json()
  }).then(function (data) {
    console.log(data);
    btnSave.style.display = 'inline';
    iName.style.display = 'inline';
    iMes.style.display = 'inline';
    repMessage.textContent = "Submitted id:" + data.id;
    getData();
  })
}

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
        displayTable += " onclick=\"showStates('"+val[0]+"',"+"'"+val[1]+"',"+"'"+val[2]+"',"+"'"+val[3]+"',"+"'"+val[4]+"',"+"'"+val[5]+"',"+"'"+val[6]+"',"+"'"+val[7]+"',"+"'"+val[8]+"',"+"'"+val[9]+"')\" /></td>";
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





function showStates(id,name,genre,lebel,adress,dia,day_nr,hora,fecha,details)
{
    // var name_user = document.getElementById("User_name").value;
    // var last_payment = document.getElementById("User_lastpayment").value;
    // var last_due_payment = document.getElementById("User_nextpayment").value;
    // var active = document.getElementById("User_active").value;

    var name_user = "Edu";
    var last_payment = "33-22-12";
    var last_due_payment = "33-22-12";
    var active = "true";

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
    displayTable += '<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">';
    displayTable += '<small id="emailHelp" class="form-text text-muted" style="color:yellow" >** Check your email is correct.</small>';
    displayTable += '<div id="display_error" style="color: red" ></div>';
    displayTable += '<div id="display_success" style="color: black" ></div>';
    displayTable += '</div>';
    displayTable += '<div class="form-row">';
    displayTable += '<div id="display_error" style="color: red" ></div>';
    displayTable += '<div id="display_success" style="color: black" ></div>';
    displayTable += '</div>';
    displayTable += '<div class="form-group col-md-3">';
    displayTable += "<input type=\"button\" value=\"Anmelden\" class=\"btn btn-colour-1\" ";
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


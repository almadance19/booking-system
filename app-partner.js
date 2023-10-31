const url = 'https://script.google.com/macros/s/AKfycbzyqZhzlZJXJCdE-TXKz4T7pqfKdHhG6k5hCwaZV6djL3_dPTMJgeoB3DLkLGF3cXQ/exec';

window.addEventListener("load", () => {

    var firstname = document.getElementById("first_name").value;
    var lastname = document.getElementById("about").value;
    var phone = document.getElementById("language").value;
    var leader_jn = document.getElementById("levelDancing").value;
    var promocode = document.getElementById("email").value;
    var email = document.getElementById("city").value;

    function sendData() {
      const XHR = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      const FD = new FormData(form);

      console.log(FD);
  
      // Define what happens on successful data submission
      XHR.addEventListener("load", (event) => {
        alert(event.target.responseText);
      });
  
      // Define what happens in case of error
      XHR.addEventListener("error", (event) => {
        alert("Oops! Something went wrong.");
      });
  
      // Set up our request
      XHR.open("POST", url);
      
  
      // The data sent is what the user provided in the form
      XHR.send(FD);
      
    }
  
    // Get the form element
    const form = document.getElementById("myForm");
  
    // Add 'submit' event handler
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      sendData();
    });
  });



  $(function () {
    $('#fillData').click(function () {
        $.ajax({
            url: 'https://randomuser.me/api/'
            , dataType: 'json'
            , success: function (data) {
                console.log(data.results[0]);
                var obj = data.results[0];
                $('input[name="First"]').val(obj.name.first)
                $('input[name="Last"]').val(obj.name.last)
                 $('input[name="Company"]').val(obj.location.city)
                $('input[name="Group"]').val(obj.nat)
                $('input[name="Email"]').val(obj.email)
                
            }
        });
    })
    $('#myForm').submit(function (e) {
        e.preventDefault();
        var myData = $('form#myForm :input').serialize();
        var url = 'https://script.google.com/macros/s/AKfycbz3XKJ4o7B6SADFyiKA0peYuVBtgkV73l9XVPzryea7ib_uYQvB/exec'
        console.log(myData)
        $.ajax({
            url: url
            , method: 'POST'
            , data: myData
            , success: function (data) {
                console.log(data)
            }
        })
    })
    
    $('#loadData').click(function () {
        var url = 'https://script.google.com/macros/s/AKfycbz3XKJ4o7B6SADFyiKA0peYuVBtgkV73l9XVPzryea7ib_uYQvB/exec'
        $.getJSON(url, function (data) {
            var html = '<h3>Google Sheet Data</h3><ul>';
            $.each(data, function (key, val) {
                html += '<li> '
                for (var x = 0; x < val.length; x++) {
                    html += val[x] + ' '
                }
                html += '</li> '
            })
            html += '</ul> '
            $('#output').html(html);
        })
    })
});
/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

 $("input,textarea").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var name = $("input#name").val();  
       // var phone = $("input#phone").val();  
       var email = $("input#email").val(); 
       var numOfGuests = $("input#numofguests").val(); 
       var checkin = $("input#checkin").val();
       var checkout = $("input#checkout").val();
       var message = $("textarea#message").val();
       $.ajax({
                url: "bin/contact_me.php",
                type: "POST",
                data: {name: name, email: email, message: message, numOfGuests: numOfGuests, checkin: checkin, checkout: checkout},
                cache: false,
                success: function() {  
                // Success message
                   $('#success').html("<div class='alert alert-success'>");
                   $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append( "</button>");
                  $('#success > .alert-success')
                    .append("<strong>Thank you for the inquiry, we will get back to you soon.</strong>");
          $('#success > .alert-success')
            .append('</div>');
                            
          //clear all fields
          $('#contactForm').trigger("reset");
          },
       error: function() {
        // Fail message
         $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                 .append( "</button>");
                $('#success > .alert-danger').append("<strong>Sorry "+ name +" it seems that my mail server is not responding...</strong> Could you please email me your dates directly to <a href='mailto:contact@happy-nest.in?Subject=Accomodation inquiry'>contact@happy-nest.in</a> ? Sorry for the inconvenience!");
            $('#success > .alert-danger').append('</div>');
        //clear all fields
        $('#contactForm').trigger("reset");
        },
           })
         },
         filter: function() {
                   return $(this).is(":visible");
         },
       });

      $("a[data-toggle=\"tab\"]").click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
        });
  });
 

/*When clicking on Full hide fail/success boxes */ 
$('#name').focus(function() {
     $('#success').html('');
  });

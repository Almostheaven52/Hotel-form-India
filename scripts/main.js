$(function () {



  //These 2 functions prevent spaces in the name box
  $("#fname").blur(function () {
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().next().text("no spaces allowed in First Name");
    }
  });

  $("#lname").blur(function () {
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().next().text("no spaces allowed in last Name");
    }
  });


  //prevents leters being typed into the credit card box
  $("#ccard").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().next().text("pls stop trying to use letters");
  });


  //provides a response based on whether they want room service
  $("#service").on("change", function (e) {
    $("#service").prop("disabled", false);

    let inputVal = this.value;

    console.log(inputVal);

    if (inputVal=== 'yes' ) {
      $(this).next().next().text("Sweet.");
      console.log('did we click the bbutton? yes!') ; 
    } else {
      $(this).next().next().text("We will leave you alone for your stay!");
    }

  });



  //Creates submit button
    $( ":submit" ).css( "background", "yellow" );


 
// Function to submit form. Takes info that was entered and says thank you

    $( ":submit" ).click( function(e) {

      e.preventDefualt; //double check syntax... overrides default html input submit. 
    
      console.log('did we click the bbutton? yes!') ; 

      let greetingOutput = 'Thank You ';
      greetingOutput += $("#fname").val();
      greetingOutput += " "
      greetingOutput += $("#lname").val();
      greetingOutput += ". "
      greetingOutput += "You will check in on"
      greetingOutput += " "
      greetingOutput += $("#date").val();
      greetingOutput += " "
      greetingOutput += "at"
      greetingOutput += $("#time").val();
      greetingOutput += ". "
      greetingOutput += "We hope you enjoy your stay!"
      $("#formOutput").text(greetingOutput); //I think .
    
    }); 



 

  console.log("user name: " + $("#noSpaces").val());

  // end of doc ready f/n
});

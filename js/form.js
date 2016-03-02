

var x = document.getElementById("form_sample");

var createform = document.createElement('form'); // Create New Element form
	createform.setAttribute("action", "");        // Setting action Attribute on form
	createform.setAttribute("method", "post");  // Setting method Attribute on form
	x.appendChild(createform);

var heading = document.createElement('h1'); // Heading of form
	heading.innerHTML = "Please complete the survey ";
	createform.appendChild(heading);

var line = document.createElement('hr');  //giving horizontal row after heading
	createform.appendChild(line);

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

var chlabel = document.createElement('label'); // Create Label for name field
	chlabel.innerHTML = "Have children?:";            // Set Field Labels
	createform.appendChild(chlabel);

var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

var ychlabel = document.createElement('label'); // Create Label for name field
    ychlabel.innerHTML = "Yes&nbsp&nbsp";
    ychlabel.setAttribute("id", "at")   // Set Field Labels
    createform.appendChild(ychlabel);

var inputelement = document.createElement('input'); // Create input field for name
	inputelement.setAttribute("type", "radio");
	inputelement.setAttribute("name", "children");
    inputelement.setAttribute("value", "yes");
	createform.appendChild(inputelement);

var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

var nchlabel = document.createElement('label'); // Create Label for name field
    nchlabel.innerHTML = "No&nbsp&nbsp";
    nchlabel.setAttribute("id", "at")// Set Field Labels
    createform.appendChild(nchlabel);

var inputelement = document.createElement('input'); // Create input field for name
    inputelement.setAttribute("type", "radio");
    inputelement.setAttribute("name", "children");
    inputelement.setAttribute("value", "no");
    createform.appendChild(inputelement);

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var genderlabel = document.createElement('label');  //Create Label for email field
    genderlabel.innerHTML = "Gender:</br>  ";
	createform.appendChild(genderlabel);

var genderlabelM = document.createElement('label');  //Create Label for email field
    genderlabelM.innerHTML = "Male&nbsp&nbsp";
    genderlabelM.setAttribute("id", "at")
    createform.appendChild(genderlabelM);

var genderelement = document.createElement('input'); // Create input field for email
    genderelement.setAttribute("type", "radio");
    genderelement.setAttribute("name", "gender");
    genderelement.setAttribute("value", "male");
	createform.appendChild(genderelement);

var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

var genderlabelF = document.createElement('label');  //Create Label for email field
    genderlabelF.innerHTML = "Female&nbsp&nbsp";
    genderlabelF.setAttribute("id", "at")
    createform.appendChild(genderlabelF);

var genderelementf = document.createElement('input'); // Create input field for email
    genderelementf.setAttribute("type", "radio");
    genderelementf.setAttribute("name", "gender");
    genderelementf.setAttribute("value", "female");
    createform.appendChild(genderelementf);

var genderbreak = document.createElement('br');
	createform.appendChild(genderbreak);
var linebreak = document.createElement('br');
createform.appendChild(linebreak);

// Append Submit Button
var submitelement = document.createElement('input'); 
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "Submit");
    submitelement.setAttribute("id", "send");
	createform.appendChild(submitelement);
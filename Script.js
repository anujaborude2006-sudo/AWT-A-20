function registerStudent(){

let name=document.getElementById("name").value.trim();
let roll=document.getElementById("roll").value.trim();
let reg=document.getElementById("reg").value.trim();
let dept=document.getElementById("dept").value;
let semester=document.getElementById("semester").value;
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let score=document.getElementById("score").value;

if(name==""){
    alert("Enter Name");
    return;
}

if(!/^[A-Za-z ]+$/.test(name)){
    alert("Name should contain only letters.");
    return;
}

if(roll==""){
    alert("Enter Roll Number");
    return;
}

if(reg==""){
    alert("Enter Registration Number");
    return;
}

if(dept==""){
    alert("Select Department");
    return;
}

if(semester==""){
    alert("Enter Semester");
    return;
}

if(!email.includes("@")){
    alert("Invalid Email");
    return;
}

if(phone.length!=10 || isNaN(phone)){
    alert("Phone Number must contain 10 digits");
    return;
}

/* Personalized Validation
Example:
Last digit of Roll Number must be even
*/

let lastDigit=parseInt(roll.charAt(roll.length-1));

if(lastDigit%2!=0){
    alert("Last digit of Roll Number should be EVEN.");
    return;
}

// Skill Message

function skillMessage(score){

if(score>=90)
return "Excellent";

else if(score>=75)
return "Good";

else if(score>=60)
return "Average";

else
return "Needs Improvement";

}

let skill=skillMessage(score);

// Display ID Card

let card=document.getElementById("idCard");

card.style.display="block";

card.innerHTML=`

<h3>STUDENT ID CARD</h3>

<p><b>Name:</b> ${name}</p>

<p><b>Roll No:</b> ${roll}</p>

<p><b>Registration No:</b> ${reg}</p>

<p><b>Department:</b> ${dept}</p>

<p><b>Semester:</b> ${semester}</p>

<p><b>Email:</b> ${email}</p>

<p><b>Phone:</b> ${phone}</p>

<p><b>Skill Level:</b> ${skill}</p>

`;

}

// Task 4

const technologies=[
"HTML",
"CSS",
"JavaScript"
];

let output="<ul>";

technologies.forEach(function(tech){

output+="<li>"+tech+"</li>";

});

output+="</ul>";

document.getElementById("techList").innerHTML=output;
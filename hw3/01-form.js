// Enter your code here

 let _form = document.querySelector("#survey");
 let _name = document.querySelector("#name");
 let _email = document.querySelector("#email");
 let _checkbox = document.getElementsByName("selector"); 
 let _feedback = document.getElementById("feedback");
 const getArr=[]; 

_form.addEventListener("submit", evt => {

    evt.preventDefault();
  
    console.group("====== Form Submission ======");
     // Input console log
    console.log("Name: " + _name.value);
    console.log("Email: " +_email.value);

    // Dropdown console log
    console.log("Class Registration: "+ document.getElementById("registration").value);
  
    // Radio button console log
    let section = _form["section"].value;
    if(section)
    console.log("Class Section: " + section) 
    else
    console.log("Class Section: no selection");
  
    // Checkbox console log
      
    for(let i=0; i<_checkbox.length; i++){
        if(_checkbox[i].checked)  
        getArr.push(_checkbox[i].value);
    }
    
    if(getArr.length == 0)
    console.log("Courses Taken: none of the courses");
    else
    console.log("Courses Taken: "+ getArr);
  

   // Feedback log 
    if(_feedback.value== "")
    console.log("Feedback: no feedback")
    else
    console.log("Feedback: " + _feedback.value)
    console.groupEnd();
});





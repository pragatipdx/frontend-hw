let body=document.querySelector("body");
let element = document.createElement("div");
element.setAttribute("class", "bg-light border rounded w-50 mx-auto mt-5 p-3");
element.setAttribute("id", "parse");
element.style.visibility = "hidden";
body.appendChild(element);

document.getElementById('button').onclick = function(event){
event.preventDefault();
  
let input = document.getElementById("comments").value.trim();

// Validation of url
if(input.startsWith("http://www."))
{
if(input){        
element.style.visibility = "visible"; 
// Parsing of url for parameters                        
parser(input);
}
else{
element.style.visibility = "hidden";  
}
}
else{
    alert("Enter a valid url");
}
}

function parser(url){
  let element = document.getElementById("parse");
  element.innerHTML = "";
  
  let heading = document.createElement("h1");
  heading.setAttribute("class", "mt-2 mb-4");
  heading.textContent = "Results";
  element.appendChild(heading);

  let heading6 = document.createElement("h6");
  heading6.textContent = "URL";
  element.appendChild(heading6);
  let b=url.replaceAll("=",": ");

  let a=b.split("&"); 
  let parameters=a[0].split("?");

  let para=document.createElement("p");
  para.textContent=parameters[0];
  element.appendChild(para);

  if(parameters.length>0)
  { 
    let heading2 = document.createElement("h6");
    heading2.textContent="Query Parameters";
    element.appendChild(heading2);

    for(let i=1;i<parameters.length;i++)
    { 
    let para=document.createElement("p");        
    para.textContent=parameters[i];
    element.appendChild(para);
    }

  }
  if(a.length>0)
  {
    for(let i=1;i<a.length;i++)
    { 
    let para=document.createElement("p");        
    para.textContent=a[i];
    element.appendChild(para);
    }
  } 

}



// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2@me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no

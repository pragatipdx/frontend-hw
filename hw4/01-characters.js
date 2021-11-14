// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

let section = document.getElementById("characters");

fetch(url)
  .then((result) => result.json())
  .then((val) => { val.forEach(element => {
    let div = document.createElement("div");
    div.setAttribute("id", "div_characters");
  
    let img = document.createElement("img");
    img.setAttribute("id", "char-img");
    img.setAttribute("src", element.imageUrl);
    img.setAttribute("alt", element.fullName);
    img.style.height="250px";
    img.style.width="250px";
    img.style.padding="10px";
    img.style.paddingBottom="10px";
 
    div.appendChild(img);
  
    let div2 = document.createElement("div");
    div2.setAttribute("id", "char-info");
    div2.style.textAlign="center";
    div2.style.width="250px";
    
    div.appendChild(div2);
    
    let h3 = document.createElement("h3");
    h3.textContent = element.fullName;
    div2.appendChild(h3);
  
    let p = document.createElement("p");
    p.textContent = element.title;
    div2.appendChild(p);
  
    section.appendChild(div)      
});
})


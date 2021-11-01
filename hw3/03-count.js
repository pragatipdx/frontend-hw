let _para = document.getElementById("intro").innerHTML;
let _input=document.getElementById("userinput");


_input.addEventListener('keydown', e=> {

   	if(e.key==='Enter')  {
    e.preventDefault();
    let reg = new RegExp("\\b" + _input.value + "\\b", "g"); 
	let newText = _para.replace(reg, `<span style="background-color:yellow;">${_input.value}</span>`);
    document.getElementById("intro").innerHTML = newText;
    
}
});
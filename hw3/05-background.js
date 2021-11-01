// // Enter your code here

let color_val;
let input_val= document.getElementById('interval').value;
color_val=setInterval(getTimer, input_val*1000);

function getTimer(){
const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = random(0, 255);
const g = random(0, 255);
const b = random(0, 255);
const rgb = `rgb(${r},${g},${b})`;
document.body.style.background=rgb;
}

 document.getElementById('changeBtn').addEventListener('click', e=>{

    e.preventDefault();
    let changeBtn=document.getElementById('changeBtn');
     
    switch(changeBtn.value)
    {
    case 'Stop':
    {      
    // Enable input
    document.getElementById('interval').disabled = false;    
    
     // Change button 
     changeBtn.value='Start';
     changeBtn.className='btn btn-primary';

    // Clear Interval for background  
    clearInterval(color_val);
    break;
    }
    
    case 'Start':   
    { 
     // Disable input    
    document.getElementById('interval').disabled=true;  

    // Change button
    changeBtn.value='Stop';
    changeBtn.className='btn btn-danger';
    
    // set interval
    let input_val= document.getElementById('interval').value;
    color_val=setInterval(getTimer, input_val*1000);    
    break;
    }
}
  
});




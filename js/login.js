document.getElementById('login-btn').addEventListener('click',function(event){
 event.preventDefault()//load the form data 
 

 const phn=document.getElementById("input-phon").value;
 const pin =document.getElementById("pin-number").value;
//   console.log(phn,pin)
  if(phn==="01761239081" && pin==='12345'){
    // console.log('you are login my page')
    window.location.href="/Home.html"
  }
  else{
    alert("you dont have completly login")
  }
})

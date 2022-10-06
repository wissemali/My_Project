function compute()
{
    var principal= document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    var result = document.getElementById("result").value;
    document.getElementById("result").innerHTML= "If you deposit "+ "<p>"+principal+"</p>"+",\<br\>at an interest rate of "+ "<p>"+rate+"</p>"+"%\<br\>You will receive an amount of "+ "<p>"+interest+"</p>"+",\<br\>in the year "+ "<p>"+year+"</p>"+"\<br\>"  
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}  
function checkdata(){
    //Create references to the input elements we wish to validate
    var principal= document.getElementById("principal");
    
    //Check if the value equal 0
    if(principal.value == "0"){
        alert("Enter a positive number");
        principal.focus();
        return false;
  }
 
 //If all is well return true.
  return true;
} 

    
    

    
    



           
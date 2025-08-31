document.getElementById("add-cash-out").addEventListener("click",function(event){
    event.preventDefault()
    // console.log('this is the cash out money')
    const addCashOut=document.getElementById("cashout-money").value ;
    const cashOut=parseFloat(addCashOut)
    // console.log(addCashOut)
    const cashOutPin=document.getElementById("cashOut-pin").value 
    // console.log(cashOutPin)
    if(cashOutPin==="12345"){
        const currentBalance=document.getElementById("current-balance").innerText;
        const balance=parseFloat(currentBalance)
        // main balance -cashout balance
        const newBalance=balance-cashOut;
        
        // update ui value 
        document.getElementById('current-balance').innerText=newBalance;
    }
    else{
        alert("failde this pin please give this right pin number ")
    }
})
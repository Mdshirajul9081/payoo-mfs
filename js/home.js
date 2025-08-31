
// add the addEventListener added the add money button
document.getElementById("add-money-number").addEventListener("click",function(event){

    // Loaded the form field use the preventDefault
    event.preventDefault()
    // console.log('this is my add money button')

    // get the add money input value
    const addMoneyInputElement=document.getElementById('input-add-money');
    const addMoneyInput=addMoneyInputElement.value ;
    // i get the input vlaue the its the empty
    addMoneyInputElement.value=" ";
    // console.log(addMoneyInput)

    // get the pin number
    const inputPin=document.getElementById("input-pin").value ;
    // console.log(inputPin)
    if(inputPin==="12345"){
        // console.log('update the input balance')
        //   added the balance  
        const balance=document.getElementById('current-balance').innerText
        // console.log(balance)
        // convert the value string to number 
        const balanceInput=parseFloat(balance)
        const addMoney=parseFloat(addMoneyInput)
        // update the main value
        const newBalance=balanceInput+addMoney
        // update the ui
        document.getElementById('current-balance').innerText=newBalance
        
    }
    else{
        alert('send the currect pin number')
    }
})

// add the addEventListener added the add money button
document.getElementById("add-money-number").addEventListener("click",function(event){

    // Loaded the form field use the preventDefault
    event.preventDefault()
    console.log('this is my add money button')

    // get the add money input value
    const addMoneyInput=document.getElementById('input-add-money').value ;
    console.log(addMoneyInput)

    // get the pin number
    const inputPin=document.getElementById("input-pin").value ;
    console.log(inputPin)
})
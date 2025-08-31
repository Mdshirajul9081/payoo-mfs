document.getElementById("cashOut-money").addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove("hidden")
    document.getElementById('add-money-form').classList.add("hidden")
})
document.getElementById("add-cash-money").addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})
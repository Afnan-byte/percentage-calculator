let inp11 = document.querySelector('#inp11')
let inp12 = document.querySelector('#inp12')
let inp13 =document.querySelector('#inp13') 
let lb1 =document.querySelector('#lb1') 
let lb2 =document.querySelector('#lb2') 
let lb3 =document.querySelector('#lb3') 
let btn = document.querySelector('#btnmain')

function percentageValue(){
    inp11.placeholder = "Enter percentage"
    inp12.placeholder = "Enter Value"
    lb1.textContent = "What is"
    lb2.textContent = "% of"
    btn.textContent = "% value"
    btn.onclick = function(){
        if(inp11.value !== "" && inp12.value !== "" ){
            let out1 = (inp11.value*inp12.value)/100
            inp13.value = out1
        }else{
                inp13.value = "Please enter Number"
        
            }
       
    }

}
function percentageDifference(){
    inp11.placeholder = "Enter Value"
    inp12.placeholder = "Enter Value"
    lb1.textContent = "What is the percentage increase/decrease from"
    lb2.textContent = "to"
    btn.textContent = "% Difference"
    btn.onclick = function(){
        if(inp11.value <= inp12.value && inp11.value !== "" && inp12.value !== ""){
            let out2 = ((inp12.value-inp11.value)/inp11.value)*100
            inp13.value = out2;
           
        }else if(inp11.value > inp12.value && inp11.value !== "" && inp12.value !== "" ){
            
            let out2 = ((inp11.value-inp12.value)/inp11.value)*100
            inp13.value = `-${out2}`
    
        }else{
            inp13.value = "Please enter Number"
    
        }

    }
}
function percentage(){
    inp11.placeholder = "Enter Percentage" 
    inp12.placeholder = "Enter Value"
    lb1.textContent = ""
    lb2.textContent = "is what percent of "
    btn.textContent = "Percentage"
    btn.onclick = function(){
        if(inp11.value !== "" && inp12.value !== "" ){
            let out3 = (inp11.value/inp12.value)*100
            inp13.value = out3
        }else{
            inp13.value = "Please enter Number"
    
        }
      
           

    }
    
}

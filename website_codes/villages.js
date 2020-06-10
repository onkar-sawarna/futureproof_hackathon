function search_area() { 
    let input = document.getElementById('search1').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('house'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 

function search_area1() { 
    let input = document.getElementById('search2').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('house1'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 
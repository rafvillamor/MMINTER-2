 function modify_qty(val) { 
 var qty = document.getElementById('qty').value; 
 var new_qty = parseInt(qty,10) + val; 
      
      if (new_qty < 10) { 
          new_qty = 10; 
          } 
      
     document.getElementById('qty').value = new_qty; 
     return new_qty; 
     } 

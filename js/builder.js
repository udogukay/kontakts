
// Still havent worked out how to unbreak this
// function sortTable() {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("contactsTable");
//     switching = true;
//     /* Make a loop that will continue until
//     no switching has been done: */
//     while (switching) {
//       // Start by saying: no switching is done:
//       switching = false;
//       rows = table.getElementsByTagName("TR");
//       /* Loop through all table rows (except the
//       first, which contains table headers): */
//       for (i = 1; i < (rows.length - 1); i++) {
//         // Start by saying there should be no switching:
//         shouldSwitch = false;
//         /* Get the two elements you want to compare,
//         one from current row and one from the next: */
//         x = rows[i].getElementsByTagName("TD")[0];
//         y = rows[i + 1].getElementsByTagName("TD")[0];
        
//         // Check if the two rows should switch place:
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           // If so, mark as a switch and break the loop:
//           shouldSwitch= true;
//           break;
//         }
//       }
//       if (shouldSwitch) {
//         /* If a switch has been marked, make the switch
//         and mark that a switch has been done: */
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//       }
      
//     }
//   }



// Row deletion function
function del(x){
    var p=x.parentNode.parentNode;
         p.parentNode.removeChild(p);
}





var saveButton = document.getElementById('saveBtn').addEventListener('click',function() {
    var HTMLkontakt = '<tr><td><button onclick="del(this)">Delete</button></td><td>%name%</td><td>%number%</td><td>%email%</td></tr>';
    
    // Table and metadata insertion
    var namefield = document.getElementById('namefield').value;
    var numfield = document.getElementById('numfield').value;
    var emailfield = document.getElementById('emailfield').value
    var newName = HTMLkontakt.replace("%name%",namefield);
    var newNum = newName.replace("%number%",numfield);
    var newMail = newNum.replace("%email%",emailfield)
    
    // var node = document.createElement("tr");
    // var txtnode = document.createTextNode(newMail);
    // node.appendChild(txtnode);
    

document.getElementById('contactsTable').insertAdjacentHTML('beforeend',newMail);

// Clear modal contents when save is clicked
document.getElementById("newcon").reset()
document.getElementById('close').click();
// sortTable();

}); 


function editTrigger(x) {
  
    
    // modal trigger


    // modal content code
    
}

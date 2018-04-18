var HTMLkontakt = '<tr><td><button href="javascript:;" class="btEdit">Edit</button><button onclick="del(this)">Delete</button> </td><td>%name%</td><td>%number%</td></tr><tr>';






tr onclick:open modal, append cell contents to fields
store cell contents to cache var
on cancel click: append cache to cells
on save click: append text field vals to cells



TODO: Auto sort table by tr[0]
View on click


function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("contactsTable");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // I so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }


  


  var editButton = document.getElementById('editBtn').addEventListener('click',function() {
    var HTMLkontakt = '<tr class="clickable-row" data-href = "#" data-target = "#editContactModal" data-toggle="modal" data-namedit="%name%" data-numedit="%number%"><td>%name%</td><td>%number%</td></tr><tr>';

    // Table and metadata insertion
    var namefield = document.getElementById('namefield').value;
    var numfield = document.getElementById('numfield').value;
    var newName = HTMLkontakt.replace("%name%",namefield);
    var newName2 = newName.replace("%name%",namefield);
    var newNum = newName2.replace("%number%",numfield);
    var newNum2 = newNum.replace("%number%",numfield);





// Clear modal contents when save is clicked
document.getElementById("newcon").reset()

sortTable();
}); 



<a href="#my_modal" data-toggle="modal" data-book-id="my_id_value">Open Modal</a>

<div class="modal" id="my_modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          <h4 class="modal-title">Modal header</h4>
      </div>
      <div class="modal-body">
        <p>some content</p>
        <div id="namefield" value="">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



$('#my_modal').on('show.bs.modal', function(e) {
  var bookId = $(e.relatedTarget).data('book-id');
  $(e.currentTarget).find('input[name="bookId"]').val(bookId);
});


[1].cells[1].innerText
document.getElementsByTagName("tr")[1].cells[1].innerText

{/* modal reset */}
document.getElementById("newcon").reset()



function del(x){
    var p=x.parentNode.parentNode;
         p.parentNode.removeChild(p);
}


<!-- Edit kontakt modal JS -->
<script type="text/javascript">
  $('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var name = $("tr")[1].cells[0].innerText
  var number = $("tr")[1].cells[1].innerText // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  // modal.find('.modal-title').text(name)
  modal.find('#nameEdit').val(name)
  modal.find('#numEdit').val(number)
})
</script>


<!-- Make table rows clickable -->
    <script>
    jQuery(document).ready(function($) {
      $(".clickable").click(function() {
        window.location = $(this).data("href");
      });
      
    });
    </script>



    <!-- New contact Modal -->
<div class="modal fade" id="newContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Contact</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form id="newcon">
        <div class="modal-body">
          <div class="form-label-group">
            <label for="inputName">Contact Name</label>
            <input type="text" name="name" id="namefield" class="form-control" placeholder="Name" required>
            
          </div>

          <div class="form-label-group">
              <label for="inputName">Contact Number</label>
              <input type="tel" name="number" id="numfield" class="form-control" placeholder="Phone Number" required>
            
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button id="saveBtn"  type="submit" class="btn btn-primary" data-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
    


    <!-- View/Edit Modal -->

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Contact</h5>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" name="name" id="nameEdit" class="form-control" placeholder="Name" required>
          </div>
          <div class="form-group">
              <label for="inputName">Contact Number</label>
              <input type="tel" name="number" id="numEdit" class="form-control" placeholder="Phone Number" required>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
   
    

    
    <!-- Help  Modal -->
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            
            <h4 class="modal-title" id="modelTitleId">How to use Kontakts</h4>
          </div>
          <div class="modal-body">
            <p>Click on "New Contact" to add a contact</p>
            <br>
            <p>Click on a name to edit or delete a contact</p>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            
          </div>
        </div>
      </div>
    </div>

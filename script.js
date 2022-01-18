(function () {
'use strict'
const forms = document.querySelectorAll('.requires-validation')
Array.from(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

var rIndex,
                table = document.getElementById("table");
            
            function checkEmptyInput()
            {
                var isEmpty = false,
                    fname = document.getElementById("fname").value;
                    lname = document.getElementById("lname").value;
                    age = document.getElementById("age").value;
                    email = document.getElementById("email").value;
                    phone = document.getElementById("phone").value;
                    gender = document.getElementById("gender").value;
            
                if(fname === ""){
                    isEmpty = true;
                }
                else if(lname === ""){
                    alert("Last Name Cannot Be Empty");
                    isEmpty = true;
                }
                else if(age === ""){
                    alert("Age Cannot Be Empty");
                    isEmpty = true;
                }
                else if(email === ""){
                    alert("Email Cannot Be Empty");
                    isEmpty = true;
                }
                else if(validateemail() == false){
                    isEmpty = true;
                }
                else if(phone === ""){
                    alert("Phone Cannot Be Empty");
                    isEmpty = true;
                }
                else if(phonenumber() == false){
                    alert("Phone number should be 10 digits");
                    isEmpty = true;
                }
                else if(gender === ""){
                    alert("Select gender");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            function addHtmlTableRow()
            {
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    fname = document.getElementById("fname").value;
                    lname = document.getElementById("lname").value;
                    age = document.getElementById("age").value;
                    email = document.getElementById("email").value;
                    phone = document.getElementById("phone").value;
                    gender = document.getElementById("gender").value;
                    
                cell1.innerHTML = fname;
                cell2.innerHTML = lname;
                cell3.innerHTML = age;
                cell4.innerHTML = email;
                cell5.innerHTML = phone;
                cell6.innerHTML = gender;
                selectedRowToInput();
                    ResetForm();
                    
            }
            }
            
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      rIndex = this.rowIndex;
                      document.getElementById("fname").value = this.cells[0].innerHTML;
                      document.getElementById("lname").value = this.cells[1].innerHTML;
                      document.getElementById("age").value = this.cells[2].innerHTML;
                      document.getElementById("email").value = this.cells[3].innerHTML;
                      document.getElementById("phone").value = this.cells[4].innerHTML;
                      document.getElementById("gender").value = this.cells[5].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    age = document.getElementById("age").value;
                    email = document.getElementById("email").value,
                    phone = document.getElementById("phone").value;
                    gender = document.getElementById("gender").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = fname;
                table.rows[rIndex].cells[1].innerHTML = lname;
                table.rows[rIndex].cells[2].innerHTML = age;
                table.rows[rIndex].cells[3].innerHTML = email;
                table.rows[rIndex].cells[4].innerHTML = phone;
                table.rows[rIndex].cells[5].innerHTML = gender;
              }
                ResetForm();
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                document.getElementById("fname").value = "";
                document.getElementById("lname").value = "";
                document.getElementById("age").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("gender").value = "";
            }
            function validateemail()  
            {  
                var x=document.getElementById("email").value;
                var atposition=x.indexOf("@");  
                var dotposition=x.lastIndexOf(".");  
                if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
                    {  
                        alert("Please enter a valid e-mail address");  
                        return false;  
                    }
                else return true;
            }
            
            function phonenumber()
                {
                    if(document.getElementById("phone").value.length!=10)
                        {
                         return false;
                        }
                    else return true;
                }
         function ResetForm(){
        document.getElementById("fname").value = "";
                document.getElementById("lname").value = "";
                document.getElementById("age").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("gender").value = "";
         }
            </script>
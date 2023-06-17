
//add  employe listner
document.getElementById('emp-form').addEventListener('submit', addEmployee);

//empty employees array
let employees=[];


//add employee function
function addEmployee(event){
    event.preventDefault();  //prevent the refresh defaut


    //get all input form data
    const name = document.getElementById('name').value.trim();
    const prof = document.getElementById('prof').value.trim();
    const age = document.getElementById('age').value.trim();
    const message = document.getElementById('message');

    //check error massage
    if(name==='' || prof===''|| age===''){
        message.textContent = "Error : Please Make sure All the fields are filled before adding in an employee !";
        message.className='error';
        return;
    }else{

        message.textContent = 'Success : Employee Added!';
        message.className = 'success';
    }

    //create emp object
    const emp = {
        id:employees.length+1,
        name,
        prof,
        age
    };

    employees.push(emp);  //push in to the empty array
    displayEmployees();    //display all employee
    resetForm();            //after display- reset form

}


//delete employee based on id
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}


//display employee function
function displayEmployees() {
    const employeeListDiv = document.getElementById('emp-list');        //get emp-list div and first make it empty
    employeeListDiv.innerHTML = '';
  

    //check if employess is not in the arrays then return 0 employee text
    if (employees.length === 0) {
      employeeListDiv.textContent = 'You have 0 Employees.';
      return;
    }
  

    //display all employee details
    employees.forEach(employee => {
      const employeeDiv = document.createElement('div');        //create seperate div for seperate employee
      employeeDiv.className = 'employee';           //assign employee as class name for that div
      
      //update the all employe detaild based on arrays
      employeeDiv.innerHTML = `
        <p><strong>ID:</strong> ${employee.id}</p>
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Profession:</strong> ${employee.prof}</p>
        <p><strong>Age:</strong> ${employee.age}</p>
        <button onclick="deleteEmployee(${employee.id})">Delete</button>
      `;
  
      employeeListDiv.appendChild(employeeDiv); //append to the parrent div
    });
  }


  //reset the form after added to the list
function resetForm() {
    const nameInput = document.getElementById('name');
    const professionInput = document.getElementById('prof');
    const ageInput = document.getElementById('age');
    
  
    nameInput.value = '';
    professionInput.value = '';
    ageInput.value = '';
    
}




console.log('JS Loaded');
let employeeList = [];

$(handleStart);

function handleStart(){
    console.log('Jquery ready for action');
    
//click listeners
$(`#addEmployee`).on(`click`, addEmployee);

$(`#target`).on(`click`,`.deleteButton`, deleteEmployee);

}
function deleteEmployee(){
    console.log('DELETE'); //check 
$(this).closest(`tr`).remove();
}


function addEmployee(){
    console.log('click'); //check click
    
    const firstName = $(`#firstName`).val();
    console.log(firstName); //check input
    const employee ={
        firstName:$(`#firstName`).val(),
        lastName:$(`#lastName`).val(),
        id:$(`#id`).val(),
        title:$(`#title`).val(),
        annualSalary:$(`#annualSalary`).val(),
    }
    console.log(employee);

employeeList.push(employee);
render();
}

function render(){
$(`#target`).empty();

    for(let employee of employeeList){
        const row = $(`
<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.id}</td>
    <td>${employee.title}</td>
    <td>${employee.annualSalary}</td>
    <td><button class="deleteButton"> Delete </button></td>
</tr>
`);
        if(employee.annualSalary > 20000){
            row.addClass('highSalary')
        }
        
    $(`#target`).append(row);
    }
}
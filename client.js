console.log('JS Loaded');

$(handleStart);

function handleStart(){
    console.log('Jquery ready for action');
    
//click listeners
$(`#addEmployee`).on(`click`, addEmployee);

// $(`#target`).on(`click`,`.`)

}
function deleteEmployee(){
    console.log('DELETE');
    
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
    
const row = $(`
<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.id}</td>
    <td>${employee.title}</td>
    <td>${employee.annualSalary}</td>
</tr>
`);

    $(`#target`).append(row);
}
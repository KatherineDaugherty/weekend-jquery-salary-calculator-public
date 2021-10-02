console.log('JS Loaded');
let employeeList = [];
// const monthlyDisplay = 0;

$(handleStart);

function handleStart(){
    console.log('Jquery ready for action');
    // let el=$(`#budgetOut`);
    // el.empty();
    // el.append (  monthlyDisplay );
    
//click listeners
$(`#addEmployee`).on(`click`, addEmployee);

$(`#target`).on(`click`,`.deleteButton`, deleteEmployee);

}
function deleteEmployee(){
    // console.log('DELETE'); //check 
$(this).closest(`tr`).remove();
}

function addEmployee(){
    // console.log('click'); //check click

    const firstName = $(`#firstName`).val();
    // console.log(firstName); //check input
    const employee ={
        firstName:$(`#firstName`).val(),
        lastName:$(`#lastName`).val(),
        id:$(`#id`).val(),
        title:$(`#title`).val(),
        annualSalary:$(`#annualSalary`).val(),
    }
    console.log(employee);

employeeList.push(employee);

$(`#firstName`).val('');
$(`#lastName`).val('');
$(`#id`).val('');
$(`#title`).val('');
$(`#annualSalary`).val('');

render();
calculateMonthlyTotal();
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
//conditional for Monthly salary background 
        if(employee.annualSalary > 20000){
            row.addClass('highSalary')
        }
        
    $(`#target`).append(row);
    }
}

function calculateMonthlyTotal(){
//     // console.log('calculate remaining total'); //check
let monthlyTotals = 0;
    for(let employee of employeeList){
        monthlyTotals += Number(employee.annualSalary);
    }
    console.log(monthlyTotals);

    let displayTotals = $(`#budgetOut`);
    displayTotals.empty();
    displayTotals.append(monthlyTotals);
    
//     // loop through employeeList
//     //Add employee.annualSalaries 
//     //display monthlyTotals
//     //if >20000 append DOM monthlyTotals to Red background
    
} //end calculateMonthlyTotals 
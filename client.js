console.log('JS Loaded');
let employeeList = [];
let monthlyTotals = 0;

$(handleStart);

function handleStart() {
    console.log('Jquery ready for action');
    //click listeners
    $(`#addEmployee`).on(`click`, addEmployee);
    $(`#target`).on(`click`, `.deleteButton`, deleteEmployee);
}
function deleteEmployee() {
    // console.log('DELETE'); //check 
    $(this).closest(`tr`).remove();
}
function addEmployee() {
    // console.log('click'); //check click
    const firstName = $(`#firstName`).val();
    // console.log(firstName); //check input
    const employee = {
        firstName: $(`#firstName`).val(),
        lastName: $(`#lastName`).val(),
        id: $(`#id`).val(),
        title: $(`#title`).val(),
        annualSalary: $(`#annualSalary`).val(),
    }
    // console.log(employee);
    employeeList.push(employee);
    $(`#firstName`).val('');
    $(`#lastName`).val('');
    $(`#id`).val('');
    $(`#title`).val('');
    $(`#annualSalary`).val('');

    render();
    calculateMonthlyTotal();
}
function render() {
    $(`#target`).empty();

    for (let employee of employeeList) {
        const row = $(`
<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.id}</td>
    <td>${employee.title}</td>
    <td class="right"> ${currencyToString(employee.annualSalary)}</td>
    <td><button class="deleteButton"> Delete </button></td>
</tr>
`);
        $(`#target`).append(row);
    }
    monthlyExpenses = calculateMonthlyTotal();
    $(`#budgetOut`).text(currencyToString(monthlyExpenses));
}

function calculateMonthlyTotal() {
    let annualTotals = 0;

    for (let employee of employeeList) {
        annualTotals += Number(employee.annualSalary);
    }
    monthlyTotals = (annualTotals / 12);
    // monthlyTotals = currencyToString(monthlyTotals);

    // let displayTotals = $(`#budgetOut`);
    // displayTotals.empty();
    // displayTotals.append(monthlyTotals);

    if (monthlyTotals > 20000) {
        $(`#budgetOut`).addClass('highSalary');
    }

    $(`#budgetOut`).text(currencyToString(monthlyTotals))
}

function currencyToString(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
    }).format(number);
}
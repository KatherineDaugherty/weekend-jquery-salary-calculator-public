console.log('JS Loaded');

$(handleStart);

function handleStart(){
    console.log('Jquery ready for action');
    
//click listeners
$(`#addEmployee`).on(`click`, addEmployee);


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
    
}
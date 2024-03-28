let nameArray = new array();
let heightArray = new array();


function addPerson(height, name) {
    if (nameArray.length >= 5 && heightArray.length >= 5) {
        alert('Array is full');
    } else {
        alert('Added successfully');
    }
}

function removePerson(name) {
    let checkName = nameArray.indexOf(name);
    if (checkName > -1) {
        nameArray.splice(checkName, 1);
        heightArray.splice(checkName, 1);
        alert('Removed successfully');
    } else {
        alert('Not found');
    }
}
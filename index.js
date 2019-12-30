function userValidationForm() {
  var nameInput = document.forms["userForm"]["uname"].value;
  if (nameInput == "") {
    alert("Name must be filled out");
    return false;
  }
}
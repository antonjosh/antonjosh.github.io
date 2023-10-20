var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
  var name=document.getElementById('contact-name').value;
  if (name.length == 0) {
    nameError.innerHTML = 'Name is Required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Please provide full name';
    return false;
  }
  nameError.innerHTML = 'valid';
  return true;
}

function validateEmail() {
  var email=document.getElementById('contact-email').value;
  if (email.length == 0) {
    emailError.innerHTML = 'Email is Required';
    return false;
  }
  emailError.innerHTML = 'valid';
  return true;
}

function validateMessage() {
  var message=document.getElementById('contact-message').value;
  if (message.length == 0) {
    messageError.innerHTML = 'Message is Required';
    return false;
  }
  messageErrorError.innerHTML = 'valid';
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()){
    submitError.style.display='block';
    submitError.innerHTML = 'Please fix the error';
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    return false;
  }
}
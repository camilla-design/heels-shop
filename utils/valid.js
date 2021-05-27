const valid = (name, email, password, confirmed_password) => {
    if(!name || !email || password) {
        return 'Please add all fields';
    }
    if(!validateEmail) {
        return 'Invalid emails';
    }
    if(password.length < 6) {
        return 'Password must be at least 6 characters'
    }
    if(password !== confirmed_password) {
        return 'Confirmed password did not match'
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

export default valid
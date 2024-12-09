


const checkMissingData= (data) => {
    const missingProps =Object.keys(data).filter(key => data[key]?.length === 0);
    return missingProps;
}


function checkPhone(phone) {
    if(!/^\d{10,15}$/.test(phone))
        return 'Invalid phone format'      
}


function checkEmail(email){
    if(!/\S+@\S+\.\S+/.test(email))
        return 'Invalid email format'      
}

function checkPassword(password){

    if (password.length < 8) 
        return 'Password must be at least 8 characters'
      
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password))
        return 'Password must include uppercase, lowercase, number, and special character'
}

function checkName(name){
    if(name.length>50)
        return 'Must be less than 50 characters'
}


function checkPasswordConfirmation(password, c_password){
    if(password!==c_password)
        return 'Passwords do not match'
} 

export {checkMissingData, checkEmail, checkPhone, checkPassword, checkName, checkPasswordConfirmation}
function Validation(values){
    let error = {}
    const usernameOrEmail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.usernameOrEmail === "")
    {
        error.usernameOrEmail = "Name should not be empty"
    }
    else if(!usernameOrEmail_pattern.test(values.usernameOrEmail))
    {
        error.email = "Email Didn't match"
    }
    else
    {
        error.usernameOrEmail = ""
    }

    if(values.password === "") 
    {
    error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) 
    {
         error.password = "Password didn't match"
    } 
    else 
    {
    error.password = "" 
    }
 
    return error;       
}
export default Validation;
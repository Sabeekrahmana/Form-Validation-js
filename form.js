 //FORM VALIDATION JS--->
  var uname = document.getElementById("name");
  var lbluser = document.getElementById("lbluser");
  var email = document.getElementById("mail");
  var lblemail = document.getElementById("lblemail");
  var password = document.getElementById("pwd");
  var lblpwd = document.getElementById("lblpwd");
  var cpassword = document.getElementById("cpwd");
  var lblCpwd = document.getElementById("lblCpwd");

let validateForm = (e) => {

    e.preventDefault();

    let nameVal = uname.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();
    let cpasswordVal = cpassword.value.trim();
  
    //NAME
        nameVal ===""? (lbluser.id ='unsuccess',uname.id ='unsuccessName'):(lbluser.id ='succcess',lbluser.innerHTML ='✔',uname.id ='successName');
  
    //EMAIL
        emailVal ===""? (lblemail.id='unsuccess',email.id ='unsuccessName'):(lblemail.id ='success',lblemail.innerHTML ='✔',email.id ='successName');
  
    //PASSWORD
    if(passwordVal===""){
        lblpwd.id ='unsuccess'
        password.id ='unsuccessName'
    }
    else if(passwordVal.length <= 4){
        lblpwd.id='unsuccess'
        lblpwd.innerHTML='Password must atleast 6 characters'
        password.id ='unsuccessName'
    } 
    else{
        lblpwd.id ='success',lblpwd.innerHTML ='✔'
        password.id ='successName'
    }
    //CONFIRM PASSWORD
    cpasswordVal === passwordVal && passwordVal!==''? (lblCpwd.id='success',cpassword.id ='successName',lblCpwd.innerHTML ='✔'):(lblCpwd.id ='unsuccess',cpassword.id ='unsuccessName');
  
    //FORM SUBMISSION
        nameVal !== '' && emailVal !== '' && passwordVal.length > 4 && cpasswordVal === passwordVal ?
        document.getElementById('myForm').submit():''

}
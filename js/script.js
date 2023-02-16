
let username=document.getElementById('username');
var btnSubmit = document.getElementById("btnSubmit");
// btnSubmit.addEventListener("click", ()=>{
   btnSubmit.addEventListener("click", submitclick);
    function  submitclick()
    {
      if(username.value.trim()=='')
      {
        usernameerror.innerHTML="username caanot be blank";
        usernameerror.style.color='red';
        //alert('username blank');
        return false;
      }
      if(password.value.trim()=='')
      {
        passworderror.innerHTML="passowrd caanot be blank";
        //alert('pwd blank');
        passworderror.style.color='red';
        return false;
      }
    
      if(username.value.trim()=='admin' && password.value.trim()=='12345' )
          {
            //alert('valid user');
            return true;
          }
          else        
          {
            alert('invalid username or password');
            return false;
          } 
   }
   
 function validUserName(){
    let username=document.getElementById('username');
    let usernameerror=document.getElementById("usernameerror");

    if(username.value.trim()=='')
    {
      usernameerror.innerHTML="username caanot be blank";
      usernameerror.style.color='red';
      //alert('username blank');
      return false;
    }
    // if(username.value.trim()=='admin')
    // {
    //   // usernameerror.innerHTML="valid username";
    //   // usernameerror.style.color='green';
    //   return true;
    // }
    // else
    //     {
    //       usernameerror.innerHTML="";
    //       return false;}
   
}
function validPassword(){
    let password=document.getElementById('password');
    let passworderror=document.getElementById("passworderror");
      
    if(password.value.trim()=='')
    {
      passworderror.innerHTML="passowrd caanot be blank";
      //alert('pwd blank');
      passworderror.style.color='red';
      return false;
    }

    // if(password.value.trim()=='12345')
    // {
    //   // passworderror.innerHTML="valid password ";
    //   // passworderror.style.color='green';
    //   return true;
    // }
    // else
    // return false;
}
   
 

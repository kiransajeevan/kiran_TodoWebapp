
function val(hm) {

    var emailCheck = document.getElementById("email").value;
    var passwordCheck = document.getElementById("pwd").value;
    
    
    if ( emailCheck == "admin" && passwordCheck == "12345")
    {
           alert ("Login successfully");
           hm();
    }
    else
    {
        logerror.innerHTML = "Invalid Username Or Password";
        logerror.style.color = "white" ;
        return false;
    }

}

let formid = document.getElementById("fmid");
function main()
{
        formid.setAttribute("action","home.html");
}

function validate()
{
    val(main);
}




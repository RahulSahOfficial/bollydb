const formsubmit=document.querySelector(".formsubmit")
const usernametag=document.querySelector(".username")
const passwordtag=document.querySelector(".password")
var error,loginsuccess
formsubmit.addEventListener("click",validateform)



function validateform(e)
{
    e.preventDefault()
    error=false
    loginsuccess=false
    document.querySelector(".usererror").innerText=""
    document.querySelector(".passerror").innerText=""
    username=usernametag.value.trim()
    password=passwordtag.value.trim()
    if(username.length==0)
    displayerror("username","Username cannot be empty")
    if(password.length==0)
    displayerror("password","Password cannot be empty")
    if(error==false)
    {
        userarr=data["users"]
        for(i=0;i<userarr.length;i++)
        {
            if(userarr[i].username==username&&userarr[i].password==password)
            {
                loginsuccess=true
                break
            }
        }
        if(loginsuccess)
        window.location.href = "movies.html";
        else
        {
            userfound=false
            for(i=0;i<userarr.length;i++)
            {
                if(userarr[i].username==username)
                {
                    userfound=true
                    break
                }
            } 
            if(userfound)
            displayerror("password","Password is incorrect")
            else
            displayerror("username","No user exists with this username")
        }
    }
}
function displayerror(tag,message)
{
    error=true
    if(tag=="username")
    {
        document.querySelector(".usererror").innerText=message
    }
    if(tag=="password")
    {
        document.querySelector(".passerror").innerText=message
    }
}
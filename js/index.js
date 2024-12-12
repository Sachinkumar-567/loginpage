console.log("hello")

document.getElementById('button').addEventListener('click',getFormData)

function getFormData (){

  let user = localStorage.getItem('auth_user')
   if(user !== undefined){
    user = JSON.parse(user)
   }
  
  let username= document.getElementById('username').value
  let password = document.getElementById('password').value
  if(!username ||!password){
    alert("All fields are required")

  }
  else if(user && user?.username === username){
    alert("You are alreay logged in!❤❤❤")
  }
  
  else{
    let data = {
      username:username,
      password:password
    }
    data = JSON.stringify(data)
    localStorage.setItem("auth_user",data)
    window.location.href='/kssindex.html'
   alert("you are logged in succesfully")
  }
}

document.getElementById('showbtn').addEventListener('click',showbutton)
function showbutton (){

   let user = localStorage.getItem('auth_user')
   console.log(user)
   if(user !== undefined){
    user = JSON.parse(user)
   }
   
  }
  document.getElementById('showbtn').addEventListener('click',showbutton)
function showbutton (){

   let user = localStorage.getItem('auth_user')
   console.log(user)
   if(user !== undefined){
    user = JSON.parse(user)
   }
   
  }



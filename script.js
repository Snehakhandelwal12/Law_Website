function SendEmail(){
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let subject=document.getElementById("subject").value;
        let message=document.getElementById("message").value;

        let body="Name:"+name+"<br/> Email:" +email +"<br/> Subject:" +subject +"<br/> Messages:" +message;
        
        Email.send({
       SecureToken :"bdd3dddd-133b-4bec-890c-d99a3ca3d930",
        To : 'snehakhandelwal1202@gmail.com',
        From : "snehakhandelwal1202@gmail.com",
        Subject : "Message From Contact Form",
        Body : body
        }).then(
        message => alert(message)
        );
}

window.onscroll=()=>{
    if(scrollY>250){
        document.querySelector('.gotop').classList.add('active');
    }else{
        document.querySelector('.gotop').classList.remove('active');
    }
    document.querySelector('.navbar').classList.remove('active');
}
let menu=document.querySelector('.menubtn');
menu.onclick=()=>{
    document.querySelector('.navbar').classList.toggle('active');
}

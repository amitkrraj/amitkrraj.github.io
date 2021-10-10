const cname = document.getElementById('formname');
const cemail = document.getElementById('formemail');
const csubject = document.getElementById('formsubject');
const cmessage = document.getElementById('formmessage');
const csend = document.getElementById('send-btn');

csend.addEventListener("click",()=>{
    const link = "mailto:amitkrraj.cse@gmail.com?subject=" + csubject.value + "&body=" + cmessage.value + "%0A" + "%0A" + "%0A" + cname.value  + "%0A" + cemail.value;
    console.log(link);
    window.open(link);
});

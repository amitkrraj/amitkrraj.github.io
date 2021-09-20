const cname = document.getElementById('formname');
const cemail = document.getElementById('formemail');
const csubject = document.getElementById('formsubject');
const cmessage = document.getElementById('formmessage');
const csend = document.getElementById('send-btn');

csend.addEventListener("click",()=>{
    const link = "mailto:rajabhishekmaurya3@gmail.com?subject=" + cname.value + "&body=" + cname.value + "%0A" + cemail.value + "%0A" + csubject.value + "%0A" + cmessage.value;
    console.log(link);
    window.open(link);
});
/*<![CDATA[*/ 
function copyC(e,t){
    var o=document.getElementById(e),
    n=document.getElementById(t),
    e=getSelection(),t=document.createRange();
    e.removeAllRanges(),t.selectNodeContents(n),
    e.addRange(t),document.execCommand("copy"),
    e.removeAllRanges(),o.classList.add("copied"),
    document.getElementById("toastNotif").innerHTML="<span>Copied to Clipboard!</span>",
    document.getElementById("toastNotif2").innerHTML="<span>Copied to Clipboard!</span>",
    document.getElementById("toastNotif3").innerHTML="<span>Copied to Clipboard!</span>",
    setTimeout(()=>{o.classList.remove("copied")},3e3)} /*]]>*/
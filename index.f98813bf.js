class e{constructor(e){const t="https://api.zerobounce.net/v2",a=new XMLHttpRequest;this.apiKey=e,this.getCredits=function(){const s=t+"/getcredits?api_key="+e;if(a.open("GET",s,!1),a.send(),4===a.readyState&&200===a.status)return a.responseText},this.validate=function(s,n){const r=t+"/validate?api_key="+e+"&email="+s;if(a.open("GET",r,!1),a.send(),4==a.readyState&&200==a.status)return a.responseText}}}e=new e("47e5dfb65abc496395678f72fd672e9d");const t=document.querySelector(".check-btn"),a=document.querySelector(".form__input");t.addEventListener("click",(()=>{(t=>{console.log(t.value);let a=t.value;if(!/\S+@\S+\.\S+/.test(a))return alert("please enter a valid email"),!0;if("valid"!==JSON.parse(e.validate(a)).status)return alert("please enter a valid email"),!0;alert("Our congrats email is valid")})(a)}));
//# sourceMappingURL=index.f98813bf.js.map
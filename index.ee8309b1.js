class e{constructor(e){const t="https://api.zerobounce.net/v2",a=new XMLHttpRequest;this.apiKey=e,this.getCredits=function(){const n=t+"/getcredits?api_key="+e;if(a.open("GET",n,!1),a.send(),4===a.readyState&&200===a.status)return a.responseText},this.validate=function(n,r){const o=t+"/validate?api_key="+e+"&email="+n;if(a.open("GET",o,!1),a.send(),4==a.readyState&&200==a.status)return a.responseText}}}e=new e("47e5dfb65abc496395678f72fd672e9d");const t=document.querySelector(".check-btn1"),a=document.querySelector(".form__input1"),n=document.querySelector(".check-btn2"),r=document.getElementById("organization_phone");document.querySelector(".form__input2");t.addEventListener("click",(()=>{(t=>{console.log(t.value);let a=t.value;if(!/\S+@\S+\.\S+/.test(a))return alert("please enter a valid email"),!0;if("valid"!==JSON.parse(e.validate(a)).status)return alert("please enter a valid email"),!0;alert("Our congrats email is valid")})(a)}));document.getElementById("organization_phone").addEventListener("input",(function(e){var t=e.target.value.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);e.target.value=t[2]?"("+t[1]+") "+t[2]+(t[3]?"-"+t[3]:""):t[1]})),n.addEventListener("click",(()=>{const e=1+r.value.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/)[0];console.log(e);var t=new Headers;t.append("apikey","sDckFUtIra6wSfWrWC92MvWjKkPNLWPS"),fetch(`https://api.apilayer.com/number_verification/validate?number=${e}`,{method:"GET",redirect:"follow",headers:t}).then((e=>e.json())).then((e=>{if(e.valid)return alert("Our congrats PHONE NUMBER is valid"),!0;alert("please enter a valid PHONE NUMBER"),console.log(e)})).catch((e=>console.log("error",e)))}));
//# sourceMappingURL=index.ee8309b1.js.map

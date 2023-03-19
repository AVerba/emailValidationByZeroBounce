class ZeroBounceApi {
  constructor(apiKey){
    const baseUrl = "https://api.zerobounce.net/v2";
    const get = new XMLHttpRequest();
    this.apiKey = apiKey;
    this.getCredits = function(){
      const uri = baseUrl + "/getcredits" + "?api_key=" + apiKey;
      get.open('GET', uri, false);
      get.send();
      if (get.readyState === 4 && get.status === 200) {
        return get.responseText;
      }
    }
    this.validate = function(email, ip_address){
      const uri = baseUrl + "/validate" + "?api_key=" + apiKey + "&email=" + email;
      get.open('GET', uri, false);
      get.send();
      if (get.readyState == 4 && get.status == 200) {
        return get.responseText;
      }
    }
  }
}
ZeroBounceApi = new ZeroBounceApi("47e5dfb65abc496395678f72fd672e9d")
const chkBtn =document.querySelector(".check-btn"),
  inputmail=document.querySelector(".form__input");
const checkEmail=(email)=>{
  console.log(email.value)
    let emailStr = email.value,
      re = /\S+@\S+\.\S+/;

    if (!(re.test(emailStr))) {
      alert("please enter a valid email")
      return true
    }
    else{
      const res=JSON.parse(ZeroBounceApi.validate(emailStr))
      if(res.status!=="valid"){
        alert("please enter a valid email")
        return true
      }
      else{
        alert("Our congrats email is valid")
      }
    }
}
chkBtn.addEventListener('click',()=>{
  checkEmail(inputmail)
})



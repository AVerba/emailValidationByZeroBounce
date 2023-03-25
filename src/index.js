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
const chkBtn1 =document.querySelector(".check-btn1"),
  inputmail1=document.querySelector(".form__input1"),
chkBtn2 =document.querySelector(".check-btn2"),
  phoneNumber=document.getElementById("organization_phone"),
  inputMail2=document.querySelector(".form__input2");
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
chkBtn1.addEventListener('click',()=>{
  checkEmail(inputmail1)
})

//===============================
const apiService=(url, options)=>{

  const res= fetch(url,options).then(response=>{
    console.log(response)
    // if(!response){
    //   console.log("ERROR")
    //   // return response.json.then(error=>Promise.reject(error))
    // }
    // return response.json();
  });
}
const fetchEmail = (mail) => {
  const BASE_URL = 'https://api.quickemailverification.com/v1/verify';
  const apiKey='2884c62b7c39b797b2a105be097bfdb96e30e26c90b0ee4a3c51fc61f303'

  return apiService(`${BASE_URL}?email=${mail}&apikey=${apiKey}`,{
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
  });
}

document.getElementById('organization_phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

chkBtn2.addEventListener('click',()=>{
  const numberForCheck = phoneNumber.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  const y=1+numberForCheck[0]
  console.log(y)
  var myHeaders = new Headers();
  const number='19739476185'
  myHeaders.append("apikey", "sDckFUtIra6wSfWrWC92MvWjKkPNLWPS");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/number_verification/validate?number=${y}`, requestOptions)
    .then(response => response.json())
    .then(result => {

      if(result.valid){
        alert("Our congrats PHONE NUMBER is valid")
        return true
      }
      else{
        alert("please enter a valid PHONE NUMBER")
      }
      console.log(result)
    })
    .catch(error => console.log('error', error));


})
/*19739476185*/

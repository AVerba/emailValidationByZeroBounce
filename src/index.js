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
      var uri = baseUrl + "/validate" + "?api_key=" + apiKey + "&email=" + email;
      get.open('GET', uri, false);
      get.send();
      if (get.readyState == 4 && get.status == 200) {
        return get.responseText;
      }
    }
  }
}

 ZeroBounceApi = new ZeroBounceApi("47e5dfb65abc496395678f72fd672e9d")
// ZeroBounceApi.apiKey
// ZeroBounceApi.getCredits()
const res=JSON.parse(ZeroBounceApi.validate("mail_server_did_not_respond@example.com"))

console.log(res)
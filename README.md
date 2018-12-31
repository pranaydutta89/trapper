# Trapper Chrome Extension 

####New way logging your applications error or info messages


#####Steps to follow

1) Install chrome extension from https://chrome.google.com/webstore/detail/trapper/ibgiefpdocmkhbcjbblbiipgpefigafl

2) Include below line where you want to log 
  ```javascript
  window.postMessage({ error_type: "log", message: "Hello log from the webpage!" }, "*");
  //or 
window.postMessage({ error_type: "warn", message: "Hello warn from the webpage!" }, "*");
//or
window.postMessage({ error_type: "error", message: "Hello error from the webpage!" }, "*");

  ```

  3) Open developer tools and go to Trapper tab
  4) Logs will be published automatically,in trapper tab
  5) That's it !!!
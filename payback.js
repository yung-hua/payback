

function buttonPayback() {
  let total = document.getElementById('total').value;
  let pay = document.getElementById('pay').value;
  let fee =document.getElementById("fee");
  let display = document.getElementById("display")
  let displayFivehunderd = document.getElementById("displayFivehunderd");
  let displayHundred = document.getElementById("displayHundred");
  let displayFifty = document.getElementById("displayFifty");
  let dispalyTen = document.getElementById("dispalyTen");
  let displayFive = document.getElementById("displayFive");
  let displayOne = document.getElementById("displayOne");
  let text = document.getElementById("text");
  let payBack = pay - total;
  let hunderdNumber = parseInt(payBack/100);
  let tenNumber = parseInt(payBack/10)%10;
  let oneNumber = parseInt(payBack%10);

    console.log(hunderdNumber, payBack)
    
    if((total >=0  || pay >= 0 ) && payBack >= 0){
        text.textContent = '';
        fee.textContent = payBack +"元";  //印出找錢
         if( hunderdNumber >= 5 ){//當百位數大5時
            text.textContent = ''; //清空當前數字
            let hunderdCount = hunderdNumber - 5; //讓百位數-5
            let fiveHunderedcount = 0;
            fiveHunderedcount += 1; //五百張+1 
            displayFivehunderd.textContent = fiveHunderedcount +'張';//將fiveHunderedcount渲染至網頁
            displayHundred.textContent = hunderdCount +'張';// 將hunderdCount渲染至網頁

        }else if (hunderdNumber < 5 ){ //百位數小於5時
            // text.textContent = ''; //清空當前數字
            displayHundred.textContent = hunderdNumber + '張';
         }
         if(tenNumber >= 5){//當十位數大於5時
            let tenCount = tenNumber - 5;
            let fiftyCount = 0;
            fiftyCount += 1;
            displayFifty.textContent = fiftyCount + '枚';
            dispalyTen.textContent = tenCount + '枚';
         }else if(tenNumber < 5 ){
            dispalyTen.textContent = tenNumber +'枚';
         }
         
         if (oneNumber >= 5) {
            let oneCount = oneNumber - 5;
            let fiveCount = 0;
            fiveCount += 1;
            displayFive.textContent = fiveCount +'枚';
            displayOne.textContent = oneCount + '枚';  
         }else if(oneNumber <5 ){
            displayOne.textContent = oneNumber + '枚';
         }
    }else {
        text.textContent = '';
        text.textContent = '請輸入正確數字'
    }
}





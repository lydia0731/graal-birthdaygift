// 頁面不可見時更改title
document.addEventListener('visibilitychange', () => {
    if(document.visibilityState == 'hidden'){
        normal_title = document.title;
        document.title = '麻麻不見惹QAQ'
    } else {
        document.title = normal_title;
    }
})

// 5秒後顯示通知視窗
window.setTimeout(Timefunction,5000);
function Timefunction(){
    document.getElementById('toastPlacement').style.display = "";
}

// 關閉通知視窗 (bootstrap通知&跳窗的關閉按鈕衝突, 所以自己寫個)
function toastClose(){
    document.getElementById('toastPlacement').style.display = "none";
}

// 顯示賀卡
let cardNum = 2; //賀卡數量
let cardNo = 1; //目前賀卡編號
function greetingCard(){
    if(cardNo <= cardNum) {
        window.clearTimeout(Timefunction);
        document.getElementById('imgCard').src = `./img/Carousel/card-${cardNo}.jpg`;
        cardNo += 1;
        window.setTimeout(Timefunction,2000);
    } else {
        document.getElementById('imgCard').src = './img/happyBirthday.png';
        cardNo = 1;
    }
}
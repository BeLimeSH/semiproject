const iamportPayment = document.getElementById("iamportPayment");
iamportPayment.addEventListener("click", function(){
    
    var IMP = window.IMP;
    IMP.init("imp33404182");
    
    //IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay({ //param
        pg: "html5_inicis", //pg사명 or pg사명.CID
        pay_method: "card",
        merchant_uid: "merchant_" + new Date().getTime(), //주문 번호(중복X 문자열)
        name: "Standard", //상품명
        amount: 100, //금액
        buyer_email: "",
        buyer_name: ""
    }, function(rsp){
        if(rsp.success){
            alert("결제 성공 -> imp_uid : " + rsp.imp_uid + " / merchant_uid : " + rsp.merchant_uid);
        } else {
            alert("결제 실패 : 코드(" + rsp.error_code +") / 메세지(" + rsp.error_msg + ")");
        }
    });
})

// 결제 방법
// const optionBtn = document.getElementsByClassName("option-btn");

// optionBtn[0].addEventListener("", function(){

//     console.log(optionBtn);
//     console.log(optionBtn[1]);
//     console.log(optionBtn[1].nextElementSibling);

// });

const payOptionBox = document.getElementById("pay-option-box");
const payOption = document.getElementsByName("pay-option");

payOptionBox.addEventListener("click", function(){

    for(let i=0; i<4; i++) {

        if(payOption[i].checked){
            payOption[i].previousElementSibling.style.backgroundColor = "white";
            payOption[i].previousElementSibling.style.color = "#ff7E5F";
        } else {
            payOption[i].previousElementSibling.style.backgroundColor = "#ff7E5F";
            payOption[i].previousElementSibling.style.color = "white";
        }
    }
});
// for(let i=0; i<4; i++){

//     payOption[i].addEventListener("change", function(){
        
//         if(this.checked){
//             this.previousElementSibling.style.backgroundColor = "white";
//         }
        
//         if(!this.checked){
//             this.previousElementSibling.style.backgroundColor = "#ff7E5F";
//         }
//     });
// }
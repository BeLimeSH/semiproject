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

//포인트 입력 값 제어하기
const availablePoint = document.getElementById("availablePoint");
const usingPoint = document.getElementById("usingPoint");

const aPoint = availablePoint.innerText.replace(/,/g,"");

usingPoint.addEventListener("change", function(){

    if(this.value > aPoint){
        this.value = aPoint;
    }

    if(this.value < 0){
        this.value = 0;
    }

});

//포인트 모두 사용
$('#allUsed').on("change", function(){

    if($(this).is(":checked")){
        usingPoint.value = aPoint;
    } else {
        usingPoint.value = 0;
    }
});


// 결제 방법
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
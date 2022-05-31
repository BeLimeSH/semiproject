



//플러스 마이너스 버튼 메서드
$('.plusBtn').on("click", function(){

    let count = $(this).prev().text();
    if(count < 6){   
        count++;
    }
    $(this).prev().text(count);
    
});

$('.minusBtn').on("click", function(){
    
    let count = $(this).next().text();
    if(count > 0){   
        count--;
    }
    $(this).next().text(count);

});
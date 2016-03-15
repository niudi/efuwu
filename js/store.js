$(function(){
    $(".mind").click(function(){
        $(".mind img").attr("src","./images/mind-r.png");

    });

        if($(".shade").css("display")=="none"){
            $(".store-address a").click(function(){
                $(".store-phone-num,.shade").css({
                    display:"block"
                })
            })
        }else if($(".shade").css("display")=="block"){
            $(".shade").click(function(){
                $(".store-phone-num,.shade").css({
                    display:"none"
                })
            })
        }
})

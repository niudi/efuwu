$(function(){
    $(".all").click(function(){
        $(".listone").css({
            display:"block"
        }).siblings().css({
            display:"none"
        });
        $(".all-img").css({
            transform:"rotate(180deg)"
        });
        $(".near-img,.sort-img").css({
            transform:"rotate(0deg)"
        });
        $(window).scrollTop(375);
    });
    $(".near").click(function(){
        $(".listtwo").css({
            display:"block"
        }).siblings().css({
            display:"none"
        });
        $(".near-img").css({
            transform:"rotate(180deg)"
        });
        $(".all-img,.sort-img").css({
            transform:"rotate(0deg)"
        });
        $(window).scrollTop(375);

    });
    $(".sort").click(function(){
        $(".listthree").css({
            display:"block"
        }).siblings().css({
            display:"none"
        });
        $(".sort-img").css({
            transform:"rotate(180deg)"
        });
        $(".all-img,.near-img").css({
            transform:"rotate(0deg)"
        });
        $(window).scrollTop(375);

    });



    //选中分类消失
    //111111111
    $(".listone p,window").click(function(){
        $(this).css({
            background:"#fff",
            color:"red"
        }).siblings().css({
            background:"#f5f5f5",
            color:"#000"
        });
        $(".listone").css({
            display:"none"
        });
        var LH=$(this).text();
       $(".all a").html(LH);

        $(".all-img,.near-img,.sort-img").css({
            transform:"rotate(0deg)"
        });
    });

    //2222222222
    $(".listtwo p").click(function(){
        $(this).css({
            background:"#fff",
            color:"red"
        }).siblings().css({
            background:"#f5f5f5",
            color:"#000"
        });;
        $(".listtwo").css({
            display:"none"
        })
        var TH=$(this).text();
        $(".near a").html(TH);
        $(".all-img,.near-img,.sort-img").css({
            transform:"rotate(0deg)"
        });
    });

    //3333333333
    $(".listthree p").click(function(){
        $(this).css({
            background:"#fff",
            color:"red"
        }).siblings().css({
            background:"#f5f5f5",
            color:"#000"
        });
        $(".listthree").css({
            display:"none"
        })
        var HH=$(this).text();
        $(".sort a").html(HH);
        $(".all-img,.near-img,.sort-img").css({
            transform:"rotate(0deg)"
        });
    });
})

$(function(){
    $(".index").click(function(){
        $(".model-index").css({
            display:"block"
        }).siblings().css({
            display:"none"
        });
        $(".index").css({
            color:"#ce0802",
        }).siblings().css({
            color:"#000",
        });
        $(".index img").attr('src',"./images/index-1.png");
        $(".find img").attr('src',"./images/find-0.png");
        $(".card-package img").attr('src',"./images/card-package-0.png");
        $(".my img").attr('src',"./images/my-0.png");
    });


    $(".card-package").click(function(){
        $(".model-card-package").css({
            display:"block"
        }).siblings().css({
            display:"none"
        });
        $(".card-package").css({
            color:"#ce0802",
        }).siblings().css({
            color:"#000",
        });
        $(".card-package img").attr('src',"./images/card-package-1.png");
        $(".index img").attr('src',"./images/index-0.png");
        $(".find img").attr('src',"./images/find-0.png");
        $(".my img").attr('src',"./images/my-0.png");
    });


    $(".find").click(function(){
        $(".model-find").css({
            display:"block"
        }).siblings().css({
            display:"none"
        });
        $(".find").css({
            color:"#ce0802",
        }).siblings().css({
            color:"#000",
        });
        $(".find img").attr('src',"./images/find-1.png");
        $(".index img").attr('src',"./images/index-0.png");
        $(".card-package img").attr('src',"./images/card-package-0.png");
        $(".my img").attr('src',"./images/my-0.png");
    });


    $(".my").click(function(){
        $(".model-my").css({
            display:"block"
        }).siblings().css({
            display:"none"
        });
        $(".my").css({
            color:"#ce0802",
        }).siblings().css({
            color:"#000",
        });
        $(".my img").attr('src',"./images/my-1.png");
        $(".index img").attr('src',"./images/index-0.png");
        $(".find img").attr('src',"./images/find-0.png");
        $(".card-package img").attr('src',"./images/card-package-0.png");
    });
    $(".goods").click(function(){
        window.location.href="./store.html";
    })
});

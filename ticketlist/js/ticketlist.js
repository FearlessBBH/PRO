$(document).ready(function () {
    // Swiper
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: '4000'
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

    });

    // 滚动条监视置顶
    $(window).scroll(function () {
        let aa = $(document).scrollTop();
        let _sf = $(".container > .swiper-container").height();
        if (aa >= _sf) {
            $(".container > .sortfilt").addClass("sf_fixed");
            $(".container > .list").css("margin-top", "1.23rem");
        }
        else {
            $(".container > .sortfilt").removeClass("sf_fixed");
            $(".container > .list").css("margin-top", "0");
        }
    });


    // 【排序】点击
    $(".sortfilt ul.sort > li").on("click", function () {
        $(this).siblings().find("img").attr("src", "images/ticketlist/select_no.png");
        let $this = $(this).find("img");
        if ($this.attr("src") == "images/ticketlist/select_no.png") {
            $this.attr("src", "images/ticketlist/select_Above.png");
        } else if ($this.attr("src") == "images/ticketlist/select_Above.png") {
            $this.attr("src", "images/ticketlist/select_under.png");
        } else {
            $this.attr("src", "images/ticketlist/select_no.png");
        }
    });

    // 筛选层****************************************************************
    // 二选一
    $(".filtarea .radio .item").on("click", function () {
        let $this = $(this);
        let a = $this.index();
        $this.addClass("on").siblings().removeClass("on");
        //console.log(a);
        if (a == 0) {
            $this.parent().next("ul").children("li").first().show().siblings().hide();
        }
        if (a == 1) {
            $this.parent().next("ul").children("li").last().show().siblings().hide();
        }
    });

    // 二选一下面的选项
    $(".filtarea .type > li > div, .filtarea .price > li > div").on("click", function () {
        let $this = $(this);
        $this.addClass("on").siblings().removeClass("on");
    });

    // 只看可交易
    $(".filtarea .check .item").on("click", function () {
        let $this = $(this);
        if ($this.hasClass("on") == true) {
            $this.removeClass("on");
        } else {
            $this.addClass("on");
        }
    });

    // 数字格式化
    $(".filtarea .collect li input").on("blur", function () {
        let _this_v = $(this).val();
        if (_this_v != "") {
            let bb = parseFloat(_this_v).toFixed(2);
            $(this).val(bb);
        }
    });

    // 重置按钮
    $(".filtarea .btn > label:nth-child(1)").on("click", function () {
        $("input").val("");
        $(".filtarea .radio .item:nth-child(1), .filtarea .type > li > div:nth-child(1), .filtarea .price > li > div:nth-child(1)").addClass("on").siblings().removeClass("on");
        $(".filtarea .type > li:nth-child(1), .filtarea .collect > li:nth-child(1)").show().siblings().hide();
        $(".filtarea .check .item").removeClass("on");
    });

    // 点击【筛选】
    $(".sortfilt .filt").on("click", function () {
        $(".mask").show();
        $(".filtarea").animate({
            right: '0'
        }, "fast");
    });

    // 点击遮盖层或者【确定】
    $(".mask, .filtarea .btn label:nth-child(2)").on("click", function () {
        $(".filtarea").animate({
            right: '-8.8rem'
        }, "fast");
        $(".mask").hide();
    });
});
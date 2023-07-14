$(function () {
    $(".color-list").slick({
        centerMode: true,
        centerPadding: "100px",
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    $("#hamburger").on("click", function () {
        $("header").toggleClass("open");
    });
    $("#navi a").on("click", function () {
        $("header").toggleClass("open");
    });
    $('#mask').on("click", function () {
        $("header").removeClass('open');
    });


    $(".customer-review").on("inview", function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).addClass("voice-balloon");
        } else {
            $(this).removeClass("voice-balloon");
        }
    });

    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $(".fadein").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });

});
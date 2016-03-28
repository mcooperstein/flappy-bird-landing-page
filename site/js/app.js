$(".game-title").mouseenter(function () {
    $(this)
        .velocity({
            translateY: "-30px",
            rotateZ: "10deg"
        }, 100, "easeOut")
        .velocity({
            rotateZ: "-8deg"
        }, 150)
        .velocity({
            translateY: "0",
            rotateZ: "0"
        }, {
            duration: 600,
            easing: [500, 14]
        });

    $(".game-title").mouseleave(function () {
        $(this)
            .velocity({
                translateY: "0"
            }, 200);
    });
});

$(".images li").mousedown(function () {
    $(this)
        .velocity({
            scale: "1.5"
        }, 150, "easeInOut")
        .velocity("reverse");
});

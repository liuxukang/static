$(function() {
    $(".labelAdd").on("click", function() {
        console.log("进来了");
        $(".box-mask, .box-modal").show();
    });
    $(".close").on("click", function() {
        $(".box-mask, .box-modal").hide();
    });
    window.onkeydown = function(event) { // console.log(event);
        if (event.keyCode == 27) { // 如果键盘按下 ESC 同样退出
            $('.box-mask, .box-modal').hide();
        }
    }
})

// $(document).ready(function() {
//     // var boxGroupClass = $('.box-mask, .box-modal');
//     $('.laberAdd').click(function() {
//         $('.box-mask, .box-modal').show();
//     })
//     $('.close').click(function() {
//             $('.box-mask, .box-modal').hide();
//         })
//         // onkeydown 事件会在用户按下一个键盘按键时发生。
//     window.onkeydown = function(event) { // console.log(event);
//         if (event.keyCode == 27) { // 如果键盘按下 ESC 同样退出
//             $('.box-mask, .box-modal').hide();
//         }
//     }
// })
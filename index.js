

// 홈페이지 동적 전환
function pageup1(){
    $(".test_set").load("test1.html .test_set");
}
function pageup2(){
    $(".test_set").load("test2.html .test_set");
}
function pageup3(){
    $(".test_set").load("test3.html .test_set");
}
function pageup4(){
    $(".test_set").load("test4.html .test_set");
}
function pageup5(){
    $(".test_set").load("test5.html .test_set");
}
function pageup6(){
    $(".test_set").load("test6.html .test_set");
}
function pageup7(){
    $(".test_set").load("test7.html .test_set");
}
function pageup8(){
    $(".test_set").load("test8.html .test_set");
}
function pageup9(){
    $(".test_set").load("test9.html .test_set");
}
function pageup10(){
    $(".test_set").load("test10.html .test_set");
}

// 프로그레스 이동
var width = 1;
var btn_width = 10;
var cnt = 1;
function realmove() {
    $(".test_set").ready(function(){
        moveprogress();
    });
}

function moveprogress() {
    var elem = document.getElementById("mybar");
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= btn_width) {
            clearInterval(id);
            btn_width += 10;
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
    $("#count").html(cnt + "/10");
    cnt += 1;
}

// 결과값 정리
var value = 0;
function valueplus(){
    value += 1;
}

// 결과화면 이동 / 값 넣기
function result_up(){
    // location.href='result.html'
    $("body").load("result.html");
}
function result(){
    if (value < 3){
        setTimeout(function(){
            $("#finalvalue").html("17점");
            $("#restart_btn_center").css('display', 'flex');
            $(".addthis_inline_share_toolbox").show();
            $("#explain").html("당신의 열등감점수는 매우낮은편이며");
            $("#explain1").html("적당한 열등감은 자기성장에 도움이됩니다.")}, 1500);
    }
    else if (value < 5 && value > 2){
        setTimeout(function(){
            $("#finalvalue").html("39점");
            $("#restart_btn_center").css('display', 'flex');
            $(".addthis_inline_share_toolbox").show();
            $("#explain").html("당신의 열등감점수는 낮은편이며");
            $("#explain1").html("적당한 열등감은 자기성장에 도움이됩니다.")}, 1500)
    }
    else if (value < 7 && value > 4){
        setTimeout(function(){
            $("#finalvalue").html("55점");
            $("#restart_btn_center").css('display', 'flex');
            $(".addthis_inline_share_toolbox").show();
            $("#explain").html("당신의 열등감점수는 보통이며");
            $("#explain1").html("적당한 열등감은 자기성장에 도움이됩니다.")}, 1500);    
    }
    else if (value < 9 && value > 6){
        setTimeout(function(){
            $("#finalvalue").html("78점");
            $("#restart_btn_center").css('display', 'flex');
            $(".addthis_inline_share_toolbox").show();
            $("#explain").html("당신의 열등감점수는 높은편이며");
            $("#explain1").html("적당한 열등감은 자기성장에 도움이됩니다.")}, 1500);
    }
    else if (value < 11 && value > 8){
        setTimeout(function(){
            $("#finalvalue").html("97점");
            $("#restart_btn_center").css('display', 'flex');
            $(".addthis_inline_share_toolbox").show();
            $("#explain").html("당신의 열등감점수는 매우높은편이며");
            $("#explain1").html("적당한 열등감은 자기성장에 도움이됩니다.")}, 1500);
    }
}

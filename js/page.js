$(function () {
    $('#db')
        .click(function () {
            if ($('.main-content .db').is(':hidden')) {
                $('.main-content .db').show(1000);
                $('.main-content .shenlong,.qilongzhu').hide(1000);
                $('.main-content .dbgt,.dbz,.dbchao').hide();
            }
        });

    $("#dbz").click(function () {
        if ($('.main-content .dbz').is(':hidden')) {
            $('.main-content .dbz').show(1000);
            $('.main-content .shenlong,.qilongzhu').hide(1000);
            $('.main-content .db,.dbgt,.dbchao').hide();
        }
    });

    $("#dbgt").click(function () {
        if ($('.main-content .dbgt').is(':hidden')) {
            $('.main-content .dbgt').show(1000);
            $('.main-content .shenlong,.qilongzhu').hide(1000);
            $('.main-content .db,.dbz,.dbchao').hide();
        }
    });

    $("#dbchao").click(function () {
        if ($('.main-content .dbchao').is(':hidden')) {
            $('.main-content .dbchao').show(1000);
            $('.main-content .shenlong,.qilongzhu').hide(1000);
            $('.main-content .db,.dbgt,.dbz').hide();
        }
    })
})
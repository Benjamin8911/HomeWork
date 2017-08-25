class PraiseButton {
    showGood(options) {
        const defaults = {
            fsize:30,
            interval:600,
            color:"blue",
            str:"赞",
            callback:function(){
                console.log("赞！");
            }
        };
        let opts = $.extend({},defaults,options);
        $(this).append("<span class='num' name='num'>" + opts.str + "</span>");
        let box = $('.num');
        let left = $(this).width() / 2 - opts.fsize * 0.8;
        let top = opts.fsize;
        box.css({
            "position": "absolute",
            "left": left + "px",
            "top": '-' + top + 'px',
            "line-height": opts.fsize + 'px',
            "font-size": opts.fsize + 'px',
            "color": opts.color,
             "z-index": 100
        });
        box.animate({
            "font-size": opts.fsize * 1.8 + 'px',
            "opacity": "0",
            "top": '-' + 1.8 * opts.fsize + "px",
        }, opts.interval, function() {
            box.remove();
            opts.callback();
        });
    }
}
export default class Thumb extends PraiseButton{}


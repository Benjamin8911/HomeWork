"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton() {
        _classCallCheck(this, PraiseButton);
    }

    _createClass(PraiseButton, [{
        key: "showGood",
        value: function showGood(options) {
            var defaults = {
                fsize: 30,
                interval: 600,
                color: "blue",
                str: "赞",
                callback: function callback() {
                    console.log("赞！");
                }
            };
            var opts = $.extend({}, defaults, options);
            $(this).append("<span class='num' name='num'>" + opts.str + "</span>");
            var box = $('.num');
            var left = $(this).width() / 2 - opts.fsize * 0.8;
            var top = opts.fsize;
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
                "top": '-' + 1.8 * opts.fsize + "px"
            }, opts.interval, function () {
                box.remove();
                opts.callback();
            });
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb() {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).apply(this, arguments));
    }

    return Thumb;
}(PraiseButton);

exports.default = Thumb;
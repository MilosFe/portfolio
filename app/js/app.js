var app = (function(global, toastr, $) {
    'use strict';
    var init = function() {
        var $headerMenu = $('.header-toggle');
        var $nav = $('.navigation-list');

        var toggleLayout = function() {
            $nav.toggleClass('show');

        };
        myScript();

        $headerMenu.click(function() {
            toggleLayout();
        });
    }

    window.addEventListener("scroll", myScript);

    function myScript() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("header-top").className = "sticky";
        } else {
            document.getElementById("header-top").className = "";
        }
    }
    return {
        init: init
    }

})(window, toastr, jQuery);
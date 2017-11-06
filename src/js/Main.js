var Main = {

    isMenu:false,

    init : function (){
        Main.initHeader();
        Main.initEventHandlers();
        Main.titleAni();
    },

    initHeader : function(){
        var header = $('html');
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                header.addClass("scroll-on");
            } else {
                header.removeClass("scroll-on");
            }
        });
    },

    initEventHandlers : function() {
        $('#hamburger-nav').on('click', Main.toggleMenu);
        $('.toolbar-expand').on('click', Main.toolbarExpand);
        $('.account-add-balance').on('click', Main.accountExpand);
    },

    titleAni : function() {
        TweenMax.from("#main-title", .5, {opacity: 0, scale: 0.5, delay: 0, ease:Bounce.easeOut});
        TweenMax.from("#main-button", .5, {opacity: 0, scale: 0.5, delay: .5, ease:Bounce.easeOut});
    },

    toolbarExpand : function() {
        $('.toolbar-more').slideToggle({height:'60px'}, 200);
        $('.toolbar-more').css('display', 'flex');
        $(this).toggleClass('open');
    },

    toggleMenu : function() {
        $('#sidepanel').slideToggle("fast");
        $('html').toggleClass('side-open');
        $(this).toggleClass('open');


        if($("html.side-open").is(":visible")) {
            TweenMax.staggerFrom("#sidepanel li", .25, {opacity: 0, scale: .75, delay: 0}, 0.05);
            TweenMax.from(".sidepanel-divider", .25, {x: 500, opacity: 0, delay: 0.2});
        }
    },

    accountExpand : function() {
        $('.account-expand').slideToggle("fast");
        $('.account-add-balance').toggleClass('open');
    },
};

$(document).ready(Main.init);
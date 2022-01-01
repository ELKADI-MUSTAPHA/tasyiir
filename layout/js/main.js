$(document).ready(function() {

    /* bottombar fixed on scroll*/
    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("bb").style.position = "fixed";
            document.getElementById("bb").style.width = "100%";
            document.getElementById("bb").style.backgroundColor = "#082f4d";
            document.getElementById("bb").style.top = "0";
            document.getElementById("bb").style.left = "0";

            document.getElementById("bb").style.zIndex = "9999";
            document.getElementById("bb").style.boxShadow = "0px 10px 10px rgba(0,0,0,.1)";

            document.getElementById("bb").style.transition = "5";

        } else {

            document.getElementById("bb").style.position = "relative";
            document.getElementById("bb").style.width = "100%";
            document.getElementById("bb").style.backgroundColor = "#082f4d";
            document.getElementById("bb").style.top = "0";
            document.getElementById("bb").style.zIndex = "999";
            document.getElementById("bb").style.boxShadow = "0px 10px 10px rgba(0,0,0,.0)";

        }

    }


});

function hideFunction() {
    var posts = document.getElementById('hide');

    var buttonHide = document.getElementById('btnHide');

    var checker = document.getElementById('checker');

    if(checker.textContent === 'show'){
        posts.style.display = 'flex';
        checker.textContent = 'hide';
        buttonHide.textContent = 'أقل';
    }else{
        posts.style.display = 'none';
        checker.textContent = 'show';
        buttonHide.textContent = 'المزيد';
    }
}
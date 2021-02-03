window.alert('olá');
$(document).ready(function()
{
    slideToSection();
});

function slideToSection()
{
    $('.nav-link').click(function(e){
        e.preventDefault();
        const _doc = $('html, body');
        const href = $(this).attr('href');

        _doc.animate({
            scrollTop: $( href ).offset().top
        }, 500);
    });
};

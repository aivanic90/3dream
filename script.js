newFunction();

    function newFunction() {
        $(document).ready(function () {
            $('input[type="checkbox"]').click(function () {
                if ($(this).prop("checked") == true) {
                    $(".crtaPrva").addClass("crtaPrvaRot"),
                    $(".crtaDruga").addClass("crtaDrugaSlajd"),
                    $(".crtaTreća").addClass("crtaTrećaRot");
                }
                else if ($(this).prop("checked") == false) {
                    $(".crtaPrva").removeClass("crtaPrvaRot"),
                    $(".crtaDruga").removeClass("crtaDrugaSlajd"),
                    $(".crtaTreća").removeClass("crtaTrećaRot");
                }
            
            
            });
            $(window).scroll(function () {
                if ($(document).scrollTop() > 40) {
                    $(header).addClass("headerScrolled");
                }
                else if ($(document).scrollTop() < 40) {
                    $(header).removeClass("headerScrolled");
                }
            });    
        });  
    }

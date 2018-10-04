jQuery(function ($) {


    //Filter
    $(".thead select").on("change", function () {
        //console.log($(this).val());
        if ($(this).val() !== $(this).find("option[selected]").val()) {
            $('select').not(this).each(function () {
                $(this).val($(this).find("option[selected]").val());
            });
            $(this).closest(".table").find("tbody tr").fadeIn(500).hide();
            //console.log($("." + $(this).attr('id') + '.' + $(this).val() + ""));
            $("." + $(this).attr('id') + '.' + $(this).val() + "").closest("tr").fadeIn(500).show();
        } else {
            $(".table").find("tbody tr").fadeIn(500).show();
        }
    });




    $(window).on("load", function (e) {

        var href = window.location.pathname.split("/");
        //console.log(href);

        if (href[1] === "") {
            $(".header-menu li a").removeClass("active");
            $(".header-menu li:nth-child(1) a").addClass("active");
        } else if (href[1] === "o-kompanii") {
            $(".header-menu li a").removeClass("active");
            $(".header-menu li:nth-child(2) a").addClass("active");
        } else if (href[1] === "proizvodstvo-zhelezobetonnyx-izdelij") {
            $(".header-menu li a").removeClass("active");
            $(".header-menu li:nth-child(3) a").addClass("active");
        } else if (href[1] === "category" || href[1] === "product") {
            $(".header-menu li a").removeClass("active");
            $(".header-menu li:nth-child(4) a").addClass("active");
        } else if (href[1] === "contacts") {
            $(".header-menu li a").removeClass("active");
            $(".header-menu li:nth-child(5) a").addClass("active");
        }

    });



    //Catalogue menu
    $("#catalogue").click(function (e) {
        e.preventDefault();
    });

    $(".plus").click(function () {
        // $(".header-catalogue-menu-submenu").find(".submenu").hide();
        $(this).siblings(".submenu").toggle();
    });

    //Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Slider settings
    var jcarousel = $('.jcarousel');

    jcarousel
        .jcarousel({
            animation: {
                duration: 1000,
                speed: 1000,
                easing: 'linear',
                complete: function () {
                }
            }
        })
        .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true,
        })
        .on('mouseover', function (e) {
            $(this).jcarouselAutoscroll('stop');
        })
        .on('mouseout', function (e) {
            $(this).jcarouselAutoscroll('start');
        });

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });


    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

    //Masonry
    $(window).on('load', function () {

        $('.masonry').masonry({
            columnWidth: '.grid-sizer',
            gutter: 15,
            itemSelector: '.masonry-item',
            percentPosition: 'true',
            fitWidth: true,
        });

    });


    var myJson = {
        "area": [
            {
                "name": "Северо-Западный регион",
                "citys": [
                    {
                        "name": "Архангельск", "id": "1400",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "41" },
                            { "name": "Грузовик 10 тонн", "id": "47" },
                            { "name": "Еврофура 20 тонн", "id": "66" }
                        ]
                    },
                    {
                        "name": "Вологда", "id": "660",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "20" },
                            { "name": "Грузовик 10 тонн", "id": "24" },
                            { "name": "Еврофура 20 тонн", "id": "29" }
                        ]
                    }
                    ,
                    {
                        "name": "Великий Новгород", "id": "190",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "11" },
                            { "name": "Грузовик 10 тонн", "id": "12" },
                            { "name": "Еврофура 20 тонн", "id": "19" }
                        ]
                    }
                    ,
                    {
                        "name": "Мурманск", "id": "1300",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "50" },
                            { "name": "Грузовик 10 тонн", "id": "57" },
                            { "name": "Еврофура 20 тонн", "id": "65" }
                        ]
                    }
                    ,
                    {
                        "name": "Петрозаводск", "id": "430",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "15" },
                            { "name": "Грузовик 10 тонн", "id": "19" },
                            { "name": "Еврофура 20 тонн", "id": "28" }
                        ]
                    }
                    ,
                    {
                        "name": "Санкт-Петербург", "id": "40",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "7" },
                            { "name": "Грузовик 10 тонн", "id": "7.5" },
                            { "name": "Еврофура 20 тонн", "id": "8.5" }
                        ]
                    }
                ]
            },
            {
                "name": "Южный регион",
                "citys": [
                    {
                        "name": "Астрахань", "id": "2100",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "56" },
                            { "name": "Грузовик 10 тонн", "id": "64" },
                            { "name": "Еврофура 20 тонн", "id": "90" }
                        ]
                    }
                    ,
                    {
                        "name": "Волгоград", "id": "1700",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "49" },
                            { "name": "Грузовик 10 тонн", "id": "57" },
                            { "name": "Еврофура 20 тонн", "id": "77" }
                        ]
                    }
                    ,
                    {
                        "name": "Краснодар", "id": "2100",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "56" },
                            { "name": "Грузовик 10 тонн", "id": "64" },
                            { "name": "Еврофура 20 тонн", "id": "90" }
                        ]
                    }
                    ,
                    {
                        "name": "Сочи", "id": "2400",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "66" },
                            { "name": "Грузовик 10 тонн", "id": "79" },
                            { "name": "Еврофура 20 тонн", "id": "98" }
                        ]
                    }
                    ,
                    {
                        "name": "Симферополь", "id": "2200",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "99" },
                            { "name": "Грузовик 10 тонн", "id": "131" },
                            { "name": "Еврофура 20 тонн", "id": "144" }
                        ]
                    }
                ]
            },
            {
                "name": "Центральный регион",
                "citys": [
                    {
                        "name": "Брянск", "id": "1000",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "27" },
                            { "name": "Грузовик 10 тонн", "id": "34" },
                            { "name": "Еврофура 20 тонн", "id": "39" }
                        ]
                    }
                    ,
                    {
                        "name": "Воронеж", "id": "1300",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "35" },
                            { "name": "Грузовик 10 тонн", "id": "39" },
                            { "name": "Еврофура 20 тонн", "id": "49" }
                        ]
                    }
                    ,
                    {
                        "name": "Иваново", "id": "1000",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "29" },
                            { "name": "Грузовик 10 тонн", "id": "33" },
                            { "name": "Еврофура 20 тонн", "id": "39" }
                        ]
                    }
                    ,
                    {
                        "name": "Москва", "id": "720",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "20" },
                            { "name": "Грузовик 10 тонн", "id": "25" },
                            { "name": "Еврофура 20 тонн", "id": "35" }
                        ]
                    }
                    ,
                    {
                        "name": "Рязань", "id": "910",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "28" },
                            { "name": "Грузовик 10 тонн", "id": "38" },
                            { "name": "Еврофура 20 тонн", "id": "46" }
                        ]
                    }
                ]
            },
            {
                "name": "Приволжский Федеральный округ",
                "citys": [
                    {
                        "name": "Казань", "id": "1500",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "45" },
                            { "name": "Грузовик 10 тонн", "id": "59" },
                            { "name": "Еврофура 20 тонн", "id": "76" }
                        ]
                    }
                    ,
                    {
                        "name": "Нижний Новгород", "id": "1100",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "30" },
                            { "name": "Грузовик 10 тонн", "id": "39" },
                            { "name": "Еврофура 20 тонн", "id": "45" }
                        ]
                    }
                    ,
                    {
                        "name": "Самара", "id": "1800",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "45" },
                            { "name": "Грузовик 10 тонн", "id": "59" },
                            { "name": "Еврофура 20 тонн", "id": "79" }
                        ]
                    }
                    ,
                    {
                        "name": "Пенза", "id": "1400",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "36" },
                            { "name": "Грузовик 10 тонн", "id": "46" },
                            { "name": "Еврофура 20 тонн", "id": "66" }
                        ]
                    }
                    ,
                    {
                        "name": "Уфа", "id": "2200",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "52" },
                            { "name": "Грузовик 10 тонн", "id": "69" },
                            { "name": "Еврофура 20 тонн", "id": "92" }
                        ]
                    }
                ]
            },
            {
                "name": "Урал",
                "citys": [
                    {
                        "name": "Екатеринбург", "id": "2400",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "66" },
                            { "name": "Грузовик 10 тонн", "id": "85" },
                            { "name": "Еврофура 20 тонн", "id": "99" }
                        ]
                    }
                    ,
                    {
                        "name": "Ижевск", "id": "1900",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "55" },
                            { "name": "Грузовик 10 тонн", "id": "66" },
                            { "name": "Еврофура 20 тонн", "id": "72" }
                        ]
                    }
                    ,
                    {
                        "name": "Пермь", "id": "2000",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "57" },
                            { "name": "Грузовик 10 тонн", "id": "69" },
                            { "name": "Еврофура 20 тонн", "id": "85" }
                        ]
                    }
                    ,
                    {
                        "name": "Тюмень", "id": "2700",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "78" },
                            { "name": "Грузовик 10 тонн", "id": "98" },
                            { "name": "Еврофура 20 тонн", "id": "119" }
                        ]
                    }
                    ,
                    {
                        "name": "Челябинск", "id": "2500",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "69" },
                            { "name": "Грузовик 10 тонн", "id": "89" },
                            { "name": "Еврофура 20 тонн", "id": "107" }
                        ]
                    }
                ]
            },
            {
                "name": "Сибирь",
                "citys": [
                    {
                        "name": "Барнаул", "id": "4200",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "119" },
                            { "name": "Грузовик 10 тонн", "id": "159" },
                            { "name": "Еврофура 20 тонн", "id": "188" }
                        ]
                    }
                    ,
                    {
                        "name": "Иркутск", "id": "5800",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "160" },
                            { "name": "Грузовик 10 тонн", "id": "206" },
                            { "name": "Еврофура 20 тонн", "id": "263" }
                        ]
                    }
                    ,
                    {
                        "name": "Красноярск", "id": "4800",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "117" },
                            { "name": "Грузовик 10 тонн", "id": "168" },
                            { "name": "Еврофура 20 тонн", "id": "199" }
                        ]
                    }
                    ,
                    {
                        "name": "Омск", "id": "3300",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "94" },
                            { "name": "Грузовик 10 тонн", "id": "119" },
                            { "name": "Еврофура 20 тонн", "id": "158" }
                        ]
                    }
                    ,
                    {
                        "name": "Новосибирск", "id": "4000",
                        "cities": [
                            { "name": "Грузовик 5 тонн", "id": "112" },
                            { "name": "Грузовик 10 тонн", "id": "142" },
                            { "name": "Еврофура 20 тонн", "id": "180" }
                        ]
                    }
                ]
            }
        ]
    };

    $.each(myJson.area, function (index, value) {
        var area_id;
        var city_id;
        var car_id;

        $("#area").append('<option rel="' + index + '" value="' + value.id + '">' + value.name + '</option>');

        $("#area").change(function () {
            //$(this).parent().nextAll().hide();
            $("#length").html("Расстояние: неизвестно").show();
            $("#result").html("Стоимость: не определена").show();
            //console.log($(this));
            if ($(this).val() !== "000") {
                $(this).parent().nextAll().show();
            } else {
                $("#city").find("option:first").text("Выберите город");
                $("#car").find("option:first").text("Выберите грузовик");
                $("#length").html("Расстояние: неопределено").show();
                $("#result").html("Стоимость: не определена").show();
            }
            $("#city, #car").find("option:gt(0)").remove();
            $("#city").find("option:first").text("Выберите город");

            area_id = $(this).find('option:selected').attr('rel');
            //console.log("area INDEX : " + area_id);

            $.each(myJson.area[area_id].citys, function (index1, value1) {
                $("#city").find("option:first").text("Выберите город");
                $("#city").append('<option rel="' + index1 + '" value="' + value1.id + '">' + value1.name + '</option>');
            });

            $("#city").change(function () {
                $("#length").html("Расстояние: неизвестно").show();
                $("#result").html("Стоимость: не определена").show();
                if ($(this).val() !== "000") {
                    $("#length").html("Расстояние: " + $(this).val() + " км").show();
                } else {
                    $("#length").html("Расстояние: неизвестно").show();
                }
            });

        });

        $("#city").change(function () {
            if ($(this).val() !== "000") {
                $(this).parent().next().show();
            } else {
                $("#car").find("option:first").text("Выберите грузовик");
                $("#length").html("Расстояние: неизвестно").show();
                $("#result").html("Стоимость: не определена").show();
            }
            $("#car").find("option:gt(0)").remove();
            $("#car").find("option:first").text("Выберите грузовик");

            city_id = $(this).find('option:selected').attr('rel');
            //console.log("city INDEX : " + city_id);

            $.each(myJson.area[area_id].citys[city_id].cities, function (index2, value2) {
                $("#car").find("option:first").text("Выберите грузовик");
                $("#car").append('<option rel="' + index2 + '" value="' + value2.id + '">' + value2.name + '</option>');
            });

            $("#car").change(function () {
                $("#result").html("Стоимость: не определена").show();
                if ($(this).val() !== "000") {
                    $("#result").html("Стоимость от: " + $(this).val() + " тыс. руб.").show();
                } else {
                    $("#result").html("Стоимость: не определена").show();
                }
            });


        });

    });

});
(function($) {
    "use strict";

    function onScrollAnimations() {
        $('.wp-1').waypoint(function() {
            $('.wp-1').addClass('animated fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp-2').waypoint(function() {
            $('.wp-2').addClass('animated fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp-3').waypoint(function() {
            $('.wp-3').addClass('animated fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp-4').waypoint(function() {
            $('.wp-4').addClass('animated fadeIn');
        }, {
            offset: '75%'
        });
        $('.wp-5').waypoint(function() {
            $('.wp-5').addClass('animated fadeInRight');
        }, {
            offset: '50%'
        });
        $('.wp-6').waypoint(function() {
            $('.wp-6').addClass('animated fadeInLeft');
        }, {
            offset: '50%'
        });
        $('.wp-7').waypoint(function() {
            $('.wp-7').addClass('animated fadeInUp');
        }, {
            offset: '60%'
        });
        $('.wp-8').waypoint(function() {
            $('.wp-8').addClass('animated fadeInUp');
        }, {
            offset: '60%'
        });
    }

    function inputPlaceholders() {
        $('input, textarea').placeholder();
    }

    function scrollToTop() {
        $('.scroll-top').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    }

    function donutChart() {
        var doughnutData = [{
                value: 324,
                color: "#5e98e3",
                highlight: "#424753",
                label: "Completed"
            },
            {
                value: 34,
                color: "#59d0bd",
                highlight: "#424753",
                label: "In backlog"
            },
            {
                value: 20,
                color: "#e8e9ec",
                highlight: "#424753",
                label: "Without ticket"
            }
        ];
        window.onload = function() {
            var c = document.getElementById("chart-area");
            if (c != null) {
                var ctx = c.getContext("2d");
                window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
                    responsive: true,
                    percentageInnerCutout: 80
                });
            } else {
                return false
            }
        };
    }

    function videoModal() {

        // VIMEO

        $('#videoModal').on('shown.bs.modal', function() {
            $("#vimeo-play").vimeo("play");
        });

        $('#videoModal').on('hidden.bs.modal', function() {
            $("#vimeo-play").vimeo("pause");
        });

        // YOUTUBE

        $('#youtube-trigger').click(function() {

            var videoSRC = $(this).attr("data-video"),
                videoSRCauto = videoSRC + "?autoplay=1&html5=1&rel=0&showinfo=0";

            $('#youtubeModal').on('shown.bs.modal', function() {
                $('#youtube-play').attr('src', videoSRCauto);
            });

            $('#youtubeModal').on('hidden.bs.modal', function() {
                $('#youtube-play').attr('src', videoSRC);
            });

        });

    }

    function init() {
        onScrollAnimations();
        inputPlaceholders();
        scrollToTop();
        donutChart();
        videoModal();
    }

    init();

})(jQuery);

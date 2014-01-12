$(function (e){
    var snd = new Audio("audio/goodnews.mp3");
    
    $('*[data-role=simcity]').on("click", function (e){
       var $this = $(this),
           $modal = $('<div class="simcity-modal"><div class="simcity-modal-inner"><h3>'+$this.data('title')+'</h3><p>'+$this.data('message')+'</p><div id="desk"></div><div id="floor"></div><div id="dr-wright"></div><div class="window" id="window2"></div><div class="window"></div></div></div>'),
           h = $modal.children('h3').outerHeight() + $modal.children('p').outerHeight() + 140,
           $background = $('<div id="simcity-modal-background" style="height: 100%; width: 100%; background: rgba(0,0,0,0.4); position: fixed; left: 0; top: 0; z-index: 1"></div>');         
           $modal.css({'height': h, 'z-index': 5000}).show().animate({
               width: "420px",
               left: "-210px",
           }, 500);
        $('body').append($modal);
        $('body').append($background);
        snd.play();
        $('.simcity-modal *').delay(400).fadeIn();
        $('#simcity-modal-background').click(function (e){
            $modal.fadeOut();
            $background.fadeOut().remove();
            snd.pause();
            snd.currentTime=0;
        });
    });

});

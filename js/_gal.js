
(function($) {
    $.fn.gal = function(options){
        var istouch;
        var total=0,totaldeliv=0
        if((!!('ontouchstart' in window)))
        {
            istouch='touchstart';
        }
        else
        {
            istouch='click';
        }
        if(options) $.extend(settings, options);
        var folder,type="png",img,img_delim="~",ajax=false,prefolder;
        var next,prev;
        var current=0;
        var length=0;
        var fungal={
            ajaxs:function(data,f)
            {
                $.ajax({
                    type: "POST",
                    url: "/gallery/getIMGS",
                    data: data,
                    success: f
                });
            },
            fsizegalch:function()
            {
                var size =('innerWidth' in window) ? window.innerWidth : document.body.offsetWidth;
                if (size<=1200) {css='sgal1';prefolder="size1";}
                else
                if (size>1200 && size<1600) {css='sgal2';prefolder="size2";}
                else {css='sgal3';prefolder="size3";}
                document.getElementById('galsize').setAttribute('href', '/css/'+css+'.css');
                return prefolder;
            },
            left:function()
            {
                if(length>1 && $('.gallery img:animated').length==0)
                {
                    if(current<1)
                    {
                        current=length-1;
                    }
                    else
                    {
                        current--;
                    }
                    $('#preloader_gif').removeClass('no_back')
                    $('.preloader').fadeIn(500)

                    $('#for-map img').fadeOut(500,function()
                    {
                        $(this).remove();
                        $('#for-map').append('<img style="opacity:0" src="'+folder+fungal.fsizegalch()+'/'+img[current]+'"/>');
                        $('#for-map img').load(function()
                        {
                            $('#for-map img').animate({opacity:1},500)

                            $('#preloader_gif').addClass('no_back')

                            $('.preloader').fadeOut(500)
                        })
                    })

                    $('#count').text((current+1)+' / '+length)
                }
            },
            right:function()
            {
                if(length>1 && $('.gallery img:animated').length==0)
                {
                    current++;
                    if(current>length-1)
                    {
                        current=0;
                    }
                    $('.preloader').fadeIn(500)

                    $('#preloader_gif').removeClass('no_back')
                    $('#for-map img').fadeOut(500,function()
                    {
                        $(this).remove();
                        $('#for-map').append('<img style="opacity:0; " src="'+folder+fungal.fsizegalch()+'/'+img[current]+'"/>');
                        $('#for-map img').load(function()
                        {
                            $('#for-map img').animate({opacity:1},500)

                            $('#preloader_gif').addClass('no_back')
                            $('.preloader').fadeOut(500)
                        })

                    })
                    $('#count').text((current+1)+' / '+length)

                }
            }
        }
        fungal.fsizegalch();
        $(this).on(istouch,function()
        {
            db = $(this).data('db')
            folder=$(this).data('folder')
            type=(typeof($(this).attr('data-type'))!=="undefined")?$(this).attr('data-type'):type;
            current=parseInt((typeof($(this).attr('data-current'))!=="undefined")?$(this).attr('data-current'):current);
            ajax=(typeof($(this).data('ajax'))!=="undefined")?$(this).data('ajax'):ajax
            if(ajax) {
                fungal.ajaxs({dir:folder,db:db},function(data)
                {
                    img=eval(data)
                    console.log(img)
                    length=img.length;
                    if(current>length-1) current=length-1
                    $('#preloader_gif').removeClass('no_back')
                    $('.preloader').fadeIn(500)
                    $('#for-map').append('<img style="opacity:0; " src="'+folder+fungal.fsizegalch()+'/'+img[current]+'"/>');
                    $('#for-map img').load(function()
                    {
                        $('#for-map img').animate({opacity:1},500)
                         $('#preloader_gif').addClass('no_back')
                        $('.preloader').fadeOut(500)
                    })
                    $('#count').text((current+1)+' / '+length)
                    if(length<=1)
                    {
                        $('.gal_arrow').addClass('display-none')
                    }
                    else
                    {
                        $('.gal_arrow').removeClass('display-none')
                    }
                })

            }
            else
            {
                img_delim=(typeof($(this).data('img-delim'))!=="undefined")?$(this).data('img-delim'):img_delim
                img=$(this).data('img');
                if(img.indexOf(img_delim)==-1)
                {
                    img=[$(this).data('img')];
                }
                else
                {
                    img=img.split(img_delim);
                }

                length=img.length
                current=length-1
                $('.preloader').fadeIn(500)
                $('#preloader_gif').removeClass('no_back')
                $('#for-map').append('<img style="opacity:0; " src="'+folder+fungal.fsizegalch()+'/'+img[current]+'"/>');
                $('#for-map img').load(function()
                {
                    $('#for-map img').animate({opacity:1},500)
                    $('#preloader_gif').addClass('no_back')
                    $('.preloader').fadeOut(500)
                })
                $('#count').text(current+1+' / '+length)
                if(length<=1)
                {
                    $('.gal_arrow').addClass('display-none')
                }
                else
                {
                    $('.gal_arrow').removeClass('display-none')
                }
            }
            $('.gallery').removeClass('display-none');

        })
        $('.top_right_arrow div').on(istouch,function()
        {
            fungal.right();
        })
        $('.top_left_arrow  div').on(istouch,function()
        {
            fungal.left();
        })
        $('.galery_back').on(istouch,function(){
            $('.gallery').addClass('display-none')
            $('#for-map img,#for-map div').remove();
            $('#count').text('')
            $('.gal_arrow').removeClass('display-none')
        })
        $('.close_photos_gal').on(istouch,function()
        {
            $('.gallery').addClass('display-none')
            $('#for-map img,#for-map div').remove();

            $('#count').text('')
            $('.gal_arrow').removeClass('display-none')
        })
        $(window).resize(function()
        {
            $('.galery_back').trigger(istouch);
            fungal.fsizegalch();
        })
        $(document).keydown(function(e)
        {
            if(e.keyCode==27)
            {
                $('.galery_back').trigger(istouch)
            }
            if(e.keyCode==39)
            {
                //?????
                fungal.right()
            }
            if(e.keyCode==37)
            {
                //????
                fungal.left()
            }

        })

    }
}
    )(jQuery);
$(function()
{
    $('.gal').gal();
})

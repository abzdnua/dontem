var div_to;
var exist = [];

function getBlock(type,elem){
    elem = elem.parents('.btn-group')
    console.log(type,elem)
    num = $('.editor_block',elem.parent()).length+1

    if(elem.index('.btn-group')==$('.btn-group').length-1){
        pos = parseInt($('select',elem.prev()).val())+1
    }else{
        pos = parseInt($('select',elem.next()).val())
    }
    console.log(num,pos)
    $.post('/admin/redactor/getBlock',{type:type,num:num,pos:pos},function(response){
        elem.after(response)
        if($('textarea',elem.next()).length>0){
            $('textarea:not(.justTextarea)',elem.next()).ckeditor({toolbar:[["Bold","Italic"],["Link","Unlink"],["BulletedList"]],height:'400',resize_enabled:false})
        }
        elem.next().after(elem.clone())
        console.log(response)
        repos(elem.index('.btn-group',elem.parent()),elem.parent())
    })
    return false
}


function repos(index,parent){
    for (var i = index+1; i < $('.editor_block',parent).length; i++) {
        var sel = $('select',$('.editor_block',parent).eq(i))
        sel.val(parseInt(sel.val())+1)
    };
}

function addProdToBlock(id){
        var div_to_cur = div_to
        var add = true;
        $('.prod_placeholder',div_to_cur.parent()).each(function(){
            if($(this).children('[type=hidden]').val()==id){
                add = false;
                console.log('~/~')
            }

        })
        if(add){
            $.post('/admin/redactor/getProd',{id:id},function(response){
                var prod_id = div_to_cur.children('input[type=hidden]').clone()
                div_to_cur.html(response)
                prod_id.appendTo(div_to_cur).val(id)
            })
        }

}
$(document).ready(function(){
$('button[type=submit]').prop('type','button').addClass('form_submit')

$('.EDITOR').each(function(){
    var th = $(this)
    var bt = $('.btn-group:first',th).clone()
    var blocks = $('.editor_block',th)
    bt.insertAfter(blocks)
})


if($('.editor_block textarea:not(.justTextarea)').length>0)
    $('.editor_block textarea:not(.justTextarea)').ckeditor({toolbar:[["Bold","Italic"],["Link","Unlink"],["BulletedList"]],height:'400',resize_enabled:false})

    $(document).on('click','.editor_block > .close',function(){
        var textarea = $('textarea:not(.justTextarea)',$(this).parents('.editor_block'))
        if(textarea.length>0){
        var editor = textarea.ckeditorGet()
            editor.destroy()
        }
        $(this).parents('.editor_block').next('.btn-group').remove()
        $(this).parents('.editor_block').remove()
    }).on('click','.prod_placeholder',function(){
        $('#dataModal').modal().css({
            'width':$(window).width()-200+'px',
            'margin-left': function () {
                return -($(this).width() / 2);
            }
        })
        div_to = $(this);
        console.log($(this).index('.prod_placeholder',$(this).parent()))
    }).on('click','.prod_placeholder .close',function(){
        var to_div = $(this).parents('.prod_placeholder')
        var prod_id = to_div.children('input[type=hidden]').clone()
        for(var i in exist){
            if(exist[i] == prod_id.val()){
                exist.splice(i,1)
                console.log(exist)
            }
        }
        to_div.html('<div class="no_product_yet">Выбрать товар</div>')
        prod_id.appendTo(to_div).val('')

    }).on('click','.form_submit',function(){
        var short_des = $('[name*=short_des]')
        console.log(short_des)
        short_des_editor = CKEDITOR.instances[short_des.attr('id')]
        short_des.val(short_des_editor.getData())
        $('.editor_block').each(function(i){
            console.log(i)
            var textarea = $('textarea:not(.justTextarea)',$(this))
            console.log(textarea)
            if(textarea.length>0){
            console.log(textarea.offset().top)

                editor = textarea.ckeditorGet()
                if(editor.getData().trim()==''){
                    textarea.addClass('empty_red')

                }else{
                    textarea.removeClass('empty_red')
                }
            }

            if($('.fileId',$(this)).val()==''){
                $('.fileId',$(this)).siblings('.upload').addClass('empty_red')
            }else{
                $('.fileId',$(this)).siblings('.upload').removeClass('empty_red')
            }

            if($('.videoLink',$(this)).val()==''){
                $('.videoLink',$(this)).addClass('empty_red')
            }else{
                $('.videoLink',$(this)).removeClass('empty_red')
            }

            if($('[name*=block_type]',$(this)).val()=='gallery'){
                if($('[name*=gal_id]',$(this)).length == 0){
                    $('[name*=block_type]',$(this)).addClass('empty_red')
                }else{
                    $('[name*=block_type]',$(this)).removeClass('empty_red')
                }
            }
            if($('.empty_red',$(this)).length>0){
                $(this).css('border','1px solid #b94a48')
                $('.error_hint',$(this)).show()
            }else{
                $(this).css('border','1px solid #e3e3e3')
                $('.error_hint',$(this)).hide()
            }


        })

console.log($('.empty_red').length)
    var req_fill = true
        for (var i = $('label.required').length - 1; i >= 0; i--) {
            console.log($('label.required').eq(i))
            if($('#'+$('label.required').eq(i).attr('for')).val().trim()==''){
                $('#'+$('label.required').eq(i).attr('for')).focus()
                req_fill = false
                $('#'+$('label.required').eq(i).attr('for')).blur()
            }
        };
        if($('.empty_red').length>0 || !req_fill){
            $(window).scrollTop(100)
            $.notify('Необходимо заполнить поля помеченные красным')
            return false
        }else{
            $(this).parents('form').submit()
        }

    }).on('focusout','[name*=video_path]',function(){
        var th = $(this)
        if(th.val()){
            var path = th.val()
            var res = '//www.youtube.com/v/'+path.substring(path.indexOf('v=')+2)
            console.log(res)
            th.siblings('.video_preview').html('<object  class="f_l" width="460" height="280"><param name="movie" value="'+res+'?version=3&amp;hl=ru_RU"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="'+res+'?version=3&amp;hl=ru_RU" type="application/x-shockwave-flash" width="460" height="280" allowscriptaccess="always" allowfullscreen="true"></embed></object><br><a class="clear_video_link">Удалить</a>')
            $('[name*=video_link]').val(res)
        }
    }).on('click','.clear_video_link',function(){
        $('[name*=video_link]').val('')
        $(this).parent().remove()
    })
})

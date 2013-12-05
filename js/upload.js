$(document).ready(function(){
    $(document).on('change','.upload',function(){
        var th = $(this)
        $('input[type=file]').attr('disabled',true)
        $('[name=md5_name]').attr('disabled',true)
        $('[name=img_type]').attr('disabled',true)
        th.removeAttr('disabled')
        th.siblings('[name=md5_name]').removeAttr('disabled')
        th.siblings('[name=img_type]').removeAttr('disabled')
        if (th.val()=='') return false;
        $('input[type=file]',th.parents('form')).attr('disabled',true)
        $('input[name=img_type]').attr('disabled',true)
        th.siblings('input[name=img_type]').removeAttr('disabled')
        th.attr('disabled',false)
        var data = {
            url: '/admin/files/upload',
            beforeSubmit: function(jqForm){
//                $(this).attr('disabled','disabled')
                console.log(jqForm)
                th.siblings('.preloader').show()
            },
            success: function(responseText){
                console.log(responseText)
                data = $.parseJSON(responseText)
                console.log(data)
                if(data['err'].length==0){
                    th.siblings('.fileId').val(data['success'][0]['id'])
                    th.siblings('.preview').html('<img src="/files/'+data['success'][0]['fileName']+'" style="max-width:100%"/>').show()

                th.val('')
                $('input[type=file]').removeAttr('disabled')
                }else{
                    th.notify(data['err'][0]['err_msg'])
                    $('input[type=file]').removeAttr('disabled')
                    $('[name=md5_name]').removeAttr('disabled')
                    $('[name=img_type]').removeAttr('disabled')
                    th.val('')
                }
                th.siblings('.preloader').hide()
                th.clearInputs();
                $('input[type=file]',th.parents('form')).attr('disabled',false)
                th.siblings('input[name=img_type]').removeAttr('disabled')
            }
        }
        $('[name=field_name]').val(th.attr('name'))
        th.parents('form').ajaxSubmit(data)
        return false
    }).on('change','.uploadMulti',function(){
           th = $(this)
        $('input[type=file]').attr('disabled',true)
        $('[name=md5_name]').attr('disabled',true)
        $('[name=img_type]').attr('disabled',true)
        th.removeAttr('disabled')
        th.siblings('[name=md5_name]').removeAttr('disabled')
        th.siblings('[name=img_type]').removeAttr('disabled')
        if (th.val()=='') return false;
        var data = {
            url: '/admin/files/upload',
            beforeSubmit: function(jqForm){
//                $(this).attr('disabled','disabled')
                console.log(jqForm)
                th.siblings('.preloader').show()
            },
            success: function(responseText){
                console.log(responseText)
                data = $.parseJSON(responseText)
                console.log(data)

                if(data['err'].length>0){
                    var err_msg = ''
                    for(var i = 0;i<data['err'].length;i++){
                        err_msg += data['err'][i]['fileName']+' - '+data['err'][i]['err_msg']+'\n'
                    }
                    $('.previewMulti').notify(err_msg)
                }

                if(data['success'].length>0){
                    var imgHTML = ''
                    for(var i = 0;i<data['success'].length;i++){
                        imgHTML += '<div class="miniImg">'+
                                    '<img src="/files/m_'+data['success'][i]['fileName']+'" style="max-width:200px"/>'+
                                    '<input type="hidden" name="diplomas[]" value="'+data['success'][i]['id']+'"/>'+
                                    '<br><a class="remove_img">Удалить</a>'+
                                    '</div>'
                    }
                    $('.previewMulti').append(imgHTML)
                }
                th.siblings('.preloader').hide()
                $('input[type=file]').removeAttr('disabled')
                $('[name=md5_name]').removeAttr('disabled')
                $('[name=img_type]').removeAttr('disabled')
                th.val('')
            }
        }
        $(this).parents('form').ajaxSubmit(data)
        return false
    }).on('change','.uploadGallery',function(){
           th = $(this)
        $('input[type=file]').attr('disabled',true)
        $('[name=md5_name]').attr('disabled',true)
        $('[name=img_type]').attr('disabled',true)
        th.removeAttr('disabled')
        th.siblings('[name=md5_name]').removeAttr('disabled')
        th.siblings('[name=img_type]').removeAttr('disabled')
        if (th.val()=='') return false;
        var data = {
            url: '/admin/files/upload',
            beforeSubmit: function(jqForm){
//                $(this).attr('disabled','disabled')
                console.log(jqForm)
                th.siblings('.preloader').show()
            },
            success: function(responseText){
                console.log(responseText)
                data = $.parseJSON(responseText)
                console.log(data)

                if(data['err'].length>0){
                    var err_msg = ''
                    for(var i = 0;i<data['err'].length;i++){
                        err_msg += data['err'][i]['fileName']+' - '+data['err'][i]['err_msg']+'\n'
                    }
                    $('.previewMulti').notify(err_msg)
                }

                if(data['success'].length>0){
                    var imgHTML = ''
                    var num = $('[name=num]',th.parents('.editor_block')).val()
                    for(var i = 0;i<data['success'].length;i++){
                        imgHTML += '<div class="miniImg">'+
                                    '<img src="/files/gallery/'+data['success'][i]['fileName']+'" style="max-height:125px"/>'+
                                    '<input type="hidden" name="gal_id['+num+'][]" value="'+data['success'][i]['gal_id']+'"/>'+
                                    '<br><a class="remove_img">Удалить</a>'+
                                    '</div>'
                    }
                    $('.previewMulti').append(imgHTML)
                }
                th.siblings('.preloader').hide()
                $('input[type=file]').removeAttr('disabled')
                $('[name=md5_name]').removeAttr('disabled')
                $('[name=img_type]').removeAttr('disabled')
                th.val('')
            }
        }
        $(this).parents('form').ajaxSubmit(data)
        return false
    }).on('click','.remove_img',function(){
   
        if(confirm('Вы действительно желаете удалить данное фото?'))
        {
            $(this).parent().remove()
        }
        else
        {
            return false
        }
    })
})

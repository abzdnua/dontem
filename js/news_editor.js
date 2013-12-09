$(document).ready(function(){
  function addTag()
  {
      var tagHolder = $('[name=news_tag]');
      var tag = tagHolder.val()
      var uniq = true
    $('.my_label').each(function(){
      if($(this).children('input').val().toLowerCase()==tag.toLowerCase()){
        uniq = false
      }
    })
      console.log(uniq)

      if(uniq)
      $('.forTags').append('<div class="label my_label label-info">'+tag+
                            '<button type="button" class="pull-right close" aria-hidden="true">&times;</button>'+
                            '<input type="hidden" name="tag[]" value="'+tag+'" />'+
                            '</div>')
      tagHolder.val('')
      tagHolder.focus()
  }


  $(document).on('click','.add_tag_btn',function(){
      addTag()
  }).on('click','.my_label .close',function(){
      $(this).parent().remove()
  })
})

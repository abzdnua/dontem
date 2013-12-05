<?php
    $this->pageTitle = Yii::app()->name;
    Yii::app()->clientScript->registerScriptFile('/js/jquery-ui_1.9.1.js');

?>

<script type="text/javascript">
    $(document).ready(function(){
        $('.help').accordion()
        $('.help').accordion( "option", "heightStyle", "content" );
    })
</script>
<h1>Справка пользователя администраторской части</h1>
<div class="help">
    <h3>Работа с текстовыми редакторами</h3>
    <div>
        <div style="height:500px">        
            <p>
                Для правильного отображения текста на сайте необходимо соблюдать определенные правила форматирования:<br>
                <ul>
                    <li>Заголовок идущий после абзаца отделять <strong>тройным</strong> нажатием кнопки <strong>Enter</strong></li>
                    <li>Абзацы между собой, так же как и абзац идущий после заголовка, отделять <strong>двойным</strong> нажатием кнопки <strong>Enter</strong></li>
                </ul>
            </p>
            <div class="clearfix"><hr></div>
            <img src="/images/help_use_redactor.PNG" title="В редакторе" class="pull-right" style="width:500px"/>
            <img src="/images/help_use_redactor_show.PNG" title="На сайте" class="pull-left" style="width:500px"/>
            <div class="clearfix"></div>
        </div>
    </div>
    <!-- <h3>Ntvf</h3>
    <div>Ntrcn</div>
    <h3>Ntvf</h3>
    <div>Ntrcn</div>
    <h3>Ntvf</h3>
    <div>Ntrcn</div> -->
</div>




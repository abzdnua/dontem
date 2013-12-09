    <div class="w_940 big_text">
<?php
    $text = BlockText::model()->find('block_id = '.$block_id);
    // стилями было бы проще
    $result = str_replace('<ul>', '', $text->content);
    $result = str_replace('</ul>', '', $result);
    $result = str_replace('<li>', '<div class="arrow_left">', $result);
    $result = str_replace('</li>', '</div>', $result);

    echo $result;
?>
</div>


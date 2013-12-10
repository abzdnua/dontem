
<div class="blue_block" >
<?php
    $text = BlockText::model()->find('block_id = '.$block_id);
    // стилями было бы проще
    echo "<div><span style='max-height: 52px;display: inline-block;overflow: hidden;max-width: 900px;'>$text->content</span></div>";
?>
</div>

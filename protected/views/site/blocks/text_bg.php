
<div class="blue_block" style="width: 937px;">
<?php
    $text = BlockText::model()->find('block_id = '.$block_id);
    // стилями было бы проще
    echo "<div><span style='height: 52px;display: inline-block;overflow: hidden;max-width: 900px;'>$text->content</span></div>";
?>
</div>

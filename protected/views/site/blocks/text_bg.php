
<div class="blue_block" style="margin-bottom: 40px;">
<?php
    $text = BlockText::model()->find('block_id = '.$block_id);
    // стилями было бы проще
    echo "<div>$text->content</div>";
?>
</div>

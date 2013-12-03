<?php /* @var $this Controller */ ?>
<?php $this->beginContent('//layouts/admin'); ?>

<div class="<?=($this->menu)?'span-19':''?>">
	<div id="content">
		<?php echo $content; ?>
	</div><!-- content -->
</div>
<div class="span-8 last">
	<div id="sidebar">
	<?php
//		$this->beginWidget('zii.widgets.CPortlet', array(
//			'title'=>'Operations',
//		));
    if($this->menu)
		$this->widget('bootstrap.widgets.TbMenu', array(
            'type'=>'list',
			'items'=>array_merge(array(array('label'=>'Действия')),$this->menu),
//			'htmlOptions'=>array('class'=>'operations'),
		));
//		$this->endWidget();
	?>
	</div><!-- sidebar -->
</div>
<?php $this->endContent(); ?>
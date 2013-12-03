<?php

class HowToUseController extends Controller
{
	/**
	 * @var string the default layout for the views. Defaults to '//layouts/column2', meaning
	 * using two-column layout. See 'protected/views/layouts/column2.php'.
	 */
	public $layout='//layouts/column2';

	/**
	 * @return array action filters
	 */
	public function filters()
	{
		/*return array(
			'accessControl', // perform access control for CRUD operations
		);*/
        return array(
            'ajaxOnly + addbutton',
        );
	}

	/**
	 * Specifies the access control rules.
	 * This method is used by the 'accessControl' filter.
	 * @return array access control rules
	 */
	public function accessRules()
	{
		return array(
			array('allow',  // allow all users to perform 'index' and 'view' actions
				'actions'=>array('index','view'),
				'users'=>array('@'),
			),
			array('allow', // allow authenticated user to perform 'create' and 'update' actions
				'actions'=>array('create','update'),
				'users'=>array('@'),
			),
			array('allow', // allow admin user to perform 'admin' and 'delete' actions
				'actions'=>array('admin','delete'),
				'users'=>array('@'),
			),
			array('deny',  // deny all users
				'users'=>array('*'),
			),
		);
	}

	/**
	 * Displays a particular model.
	 * @param integer $id the ID of the model to be displayed
	 */
	public function actionView($id)
	{
		$this->render('view',array(
			'model'=>$this->loadModel($id),
		));
	}
    public function actionAddbutton($m=null)
    {
        if(is_object($m))
        {
            $model=$m;
            $active=$m->active_content;
        }
        else
        {
            $model=new HowToUse();
            $active=1;
        }

       echo  '<div class="howtouseblock">
                 <div class="pull-left" style="width:48%">';
                     $tabs['tab1'] =array('label'=>'Фото','content'=>Controller::renderPartial("_file", array('model' =>$model),true,false),'id'=>'tab'.uniqid(),'active'=>($active==0 OR $active==1)?true:false);
                     $tabs['tab2'] =array('label'=>'Видео','content'=>Controller::renderPartial("_video", array('model' => $model),true,false),'id'=>'tab'.uniqid(),'active'=>($active==2)?true:false);

                     Controller::widget('bootstrap.widgets.TbTabs', array(
                         'type'=>'tabs',
                         'tabs'=>$tabs
                     ));
        echo '</div>

        <div class="pull-right" style="width:48%">';
        $labtextarea=uniqid();
        echo CHtml::activeLabelEx($model,'content',array('for'=>$labtextarea));
        echo CHtml::activeTextArea($model,'content',array('rows'=>6, 'cols'=>50,'class'=>'','id'=>$labtextarea,'style'=>'float:left;width:427px;height: 250px;'));
        echo CHtml::error($model,'content');
        echo '</div>
        <div class="clr"></div>
        <div class="nav-tabs"></div>';
        $labpos=uniqid();
        echo CHtml::activeLabelEx($model,'position',array('for'=>$labpos));
        echo CHtml::activeTextField($model,'position',array('id'=>$labpos,'class'=>'span5'));
        echo CHtml::error($model,'position');
        echo '</div>';
    }
	/**
	 * Creates a new model.
	 * If creation is successful, the browser will be redirected to the 'view' page.
	 */
	public function actionCreate()
	{
		$model=new HowToUse;

		// Uncomment the following line if AJAX validation is needed
		// $this->performAjaxValidation($model);

		if(isset($_POST['HowToUse']))
		{
			$model->attributes=$_POST['HowToUse'];

			if($model->save())
            {
                if($model->img_name){
                    $files =Files::model()->findByPk($model->img_name);
                    $files->table_name = $model->tableName();
                    $files->obj_id = $model->id;
                    $files->type = 1;
                    $files->used = 1;
                    //  CVarDumper::dump($files);
                    $files->save();
                }
                $this->redirect(array('index'));
            }

		}

		$this->render('create',array(
			'model'=>$model,
		));
	}

	/**
	 * Updates a particular model.
	 * If update is successful, the browser will be redirected to the 'view' page.
	 * @param integer $id the ID of the model to be updated
	 */
	public function actionUpdate($id)
	{
		$model=$this->loadModel($id);

		// Uncomment the following line if AJAX validation is needed
		$this->performAjaxValidation($model);
        print_r($_POST);
        print_r($model->products_id);
		if(isset($_POST['HowToUse']))
		{

			$model->attributes=$_POST['HowToUse'];
            if(isset($_POST['HowToUse']['activephoto']))
            {
                $model->active_content=1;
            }
            if(isset($_POST['HowToUse']['activevideo']))
            {
                $model->active_content=2;
            }
            $model->img_name=$_POST['HowToUse']['img_name'];
            $model->video_name=$_POST['HowToUse']['video_name'];

            echo "<br /><br />";
            //CVarDumper::dump($model);

			if($model->save())
            {
                if($model->img_name){
                    Files::model()->updateAll(array('used'=>0),'table_name = "'.strtolower($model->tableName()).'" and obj_id = '.$model->id." and type=1");
                    $files =Files::model()->findByPk($model->img_name);
                    $files->table_name = $model->tableName();
                    $files->obj_id = $model->id;
                    $files->type = 1;
                    $files->used = 1;
                    //  CVarDumper::dump($files);
                    $files->save();
                }
                if($model->video_name){
                    Files::model()->updateAll(array('used'=>0),'table_name = "'.strtolower($model->tableName()).'" and obj_id = '.$model->id." and type=2");
                    $video=new Files();
                    $video->path=$model->video_name;
                    $video->table_name = $model->tableName();
                    $video->obj_id = $model->id;
                    $video->type = 2;
                    $video->used = 1;
                    //  CVarDumper::dump($files);
                    $video->save();
                }
                //$this->redirect(array('index'));
            }
		}

		$this->render('update',array(
			'model'=>$model,
		));
	}

	/**
	 * Deletes a particular model.
	 * If deletion is successful, the browser will be redirected to the 'admin' page.
	 * @param integer $id the ID of the model to be deleted
	 */
	public function actionDelete($id)
	{
		if(Yii::app()->request->isPostRequest)
		{
			// we only allow deletion via POST request
                $model = $this->loadModel($id);
                $model->deleted = 1;
                $model->save(false);

			// if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
			if(!isset($_GET['ajax']))
				$this->redirect(isset($_POST['returnUrl']) ? $_POST['returnUrl'] : array('index'));
		}
		else
			throw new CHttpException(400,'Invalid request. Please do not repeat this request again.');
	}

	/**
	 * Manages all models.
	 */
	public function actionIndex()
	{
		$model=new HowToUse('search');
		$model->unsetAttributes();  // clear any default values
		if(isset($_GET['HowToUse']))
			$model->attributes=$_GET['HowToUse'];

		$this->render('admin',array(
			'model'=>$model,
		));
	}

	/**
	 * Returns the data model based on the primary key given in the GET variable.
	 * If the data model is not found, an HTTP exception will be raised.
	 * @param integer the ID of the model to be loaded
	 */
	public function loadModel($id)
	{
		$model=HowToUse::model()->findByPk($id);
		if($model===null)
			throw new CHttpException(404,'The requested page does not exist.');
		return $model;
	}

	/**
	 * Performs the AJAX validation.
	 * @param CModel the model to be validated
	 */
	protected function performAjaxValidation($model)
	{
		if(isset($_POST['ajax']) && $_POST['ajax']==='how-to-use-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}
}

<?php

class ConstructionCrewController extends Controller
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
		return array(
			'accessControl', // perform access control for CRUD operations
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

	/**
	 * Creates a new model.
	 * If creation is successful, the browser will be redirected to the 'view' page.
	 */
	public function actionCreate()
	{
		$model=new ConstructionCrew;

		// Uncomment the following line if AJAX validation is needed
		// $this->performAjaxValidation($model);

		if(isset($_POST['ConstructionCrew']))
		{
			$model->attributes = $_POST['ConstructionCrew'];
            $model->img_main = $_POST['ConstructionCrew']['img_main'];
            $model->file_gal_id = $_POST['ConstructionCrew']['file_gal_id'];
			if($model->save())
            {
                if($model->img_main){
                    $files =Files::model()->findByPk($model->img_main);
                    $files->table_name = $model->tableName();
                    $files->obj_id = $model->id;
                    $files->type = 1;
                    $files->used = 1;
//                CVarDumper::dump($files);
                    $files->save();
                }
                if($model->file_gal_id){
                    foreach($model->file_gal_id AS $gal_id)
                    {
                        $files =Files::model()->findByPk($gal_id);
                        $files->table_name = $model->tableName();
                        $files->obj_id = $model->id;
                        $files->type = 1;
                        $files->used = 1;
//                CVarDumper::dump($files);
                        $files->save();
                    }
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
		// $this->performAjaxValidation($model);

		if(isset($_POST['ConstructionCrew']))
		{
            //CVarDumper::dump($model);

                if($model->img_main){
                    $files =Files::model()->findByPk($model->img_main);
                    $files->used = 0;
                    $files->save();
                }
                if($model->file_gal_id){
                    foreach($model->file_gal_id AS $gal_id)
                    {
                        $files =Files::model()->findByPk($gal_id);
                        $files->used = 0;
                        $files->save();
                    }
                }
                $model->img_main = $_POST['ConstructionCrew']['img_main'];
                $model->file_gal_id = $_POST['ConstructionCrew']['file_gal_id'];
                if($model->img_main){
                    $files =Files::model()->findByPk($model->img_main);
                    $files->table_name = $model->tableName();
                    $files->obj_id = $model->id;
                    $files->type = 1;
                    $files->used = 1;
                    $files->save();
                }
                if($model->file_gal_id){
                    foreach($model->file_gal_id AS $gal_id)
                    {
                        $files =Files::model()->findByPk($gal_id);
                        $files->table_name = $model->tableName();
                        $files->obj_id = $model->id;
                        $files->type = 1;
                        $files->used = 1;
//                CVarDumper::dump($files);
                        $files->save();
                    }
                }
            $model->attributes = $_POST['ConstructionCrew'];
            if($model->save())
            {
                $this->redirect(array('index'));
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
		$model=new ConstructionCrew('search');
		$model->unsetAttributes();  // clear any default values
		if(isset($_GET['ConstructionCrew']))
			$model->attributes=$_GET['ConstructionCrew'];

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
		$model=ConstructionCrew::model()->findByPk($id);
        $c = new CDbCriteria();
        $c->addCondition('table_name = :tableName');
        $c->addCondition('obj_id = :id');
        $c->addSearchCondition('path','main');
        $c->addCondition('used = 1');
        $c->params['tableName'] = $model->tableName();
        $c->params['id'] = $model->id;
        $model->img_main = Files::model()->find($c)->id;
        $c = new CDbCriteria();
        $c->select = 'id';
        $c->addCondition('table_name = :tableName');
        $c->addCondition('obj_id = :id');
        $c->addSearchCondition('path','main', true, 'AND', 'NOT LIKE');
        $c->addCondition('used = 1');
        $c->params['tableName'] = $model->tableName();
        $c->params['id'] = $model->id;
        $out = array();
        $arr = Files::model()->findAll($c);
        foreach($arr as $id)
        {
            array_push($out, $id->id);
        }
        $model->file_gal_id = $out;
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
		if(isset($_POST['ajax']) && $_POST['ajax']==='construction-crew-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}
}

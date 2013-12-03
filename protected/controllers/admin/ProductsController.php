<?php

class ProductsController extends Controller
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
				'actions'=>array('create','update','getselect','gettcnames','keywords','loadSearchGrid','getminiprod'),
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
		$model=new Products;

		// Uncomment the following line if AJAX validation is needed
		// $this->performAjaxValidation($model);

		if(isset($_POST['Products']))
		{
			$model->attributes=$_POST['Products'];
			if($model->save()){
				if($_POST['ProductTechnicalCharacteristics']){
					$this->saveChars($_POST['ProductTechnicalCharacteristics'],$model->id);					
				}
				if($_POST['RelatedProducts']){
					$this->saveRelated($_POST['RelatedProducts'],$model->id);
				}
				//print_r($_POST['ProductTechnicalCharacteristics']);
				 $this->redirect(array('index'));
			}else{
				print_r($model->getErrors());
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
		if(isset($_POST['Products']))
		{
			$model->attributes=$_POST['Products'];
		if($model->save()){
				if($_POST['ProductTechnicalCharacteristics']){
					$this->saveChars($_POST['ProductTechnicalCharacteristics'],$model->id);					
				}
				if($_POST['RelatedProducts']){
					$this->saveRelated($_POST['RelatedProducts'],$model->id);
				}
				$this->redirect(array('index'));
			}else{
				print_r($model->getErrors());
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
//		if(Yii::app()->request->isPostRequest)
//		{
			// we only allow deletion via POST request
                $model = $this->loadModel($id);
                $model->deleted = 1;
                $model->save(false);

			// if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
			if(!isset($_GET['ajax']))
				$this->redirect(isset($_POST['returnUrl']) ? $_POST['returnUrl'] : array('index'));
//		}
//		else
//			throw new CHttpException(400,'Invalid request. Please do not repeat this request again.');
	}

	/**
	 * Manages all models.
	 */
	public function actionIndex()
	{
		$model=new Products('search');
		$model->unsetAttributes();  // clear any default values
		if(isset($_GET['Products']))
			$model->attributes=$_GET['Products'];

		$this->render('admin',array(
			'model'=>$model,
		));
	}

	/**
	 * Returns the data model based on the primary key given in the GET variable.
	 * If the data model is not found, an HTTP exception will be raised.
	 * @param integer the ID of the model to be loaded
	 */

    public function actionGetselect(){
        $data = Categories::model()->findAllByAttributes(array('parent_id'=>(int)$_POST['parent_id'], 'deleted'=>0));

        echo "<option value=''>--Выберите подкатегорию--</option>";
        foreach($data as $item)
            echo CHtml::tag('option', array('data-name'=>$item->full_name,'value'=>$item->id),CHtml::encode($item->name),true);
    }

    public function actionGettcnames(){
        echo '<div class="template_labels">';
            echo CHtml::label('Название характеристики','',array('class'=>'span3'));
            echo CHtml::label('Значение характеристики','',array('class'=>'span3'));
        echo '</div>';
        foreach(TechnicalCharacteristicsTemplate::model()->findByPk((int)$_POST['template_id'])->technicalCharacteristicsNames as $item){
            echo '<div>';
            echo CHtml::activeTextField(ProductTechnicalCharacteristics::model(),'[]name',array('value'=>$item->name,'class'=>'span3'));
            echo CHtml::activeTextField(ProductTechnicalCharacteristics::model(),'[]value',array('class'=>'span3','style'=>'margin-left:10px'));
            $this->widget('bootstrap.widgets.TbButton', array(
                'buttonType'=>'button',
                'type'=>'danger',
                'label'=>'X',
                'htmlOptions'=>array('class'=>'del_char','style'=>'margin: 0 0 10px 10px')
            ));
            echo '</div>';

        }
    }

    public function actionKeywords(){
        $str = $_POST['data'];
        $without_s = str_replace(' ','',$str);
        $without_s = ($without_s==$str)?'':$without_s;
        $res = DLL::translit($str).' '.DLL::translit($str,1).' '.$without_s;
        $res = mb_strtolower($res,'UTF8');
       echo $res;

    }


    public function actionGetminiprod(){
    	$prod = Products::model()->findByPk($_POST['id']);
    	echo '<div class="miniProd">';
    	echo '<input type="hidden" class="prod_id" value="'.$_POST['id'].'"> '.$prod->name;
    	echo '</div>';

    }




	public function loadModel($id)
	{
		$model=Products::model()->findByPk($id);
        $model->parent_parent_id = Categories::model()->findByPk($model->parent_id)->parent_id;
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
		if(isset($_POST['ajax']) && $_POST['ajax']==='products-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}

	protected function saveChars($chars,$id){
		$old = ProductTechnicalCharacteristics::model()->findAllByAttributes(array('product_id' => $id));
		if($old){
			foreach ($old as $old_one) {
				$old_one->delete();
			}
		}
		for($i=0;$i<count($chars);$i+=2) {						
			$tmp = new ProductTechnicalCharacteristics;
			$name = $chars[$i]['name'];
			$value = $chars[$i+1]['value'];
			if($name!='' and $value!=''){
				$tmp->name = $name;
				$tmp->value = $value;
				$tmp->product_id = $id;
				$tmp->save();						
			}
		}
	}

	protected function saveRelated($prods,$id){
		// $old = RelatedProducts::model()->findAllByAttributes(array('products_id' => $id,'related_products_id'=>$id));
		// if($old){
		// 	foreach ($old as $old_one) {
		// 		$old_one->delete();
		// 	}
		// }
		// for($i=0;$i<count($chars);$i++) {						
		// 	$tmp = new RelatedProducts;			
		// 	if($name!='' and $value!=''){
		// 		$tmp->name = $name;
		// 		$tmp->value = $value;
		// 		$tmp->product_id = $id;
		// 		$tmp->save();						
		// 	}
		// }
	}




}

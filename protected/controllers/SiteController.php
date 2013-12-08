<?php

class SiteController extends Controller
{
	/**
	 * Declares class-based actions.
	 */
	public function actions()
	{
		return array(
			// captcha action renders the CAPTCHA image displayed on the contact page
			'captcha'=>array(
				'class'=>'CCaptchaAction',
				'backColor'=>0xFFFFFF,
			),
			// page action renders "static" pages stored under 'protected/views/site/pages'
			// They can be accessed via: index.php?r=site/page&view=FileName
			'page'=>array(
				'class'=>'CViewAction',
			),
		);
	}

	/**
	 * This is the default 'index' action that is invoked
	 * when an action is not explicitly requested by users.
	 */
	public function actionIndex()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		$this->render('index');
	}

	/**
	 * This is the action to handle external exceptions.
	 */
	public function actionError()
	{
		if($error = Yii::app()->errorHandler->error)
		{
            if($error['code']==404)
			$this->render('pages/404');
            else
            $this->redirect('/');
		}
	}

//	/**
//	 * Displays the login page
//	 */
//	public function actionLogin()
//	{
//		$model=new LoginForm;
//
//		// if it is ajax validation request
//		if(isset($_POST['ajax']) && $_POST['ajax']==='login-form')
//		{
//			echo CActiveForm::validate($model);
//			Yii::app()->end();
//		}
//
//		// collect user input data
//		if(isset($_POST['LoginForm']))
//		{
//			$model->attributes=$_POST['LoginForm'];
//			// validate user input and redirect to the previous page if valid
//			if($model->validate() && $model->login())
//				$this->redirect(Yii::app()->user->returnUrl);
//		}
//		// display the login form
//		$this->render('login',array('model'=>$model));
//	}
//
//	/**
//	 * Logs out the current user and redirect to homepage.
//	 */
//	public function actionLogout()
//	{
//		Yii::app()->user->logout();
//		$this->redirect(Yii::app()->homeUrl);
//	}

    public function actionStocks()
    {
        $this->render('stock');
    }

    public function actionStocksMore(){
        $this->render('stockMore');
    }

    public function actionBuilding_services(){
        $this->render('buildingservices');
    }

    public function actionDelivery_and_payment(){
        $this->render('delivery_and_payment');
    }

    public function actionDocuments(){
        $this->render('documents');
    }

    public function actionSuppliers(){
        $this->render('suppliers');
    }

    public function actionPartners(){
        $this->render('partners');
    }

    public function actionSmile(){
        $this->render('pages/smile');
    }

    public function actionContact(){
        $this->render('pages/contact');
    }

    public function actionCart(){
        $this->render('cart');
    }


    public function actionProduct(){
        $this->render('product');
    }

    public function actionAdmin(){
        $this->redirect('/admin/help');
    }

    public function actionCatalog(){
        $this->render('product_catalog');
    }


    public function actionEquipment(){
        $this->render('equipment');
    }

    public function actionAbout(){
        $this->render('about');
    }
    public function actionPrinciples(){
        $this->render('principles');
    }
    public function actionBaraban(){
        $this->render('baraban');
    }
    public function actionNews(){
        $this->render('news');
    }
    public function actionNewsmore(){
        $this->render('newsmore');
    }
    public function actionProject(){
        $this->render('project');
    }
    public function actionProjectMore(){
        $this->render('project_star_tes');
    }
    public function actionProject_star_tes2(){
        $this->render('project_star_tes2');
    }

    public function actionGetNews()
    {
        $work_type = $_POST['work_type'];
        $array_link = array();
        if($work_type){
            $array_link['type'] = $work_type;
        }
        if($_POST['difficulty']){
            $array_link['difficulty'] = $_POST['difficulty'];
        }
        if($_POST['news_date']){
            $news_date = explode('-',$_POST['news_date']);
            $array_link['year'] = $news_date[0];
            if(isset($news_date[1]))
                $array_link['month'] = $news_date[1];
        }
        if($_POST['page']){
            $array_link['page'] = $_POST['page'];
        }

        $link = Yii::app()->urlManager->createUrl('site/news',$array_link);
        // print_r($array_link);
        $this->redirect($link);
    }
}

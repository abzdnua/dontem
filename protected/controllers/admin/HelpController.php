<?php 


class HelpController extends Controller
{
    public $layout='//layouts/column2';
    public $pageTitle = "СтройЭксперт - Справка пользователя";

    public function filters()
    {
        return array(
            'accessControl', // perform access control for CRUD operations
        );
    }

    public function accessRules()
    {
        return array(
            array('allow',  // allow all users to perform 'index' and 'view' actions
                'actions'=>array('index'),
                'users'=>array('@'),
            ),            
            array('deny',  // deny all users
                'users'=>array('*'),
            ),
        );
    }
    public function actionIndex(){
        $this->render('help');
    }

}

 ?>
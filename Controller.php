<?php
namespace App\Http\Controllers;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Excel;

class Controller extends BaseController
{

    public function index(){

    	$a = Excel::load('english.xlsx',function($render){
    		$result = $render->get();

    		print_r(json_decode($result));
    	});   

    	$pattern = array('abandon','ability','able','about','above','abroad','absence','absolute','abuse','academic','acceptable','bccommodation','school','nightmare','live','living','prepareable','prepare');    

    	$input ="absen";

        //echo ($this->checkLength("aban","abandon"));die;

    	$a = $this->checkPattern($pattern,$input,1);
        //print_r($a);die;
       if(!$a){
        echo "You must entry english";
       }
    }
   

    //Su dung de quy.
    public function checkPattern($pattern=array(),$key,$pos){
    	$new_pattern =  array();        
    	foreach ($pattern as $val) {
    		if(substr($val,0,$pos)===substr($key, 0,$pos)){   
                if($pos==1){
                    if($this->checkLength($key,$val)){
                        array_push($new_pattern, $val);
                    }                              
                }  
                else{
                    array_push($new_pattern, $val);
                }   
    			
    		}  	    	
    	}   

		if(!empty($new_pattern)){
			if($pos/strlen($key)<=0.6){
				$this->checkPattern($new_pattern,$key,$pos+1); 
			}	
            else{                
                return $new_pattern;
            }        			
		}    	
		else{
			return false;
		}	    		
    	
    }

    public function checkLength($key,$val){
        return strlen($key)/strlen($val)>=0.6 || strlen($key)/strlen($val)>=1.666 ? true:false;
    }

}

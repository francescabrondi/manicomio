<?php
/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);*/
define('BOOL_DEVELMODE',true);

function isLocalhost($whitelist = ['127.0.0.1', '::1']) {
	return in_array($_SERVER['REMOTE_ADDR'], $whitelist);
};

function url(){
	if(isset($_SERVER['HTTPS'])){
		$protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
	}
	else{
		$protocol = 'http';
	}
	if(BOOL_DEVELMODE && isLocalhost()) {
		return $protocol . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
	}else{
		return $protocol . "://" . $_SERVER['HTTP_HOST'] . '/';
	}
}

define('BASE_URL',url());
define('LANG',"IT");
define('GTM_CODE','');

define('META_TITLE','Ristorante Lampino');
define('META_DESCRIPTION','');
define('META_IMAGE',BASE_URL.'../images/favicon-lampino.png');

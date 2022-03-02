<?php
if(BOOL_DEVELMODE && isLocalhost()) {
	$dist_path = 'http://localhost/manicomio/';
}else{
	$dist_path = BASE_URL;
}
?>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<title><?= META_TITLE; ?></title>
<meta name ="description" content="<?= META_DESCRIPTION; ?>">

<meta property="og:title" content="<?= META_TITLE; ?>" />
<meta property="og:description" content="<?= META_DESCRIPTION; ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?= BASE_URL; ?>" />
<meta property="og:image" content="<?= META_IMAGE; ?>" />

<meta name="twitter:card" content="summary" />




<link rel="icon" sizes="57x57" href="images/favicon-lampino.png">
<!-- <link rel="apple-touch-icon" sizes="60x60" href="images/icons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="images/icons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="images/icons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="images/icons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="images/icons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="images/icons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">
<link rel="manifest" href="images/icons/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="images/icons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff"> -->

<meta property="og:title" content="Ristorante Lampino" />
  <meta property="og:url" content="http://www.deseip.com/lampino" />
  <meta property="og:image" content="images/logo-lampino.png" />
  <meta property="og:description" content="" />
  <meta property="og:site_name" content="Ristorante Lampino" />



<link rel="stylesheet" href="fonts/icomoon/style.css">

<link rel="stylesheet" href="<?= $dist_path ?>dist/main.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">







<!doctype html>
<?php include "inc/config.php" ?>

<html lang="<?= LANG; ?>">
<head>
	<?php include "inc/head.php" ?>
</head>
<?php include "inc/starting-body.php" ?>

<div class="page" id="page">

	<header class="site-header">
		<div class="site-header-inner">
			<a href="#page" class="site-brand">
				<img src="images/logo-lampino.png" alt="" id="logo">
			</a>
			<div class="toggle-menu" aria-hidden="true">
				<div class="toggle-menu-inner"></div>
			</div>
			
				

							
<nav class="site-navigation">
	<ul>
		<li><a href="#section-ristorante">Il ristorante</a></li>
		<li><a href="#section-filiera">Filiera</a></li>
		<li><a href="#section-territorio">Territorio</a></li>
		<li><a href="#section-recensioni">Dicono di noi</a></li>
		<li><a href="#section-prodotti">Prodotti</a></li>	
		<li><a href="#section-visite">Visite guidate</a></li>
		
		
	</ul>
</nav>
			</div>
		

	</header>
	<body>

	<div class="page-content">
		<?php include "inc/sections/hero.php" ?>
		<?php include "inc/sections/banner-scores.php" ?>
		<?php include "inc/sections/ristorante.php" ?>
		<?php include "inc/sections/filiera.php" ?>
		<?php include "inc/sections/territorio.php" ?>
		<?php include "inc/sections/recensioni.php" ?>
		<?php include "inc/sections/prodotti.php" ?>
		<?php include "inc/sections/visite.php" ?>
		<?php include "inc/sections/banner-end.php" ?>
</div>
		

	<footer class="page-footer">
		<p class="titolo">Ristorante <br> Lampino</p>
		<div class="page-footer-inner">
			<p class="indirizzo"> Viale Risorgimento, 30,<br> 61041 Acqualagna (PU)</p>
<p class="contatti">+39 0721798674 <br>
info@ristorantelampino.it</p>
		</div>
		<p class="powered">Powered by <a href="https://deseip.com/" target="_blank">DEseip</a></p>
	</footer>
</div>


<?php include "inc/scripts.php" ?>

</embed>
</body>
</html>

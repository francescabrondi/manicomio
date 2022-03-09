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
			
			<div class="toggle-menu" aria-hidden="true">
				<div class="toggle-menu-inner"></div>
			</div>
			
				

							
<nav class="site-navigation">
	<ul>
		<li><a href="#cerimonia">Cerimonia</a></li>
		<li><a href="#festa">Festa</a></li>
		<li><a href="#travel-agency">E&F Travel Agency</a></li>
		<li><a href="#regali">Regali</a></li>
		<li><a href="#foto">Foto</a></li>	
		<li><a href="#rsvp" class="main-cta">RSVP</a></li>
		
		
	</ul>
</nav>
			</div>
		

	</header>
	<body>

	<div class="page-content">
		<?php include "inc/sections/hero.php" ?>
		<?php include "inc/sections/cerimonia.php" ?>
		<?php include "inc/sections/festa.php" ?>
		<?php include "inc/sections/agenzia.php" ?>
		<?php include "inc/sections/regali.php" ?>
		<?php include "inc/sections/rsvp.php" ?>
		<?php include "inc/sections/foto.php" ?>
</div>
		

	<footer class="page-footer">
		<img src="images/elefranz.svg" alt="" class="footer-img desktop-only">
		<img src="images/ef.svg" alt="" class="footer-img mobile-only">
	</footer>
</div>


<?php include "inc/scripts.php" ?>

</embed>
</body>
</html>

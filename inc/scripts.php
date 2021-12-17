<?php
if(BOOL_DEVELMODE && isLocalhost()) {
	$dist_path = 'http://localhost/sottobosco-landing/';
}else{
	$dist_path = BASE_URL;
}
?>
<script src="<?= $dist_path ?>dist/bundle.js"></script>
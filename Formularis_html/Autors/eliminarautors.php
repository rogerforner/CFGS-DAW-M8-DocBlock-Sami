<?php
include_once('autors.php');
$autors = new autors($_POST["id"]);

$autors-> eliminardades();
header("Location:../Index_autors.php");

?>

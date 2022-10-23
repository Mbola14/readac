<?php

include("../models/pdo.php");

$district = $_GET['district'];

function prov($district){
    $sel = select("SELECT * FROM commune WHERE id_district = ".$district);
    $string = '';
    for($i = 0; $i < count($sel); $i++ ){
        $string = $string."<option value = '".$sel[$i]['id_commune']."'>".$sel[$i]['nom']."</option>";
    }
    return $string;
}

$retour = prov($district);

echo $retour;

?>
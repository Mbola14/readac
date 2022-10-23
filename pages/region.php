<?php

include("../models/pdo.php");

$region = $_GET['region'];

function prov($region){
    $sel = select("SELECT * FROM district WHERE id_region = ".$region);
    $string = '';
    for($i = 0; $i < count($sel); $i++ ){
        $string = $string."<option value = '".$sel[$i]['id_district']."'>".$sel[$i]['nom']."</option>";
    }
    return $string;
}

$retour = prov($region);

echo $retour;

?>
<?php

include("../models/pdo.php");

$province = $_GET['province'];

function prov($province){
    $sel = select("SELECT * FROM region WHERE id_province = ".$province);
    $string = '';
    for($i = 0; $i < count($sel); $i++ ){
        $string = $string."<option value = '".$sel[$i]['id_region']."'>".$sel[$i]['nom']."</option>";
    }
    return $string;
}

$retour = prov($province);


?>
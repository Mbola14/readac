<?php

    include("../models/pdo.php");
    $province = select("SELECT * FROM province");

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste déroulante</title>
    <script src="../js/indexJs.js"></script>
</head>
<body>

    <h2>Selectionnez votre commune : </h2>
    <div id="liste_deroulante">
        <form action="#" method="get" id="mada_form">
            <p id="p_province"><select id="province" name="sel_province" onchange="change_province()">
                <option value="0">-- Sélectionnez une province --</option>
                <?php for($i = 0; $i < count($province); $i++) { ?>
                    <option value = "<?php  echo $province[$i]['id_province'] ?>"><?php  echo $province[$i]['nom'] ?></option>
                <?php } ?>
            </select></p>
            <p id="p_region"><select id="region" name="sel_region" onchange="change_region()">
            <option value="0">-- Sélectionnez une région --</option>
                <option>test</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
            </select></p>
            <p id="p_district"><select id="district" name="sel_district" onchange="change_district()">
            <option value="0">-- Sélectionnez une district --</option>
                <option>test</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
            </select></p>
            <p id="p_commune"><select id="commune" name="sel_commune" onchange="change_commune()">
            <option value="0">-- Sélectionnez une commune --</option>
                <option>test</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
            </select></p>
        </form>
    </div>
</body>
</html>
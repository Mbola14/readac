<?php
    function getConnection(){
        $user = 'mbola';
        $mdp = 'Benji.800';
        $dsn = 'pgsql:host=localhost;port=5432;dbname=madagascar';

        try{
            $db = new PDO($dsn,$user,$mdp);
            return $db;
        }
        catch(PDOException $e){
            die();
        }
    }


    function select($sql){
        $con = getConnection();
        $result = $con->query($sql);
        $sth = $con->prepare($sql);
        $sth->execute();

        $colcount = $sth->columnCount();
        $nomCol = getColNames($con,$sql);

        $result->setFetchMode(PDO::FETCH_NUM);
        $tableau = [];
        $i = 0;

        foreach($result as $row){
            for($j=0; $j<$colcount; $j++){
                $tableau[$i][$nomCol[$j]] = $row[$j];
            }
            $i++;
        }
        return $tableau;
    }

    function getColNames($con, $sql){
        $rs = $con->query($sql);
        for ($i = 0; $i < $rs->columnCount(); $i++) {
            $col = $rs->getColumnMeta($i);
            $columns[] = $col['name'];
        }
        return $columns;
    }

?>
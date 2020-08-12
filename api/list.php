<?php
    require 'connect.php';
    error_reporting(E_ERROR);
    $utilisateur = [];
    $sql = 'SELECT * FROM utilisateur';

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $utilisateur[$cr]['id'] = $row['id'];
            $utilisateur[$cr]['nom'] = $row['nom'];
            $utilisateur[$cr]['prenom'] = $row['prenom'];
            $utilisateur[$cr]['mail'] = $row['mail'];
            $utilisateur[$cr]['password'] = $row['password'];
            ++$cr;
        }
        //print_r($students);
        echo json_encode($utilisateur);
    } else {
        http_response_code(404);
    }

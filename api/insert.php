<?php
    require 'connect.php';

    $postdata = file_get_contents('php://input');
    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $nom = $request->nom;
        $prenom = $request->prenom;
        $mail = $request->mail;
        $password = $request->password;

        $sql = "INSERT INTO utilisateur(nom,prenom, mail, password) VALUES ('$nom', '$prenom', '$mail', '$password')";

        $result = mysqli_query($con, $sql);
    }

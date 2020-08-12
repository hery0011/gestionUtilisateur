<?php
    require 'connect.php';

    $postdata = file_get_contents('php://input');
    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $id = (int) $_GET['id'];
        $nom = $request->nom;
        $prenom = $request->prenom;
        $mail = $request->mail;
        $password = $request->password;

        $sql = "UPDATE utilisateur SET nom='$nom', prenom='$prenom', mail='$mail', password='$password' WHERE id='$id' LIMIT 1";

        if (mysqli_query($con, $sql)) {
            http_response_code(204);
        } else {
            return http_response_code(422);
        }
    }

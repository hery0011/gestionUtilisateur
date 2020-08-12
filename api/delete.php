<?php
    require 'connect.php';
    $id = $_GET['id'];
    
    $sql = "DELETE FROM utilisateur WHERE  id=$id";
    $result = $con->query($sql);

    $con->close();
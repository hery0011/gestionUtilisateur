<?php
    require 'connect.php';

    $postdata = file_get_contents('php://input');
    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $cherche = $request->cherche;
        $students = [];
        $sql = "SELECT * FROM students WHERE kilasy like '%$cherche%'";

        $result = mysqli_query($con, $sql);

        if ($result->num_rows > 0) {
            $cr = 0;
            while ($row = $result->fetch_assoc()) {
                $students[$cr]['sId'] = $row['sId'];
                $students[$cr]['fName'] = $row['fName'];
                $students[$cr]['lName'] = $row['lName'];
                $students[$cr]['kilasy'] = $row['kilasy'];
                $students[$cr]['datyN'] = $row['datyN'];
                $students[$cr]['dada'] = $row['dada'];
                $students[$cr]['mama'] = $row['mama'];
                $students[$cr]['toerana'] = $row['toerana'];
                $students[$cr]['tel'] = $row['tel'];
                $students[$cr]['email'] = $row['email'];
                ++$cr;
            }
            echo json_encode($students);
        } else {
            return NULL;
        }$con = connect();
        }
    

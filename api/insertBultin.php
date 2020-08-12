<?php
    require 'connect.php';

    $postdata = file_get_contents('php://input');
    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $sId = $request->sId;
        $mth = $request->mth;
        $pc = $request->pc;
        $svt = $request->svt;
        $mlg = $request->mlg;
        $histo = $request->histo;
        $geo = $request->geo;
        $frs = $request->frs;
        $ang = $request->ang;
        $eps = $request->eps;
        $total = $mth + $pc + $svt + $mlg + $histo + $geo + $frs + $ang + $eps;
        $moyenne = $total/9;

        $sql = "INSERT INTO bultin (sId,mth,pc, svt, mlg, histo, geo, frs, ang, eps, total, moyenne) VALUES ('$sId', '$mth', '$pc', '$svt', '$mlg', '$histo', '$geo', '$frs','$ang','$eps', '$total', $moyenne)";
        
        $result = mysqli_query($con, $sql);
    }

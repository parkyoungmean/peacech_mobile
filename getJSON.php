<?php

$dbhost = "http://vision.peacech.com/myadmin/";
$dbuser = "root";
$dbpass = "qhrdmlrmsdnjs9490";
$dberror1= "could Not Connect to your Database";
$dberror2 = "Could Not Find Your Table";

$Conn = mysqli_connect($dbhost, $dbuser, $dbpass) or die ($dberror1);

$select_db = mysql_select_db($Conn, 'peacech2009') or die ($dberror2);

$query = mysqli_query($Conn, "Select * FROM xe_member");

$num_rows = mysqli_num_rows($query);

if($num_rows =! 0){
    while ($fetch = mysqli_fetch_assoc($query)){

        echo $fetch['user_id'];
    }
}
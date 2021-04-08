<?php 

 define("DB_HOST","localhost");
 define("DB_USER","root");
 define("DB_PASSWORD","");
 define("DB_DATABASE","mytravel");

 $mysqli= new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE);

if(isset($_POST['submit'])){


    $name=$_POST['name'];
    $email=$_POST['eAddress'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];


    $query="INSERT INTO contactus  SET Name='$name',EmailAddress='$email',Subject='$subject',Message='$message' ";


    $result = $mysqli->query($query);

    if(!result){

        echo "Sorry we did not get your message.Something went wrong.Please do resend".$mysqli->err;
    }
    
    $mysqli->close();
    header("location:aboutus.php");
    exit();
}








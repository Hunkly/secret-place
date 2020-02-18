<?php

$recepient = "hunkly2@gmail.com";
$siteName = "Secret Place";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$date = trim($_POST["dateTime"]);
$message = "Имя: $name \nТелефон: $phone \nЭлектронный адрес $email \nДата и время $date" ;

$pagetitle = "\"$siteName\"";
mail($recepient, $siteName, $message, "From: $email") or die("Error!");

echo "Thank you!";

?>
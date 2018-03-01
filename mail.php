<?php

$recepient = "sprintershop@mail.ru";
$sitename = "Sprinteif";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["commend"]);
$iteam = trim($_POST["iteams"]);
$iteamprice = trim($_POST["iteamsprice"]);
$message = "Деталь: $iteam \nЦіна: $iteamprice \nИмя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


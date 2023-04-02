<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="TrangChuCSS\headerCSS.css" rel="stylesheet">
    <link href="TrangChuCSS\footerCSS.css" rel="stylesheet">
    <link href="TrangChuCSS\flimShowingCSS.css" rel="stylesheet">
    <link href="TrangChuCSS\filmComponent.css" rel="stylesheet">
    <link href="TrangChuCSS\event-promotionCSS.css" rel="stylesheet">
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body style="background-image:Asset\ori-landcapse.jpg;">
    <div style="margin: 0 20px; ">
        <?php
        require 'TrangChuPHP\header-trangchu.php';
        require 'ShowingFlimPHP\content-flimShowing.php';
        require 'TrangChuPHP\event-promotion-trangchu.php';
        require 'TrangChuPHP\footer-trangchu.php';
        ?>
    </div>

</body>
<script src="TrangChuJS\componentReuse.js"></script>

</html>
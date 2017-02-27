<?php
namespace speak;
 // use speak\api;
require __DIR__.'/API.php';

$userKey = 'dfcacb6404295f9ed9e430f67b641a8e';
$key2 = '0bceb4fc0d3c9900e74186583128b8af';
$content = "很高兴";
$language = "e2c";
$url = 'http://howtospeak.org:443/api/'.$language.'?user_key='.$userKey.'&notrans=0&text='.$content;

 $callContent = MyCurl::cUrl($url); 
 print_r($callContent);
 echo "<h3>".$callContent['chinglish']."</h3>";



 // $ad = new io();
 // $ad = $ad->DC(78988);
 // echo $ad;
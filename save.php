<?php
if(isset($GLOBALS["HTTP_RAW_POST_DATA"])){
$jpg = $GLOBALS["HTTP_RAW_POST_DATA"];
file_put_contents("image.jpg", $jpg);
}
<?php
 
    <?php
    $action = $_GET["action"];
    $myText = $_POST["mytext"];

    if($action = "save") {
      $targetFolder = "/path/to/folder";
      file_put_contents($targetFolder."mytext.txt", $myText);
    }
    ?>
 
?>
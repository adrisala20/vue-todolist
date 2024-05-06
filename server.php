<?php 
$todoJson = file_get_contents("js/data.json");
if(isset($_POST['id'])){
    var_dump($_POST);
    //converto il json in un array php
    $todo = json_decode($todoJson, true);
    $todoItem  =[
        'id'=> $_POST['id'],
        'itemText'=> $_POST['itemText'],
        'done'=> $_POST['done'],
    ];
    //aggiungo il nuovo item
    $todo [] = $todoItem;

    //stampo 

    $todoJson = json_encode($todo, JSON_PRETTY_PRINT);
    file_put_contents('data.json', $todoJson);
}

//header("Content-type: application/json");
//echo $todoJson;
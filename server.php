<?php 

$todoJson = file_get_contents("js/data.json");
if(isset($_POST['id'])){
    //var_dump($_POST);

    //converto il json in un array php
    $todo = json_decode($todoJson, true);
    $todoItem  =[
        'id'=>(int) $_POST['id'],
        'text'=> $_POST['text'],
        'done'=> !(bool)$_POST['done'], //coverte il bool
    ];
    //aggiungo il nuovo item
    $todo[] = $todoItem;

    //aggiornamo il json con il nuovo array php e codificarlo
    $todoJson = json_encode($todo, JSON_PRETTY_PRINT);
    //salvare i dati permanentemente dentro il json
    file_put_contents('js/data.json', $todoJson); //attenta al percorso
};

$method = $_SERVER['REQUEST_METHOD'];
if($method === 'PUT'){
    //devo leggere il file, la richiesta nel body
    $todoModificato = json_decode(file_get_contents('php://input'),true);
}



header("Content-type: application/json");
echo $todoJson;
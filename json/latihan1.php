<?php

// $mahasiswa  = [
//     [
//         "nama"      => "Yusuf Aryadilla",
//         "nim"       => "12182345",
//         "email"     => "aryaherby29nov2k@gmail.com"
//     ],
//     [
//         "nama"      => "Yusuf ad",
//         "nim"       => "12182345",
//         "email"     => "aryaherby29nov2k@gmail.com"
//     ]
// ];

$dbh = new PDO ('mysql:host=localhost;dbname=pembayaran', 'root', '');

$db = $dbh->prepare('SELECT * FROM user');
$db->execute();

$user = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($user);

echo $data;

?>
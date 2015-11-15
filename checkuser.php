<?php  

require 'db_connect.php';

$stm=$conn->prepare('SELECT username FROM users WHERE username = :username');

$stm->execute(array(':username' => $_POST['uname']));

if ($stm->rowCount() == 1) {
	echo 1;
} else {
	echo 0;
}

?>
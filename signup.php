<?php
if (isset($_POST["signupBtn"])) {
    if(isset($_POST['userNameSignUp']) && !empty($_POST['userNameSignUp'])) {
        if(isset($_POST['passwordSignUp']) && !empty($_POST['passwordSignUp'])) {
            session_start();
            require 'db_connect.php';

            $queryInsert = 'INSERT INTO users (username, password) VALUES (:username, :password)';
            $stm = $conn->prepare($queryInsert);

            $stm->execute(array(
                ':username' => $_POST['userNameSignUp'],
                ':password' => $_POST['passwordSignUp']
            )); 

            $querySelect = 'SELECT * FROM users WHERE username = :username';
            $stm2 = $conn->prepare($querySelect);
            $stm2->execute(array(
                ':username' => $_POST['userNameSignUp']
            )); 

            $result = $stm2->fetchAll();

            foreach ($result as $row) {
                $user_id = $row['id'];
            }

            $_SESSION['user_id'] = $user_id;
            $_SESSION['status'] = 'loggedin';
            $_SESSION['username'] = $_POST['userNameSignUp'];

            header('location: choose_map.php');

        }

        else {
            header('location: index.php');
        }
    } 
    else {
        header('location: index.php');
    }
}
   
?>
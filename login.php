<?php
if (isset($_POST["loginBtn"])) {
    if(isset($_POST['userNameLogIn']) && !empty($_POST['userNameLogIn'])) {
        if(isset($_POST['passwordLogIn']) && !empty($_POST['passwordLogIn'])) {
            session_start();
            require 'db_connect.php';

            $stm = $conn->prepare('SELECT * FROM users WHERE username = :username AND password = :password');

            $stm->execute(array(
                ':username' => $_POST['userNameLogIn'],
                ':password' => $_POST['passwordLogIn'],
            ));

            if($stm->rowCount() == 1) {
                
                
                $row = $stm->fetch();

                $_SESSION['status'] = 'loggedin';
                $_SESSION['username'] = $_POST['userNameLogIn'];
                //$_SESSION['password'] = $_POST['passwordLogIn'];
                $_SESSION['user_id'] = $row['id'];

               
                header('location: choose_map.php');
            }
            else {
                header('location: index.php?no_match');
                exit();
            }     
        }

        else {
            header('location: index.php?PWfel');
            exit();
        }
    } 
    else {
        header('location: index.php?UNfel');
        exit();
    }
}  
?>
<?php session_start(); ?>
<?php include "header.php"; 
if($_SESSION['status'] != 'loggedin') {
    header('location: index.php?abc');
} else {

    $username = $_SESSION['username'];
    ?>
    <div class="container-fluid">    
        <div class="welcome">
            <h1>Mapquiz</h1>
            <h3>Hello <span id="username"><?php echo $username ?></span>, pick a map</h3>
        </div>

        <div class="row">
            <div class="col-xs-12 btnLogout">
                <form method="post" action="logout.php">
                    <button type="submit" name="logout" class="btn btnSmall btnGrey">
                        LOGOUT
                    </button>
                </form> 
            </div>

            <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-offset-4 col-md-4 playGroundBtns">
                <a href="playtime.php?map=0">
                    <button class="btn btnYellow">EUROPE</button>
                </a>

                <a href="playtime.php?map=1">
                    <button class="playGroundBtn btn btnOrange">ASIA/DOWNUNDER</button>
                </a>

                <a href="playtime.php?map=2">
                    <button class="playGroundBtn btn btnRed">AMERICA</button>
                </a>
            </div>
        </div>
    </div>
    
    <?php
}
        

include "footer.php"; ?>
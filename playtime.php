<?php session_start(); ?>
<?php include "header.php"; 
if($_SESSION['status'] != 'loggedin') {
    header('location: index.php?abc');
} else { 
    ?>
    <div class="header container-fluid">    
        <div class="row">
            <div class="divLeft col-xs-6 col-sm-offset-1 col-sm-4">
                <h3 id="q1"></h3>
                <h4 id="q2"></h4>            
            </div>
                
            <div class="divMiddle col-xs-4 col-sm-2">
                <button type="submit" id="done" class="btn btnSmall btnGreen">OK</button>

                <button type="submit" id="next" class="btn btnSmall btnGrey" aria-label="Next">
                    NEXT<i class="fa fa-chevron-right"></i>
                </button>
            </div>
             

            <div class="divRight col-xs-2 col-sm-offset-4 col-sm-1">
                <form method="post" action="choose_map.php">
                    <button type="submit" name="logout" class="btn btnSmall btnGrey backToMaps">
                        <i class="fa fa-times"></i>
                    </button>
                </form>         
            </div>
        </div>
    </div>

    <!--  <p id="timer"></p> -->
    <div class="highscore"></div>

    <div id="map" style="height:80%; width:100%;">
        <div id="map_canvas">
        </div>
    </div>
    
    <?php
}
        

include "footer.php"; ?>
<?php include "header.php"; ?>
<div class="header container-fluid">    
    <div class="row">
        <div class="divLeft col-xs-5 col-md-offset-1 col-md-4 col-lg-3">
            <h3 id="q1"></h3>
            <h4 id="q2"></h4>            
        </div>
        <!-- welcome lightbox -->
        <!-- <div id="lightboxWelcome">
            <p>"Place a pin on the map by click/tap were you think 
            the current city is located. Then you can move 
            the pin around by drag n drop, 
            or click on the map again for a better aim.

            Click ok. blablabla

            Click next blablabla "</p>
        </div> -->
        <div class="divMiddle col-xs-3 col-lg-4">
            <button type="submit" id="done" class="btn btnSmall btnGreen">OK</button>

            <button type="submit" id="next" class="btn btnSmall btnGrey" aria-label="Next">
                NEXT<i class="fa fa-chevron-right"></i>
            </button>
        </div>
         
         <!-- Click on the map, where u think the city is at. Then u can move 
         the pin by drag n drop, or click again elsewhere to drop a new one. -->

        <div class="divRight col-xs-2">
            <!-- <div id="lightboxWtf">Lots of info about how you play the game blab la bla blaa</div> -->
            
            <button type="submit" name="logout" class="btn btnSmallest btnSmall btnGrey btnWtf">
                <i class="fa fa-question"></i>
            </button>

                
        </div>

        <div class="divRight2 col-xs-2">
            <form method="post" action="choose_map.php"><!-- TILL INDEX, ELLER ÄNDRA CHOOOSE_MAP TILL INDEXINNEHÅLL -->
                <button type="submit" name="logout" class="btn btnSmallest btnSmall btnGrey backToMaps">
                    <span class="hidden">QUIT</span><i class="fa fa-times"></i>
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
    
<?php include "footer.php"; ?>
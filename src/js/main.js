var $ = jQuery;

var uname = $("#userNameSignUp");
var allowMapClick = true;

// var lat1 = 54.213861000644926;
// var lng1 = 10.546875;

// var lat2 = 24.213861000644926;
// var lng2 = 20.546875;

var mapCordinates = [
    [54.213861000644926, 10.546875],
    [-9.795678, 121.728516],
    [18.354526, -88.242187]
];


$(document).ready(function() {
    // startTimer();

    // var stringy = "((((()(()(((((((()))(((()((((()())(())()(((()((((((()((()(()(((()(()((())))()((()()())))))))))()((((((())((()))(((((()(((((((((()()))((()(())()((())((()(()))((()))()))()(((((()(((()()))()())((()((((())()())()((((())()(()(()(((()(())(()(())(((((((())()()(((())(()(()(()(())))(()((((())((()))(((()(()()(((((()()(()(((()(((((())()))()((()(()))()((()((((())((((())(()(((())()()(()()()()()(())((((())((())(()()))()((((())))((((()())()((((())((()())((())(())(((((()((((()(((()((((())(()(((()()))()))((((((()((())()())))(((()(()))(()()(()(((()(()))((()()()())((()()()(((())())()())())())((()))(()(()))(((((()(()(())((()(())(())()((((()())()))((((())(())((())())((((()(((())(())((()()((((()((((((()(())()()(()(()()((((()))(())()())()))(())))(())))())()()(())(()))()((()(()(())()()))(()())))))(()))(()()))(())(((((()(()(()()((())()())))))((())())((())(()(())((()))(())(((()((((((((()()()(()))()()(((()))()((()()(())(())())()(()(())))(((((()(())(())(()))))())()))(()))()(()(((((((()((((())))())())())())()((((((((((((((()()((((((()()()())())()())())())(())(())))())((()())((()(()))))))()))))))))))))))))())((())((())()()))))))(((()((()(()()))((())(()()))()()())))(())))))))(()(((())))())()())))()()(())()))()(()))())((()()))))(()))))()))(()()(())))))))()(((()))))()(()))(())())))))()))((()))((()))())(())))))))))((((())()))()))()))())(())()()(())))())))(()())()))((()()(())))(())((((((()(())((()(((()(()()(())))()))))))()))()(()((()))()(()))(()(((())((((())())(())(()))))))))())))))))())())))))())))))()()(((())()(()))))))))())))))(())()()()))()))()))(()(())()()())())))))))())()(()(()))))()()()))))())(()))))()()))))()())))))(((())()()))(()))))))))))()()))))()()()))))(()())())()()())()(()))))()(()))(())))))))(((((())(())())()()))()()))(())))))()(()))))(())(()()))()())()))()))()))()))))())()()))())())))(()))(()))))))())()(((())()))))))))()))()())))())))())))()))))))))))()()))(()()))))))(())()(()))))())(()))))(()))))(()())))))())())()()))))())()))))))))(()))))()))))))()(()())))))))()))())))())))())))())))))))())(()()))))))(()())())))()())()))))))))))))))())))()(())))()))())()()(())(()()))(())))())()())(()(()(()))))())))))))))))())(()))()))()))))(())()())()())))))))))))()()))))))))))))())())))))(()())))))))))))())(())))()))))))))())())(()))()))(())))()))()()(())()))))))()((((())()))())())))))()))()))))((()())()))))())))(())))))))))))))))))()))))()()())()))()()))))())()))((()())))())))(()))(()())))))))()))()))))(())))))))(())))))())()()(()))())()))()()))))())()()))))())()))())))))))(()))))()())()))))))))(()))())))(()))()))))(())()))())())(())())())))))))((((())))))()))()))()())()(())))()))()))()())(()())()()(()())()))))())())))))(()))()))))())(()()(())))))(())()()((())())))))(())(())))))))())))))))))()(())))))))()())())())()(()))))))))(()))))))))())()()))()(()))))))()))))))())))))))(())))()()(())()())))))(((())))()((())()))())))(()()))())(())())))()(((()())))))()(()()())))()()(()()(()()))())()(()()()))())()()))()())(()))))())))))())))(())()()))))(()))))(())(()))(())))))()()))()))))())()))()()(())())))((()))())()))))))()()))))((()(()))))()()))))))())))))())(()((()())))))))))))()())())))()))(()))))))(()))(())()())))(()))))))))())()()()()))))(()())))))))((())))()))(()))(())(())()())()))))))))(())))())))(()))()()))(()()))(()))())))()(())))())((()((()(())))((())))()))))((((())())()())))(())))()))))))())(()()((())))())()(()())))))(()())()))())))))))((())())))))))(()(()))())()()(()()(((()(((()())))))()))))))()(())(()()((()()(())()()))())()())()))()())())())))))))(((())))))))()()))))))(((())()))(()()))(()()))))(()(()()((((())()())((()()))))(()(())))))()((()()()())()()((()((()()))(()))(((()()()))(((())))()(((())()))))))((()(())())))(()())(((((()(()))(()((()))(()())()))))(()(()))()(()))(())(((())(()()))))()()))(((()))))(()()()()))())))((()()()(())()))()))))()()))()))))))((((((()()()))))())((()()(((()))))(()(())(()()())())())))()(((()()))(())((())))(()))(()()()())((())())())(()))))()))()((()(())()(()()(())(()))(())()))(())(()))))(())(())())(()()(()((()()((())))((()))()((())))(((()()()()((((()))(()()))()()()(((())((())())(()()(()()()))()((())(())()))())(((()()(())))()((()()())()())(()(())())(((())(())())((())(())()(((()()))(())))((())(()())())(())((()()()((((((())))((()(((((())()))()))(())(()()))()))(())()()))(())((()()())()()(()))())()((())))()((()()())((((()())((())())())((()((()))()))((())((()()(()((()()(((())(()()))))((()((())()(((())(()((())())((())(()((((((())())()(()())()(())(((())((((((()(())(()((()()()((()()(()()()())))()()(((((()()))()((((((()))()(()(()(()(((()())((()))())()((()))(())))()))()()))())()()))())((((())(()(()))(((((((())(((()(((((()(((()()((((())(((())())))(()()()(()(()))()))((((((()))((()(((()(())((()((((()((((((())(((((())))(((()(()))))(((()(((())()((())(()((()))(((()()(((())((((()(()(((((()))(((()(((((((()(()()()(()(()(()()())(())(((((()(())())()())(()(()(()))()(()()()())(()()(()((()))()((())())()(()))((())(()))()(()))()(((()(()(()((((((()()()()())()(((((()()(((()()()((()(((((()))((((((((()()()(((((()))))))(()()()(())(()))(()()))))(())()))(((((()(((((()()(()(()())(((()))((((()((()(()(()((()(()((())))()(((()((()))((()))(((((((((()((()((()(())))()((((()((()()))((())(((()(((((()()(()(()()((()(()()()(((((((())())()())))))((((()()(()))()))(()((())()(()(((((((((()()(((()(()())(()((()())((())())((((()(((()(((()((((()((()((((()(()((((((())((((((((((((()()(()()((((((((((((((()((()()))()((((((((((((())((((()(()())((()(()(()))()(((((()()(((()()))()())(())((()(((((()((())(((((()((()(((((()))()()((((())()((((())(((((((((()(())(()(())))())(()((())(((())(())(())())(()(()(())()()((()((())()(((()(((((()(())))()(((()((())))((()()()(((()(((()((()(()(())(()((()())(()(()(((()(((((((((())(()((((()()))(()((((()()()()(((()((((((((()(()()((((((()(()()(()((()((((((((((()()(((((((()())(())))(((()()))(((((()((()()())(()()((((())((()((((()))))(())((()(()()(((()(()(((()((((()(((((()))())())(()((())()))(((()())((())((())((((()((()((((((())(()((((()()))((((((())()(()))((()(((())((((((((((()()(((((()(((((()((()()()((((())))(()))()((()(())()()((()((((((((((()((())(())(((((()(()(()()))((((()((((()()((()(((()(((((((((()(()((()((()))((((((()(((())()()((()(((((((()())))()()(()((()((()()(((()(()()()()((((()((())((((()(((((((((()(((()()(((()(()(((()(((()((())()(()((()(()(()(()))()(((()))(()((((()((())((((())((((((())(()))(()((((())((()(()((((((((()()((((((()(()(()()()(())((()((()()(((()(((((((()()((()(((((((()))(((((()(((()(()()()(()(((()((()()((())(()(((((((((()(()((()((((((()()((())()))(((((()((())()())()(((((((((((()))((((()()()()())(()()(()(()()))()))(()))(()(((()()))())(()(()))()()((())(()())()())()(()))()))(()()(()((((((())((()(((((((((((()(())()((()(()((()((()(()((()((((((((((()()())((())()(())))((())()())()(((((()(()())((((()((()(())(()))(((())()((()))(((((())(()))()()(()))(((())((((()((((()(())))(((((((()))))())()())(())((())()(()()((()(()))()(()()(()()((()())((())((()()))((((()))()()))(()()(())()()(((((()(())((()((((()))()))(()())())(((()()(()()))(())))))(()))((())(((((()((((()))()((((()))()((())(((())))(((()())))((()(()()((";


    // for (var i = 0, len = stringy.length; i < len; i++) {
    //   c(stringy[i]);
    // }

    var mq = window.matchMedia("(max-width: 767px)");

    $(".loginSignupButtons button").on("click", function(){

        // if ($.browser.webkit) {
        //     $('input[name="password"]').attr('autocomplete', 'off');
        // }
        if ($(this).hasClass("btnGreen")) {
            $(".loginSignupButtons").hide();
            $(".btnBack").show();
            $(".logInForm").show();
        } else {
            $(".loginSignupButtons").hide();
            $(".btnBack").show();
            $(".signUpForm").show();
        }

        
    });

    $(".btnBack button").on("click", function(){
        $(".logInForm").hide();
        $(".signUpForm").hide();
        $(".btnBack").hide();
        $(".loginSignupButtons").show();
    });

    // $('.btnWtf').on('click', function(){
    //     $.featherlight($('#lightboxWtf'), );
    // });

    var mapNumber = window.location.search.slice(5);
    
    // vad är detta?
    $('span.glyphicon').hide();
    $(".userNameSignUp").removeClass("has-error has-feedback");

	// $(uname).keyup(function() { 
	// 	checkUserName(); 
	// });

    $('#map_canvas').mouseover(function() {
        $(this).css('cursor','crosshair');
    });

    $("#q2").html("(Click on map)");

    // Game starts
    if($("#map_canvas").length > 0) {
        // setTimeout(function(){ 
        //     $.featherlight($('#lightboxWelcome'), {});
        // }, 1000);
        
        // zoom out map if mobile
        if (mq.matches) {
            initialize(mapCordinates[mapNumber][0], mapCordinates[mapNumber][1], 3);
            setupAnswerCoordinates(mapNumber);
        } else {
            initialize(mapCordinates[mapNumber][0], mapCordinates[mapNumber][1], 4);
            setupAnswerCoordinates(mapNumber);
        }
    }
});




// function checkUserName() {
    
//     $('span.glyphicon').hide();
//     $(".userNameSignUp").removeClass("has-error has-feedback");

//     $.post("checkuser.php", { uname: $(uname).val() })
//     .done(function(data) {
//         console.log(data);
//         if (data == 1) {
//             $('span.glyphicon').show();
//             $(".userNameSignUp").addClass("has-error has-feedback");
//             $('#signUpForm').submit(function (e) {
//                 e.preventDefault();
//                 window.history.back();
//             });
        
//         } else {
//             $('span.glyphicon').hide();
//             $(".userNameSignUp").removeClass("has-error has-feedback");
//         }
//     });
// }

var map;
var markersArray = [];
var currentMarker;

var answerArray = 0; // JSON-array
var currentQuestion = 0; // aktuella frågan
var totalAnswers = 0;
var totalKm = 0;

// function startTimer() {
//     var count=5;
//     var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

//     function timer() {

//         count=count-1;

//         if (count <= 0) {
//              clearInterval(counter);
//              //counter ended, do something here
//              return;
//         }

//         $("#timer").text("seconds left:" + count);
//         //Do code for showing the number of seconds here
//     }
// }


function setupAnswerCoordinates(mapNumber) {

    $.getJSON('src/js/answers.json', function(json) {
        if (mapNumber == "0") { answerArray = json.map0; }
        if (mapNumber == "1") { answerArray = json.map1; }
        if (mapNumber == "2") { answerArray = json.map2; }  

        totalAnswers = answerArray.length;

        $("#q1").html("Where is " + answerArray[0].text + "?");

        $(".divLeft").fadeIn();
        $(".divRight").fadeIn();
           
        $("#done").click(function() {
            allowMapClick = false;

            $('#done').hide();

            // anwser coordinates
            var lat = answerArray[currentQuestion].answer[0][0];
            var lng = answerArray[currentQuestion].answer[0][1];       
            var currentAnswerCoordinates = new google.maps.LatLng(lat, lng);
  
            var currentDistance = parseInt(calcDistance(currentMarker, currentAnswerCoordinates));
            totalKm = totalKm + currentDistance;

            var answerCity = answerArray[currentQuestion].text;
            $("#q1").hide();
            $("#q2").addClass("marginTop");
            $("#q2").html("You clicked " + currentDistance + " km from " + answerCity);

            setTimeout(function(){ 
                showAnswerMarker(parseInt(lat), parseInt(lng), answerCity);
            }, 700);
            

            $('#next').show();
               
            // $("#btnAddProfile").html('Save');
            
        });

        $('#next').click(function() {
            deleteOverlays(); // remove previous marker

            allowMapClick = true;

            $("#q1").show();
            $("#q2").removeClass("marginTop");
            $("#q2").html("(Click on map)");
            $('#next').hide();
            currentQuestion++;

            if(currentQuestion == totalAnswers-1) {
                $("#next").html("Finish!");

                $("#next").click(function() {
                    pushHighScore(totalKm, mapNumber);
                    
                });
                
            }

            if (currentQuestion == totalAnswers) {
                $("#q1").html("Wow, well done!");
                $("#q2").html("You recieved a total of " + totalKm + " km!");
                allowMapClick = false;
                return; 
            }

            $("#q1").html(("Where is " + answerArray[currentQuestion].text + "?"));

        });       
    });
}

function pushHighScore(totalKm, mapNumber) {
    $.post("highscore.php", { totalKm: totalKm, mapNumber: mapNumber })
    .done(function(data) {
        $( ".highscore" ).html(data);
    
    });
}

function c(tjo) {
    console.log(tjo);
}


function initialize(lat, lng, zoom) {
    var mapCenter = new google.maps.LatLng(lat, lng);

    var myOptions = {
        center: mapCenter,
        zoom: zoom,    
        scrollwheel: false,
        draggable: false,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapStyle = [
        {
            "featureType": "landscape",
            "stylers": [
                { "saturation": 59 },
                { "weight": 3.8 },
                { "hue": "#5eff00" },
                { "gamma": 0.96 },
                { "lightness": -31 }
            ]
        },{
            "featureType": "water",
            "stylers": [
                { "visibility": "simplified" },
                { "hue": "#00fff7" },
                { "saturation": -21 },
                { "lightness": 40 }
            ]
        },{
            elementType: 'labels',
            stylers: [
                { visibility: 'off' }
            ]
        }
    ];

    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    // styling
    map.setOptions({styles: mapStyle});  

    // add a click event handler to the map object
    google.maps.event.addListener(map, "click", function(event) {
        if(!allowMapClick) {
            return;
        }
        // place a marker
        placeMarker(event.latLng);

        $('#done').show();
        
        // $('#q2').fadeOut(); remove 'click on map'-text

    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
    });
}

function showAnswerMarker(lat, lng, answerCity) {
    infoWindow = new google.maps.InfoWindow();

    var infowindow = new google.maps.InfoWindow({
        content: answerCity
    });

    var markerAnswer = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "img/icon_answer-city.png"
    });
    setTimeout(function(){ 
        infowindow.open(map, markerAnswer); 
    }, 700);
    

    markersArray.push(markerAnswer);
}

function placeMarker(location) {
    // first remove all markers if there are any
    deleteOverlays();

    var marker = new google.maps.Marker({
        position: location, 
        map: map,
        draggable: true,
        icon: "img/icon_user-guess.png"
    });

    // add marker in markers array
    markersArray.push(marker);

    currentMarker = marker.position;

}

// Deletes all markers in the array by removing references to them
function deleteOverlays() {
    if (markersArray) {
        for (var i in markersArray) {
            markersArray[i].setMap(null);
        }
    markersArray.length = 0;
    }
}


//calculates distance between two points in km's
function calcDistance(marker, city) {
    return (google.maps.geometry.spherical.computeDistanceBetween(marker, city) / 1000).toFixed(2);
}



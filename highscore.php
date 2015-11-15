
<?php session_start(); ?>
<?php 

require 'db_connect.php';

$newscore = $_POST['totalKm'];


$query = 'SELECT score FROM scores 
INNER JOIN users 
ON scores.user_id=users.id
WHERE scores.user_id = :user_id AND scores.map_number = :map_number';


$stm2 = $conn->prepare($query);
$stm2->execute(array(
	':user_id' => $_SESSION['user_id'],
	':map_number' => $_POST['mapNumber']
)); 
$result = $stm2->fetchAll();


foreach ($result as $row) {
	$oldscore = $row['score'];
}


if (!$result) { // INSERT score if user do not have ha previous score in DB
	$stm = $conn->prepare("INSERT INTO scores (score, map_number, user_id) VALUES (:score, :map_number, :user_id)");
	$stm->execute(array(
		':score' => $newscore,
		':map_number' => $_POST['mapNumber'],
	    ':user_id' => $_SESSION['user_id']
	)); 
} else { 
	// UPDATE score if the new score is better than the old one!
	if ($newscore < $oldscore) {
		$query = "UPDATE scores 
		SET score = :score         
		WHERE user_id = :user_id AND map_number = :map_number";

		$stmt = $conn->prepare($query);
		$stmt->execute(array(
			':score' => $newscore,
			':map_number' => $_POST['mapNumber'],
		    ':user_id' => $_SESSION['user_id']
		));
	}
}


// get all scores and show a highscore
$query2 = 'SELECT * FROM scores 
LEFT JOIN users 
ON users.id = scores.user_id
WHERE map_number = :map_number
ORDER BY score';

$stm3=$conn->prepare($query2);
$stm3->execute(array(
	':map_number' => $_POST['mapNumber']
)); 

$result2 = $stm3->fetchAll();

$highscorePos = 1;
// skicka tillbaka highscore-data!
echo "<table class='table'>";
	echo "<thead align='center'>";
		echo "<tr>";
			echo "<th>#</th>";
			echo "<th>Player</th>";
			echo "<th>Score</th>";
		echo "</tr>";
	echo "</thead>";
	foreach($result2 as $row) {
		echo "<tr>";
			echo "<td align='center'>" . $highscorePos . "</td>";
			echo "<td align='center'>" . $row['username'] . "</td>";
			echo "<td align='center'>" .  $row['score'] . "</td>";
		echo "<tr>";
		$highscorePos++;
	} 
echo "</table>";
?>


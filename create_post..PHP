<?php
  // Get user inputs
  $username = $_POST["username"];
  $message = $_POST["message"];

  // Connect to database
  $conn = mysqli_connect("localhost", "username", "password", "forum_db");

  // Insert new post into database
  $query = "INSERT INTO posts (username, message) VALUES ('$username', '$message')";
  mysqli_query($conn, $query);

  // Close database connection
  mysqli_close($conn);

  // Redirect back to forum page
  header("Location: forum.php");
?>

<?php 
   session_start();
   include "db_conn.php";
   if (isset($_SESSION['username']) && isset($_SESSION['id'])) {   

include "project.php";
 }else{
	header("Location: index.php");
} ?>
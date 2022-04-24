<?php

	$dbhost="localhost";
	$dbuser="root";
	$dbpass="";
	$dbname="test";
	
	$conn=mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
	if(!$conn)
	{
		die("No hay conexión: ".mysqli_connect_error());
	}
	
	$nombre=$_POST['correo'];
	$pass=$_POST['password'];
	
	
	$query=mysqli_query($conn,"Select * from login where usuario = '".$nombre."' and password = '".$pass."'");
	$nr=mysqli_num_rows($query);

	if($nr == 1)
	{

		echo "<script>alert('BIENVENIDO ".$nombre." ');window.location= 'inicio.html' </script>";
	}
	else if ($nr == 0)
	{
		echo "<script>alert('Usuario no existe');window.location= 'terminos.html' </script>";
	}
	
?>

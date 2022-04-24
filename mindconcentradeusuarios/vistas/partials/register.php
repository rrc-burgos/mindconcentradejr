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
	
	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$pass=$_POST['password'];
	$pass2=$_POST['password2'];
	$terminos=$_POST['terminos'];

	$consulta = "INSERT INTO  register (nombre, correo, password, password2, terminos) VALUES ('$nombre','$correo.','$pass','$pass2','$terminos')";
	    
	$resultado = mysqli_query($conn,$consulta);

		if ($resultado ) 
		{
			echo "<script>alert('BIENVENIDO ".$nombre." ');window.location= 'inicio.html' </script>";

		} 
		else if ($resultado)
		{
			echo "<script>alert('Usuario no existe');window.location= 'terminos.html' </script>";	    
		}
?>

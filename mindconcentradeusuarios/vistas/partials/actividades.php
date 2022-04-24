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
	
	$actividad=$_POST['actividad'];
	$dia=$_POST['dia'];
	$fecha=$_POST['fecha'];
	$hora=$_POST['hora'];


	$consulta = "INSERT INTO  actividades (actividad, dia, fecha, hora) VALUES ('$actividad.','$dia','$fecha','$hora')";
	    
	$resultado = mysqli_query($conn,$consulta);

		if ($resultado ) 
		{
			echo "<script>alert('REGISTRO EXITOSO');window.location= 'dashboard.html' </script>";

		} 
		else if ($resultado)
		{
			echo "<script>alert('Usuario no existe');window.location= 'terminos.html' </script>";	    
		}
?>

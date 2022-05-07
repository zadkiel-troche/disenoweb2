<?php
    session_start();
    $_SESSION["personas"]=[];
    $_SESSION["errores"]=[];
    $_SESSION["error"]=0;

    if (isset($_POST["enviar"])) {
        array_pop($_POST); 
        foreach($_POST as $clave => $valor) {
            $_SESSION[$clave] = $valor;
        }
    }

    if($_POST){
        $errores=$_SESSION["errores"];
        $error=$_SESSION["error"];

        if(isset($_POST['eliminar'])){
            session_destroy();
        }else{
            if($_POST["nombre"]==""){
                $error++;
                array_push($errores,"El nombre no debe estar vacio");
                
            }
    
            if($_POST["apellido"]==""){
                $error++;
                array_push($errores,"El apellido no debe estar vacio");
            }
    
            if($_POST["fecha_nac"]==""){
                $error++;
                array_push($errores,"Debe cargar una fecha");
            }
    
            if ($error>0) {
                echo "<div class='container errors' style='margin-top:50px; margin-bottom:30px; padding: 10px; border-radius: 7px; background-color: grey'><center><img src='https://cdn-icons-png.flaticon.com/512/753/753345.png' width='50px'/> <h4 style='color: white;'>Errores encontrados</h4><p style='color: white;'>";
                print_r($errores);
                echo "</p></center></div>";    
            } 
            else{
                array_push($_SESSION["personas"], $_POST);
                $procesado="<div class='container errors' style='margin-top:50px; margin-bottom:30px; padding: 10px; border-radius: 7px; background-color: grey'><center><img src='https://cdn-icons-png.flaticon.com/512/190/190411.png' width='50px'/> <h4 style='color: white;'>La solicitud fue procesada correctamente</h4></center></div>";
                echo $procesado;
            }
        }
    }
?>

<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Formulario PHP</title>
  </head>
  <body style="background-color: black; margin-top: 50px; margin-bottom: 50px;">
    <div class="container" align="center">
        <h1 style="color: white">¡Bienvenido!</h1>
        <p style="color: white">Por favor complete el formulario</p>

        <div class="container" style="padding: 10px; border-radius: 7px; background-color: grey">
            <form method="POST" action="formulario.php">
                <div class="mb-3">
                    <h4 for="name" class="form-label">Nombre:</h4>
                    <input type="text" class="form-control" id="name" name="nombre">
                </div>

                <div class="mb-3">
                    <h4 for="lastname" class="form-label">Apellido</h4>
                    <input type="text" class="form-control" id="lastname" name="apellido">
                </div>

                <div class="mb-3">
                    <h4 for="fec_nac" class="form-label">Fecha de Nacimiento:</h4>
                    <input type="date" class="form-control" id="fec_nac" name="fecha_nac">
                </div>
                
                <button type="submit" name="enviar" class="btn btn-primary mb-3">Guardar</button>
                <button type="" class="btn btn-danger mb-3" name="eliminar" >Borrar Datos</button>
            </form>
        </div>
    </div>

    <div class="container" style="margin-top: 40px">
        <p style="color: white">Datos Guardados</p>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Fecha Nacimiento</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if(!empty($_SESSION["personas"])){
            
                        $personas = $_SESSION["personas"];
                        $cont=count($_SESSION["personas"]);
            
                        for($i=0; $i<$cont; $i++){
            
                            echo( "<tr><th scope='row'>".$i."</th><td>".$personas[$i]['nombre']."</td><td>".$personas[$i]['apellido']."</td><td>".$personas[$i]['fecha_nac']."</td></tr>");
            
                        }
                    }
                ?>
            </tbody>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
</html>
$('#boton1').click(function () {
  var nuevoContenido = $('#contenido1').html();
  if ($('#miDiv').html() !== nuevoContenido) {
    $('#miDiv').html(nuevoContenido);
  }
});

$('#boton2').click(function () {
  var nuevoContenido2 = $('#contenido2').html();
  if ($('#miDiv').html() !== nuevoContenido2) {
    $('#miDiv').html(nuevoContenido2);
  }
});

$('#nuevoEstudiante').click(
  function () {

    var codigo = $('#codigo').val();
    var nombre = $('#nombres').val();
    var apellido= $('#apellidos').val();
    var curso= $('#curso').val();
    $('#estudiantes2 tr:last').after('<tr class="table-success">' + '<td>' + codigo + '</td><td>' + nombre + '</td></td>'+ '</td><td>' + apellido + '</td></td>'+ '</td><td>' + curso + '</td></tr>');
    $('#estudiantes tr:last').after('<tr class="table-success">' + '<td>' + codigo + '</td><td>' + nombre + '</td></td>'+ '</td><td>' + apellido + '</td></td>'+ '</td><td>' + curso + '</td></tr>');
    $('#exampleModal').modal('toggle');
  }
  
)

$('#nuevoArticulo').click(
  function () {

    var codigo2 = $('#codigoArticulo').val();
    var nombre2 = $('#nombreArticulo').val();
    var cantidad= $('#cantidad').val();
    var precio= $('#precio').val();
    $('#articulos tr:last').after('<tr class="table-success">' + '<td>' + codigo2 + '</td><td>' + nombre2 + '</td></td>'+ '</td><td>' + cantidad + '</td></td>'+ '</td><td>' + precio + '</td></tr>');
    $('#exampleModal2').modal('toggle');
  }
  
)
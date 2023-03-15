$(document).ready(function() {
    $('#boton1').click(function() {
      var nuevoContenido = $('#contenido1').html();
      if ($('#miDiv').html() !== nuevoContenido) {
        $('#miDiv').html(nuevoContenido);
      }
    });
    
    $('#boton2').click(function() {
      var nuevoContenido = $('#contenido2').html();
      if ($('#miDiv').html() !== nuevoContenido) {
        $('#miDiv').html(nuevoContenido);
      }
    });
    
    $('#boton1, #boton2').click(function() {
      $('#contenido1, #contenido2').not('#' + $(this).attr('data-target')).hide();
      $('#' + $(this).attr('data-target')).show();
    });
  });
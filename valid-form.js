
function validacion() 
{
    valor1 = document.getElementById("fname").value;
    valor2 = document.getElementById("lname").value;
    valor3 = document.getElementById("mail").value;
    
    if( valor1 == null || valor1.length == 0 || valor2 == null || valor2.length == 0 || valor3 == null || valor3.length == 0) 
    {
        alert("Falta completar datos!")
        elemento = document.getElementById('fname');
        elemento.focus();
        
        return false;
    }

    indice1 = document.getElementById("asistencia").selectedIndex;
    indice2 = document.getElementById("comida").selectedIndex;
      
      if( indice2 == null || indice2 == 0 ) 
      {
          alert("Tenés que seleccionar una opción!")
          return false;
      }
      
    valor = document.getElementById("mail").value;
      
        
      if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
      {
        alert("El e-mail no es válido")
          
          elemento = document.getElementById('mail');
          elemento.value = '';
          elemento.focus();

          return false;
      }

    
    return true; 
}

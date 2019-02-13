/* Acá va tu código */
//la siguientes líneas, ejecutan el que reconozca el nombre del usuario, y lo imprima, desplegando la intro
function ingresar(){
    if(userName.value){
   var name=document.getElementById('userName');
   //le entrega valor a name
   document.getElementById('welcomeMessage').innerHTML= '¡' + 'Bienvenidx, ' + name.value + '!';
   //imprime el mensaje en html
   document.getElementById('buttonCategory').style.display='block'
   document.getElementById('login').style.display='none'
     }
   }
   
   
   //Esta función es para CIFRAR. Una vez que la persona ingresa el texto, debe hacer click en el botón Codificar y se ejecutará esta acción
   document.getElementById('btnCipher').addEventListener('click',(evento)=>{
      evento.preventDefault();
      //aquí creamos una variable para guardar el valor de lo que la persona ingresa en el textarea del mensaje
      let textCipher = document.getElementById('boxCipher').value;
      //aquí creamos una variable para guardar el valor de lo que la persona ingresa en el offset
      let offsetCipher = document.getElementById('offset1').value;
      //aquí ingresamos en el cuadro de nuevoTexto, que está en HTML, el resultado de la función encode presente en el cipher.js
      document.getElementById('resultCipher').innerHTML = window.cipher.encode(textCipher, offsetCipher);
   })
   
   
   //Esta función es para DESCIFRAR. Una vez que la persona ingresa el texto, debe hacer click en el botón Decodificar y se ejecutará esta acción
   document.getElementById('btnDecipher').addEventListener('click',(evento)=>{
      evento.preventDefault();
      let textDecipher = document.getElementById('boxDecipher').value;
      let offsetDecipher = document.getElementById('offset2').value;
      document.getElementById('resultDecipher').innerHTML = window.cipher.decode(textDecipher, offsetDecipher);
   })
 //CIFRADO
 window.cipher = {
  //función encode, donde ingreso parámetros que ya ingrese en el html
      encode: (textCipher, offsetCipher) => {
  //creo variable vacía, que guarda el resultado de las nuevas letras tarsnformadas
              let result = "";
              //con el siguiente for, recorremos el textCipher (osea, el mensaje que ingresa el usuario)
              for (let i=0; i<textCipher.length; i++){
              //e la siguiente variable, se toma cada letra del mensaje que s eingresa, y lo transforma a su equivalente en codigo ASCII
              let transformText = textCipher[i].charCodeAt();
              //con esta condicional, digo que si mi mensaje esta entre le 65 y 90 (código ASCII, A-Z), 
              if (transformText >=65 && transformText <=90){
              //a esto último se le aplicará una variable, la cual contiene la formula de Michelle, que da el código ascii transformado (parseInt es para el dígito) 
              let cipherMayus=(transformText-65 + parseInt(offsetCipher))%26+65;
              //acá le digo a result que concatene con el += el mensaje, lo transforme en "letras" desde el codigo ASCII
              //el from Cahr Code, convierte el codigo ascii en la letra que le corresponde
              result += String.fromCharCode(cipherMayus);
  
          }
         }
         //declaro con returns que ese será mi resultado, y esto es lo que se imprimirá en mi html
          return result;
      },
      
      decode: (textDecipher, offsetDecipher) => {
          let resultDecipher = "";
          for (let i=0; i<textDecipher.length; i++){
          let transformText = textDecipher[i].charCodeAt();
              if (transformText >=65 && transformText <=90){
              let decipherMayus=(transformText-65 - parseInt(offsetDecipher))%26+65;
              resultDecipher += String.fromCharCode(decipherMayus);
                  
          }
              
      }
      return resultDecipher;
  
  }
  };
  
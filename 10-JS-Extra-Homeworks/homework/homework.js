// No cambies los nombres de las funciones. 
// Ok!

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  //un par clave-valor en forma de matriz.
  // Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  var matriz = [];
  var matriz_aux = [];
  for(var clave in objeto)
    {
      matriz_aux.push(clave);
      matriz_aux.push(objeto[clave]);          
      matriz.push(matriz_aux);
      matriz_aux = [];
    } 
  return matriz;
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`.
  // Devuelve el objeto.
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" 
  //(una cadena/string).
  // Tu código:
  objeto[property] = null;
  return objeto;
} 

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre 
  //es igual al valor del argumento "propiedad".
  // "propiedad" es un string.
  // De lo contrario, devuelve "false".
  // Tu código:
  var r = false;
  for(let clave in objeto)
  {
     if(clave === propiedad)
     {
       r = r || true;
       break;
     }
     else
     {
       r = r || false;
     }
  }
  return r;
}

function numberOfCharacters(string) {
  // La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  // Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  // Tu código
  // Tomo el caracter string[i]
  // Si string[i] no es propiedad del objeto -->
  //      Recorro el string, y en otra variable r, voy sumando cuantas veces aparece,
  //      Pusheo el par clave-valor en un objeto
  // Si string[i] es propiedad del objeto -->
  //      No hago nada,
  //      i = i + 1;
  var objeto = {};
  var property;
  for(var i = 0; i < string.length; i++)
  {
    property = string[i];
    if (!tienePropiedad(objeto, property))
    {
        var r = 0;
        for(var j = i; j < string.length; j++)
        {
          if(string[i] === string[j])
          {
            r = r + 1;
          }
          else{;}
        }
        objeto = agregarPropiedad(objeto, property);
        objeto[property] = r;
    }
    else{;}
  }
  return objeto;
}

function esMinuscula(letra){
  // Devuelve true si letra es minuscula, si no lo es, devuelve false.
  return (letra === letra.toLowerCase());
}

function capToFront(s) {
  // Realiza una función que reciba como parámetro un string y 
  //mueva todas las letras mayúsculas al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //En un string mayu guardare las mayusculas y en un string min guardare las minusculas, luego el resultado es la concat. 
  var mayu = "";
  var minu = "";
  for(var i = 0; i < s.length; i++)
  {
    if (esMinuscula(s[i]))
    {
      minu = minu + s[i];
    }
    else
    {
      mayu = mayu + s[i];
    }
  } 
  r = mayu + minu;
  return r; 
}

function invertirWord(word)
// invertirWord recibe una palabra y devuleve la palabra invertida.
{
  var r = "";
  for(var i = 0; i < word.length ; i++)
  {
    r = r + word[(word.length) - 1 - i];
  }
  return r;
}

function asAmirror(str) {
  // La función recibe una frase. 
  // Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  // Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  // Escribe tu código aquí
  // Recorro la frase hasta encontrar un espacio
  // La palabra antes de ese espacio la invierto
  var r = "";
  var word = "";
  for(var i = 0; i <= str.length; i++)        //recorro toda la frase
  {
    if(i === (str.length))                    //llegue al final
    {
      word = invertirWord(word);                
      r =  r + word;
    }
    else
    {
      if(str[i] === " ")                      //la letra es un espacio  
      {
        word = invertirWord(word);                
        r =  r + word + " ";
        word = "";
      } 
      else                                    //la letra no es un espacio, es decir sigo en la palabra
      {
        word = word + str[i];                      
      }
    }
  }
  return r;
} 

function invertirNumero(numero)
{
  // invertirNumero recibe un numero y devuleve el numero invertido pero en cadena.
  // Ej: invertirNumero(123) = "321"
  // Transformo el numero en una cadena.
  // Invierto cadena utilizando invertWord.
  // Paso de de cadena a numero.
  // Retorno la cadena.
  var r = "";
  r = numero.toFixed(0);                      //transformo el numero en cadena
  r = invertirWord(r);
    return r;
}


function capicua(numero){
  // Escribe una función, la cual recibe un número y determina si es o no capicúa.
  // La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua".
  // Escribe tu código aquí
  // Tenemos dos casos:
  //    - Si el numero es capicua --> devuelvo "Es capicua".
  //    - Si el numero no es capicua --> devuelvo "No es capicua".
  // Noto que si numero == numeroInvertido --> es capicua
  // En cualquier otro caso, no lo es

  if(numero == invertirNumero(numero))                //Es capicua
  {
    return "Es capicua";
  }
  else                                               //No es capicua
  {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  // Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  // Escribe tu código aquí
  // Recorro la cadena hasta el final
  //    Si la letra es distintia de a, b y c --> agrego esa letra al retorno.
  //    Si la letra es igual a a, b o c      --> avanzo con la siguiente letra.

  r = "";
  for(var i = 0; i < cadena.length; i++)
  {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c")
    {
      r = r + cadena[i];
    }
    else
    {
      ;
    }
  }
  return r;
}


function sortArray(arr) {
  // La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena.
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  // Escribe tu código aquí
  // Recorro el arreglo hasta el final.
  // Si la longitud de arr[i] es < a la longitud de arr[i-1] entonces intercambio posicion y i = i - 1;
  // Si arr[i] es >= a arr[i-1] entontes avanzo.
  // Si i = 0 avanzo.
  var aux;
  var i = 1;
  while(i < arr.length)
  {
    if(i === 0 || (arr[i]).length >= (arr[i-1]).length)
    {
      i = i + 1;
    }
    else
    {
      aux = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = aux;
      i = i - 1;
    }
  }
  return arr;
}

function existe(elem, arr)  
// exite devuelve si el elemento elem existe en el arreglo arr.
{
  r = false;
  for(var i = 0; i < arr.length; i++)
  {
    if (elem === arr[i])
    {
      r = true || r;
    }
    else
    {
      r = false || r;
    }
  }
  return r;
}


function buscoInterseccion(arreglo1, arreglo2){
  // Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // Aclaración: los arreglos no necesariamente tienen la misma longitud.
  // Escribe tu código aquí  
  // ej : arreglo1 = [1,2,5,1,2], arreglo2 = [4,1,6,2,3]
  // Voy a suponer que los arreglos pueden tener diferentes longitudes y que la parte del enunciado "Existen dos arrays
  //,cada uno con 5 números" es erronea.
  // Encuentro las longitudes de anbos arreglos, long1 y long2
  // Hago un doble ciclo para ir comparando cada elemento de una reglo con cada uno del otro.
  // Si elem1 === elem2 && elem1 no esta en nuevo_arreglo --> agrego elem1 a nuevo arreglo.
  //en cuanlquier otro caso                               --> sigo avanzando en arreglo2.
  var nuevo_arreglo = [];
  for(var i = 0; i < arreglo1.length; i++)
  {
    for(var j = 0; j < arreglo2.length; j++)
    {
      if(arreglo1[i] === arreglo2[j] && !existe(arreglo1[i], nuevo_arreglo))
      {
        nuevo_arreglo.push(arreglo1[i])
      }
      else
      {
        ;
      }
    }
  }
  return nuevo_arreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


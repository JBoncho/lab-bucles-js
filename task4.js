// Consulta la Tarea 4 en tus Instrucciones para completar esta tarea
/* Las condiciones NO son excluyentes. Un número puede mostrar una combinación de palabras (ej: 21 es múltiplo de 3 y 7 -> "FizzWoof";
105 es múltiplo de 3, 5 y 7 -> "FizzBuzzWoof").
La salida debe concatenar Fizz, luego Buzz, luego Woof en ese orden, y solo mostrar el número si ninguna condición se cumple.*/

for (let i = 0; i <= 105; i++) {
  if(i%3 === 0 && i%5===0 && i%7===0){
    console.log("FizzBuzzWoof");
  }else if (i%3===0 && i%5===0){
    console.log("FizzBuzz");
  }else if (i%3===0 && i%7===0){
    console.log("FizzWoof")
  }else if (i%5===0 && i%7===0){
    console.log("BuzzWoof")
  }else if (i%3===0){
    console.log("Fizz");
  }else if (i%5===0){
    console.log("Buzz");
  }else if(i%7===0){
    console.log("Woof");
  }else{
    console.log(i);
  }
};
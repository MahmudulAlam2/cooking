fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => console.log(data));


// const displayMeal = idIngredient =>{
//   for (let i = 0; i < idIngredient.length; i++) {
//     const ingredient = idIngredient[i];
//     console.log(data);
//   }
// }

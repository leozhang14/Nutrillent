export const Multiplier = async (foodInput, amount) => {
  let regex = /^[A-Za-z\s]*$/.test(foodInput);
  if (!regex && isNaN(amount)) {
    return [];
  } else if (isNaN(amount)) {
    return ["amount"];
  } else if (!regex) {
    return ["food"];
  }
  var api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?&query=${foodInput},&pageSize=2&api_key=6MQ4LW4IKJM0u9xCgJzqOpOjWCbBah1NoPxdWvd0&dataType=Survey%20(FNDDS)`;
  const response = await fetch(api_url);
  const result = await response.text();
  const obj = JSON.parse(result);
  var multipliers = [];
  if (obj.totalHits === 0) {
    return ["food"];
  }
  var numOfNutrients = Object.keys(obj.foods[0].foodNutrients).length;
  for (var i = 0; i < numOfNutrients; i++) {
    var currIdx = obj.foods[0].foodNutrients[i].nutrientName;
    if (currIdx === "Vitamin B-12" ||
      currIdx === "Iron, Fe" ||
      currIdx === "Zinc, Zn" ||
      currIdx === "Potassium, K" ||
      currIdx === "Magnesium, Mg" ||
      currIdx === "Vitamin A, RAE" ||
      currIdx === "Vitamin C, total ascorbic acid" ||
      currIdx === "Vitamin D (D2 + D3)" ||
      currIdx === "Vitamin E (alpha-tocopherol)" ||
      currIdx === "Calcium, Ca"
      ) {
      var multiplier = obj.foods[0].foodNutrients[i].value / 100;
      multipliers.push(multiplier);
      if (obj.foods[0].foodNutrients[i].nutrientName === "Vitamin B-12") {
        break;
      }
    }
  }
  return multipliers;
};

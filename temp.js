let temprature = 99.20;
function konSuhu(temprature) {
    return (temprature - 32) * 5/9;
  }
let celsius = konSuhu(temprature);

export {temprature, celsius};
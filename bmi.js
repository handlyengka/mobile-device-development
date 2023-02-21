export default (berat, tinggi) => {
    
    const bmi = berat / (tinggi * tinggi);
    let category;
    if (bmi < 18.5) {
      category = 'berat badan kurang ';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'normal ';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'berat badan berlebihan ';
    } else if (bmi >= 30) {
      category = 'OBESITAS ';
    }
  
    return `BMI = ${bmi.toFixed(2)} (${category})`;
  };
  
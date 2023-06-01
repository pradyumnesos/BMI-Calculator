function getbmi(){
    var height=document.getElementById('h1').value/100.0;
    var weight=document.getElementById('h2').value;
    var bmi=weight/(height*height);
    var result = "";
    if (isNaN(bmi)) {
      result = "Please enter valid weight and height.";
      document.getElementById('res').innerHTML=result;
      return;
    } else {
      if (bmi < 18.5) {
        result = "Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight";
      } else {
        result = "Obese";
      }
    }
    bmi=Math.round(bmi*10)/10;
    document.getElementById('res').innerHTML = "BMI : " + bmi + " "+ result;
}
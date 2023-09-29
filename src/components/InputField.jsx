import { useState } from "react";
import { useBMI } from "../context/BMIContext";

function InputField() {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const {
    bmi,
    setBMI,
    gender,
    setGender,
    setWeighter,
    setCalories,
    Calories,
  } = useBMI();
  const [bmr, setBMR] = useState(0);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const heightinM = height / 100;

    const BMI = (weight / (heightinM * heightinM)).toFixed(1);

    if (BMI < 18.5) {
      setWeighter("Underweight");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      setWeighter("Normal Weight");
    } else if (BMI >= 25 && BMI <= 29.9) {
      setWeighter("Overweight");
    } else if (BMI >= 30 && BMI <= 34.9) {
      setWeighter("Obesity (Class 1)");
    } else if (BMI >= 35 && BMI <= 39.9) {
      setWeighter("Obesity (Class 2)");
    } else {
      setWeighter("Obesity (Class 3)");
    }
    if (gender === "male") {
      const BMRMale = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      setBMR(BMRMale);
      const calories = (BMRMale * 1.55).toFixed(1);

      setCalories(calories);
    } else if (gender === "female") {
      const BMRFemale = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      const calories = (BMRFemale * 1.55).toFixed(0);
      setCalories(calories);
      setBMR(BMRFemale);
    }
    setBMI(BMI);
    setAge("");
    setWeight("");
    setHeight("");
  };
  return (
    <div>
      <form
        onSubmit={onHandleSubmit}
        className="flex flex-col justify-evenly flex-grow pb-4 gap-4"
      >
        <div className="flex justify-center gap-4">
          <div>
            <input
              type="radio"
              id="male"
              value="male"
              name="Gender"
              required
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="female"
              name="Gender"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <label htmlFor="age">Age</label>
        <div className=" flex flex-grow gap-4">
          <input
            type="number"
            id="age"
            className=" p-1 rounded-lg w-full text-black"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <p>{age > 1 ? age : "20"}years</p>
        </div>
        <label htmlFor="height">Height</label>
        <div className=" flex flex-grow gap-4">
          <input
            type="number"
            id="height"
            value={height}
            className=" p-1 rounded-lg w-full text-black"
            required
            onChange={(e) => setHeight(e.target.value)}
          />
          <p>{height > 1 ? height : "100"}cm</p>
        </div>
        <label htmlFor="height">Weight</label>
        <div className=" flex flex-grow gap-4">
          <input
            type="number"
            id="weight"
            value={weight}
            className=" p-1 rounded-lg w-full text-black"
            required
            onChange={(e) => setWeight(e.target.value)}
          />
          <p>{weight > 1 ? weight : "20"}kg</p>
        </div>
        <div className=" flex justify-center">
          <button type="submit" className=" bg-green-700 rounded-lg w-40 p-2">
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputField;

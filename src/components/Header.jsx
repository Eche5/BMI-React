import { useBMI } from "../context/BMIContext";

function Header() {
  const { bmi, Calories, weighter } = useBMI();
  return (
    <header className="  text-white text-center ">
      <h1 className="text-3xl">BMI CALCULATOR</h1>
      <div>
        <div className=" bg-slate-200">
          <p className=" text-2xl text-green-700">{bmi > 1 ? bmi : "20"}</p>
          <p className=" text-black">{weighter}</p>
          <p className="text-2xl text-green-700">
            {Calories}
            <span className=" text-black"> Calories/day</span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;

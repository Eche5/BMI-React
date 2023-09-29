import { createContext, useContext, useState } from "react";

const BMIContext = createContext();

const BMIProvider = ({ children }) => {
  const [gender, setGender] = useState("male");
  const [bmi, setBMI] = useState(0);
  const [Calories, setCalories] = useState(1640);
  const [weighter, setWeighter] = useState("Normal Weight");

  return (
    <BMIContext.Provider
      value={{
        setGender,
        gender,
        bmi,
        setBMI,
        Calories,
        setCalories,
        weighter,
        setWeighter,
      }}
    >
      {children}
    </BMIContext.Provider>
  );
};
const useBMI = () => {
  const context = useContext(BMIContext);
  return context;
};

export { useBMI, BMIProvider };

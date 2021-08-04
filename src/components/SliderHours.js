import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import "../assets/styles/components/SliderHour.scss";

const SliderHours = () => {
  const [value, setValue] = useState([0, 24]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      valueLabelDisplay="on"
      max={24}
      min={0}
    />
  );
};

export default SliderHours;

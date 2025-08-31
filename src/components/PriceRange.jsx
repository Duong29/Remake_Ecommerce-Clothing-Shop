import { useState } from "react";
import Slider from "rc-slider"; // hoặc: import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default function PriceRange({
  min = 0,
  max = 600,
  step = 5,
  defaultValue = [250, 450],
  onChange,
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="well text-center">
      <Slider
        range
        min={min}
        max={max}
        step={step}
        allowCross={false}
        value={value}
        onChange={setValue}
        onAfterChange={(v) => onChange?.({ min: v[0], max: v[1] })}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <b>${value[0]}</b>
        <b>${value[1]}</b>
      </div>
    </div>
  );
}

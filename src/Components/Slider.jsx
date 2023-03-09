import React from "react"

export default function Slider({name, min, max, value, handelChange}) {
  return (
    <div className="slider-container">
      <div className="slider-name">{name}</div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={0.1}
        className="slider"
        onChange={handelChange}
      />
    </div>
  )
}

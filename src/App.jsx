import React, {useState} from "react"
import Image from "./Components/Image"
import Sidebar from "./Components/Sidebar"
import Slider from "./Components/Slider"

export default function App() {
  const DefaultOptions = [
    {
      name: "Brightness",
      property: "brightness",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Contrast",
      property: "contrast",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Grayscale",
      property: "grayscale",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Saturation",
      property: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Sepia",
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Blur",
      property: "blur",
      value: 0,
      range: {
        min: 0,
        max: 10,
      },
      unit: "px",
    },
    {
      name: "Hue-rotate",
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360,
      },
      unit: "deg",
    },
    {
      name: "Opacity",
      property: "opacity",
      value: 1,
      range: {
        min: 0,
        max: 1,
      },
      unit: "",
    },
  ]
  const [selectedOptionsIndex, setSelectedOptionsIndex] = useState(0)
  const [options, setOptions] = useState(DefaultOptions)
  const selectedOption = options[selectedOptionsIndex]
  function sliderChange({target}) {
    setOptions((prevOption) => {
      return prevOption.map((option, index) => {
        if (index !== selectedOptionsIndex) return option
        return {...option, value: target.value}
      })
    })
  }
  function styliedImage() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`
    })
    return {filter: filters.join(" ")}
  }
  return (
    <div className="container">
      <Image edit={styliedImage} />
      <div className="sidebars">
        {options.map((option, index) => {
          return (
            <Sidebar
              key={index}
              option={option}
              active={index === selectedOptionsIndex}
              handelClick={() => setSelectedOptionsIndex(index)}
            />
          )
        })}
      </div>
      <Slider
        name={selectedOption.name}
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handelChange={sliderChange}
      />
    </div>
  )
}

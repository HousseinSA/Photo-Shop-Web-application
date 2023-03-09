import React from "react"

export default function Sidebar({option, handelClick, active}) {
  return (
    <button
      className={`sidebar ${active ? "active" : ""}`}
      onClick={handelClick}>
      {option.name}
    </button>
  )
}

import React from 'react'

export function Select({ id, value, onChange, options=[], label }) {
  return (
    <>
      <label htmlFor={id}>{label}: </label>
      <select id={id} style={{ flex: 1 }} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}

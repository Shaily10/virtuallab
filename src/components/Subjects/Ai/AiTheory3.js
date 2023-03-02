import React from 'react'

export default function AiTheory3() {
  return (
    <div>
      <p>Program:</p>
      <p>Production rules:</p>
      <p>Arithmetic: c_to_f</p>
      <p>f is c*9/5+32</p>
      {/* <p>freezing{f{"<="}32}</p> */}
      <p>Rules:</p>
      <p>c_to_f(C,F):-</p>
      <p>F is C*9/5+32.</p>
      {/* <p>freezing(F):-{F=<32}.</p> */}
      <p>Output: Queries:</p>
      <p>?-c_to_f(100,X).</p>
      <p>X = 212 Yes</p>
      <p>?- freezing(15).Yes</p>
      <p>?- freezing(45).</p>
      <p>No</p>
    </div>
  )
}

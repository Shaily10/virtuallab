import React from 'react'

export default function AiTheory2() {
  return (
    <div>
      <p>a. Ram likes mango.</p>
      <p>b. Seema is a girl.</p>
      <p>c. Bill likes Cindy.</p>
      <p>d. Rose is red.</p>
      <p>e. John owns gold.</p>
      <p>Program:</p>
      <p>Clauses</p>
      <p>likes (ram, mango).</p>
      <p>girl (seema), red(rose).</p>
      <p>likes (bill, cindy).</p>
      <p>owns (john, gold).</p>
      <p>Output :</p>
      <p>Goal queries</p>
      <p>?-likes (Who, cindy).</p>
      <p>Who=cindy</p>
      <p>?-red (What).</p>
      <p>What=rose</p>
      <p>?-owns (Who, What).</p>
      <p>Who=john What=gold.</p>
    </div>
  )
}

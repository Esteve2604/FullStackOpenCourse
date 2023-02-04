import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad, all }) => {

  <Statistics props={({ good, neutral, bad, all })} />
  return (
    <>
      <table>
        <tbody>
          <tr>good <td> {good} </td> </tr>
          <tr>neutral <td>{neutral}</td></tr>
          <tr>bad <td>{bad}</td></tr>
          <tr>all <td>{all}</td></tr>
          <tr>average <td>{(good - bad) / all}</td></tr>
          <tr>positive <td>{good / all}%</td></tr>
        </tbody>
      </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = 0
  const setToValue = (value, set) => () => (set(value))
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={setToValue(good + 1, setGood)}>good</button>
      <button onClick={setToValue(neutral + 1, setNeutral)}>neutral</button>
      <button onClick={setToValue(bad + 1, setBad)}>bad</button>
      <h1>statistics</h1>
      <Statistics props={({ good, neutral, bad, all })} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
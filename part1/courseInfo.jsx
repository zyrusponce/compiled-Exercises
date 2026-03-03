import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Header = (props) => {
  const course = props.course
  return (
    <>
      <div>
        <h1>{course}</h1>
      </div>
      
    </>
  )
}

const Content = (props) => {
  const part1 = props.part1
  const part2 = props.part2
  const part3 = props.part3
  
  return (
    <>
      <div>
        <p>{part1}</p>
        <p>{part2}</p>
        <p>{part3}</p>
      </div>
      
    </>
  )
}

const Total = (props) => {
  const exercises1 = props.exercises1
  const exercises2 = props.exercises2
  const exercises3 = props.exercises3

  return(
    <div>
      <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
  

}
const App = () => {
  return(
    <div>
      <Header course = 'Half stack application development' />
      <Content part1 = 'Fundamentals of React' part2 = 'Using props to pass data' part3 = 'State of a component' />
      <Total exercises1 = {10} exercises2 = {7} exercises3 = {14} />

      
    </div>
  )

}

export default App

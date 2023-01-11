
import React from 'react'
import ReactDOM from 'react-dom'


const Title = ({course}) => {
  return <h1>{course}</h1>
}

/*
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};
*/

 const Part = ({part,exercise}) =>{
  return (
    <p>{part + " " + exercise}</p>
  )
}

const Content = (props) =>{
  return (
  <div>
    <Part part={props.part1} exercise={props.exercises1}/>
    <Part part={props.part2} exercise={props.exercises2}/>
    <Part part={props.part3} exercise={props.exercises3}/>
  </div>
  )
}

const Total = ({value1,value2,value3}) =>{
return <p>{value1 + value2 + value3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (<div>
    <Title course={course}/> 
    <Content part1={part1} exercises1={exercises1} 
    part2={part2} exercises2={exercises2}
    part3={part3} exercises3={exercises3}/>
    <Total value1={exercises1} value2={exercises2} value3={exercises3}/>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));



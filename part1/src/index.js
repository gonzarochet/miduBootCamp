
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

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}
/*
const Content = (props) =>{
  return (
  <div>
    <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
    <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
    <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
  </div>
  )
}
ç*/

const Total = (props) =>{
return (
<p>Number of exercises {props.parts[0].exercises +props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts: [
    {
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
    name: 'State of a component',
    exercises:  14
    }
  ]
}

  return (
  <div>
    <Title course={course.name}/> 
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));




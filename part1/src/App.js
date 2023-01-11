import './App.css';

import Mensaje from './Mensaje';


const Description = () => {
  return <p>This is the app of the course fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className='App'>
      <Mensaje color='red' message = 'We are working' />
      <Mensaje color="blue" message = "in a course" />
      <Mensaje color='black' message = "of React"/>
      <Description/>
    </div>
  )
}





export default App;

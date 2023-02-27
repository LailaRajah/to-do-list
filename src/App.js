
import './App.css';
import Lists from './component/Lists';
import Addtask from './component/Addtask';
import  { useState } from 'react'
import Filter from './component/Filter'
function App() {
  const [tasks , settasks]=useState([
  {
    name: "study",
    description :"Supposing spending 30 min per page of studying and 2 hours per page of exercises",
    done: true
  },
  {
    name: "eat",
    description :"Breakfast:7:00am Lunch: 12:00 pm Dinner: 20:00 pm",
    done: false  
  },
  {
    name: "go outside",
    description :"I go outside  and spend some time in the nature",
    done: false  
  }
])
const add=(y)=>{
  settasks([y,...tasks])
}
  const [search, setsearch] = useState("")
  return (
    <div className="App">
    <Addtask fnc={add}/>
    <Filter setsearch={setsearch}/>
     { tasks.filter((el)=>el.name.includes(search)).map((el)=> <Lists task= {el}/>)} 
    </div>
  );
}

export default App;

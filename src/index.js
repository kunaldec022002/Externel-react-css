
import ReactDOM from 'react-dom/client';
import './index.css';



//destructuring process
function Greeting({name,city})
{

  return(
    <div className="greeting-card">
      <h1>Hello, {name}</h1>
      <p>How is whether at {city}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>

  <Greeting name="Kunal" city="Talegaon"/>
  <Greeting name="kundan" city="Wardha"/>
  <Greeting name="Sanika" city="Amaravti"/>
  <Greeting name="Shamali" city="pune"/>
  </>
  
);


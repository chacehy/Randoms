import Card from './Card.jsx'
import Skills from './skills.jsx'
function App() {
    const skillSet = [
        {id:'skill1', name:'javascript', exp: '4 months'},
        {id:'skill2', name:'html', exp: '8 months'},
        {id:'skill3', name:'css', exp: '8 months'}
    ]
return(
    <>
<Card />
<Skills skills={skillSet} person='basset' />
</>
);
}

export default App

import './App.css'
import { TwiterFollowCard } from './TwitterFollowCard'  


export function App() {    
  return (
    <section className='App'>
    <TwiterFollowCard  userName="midudev" >
        Jhon Galindez
     </TwiterFollowCard>

     <TwiterFollowCard  userName="pheralb" >
        Pablo Hernandez
     </TwiterFollowCard>


    </section>
  )
}
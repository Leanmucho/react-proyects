import './App.css'
import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const [name, setName] = useState('midudev')
    return(
        <section className='App'>
        <TwitterFollowCard initialIsFollowing={true} userName={name} name="Miguel Angel Duran" />
        <TwitterFollowCard  userName="pheralb" name="Pablo Hernandez" />
        <TwitterFollowCard  userName="vxdene" name="Zunder Tender" />

        <button onClick={() => setName('pedromichel')}>
            Cambio nombre
        </button>
        </section>
    )
}

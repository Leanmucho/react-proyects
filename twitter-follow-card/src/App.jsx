import './App.css'
import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: true
    },
]

export function App () {
    return(
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing,index } = user
                    return (
                        <TwitterFollowCard 
                        key={index}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            name={name}
                        >
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}

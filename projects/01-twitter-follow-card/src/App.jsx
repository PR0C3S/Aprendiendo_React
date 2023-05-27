import  './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName:'honeyyfun',
        name:'Jenifer Lopez',
        isFollowing: true
    },
    {
        userName:'j0hn.p',
        name:'John Pena',
        isFollowing: true
    },
    {
        userName:'alofoke',
        name:'Santiago Matias',
        isFollowing: false
    },
    {
        userName:'elonmusk',
        name:'Elon Musk',
        isFollowing: false
    }
]
export function App() {
    const format = (userName) => `@${userName}`;
    return(
        <section className='App'>
        {users.map(({username, name, isFollowing}) =>{
            return(
                <TwitterFollowCard key={username} formatUsername={format} userName={username} name={name} initialIsFollowing={isFollowing}></TwitterFollowCard>
            )
        })}
        </section>
    )
}
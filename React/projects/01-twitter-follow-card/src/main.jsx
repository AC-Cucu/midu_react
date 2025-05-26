import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {TwitterFollowCard} from './TwitterFollowCard.jsx'

// import Task from './Task.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Ejemplo de función que podemos pasarle como prop
//const format = (userName) => {return `@${userName}`}

// React va a renderizar siempre un unico elemento y ya dentro de ese elemento, 
// podremos añadir todos los elementos que queramos (etiquetas, componentes, etc...)


{/* <TwitterFollowCard name={"Cucu"} userName={"cucu"} initialIsFollowing={true}/>
    <TwitterFollowCard name={"John"} userName={"john"} initialIsFollowing={true}/>
    <TwitterFollowCard name={"Bruce Lee"} userName={"brucelee"} initialIsFollowing={false}/> */}

const users = [
    {
      id: 1,
      name: "Sharik",
      userName: "sharik",
      isFollowing: false
    },
    {
      id: 2,
      name: "Tony",
      userName: "tony",
      isFollowing: true
    },
    {
      id: 3,
      name: "David",
      userName: "david",
      isFollowing: false
    },
    {
      id: 4,
      name: "Jia",
      userName: "jia",
      isFollowing: true
    }     
]

        // users.forEach(user =>
        // {
        //   return (
        //     <TwitterFollowCard 
        //       name={user.name} 
        //       userName={user.userName} 
        //       initialIsFollowing={user.isFollowing}
        //     />
        //   );
        // })

root.render(
 <>
  <div className='App'>
      {
        users.map(user => {
          const {id, userName, name, isFollowing} = user;

          return(
            <TwitterFollowCard 
              key={id}
              name={name} 
              userName={userName} 
              initialIsFollowing={isFollowing}
            />
          )

        })
      }
  </div>
 </>
)

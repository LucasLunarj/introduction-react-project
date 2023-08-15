// Components
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { Post } from './components/Post/Post'
//CSS

import './app.css'
//photos
import profile from '../src/assets/profile.jpg'

export const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='container'>
        <aside>
          <Card profile={profile} name='Lucas Luna' />
        </aside>
        <section >
          <Post profilePicture={profile}
            name='Lucas Luna'
            postContent='Fala galeraa 👋

Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

👉 jane.design/doctorcare

#novoprojeto #nlw #rocketseat' />
          <Post name="Devon Lane"
            postContent="Fala pessoal 👋

           Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 
           
           Acesse e deixe seu feedback 👉 devonlane.design
           
           #uiux #userexperience " />

        </section>
      </div>
    </div>
  )
}
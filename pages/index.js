import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/MainGrid/Box/index'
import { OrkutNostalgicIconSet, ReactkutMenu } from './lib/reactkutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/MainGrid/ProfileRelations/ProfileRelations';

function ProfileSidebar(propiedades) {
  return (
    <Box  >
      <img src={`https://github.com/${propiedades.githubUser}.png`} style={{ borderRadius: '8PX' }} />
    </Box>
  )

}



export default function Home() {

  const githubUser = 'acrisandrade';

  const pessoasFavoritas = ['Wallaquis', 'juunegreiros', 'omariosouto']

  return (
    <>
      <ReactkutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>

            <h1 className="title"> Bem Vindo</h1>
           <OrkutNostalgicIconSet/>
          </Box>
        </div>

        <div className="ProfileRelationsArea" >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle"> Pessoas Da Comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/user/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>

                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

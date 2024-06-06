import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Alef Carvalho</Titulo>
      <Paragrafo tipo="secundario">Alef-Carvalhoo</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

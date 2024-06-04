import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      deserunt fugit quod nemo. Aliquam voluptatem fugit rerum nobis impedit
      ullam ea esse recusandae, cupiditate veritatis, unde temporibus soluta,
      alias repellendus?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Alef-Carvalhoo&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Alef-Carvalhoo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre

import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../userContext';
import { IconPata } from './Icons';
import { IconSair } from './Icons';
import { IconEstatisticas } from './Icons';
import { IconAdicionarFoto } from './Icons';
import { IconFeed } from './Icons';
import ModalSair from './ModalSair';
import useMedia from '../../hooks/useMedia';

const Header = () => {
  const { login, data } = useContext(UserContext)
  const [visibleBox, setVisibleBox] = useState(false)
  const isMobile = useMedia('(max-width: 600px)')


  return (
    <header>
      <nav className='nav'>
        <Link className='logo' to="/"><p className='title-header'>PetBook<IconPata width="35px" height="35px" /></p></Link>
        {login === true ?
          <div className='container-header-login'>
            <Link className='login' to="/login">Olá, {data.nome}</Link>
          </div>
          : <Link className='login' to="/login">Login / Cadastro</Link>
        }

      </nav>

      {login === true ?
        <div className='nav-secundario'>
          <nav className='nav-logado'>
            <NavLink className='menu-logado' to="/conta/" ><IconFeed />{!isMobile && 'Minha Conta'} </NavLink>
            <NavLink className='menu-logado' to="/conta/estatisticas" ><IconEstatisticas />{!isMobile && 'Estatísticas'}</NavLink>
            <NavLink className='menu-logado' to="/conta/post" ><IconAdicionarFoto />{!isMobile && 'Postar'}</NavLink>
            <button className='menu-logado' onClick={() => { setVisibleBox(true) }}><IconSair />{!isMobile && 'Sair'}</button>
          </nav>
        </div>
        : null}

      {visibleBox ? <ModalSair onClose={setVisibleBox} /> : null}

    </header>
  )
}

export default Header;

import { FiPlusSquare } from 'react-icons/fi';
import logo from '../../assets/logo.svg'
import { Container } from './styles';

interface PropsHeader{
  openModal: ()=>void
}

export function Header({openModal}:PropsHeader) {
  return (
    <Container>
      <header>
        <img src={logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={openModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default Header;

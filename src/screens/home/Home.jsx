import ItemListContainer from 'components/home/itemListContainer/ItemListContainer';
import NavBar from 'components/ui/navbar/NavBar';

const Home = () => {
  return (
    <div className='App'>
      <header className='header'>
        <NavBar title='Tienda Americana' logoSrc={`images/logo.png`} logoAlt='Tienda Americana' logoTitle='Tienda Americana' />
      </header>
      <main className='main'>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default Home;
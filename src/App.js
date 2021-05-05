import Header from './Header/header';
import Content from './Content/content';
import Footer from './Footer/footer';
import './App.css';


const App = (props) => {
  return (

      <div className="App">
        <Header />
        <Content products={props.state.Products}/>
        <Footer />
      </div>

  );
}

export default App;
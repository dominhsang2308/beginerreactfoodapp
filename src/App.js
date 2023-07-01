import './App.css';
import FoodComponent from '../../foodchoice/src/foodcomponent/foodcomponent'
import BasicExample from './headercomponent/header';
import Container from 'react-bootstrap/Container';
import SliderComponent from './slidercomponent/slidercomponent';
import Footer from './footercomponent/footercomponent';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
function App() {
  return (
    <div className="App">
            <BasicExample/>
            <SliderComponent />
            <FoodComponent  />
            <Footer/>
      {/* <h1>Food Recommend</h1> */}

    </div>
  );
}

export default App;

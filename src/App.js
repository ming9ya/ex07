import './App.css';
import RouterPage from './Components/RouterPage';
import any from './Images/any.jpeg'
import {Container} from 'react-bootstrap'

function App() {
    return (
        <Container className="App">
            <img src={any} width="100%"/>
           <RouterPage/>
        </Container>
    );
}

export default App;

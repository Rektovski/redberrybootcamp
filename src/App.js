import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from "./main/components/mainPage/MainPage";

export default function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <MainPage/>
            </div>
        </ChakraProvider>
    );
}
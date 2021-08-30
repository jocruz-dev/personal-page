import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import PageContainer from './components/page-container'

function App() {

  const [Data, setData] = useState('');


  async function getData(params) {
    const data = await fetch('http://localhost:5000/backend')
    const dataParse = await data.json()
    return dataParse
  }
  useEffect(()=>{
    getData().then((res)=> setData(res.express))
  },[])
  return (
    <div className="App">
      <PageContainer></PageContainer>
    </div>
  );
}

export default App;

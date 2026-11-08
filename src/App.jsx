// import { useEffect, useState } from 'react';
import './App.css'
import Products from './components/Products';

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   alert(`useEffect${count}`);
  // }, [count]);

  return (
    <>
      {/* <button onClick={() => {setCount(count + 1)}} className='px-5 py-2 bg-amber-200'> + </button> */}
      <Products />
    </>
  )
}

export default App

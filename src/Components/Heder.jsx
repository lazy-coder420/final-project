import { useState } from 'react'
import './App.css'
import { FaChevronDown } from "react-icons/fa";
import Container from '../common/Container';
import Flex from '../Components/Flex';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-black py-3 text-white flex '>  
        <Container>
          <Flex className="justify-center">
            <div className='w-[70%] flex justify-end'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="Shop Now" className='text-white'></a></p>
            </div>

            <div className='w-[30%] flex justify-end'>
          <button className='flex justify-center items-center gap-1.5'>English<FaChevronDown className='text-2xl'/></button>
          </div>
          </Flex>
        </Container>
      </header>
    </>
  )
}

export default App

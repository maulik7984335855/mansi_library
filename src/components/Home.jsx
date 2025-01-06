import React from 'react'
import img from '../assets/left_pic_home.png'
import Slider from './Slider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const notify = () => toast('Wow so easy !');
  return (
    <>
      <div className='bg-slate-200  mb-10 rounded-b-3xl'>
        <div className='container  max-w-screen-2xl  flex flex-col items-center justify-center mx-auto gap-10 text-white  pt-5 bg-blue-500 rounded-b-3xl lg:h-screen  '>
        <div>
          <h1 className='lg:text-[8rem] pt-16 text-[5rem] text-center tracking-tighter leading-none'>Expand your mind, reading a book</h1>
        </div>
        <div className=' text-center lg:w-[40%]'>
          <p>Reading books is a wonderful way to spend your time.Here at we believe reading will help you make connections with others.</p>
        </div>
        <div className='flex gap-4 pb-40 '>
          <button onClick={notify}  className='bg-white cursor-pointer text-black w-[140px] px-2 py-3 rounded-lg hover:shadow-2xl '>Download Now</button>
          <button className='bg-transparent border flex-1 cursor-pointer border-white w-[140px] px-2 py-3 rounded-lg hover:shadow-2xl '>Read Free Book</button>
        </div>
        
        
      </div>
      <div className=' w-[100%]  flex lg:-mt-[280px] -mt-[200px] items-center rounded-b-3xl   justify-center'>
          <img src={img} className='w-[500px] bg-transparent ' alt="img" />
        </div>
      </div>

      <div className='bg-pink-200 pt-5 rounded-3xl flex gap-8 items-center justify-center flex-col '>
          <div className='flex justify-center lg:flex-row flex-col items-center gap-10'>
          <h2 className='lg:w-1/3  text-4xl font-medium'>About<br /> The Mansi Libary</h2>
          <p className='lg:w-1/3 lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta numquam possimus provident? Est minus tenetur consequuntur sequi tempora vitae temporibus</p>
          </div>
          <div className='bg-pink-300 lg:w-1/2 w-[90%] lg:flex-row flex-col gap-5 rounded-lg flex justify-center items-center mb-10 lg:pb-0 pb-4'>
            <img src={img} className='w-40' alt="img" />
            <div className='bg-white rounded-xl p-10 text-black w-[70%] lg:w-[50%] justify-between items-center  gap-5 flex'>
                <h2 className='text-2xl font-medium'>The <br /> Mansi Library</h2>
                <div className='flex flex-col font-light text-xl'>
                  <span>
                      Author
                  </span>
                  <span>
                    Total
                  </span>
                </div>
            </div>
          </div>
      </div>
      <Slider />
      {/* <Slider2 /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home;

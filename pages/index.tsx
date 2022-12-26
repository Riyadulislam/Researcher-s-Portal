import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Researcher’s  Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className=' px-10 flex justify-between items-center border-y py-10 border-black bg-yellow-500'>
        <div>
        <h1 className='font-bold text-5xl'> <span className='font-bold text-6xl'>Researcher’s</span> is a place to Write,read,and  connect</h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
           pariatur nulla corporis fugiat ab praesentium non,
            voluptatibus optio cum provident.</h1>
        </div>
            <div>
              <img className='h-32 hidden md:inline-flex' src="https://tse2.mm.bing.net/th?id=OIP.hHgdJ_ZyMCE5zKWGJPBqqQHaHQ&pid=Api&P=0" alt="" />
            </div>
      </div>
    </div>
  )
}

export default Home

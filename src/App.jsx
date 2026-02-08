const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex flex-col gap-4 p-12'>

        <input type="text" placeholder='Enter Notes Heading' className='py-2 h-10 px-5 border-2 rounded' />
        <input type="text" placeholder='Enter Details' className='py-2 px-5 h-20 border-2 rounded' />
        <button className='bg-blue-500 py-2 px-5 rounded'>Add Notes</button>
      </form>
    </div>
  )
}

export default App
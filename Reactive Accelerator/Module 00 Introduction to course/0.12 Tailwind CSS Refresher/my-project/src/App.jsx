function App() {
  return (
    <>
      <div className="text-4xl font-bold underline">
        <h1 className="text-amber-300">Hello World!</h1>
        <h1 className="text-amber-500">Hello World!</h1>
        <h1 className="text-amber-700">Hello World!</h1>
      </div>
      <div className="bg-gray-900 text-white mt-6">
        We are learning gradient
      </div>
      <div className="bg-red-900 text-white">We are learning gradient</div>
      <div className="bg-blue-900 text-white">We are learning gradient</div>
      <div className="bg-[url('https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg')] bg-center bg-no-repeat bg-cover h-screen"></div>
      <div className="bg-gradient-to-r from-blue-300 via-purple-600 my-4">
        We are learning gradient
      </div>
      <div className="bg-red-500 bg-opacity-50 min-w-40 min-h-60 flex justify-center items-center text-sky-400/100 text-4xl">
        We are learning gradient
      </div>
    </>
  );
}

export default App;

import './App.css'

function App() {

  return (
    <>
      <div className="bg-black text-white p-4">
        <h1>hello</h1>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Add Movie</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 mb-2">Title</label>
              <input type="text" id="title" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-700 mb-2">Rating</label>
              <input type="number" id="rating" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Add Movie</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default App

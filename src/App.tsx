import Container from "./Container"
import Footer from "./Footer"
import HashtagList from "./HashtagList"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-[320px] fixed h-screen bg-white border-r border-gray-100 overflow-y-auto">
          <div className="sticky top-0 bg-white p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">Popular Brands</h2>
            <p className="text-sm text-gray-500 mt-1">Click to explore trending topics</p>
          </div>
          <HashtagList />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-[320px]">
          <div className="max-w-[640px] mx-auto p-4">
            <Container />
          </div>
        </div>
      </div>

      {/* Footer - positioned at bottom right */}
      <div className="fixed bottom-0 right-0 w-[calc(100%-320px)]">
        <Footer />
      </div>
    </div>
  )
}

export default App

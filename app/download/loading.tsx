export default function DownloadLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-8"></div>
            <div className="flex justify-center space-x-4">
              <div className="h-12 w-32 bg-gray-200 rounded-full"></div>
              <div className="h-12 w-32 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

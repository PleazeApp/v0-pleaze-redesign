export default function WriteForUsLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-28 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-3/4 h-12 bg-white/20 rounded mx-auto mb-6 animate-pulse"></div>
            <div className="w-full h-6 bg-white/20 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-2/3 h-6 bg-white/20 rounded mx-auto mb-8 animate-pulse"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="w-40 h-12 bg-white/20 rounded-full animate-pulse"></div>
              <div className="w-40 h-12 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="w-1/2 h-8 bg-gray-200 rounded mx-auto animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gray-200 rounded-xl mx-auto mb-6 animate-pulse"></div>
                <div className="w-3/4 h-6 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="w-1/3 h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

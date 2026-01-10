export default function VideoPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🐱</div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">🐾</div>
        <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-bounce delay-300">😺</div>
        <div className="absolute bottom-32 right-16 text-5xl opacity-20 animate-pulse delay-500">🐾</div>
        <div className="absolute top-1/2 left-10 text-4xl opacity-20 animate-bounce delay-700">😸</div>
        <div className="absolute top-1/3 right-10 text-4xl opacity-20 animate-pulse delay-200">😻</div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl animate-bounce">😺</span>
            <span className="text-3xl animate-bounce delay-100">🎂</span>
            <span className="text-3xl animate-bounce delay-200">😸</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            🎉 Happy Birthday!
          </h1>
          <p className="text-gray-600 text-lg">Hope this makes you smile</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-pink-400">🐾</span>
            <span className="text-purple-400">🐾</span>
            <span className="text-pink-400">🐾</span>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute -top-8 -left-8 text-4xl z-20 animate-bounce">😻</div>
          <div className="absolute -top-8 -right-8 text-4xl z-20 animate-bounce delay-300">😺</div>
          <div className="absolute -bottom-8 -left-8 text-4xl z-20 animate-bounce delay-500">😸</div>
          <div className="absolute -bottom-8 -right-8 text-4xl z-20 animate-bounce delay-700">🐱</div>

          <div className="w-full aspect-video bg-white rounded-xl shadow-2xl overflow-hidden ring-4 ring-pink-300">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kjwWxpGnfQU?autoplay=1&loop=1&playlist=kjwWxpGnfQU"
              title="Birthday Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl">🎈</span>
          <span className="text-2xl">😽</span>
          <span className="text-2xl">🎁</span>
          <span className="text-2xl">😻</span>
          <span className="text-2xl">🎉</span>
        </div>
      </div>
    </main>
  )
}

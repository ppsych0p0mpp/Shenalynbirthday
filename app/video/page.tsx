'use client';

import { useState } from 'react';

const messages = [
  {
    title: 'My Honest Thoughts',
    emoji: '✉️',
    content: (
      <>
        
        <p className="text-gray-600 text-base mt-1">
          Actually, I had a sad message here that I removed after you replied, did you saw it?. I don’t know if I should send it or not. I feel lost and I'm not sure if I should stop talking to you, or if I did something wrong. I’m having a hard time deciding. If you were wondering why I haven’t messaged lately, that’s why.
        </p>
      </>
    ),
  },
  {
    title: "What's Been On My Mind",
    emoji: '✨',
    content: (
      <>
        
        <p className="text-gray-600 text-base mt-1">
          Anyway, I’ve decided to share my message after all. If you wish to continue talking, just let me know. If not, I want to say thanks. Why did I think of this? I don’t know; maybe that’s just how I am. I just feel like you don’t want to talk to me anymore. These are thought btw, my intrusive thoughts won LOL.
        </p>
      </>
    ),
  },
  {
    title: 'Birthday Message',
    emoji: '💝',
    content: (
      <>
        <p className="text-gray-700 text-lg leading-relaxed font-semibold">
          Happy Birthday Shen! 🎉
        </p>
        <p className="text-gray-600 text-base mt-3">
          I hope you find peace and healing from whatever you are going through. Don't let sadness win! I am kinda sad I won't get to see you, but I am so glad I got to know you, even for a little while.
        </p>
      </>
    ),
  },
  {
    title: 'A Special Note',
    emoji: '💌',
    content: (
      <>
        <p className="text-gray-700 text-lg leading-relaxed font-semibold">
          You deserve the best 🌹
        </p>
        <p className="text-gray-600 text-base mt-3">
          I know you don't want to be greeted on your birthday, but I insist 🎂! Thanks for making my end and start of the year interesting. Stay positive and be happy!
        </p>
      </>
    ),
  },
  {
    title: 'Your Beauty',
    emoji: '✨',
    content: (
      <>
        <p className="text-gray-600 text-base font-bold">
          Your real beauty is not just in your face; it is the light you carry in your heart.
        </p>
        <p className="text-gray-600 text-base mt-3">
          Never forget how special you are. 😊💕
        </p>
      </>
    ),
  },
  {
    title: 'The Back of Your Mind',
    emoji: '🌙',
    content: (
      <>
        <p className="text-gray-600 text-base font-bold">
          I am choosing to become a quiet memory in the back of your mind. This is how I disappear.
        </p>
      </>
    ),
  },
];

export default function VideoPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleNextMessage = () => {
    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
  };

  const handlePrevMessage = () => {
    setCurrentMessageIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Roses scattered in background */}
        <div className="absolute top-10 left-10 text-7xl opacity-25 animate-bounce">🌹</div>
        <div className="absolute top-20 right-20 text-6xl opacity-25 animate-pulse">🌸</div>
        <div className="absolute bottom-20 left-20 text-7xl opacity-25 animate-bounce delay-300">🌺</div>
        <div className="absolute bottom-32 right-16 text-6xl opacity-25 animate-pulse delay-500">🌹</div>
        <div className="absolute top-1/2 left-10 text-5xl opacity-25 animate-bounce delay-700">🌸</div>
        <div className="absolute top-1/3 right-10 text-5xl opacity-25 animate-pulse delay-200">🌹</div>
        <div className="absolute top-2/3 left-1/4 text-4xl opacity-20 animate-pulse delay-400">🌺</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-20 animate-bounce delay-600">🌸</div>

        {/* Cats with roses theme */}
        <div className="absolute top-1/4 right-1/3 text-5xl opacity-20 animate-bounce">😺</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl opacity-20 animate-pulse delay-300">😸</div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6">
        {/* Message Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center gap-2"
        >
          <span className="text-2xl">💌</span>
          Click to show Message
          <span className="text-2xl">💌</span>
        </button>
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl animate-bounce">🌹</span>
            <span className="text-3xl animate-bounce delay-100">😺</span>
            <span className="text-3xl animate-bounce delay-200">🎂</span>
            <span className="text-3xl animate-bounce delay-300">😸</span>
            <span className="text-3xl animate-bounce delay-400">🌸</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
            🎉 Happy Birthday Shen!
          </h1>
          <p className="text-gray-600 text-lg">Hope this makes you smile</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-rose-400">🌹</span>
            <span className="text-pink-400">🐾</span>
            <span className="text-rose-400">🌹</span>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute -top-8 -left-8 text-4xl z-20 animate-bounce">🌹</div>
          <div className="absolute -top-8 -right-8 text-4xl z-20 animate-bounce delay-300">🌸</div>
          <div className="absolute -bottom-8 -left-8 text-4xl z-20 animate-bounce delay-500">🌺</div>
          <div className="absolute -bottom-8 -right-8 text-4xl z-20 animate-bounce delay-700">🌹</div>

          <div className="w-full aspect-video bg-white rounded-xl shadow-2xl overflow-hidden ring-4 ring-rose-300">
            <video
              className="w-full h-full"
              title="Birthday Video"
              autoPlay
              loop
              controls
            >
              <source src="/uia.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl">🌹</span>
          <span className="text-2xl">🎈</span>
          <span className="text-2xl">😽</span>
          <span className="text-2xl">🌸</span>
          <span className="text-2xl">🎁</span>
          <span className="text-2xl">😻</span>
          <span className="text-2xl">🌹</span>
        </div>

        <div className="mt-8 w-full max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 ring-2 ring-rose-300">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">🎵</span>
              <p className="text-gray-700 font-semibold">A song for you</p>
              <span className="text-2xl">🎵</span>
            </div>
            <audio 
              className="w-full mt-4" 
              controls
              controlsList="nodownload"
            >
              <source src="/song.wav" type="audio/wav" />
            </audio>
            <div className="flex items-center justify-center gap-2 mb-4 mt-6">
              <span className="text-2xl"></span>
              <p className="text-gray-700 font-semibold"> Wonderwall</p>
              <span className="text-2xl"></span>
            </div>
            <audio 
              className="w-full mt-4" 
              controls
              controlsList="nodownload"
            >
              <source src="/song2.wav" type="audio/wav" />
            </audio>
            <div className="flex items-center justify-center gap-2 mb-4 mt-6">
              <span className="text-2xl"></span>
              <p className="text-gray-700 font-semibold"> The Only Exception</p>
              <span className="text-2xl"></span>
            </div>
            <audio 
              className="w-full mt-4" 
              controls
              controlsList="nodownload"
            >
              <source src="/oex.wav" type="audio/wav" />
            </audio>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 opacity-50"></div>
            
            {/* Floating emojis */}
            <div className="absolute top-4 left-4 text-3xl animate-bounce">🌹</div>
            <div className="absolute top-4 right-4 text-3xl animate-pulse">🌸</div>
            <div className="absolute bottom-4 left-4 text-3xl animate-pulse">😺</div>
            <div className="absolute bottom-4 right-4 text-3xl animate-bounce">💕</div>

            {/* Modal content */}
            <div className="relative p-8 text-center space-y-4">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>

              <div className="text-5xl mb-4">{messages[currentMessageIndex].emoji}</div>
              
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                {messages[currentMessageIndex].title}
              </h2>

              <div className="bg-white bg-opacity-80 rounded-xl p-6 my-4 border-2 border-rose-300">
<<<<<<< HEAD
                {messages[currentMessageIndex].content}
              </div>

              {/* Message Counter */}
              <div className="text-sm text-gray-500 font-semibold">
                Message {currentMessageIndex + 1} of {messages.length}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  onClick={handlePrevMessage}
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNextMessage}
                  className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Next →
                </button>
=======
                <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                  Happy Birthday Shen! 🎉
                </p>
                <p className="text-gray-600 text-base mt-3">
                  
                </p>
                <p className="text-gray-600 text-base mt-3 font-bold">
                  Your real beauty isn't just in your face; it's the light you carry in your heart.
                </p>
                <p className="text-gray-600 text-base mt-3 font-bold">
                 
                </p>
>>>>>>> 55e6ad70411aaa3cf628c2cbee43d4cec7604f2d
              </div>

              <div className="flex items-center justify-center gap-2 text-2xl">
                <span>🌹</span>
                <span>🎂</span>
                <span>🎈</span>
                <span>😸</span>
                <span>🌸</span>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

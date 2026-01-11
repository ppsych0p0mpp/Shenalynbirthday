"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cat } from "lucide-react"

export default function WarningPage() {
  const router = useRouter()

  const handleProceed = () => {
    router.push("/video")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 p-4 relative overflow-hidden">
      {/* Floating roses in the background */}
      <div className="absolute top-10 left-10 text-6xl opacity-30 animate-bounce">🌹</div>
      <div className="absolute top-20 right-16 text-5xl opacity-30 animate-pulse">🌸</div>
      <div className="absolute bottom-20 left-20 text-6xl opacity-30 animate-bounce delay-300">🌹</div>
      <div className="absolute bottom-32 right-12 text-5xl opacity-30 animate-pulse delay-500">🌺</div>
      <div className="absolute top-1/3 left-1/4 text-4xl opacity-25 animate-pulse delay-700">🌹</div>
      <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-25 animate-bounce delay-200">🌸</div>

      {/* Cats with roses */}
      <div className="absolute top-16 left-1/3 opacity-40 animate-bounce">
        <Cat className="w-12 h-12 text-rose-400" />
      </div>
      <div className="absolute bottom-24 right-1/3 opacity-40 animate-pulse delay-150">
        <Cat className="w-10 h-10 text-pink-400" />
      </div>
      {/* </CHANGE> */}

      <Card className="w-full max-w-md bg-white border-rose-300 text-center shadow-xl relative z-10">
        <CardContent className="flex flex-col items-center gap-6 pt-8 pb-8">
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl">🌹</div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2">
              <Cat className="w-6 h-6 text-rose-400" />
            </div>
            <div className="absolute top-1/2 -right-10 -translate-y-1/2">
              <Cat className="w-6 h-6 text-pink-400" />
            </div>
            {/* </CHANGE> */}

            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-rose-100 ring-4 ring-rose-200">
              <Cat className="w-12 h-12 text-rose-500" strokeWidth={2} />
            </div>
            <span className="absolute -top-2 -right-2 text-2xl">🌸</span>
            <span className="absolute -bottom-2 -left-2 text-2xl">🌹</span>
            {/* </CHANGE> */}
          </div>

          <h1 className="text-3xl font-bold text-rose-600">Meow Alert!</h1>

          <div className="flex items-center gap-2 text-2xl">
            <span>😺</span>
            <span>🐱</span>
            <span>😸</span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-sm">UIA! UIA! UIA! UIA! UIA!</p>

          <Button
            onClick={handleProceed}
            size="lg"
            className="w-full mt-2 bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-semibold active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            CLICK ME UIA!
          </Button>
          {/* </CHANGE> */}

          <div className="flex gap-3 text-xl opacity-60">
            <span>🌹</span>
            <span>🐾</span>
            <span>🌹</span>
          </div>
          {/* </CHANGE> */}
        </CardContent>
      </Card>
    </main>
  )
}

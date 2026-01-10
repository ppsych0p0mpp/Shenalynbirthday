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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4 relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-40 animate-bounce">
        <Cat className="w-16 h-16 text-pink-400" />
      </div>
      <div className="absolute top-20 right-16 opacity-40 animate-pulse">
        <Cat className="w-12 h-12 text-purple-400" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-40 animate-bounce delay-100">
        <Cat className="w-14 h-14 text-blue-400" />
      </div>
      <div className="absolute bottom-32 right-12 opacity-40 animate-pulse delay-150">
        <Cat className="w-10 h-10 text-pink-400" />
      </div>
      {/* </CHANGE> */}

      <Card className="w-full max-w-md bg-white border-pink-300 text-center shadow-xl relative z-10">
        <CardContent className="flex flex-col items-center gap-6 pt-8 pb-8">
          <div className="relative">
            {/* Small decorative cats around the main circle */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Cat className="w-8 h-8 text-pink-400" />
            </div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2">
              <Cat className="w-6 h-6 text-purple-400" />
            </div>
            <div className="absolute top-1/2 -right-10 -translate-y-1/2">
              <Cat className="w-6 h-6 text-blue-400" />
            </div>

            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-purple-100 ring-4 ring-purple-200">
              <Cat className="w-12 h-12 text-purple-500" strokeWidth={2} />
            </div>
            {/* Decorative elements */}
            <span className="absolute -top-2 -right-2 text-2xl">🐾</span>
            <span className="absolute -bottom-2 -left-2 text-2xl">🐾</span>
          </div>
          {/* </CHANGE> */}

          <h1 className="text-3xl font-bold text-purple-600">Meow Alert!</h1>

          <div className="flex items-center gap-2 text-2xl">
            <span>😺</span>
            <span>🐱</span>
            <span>😸</span>
          </div>
          {/* </CHANGE> */}

          <p className="text-gray-600 text-lg leading-relaxed max-w-sm">UIA! UIA! UIA! UIA! UIA!</p>

          <Button
            onClick={handleProceed}
            size="lg"
            className="w-full mt-2 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            CLICK ME UIA!
          </Button>

          <div className="flex gap-3 text-xl opacity-60">
            <span>🐾</span>
            <span>🐾</span>
            <span>🐾</span>
          </div>
          {/* </CHANGE> */}
        </CardContent>
      </Card>
    </main>
  )
}

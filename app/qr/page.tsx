"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QRPage() {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : ""
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(siteUrl)}`

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = qrCodeUrl
    link.download = "birthday-qr-code.png"
    link.click()
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Floating decorative cats */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-20">🐱</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-20">😺</div>
        <div
          className="absolute bottom-20 left-20 text-5xl animate-bounce opacity-20"
          style={{ animationDelay: "0.5s" }}
        >
          😸
        </div>
        <div className="absolute bottom-10 right-10 text-6xl animate-pulse opacity-20" style={{ animationDelay: "1s" }}>
          🐈
        </div>
      </div>

      <Card className="w-full max-w-md shadow-2xl border-4 border-pink-200 relative z-10">
        <CardContent className="p-8 text-center space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="text-6xl animate-bounce">📱</div>
            <h1 className="text-3xl font-bold text-gray-800">Scan Me!</h1>
            <p className="text-gray-600">Point your camera at this QR code to access the birthday surprise</p>
          </div>

          {/* QR Code */}
          <div className="bg-white p-6 rounded-2xl shadow-inner border-2 border-pink-100">
            {siteUrl ? (
              <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code" className="w-full h-auto mx-auto" />
            ) : (
              <div className="w-[300px] h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
                <p className="text-gray-500">Loading QR Code...</p>
              </div>
            )}
          </div>

          {/* URL Display */}
          <div className="text-sm text-gray-500 break-all bg-gray-50 p-3 rounded-lg border border-gray-200">
            {siteUrl || "Loading..."}
          </div>

          {/* Download Button */}
          <Button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Download QR Code
          </Button>

          {/* Decorative cats */}
          <div className="flex justify-center gap-2 text-2xl opacity-50">
            <span>🐾</span>
            <span>😻</span>
            <span>🐾</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

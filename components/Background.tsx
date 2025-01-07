"use client"

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        {/* Animated gradient circles */}
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full mix-blend-normal filter blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-primary/30 rounded-full mix-blend-normal filter blur-3xl animate-float animation-delay-2000" />
        </div>
      </div>
    </div>
  )
} 
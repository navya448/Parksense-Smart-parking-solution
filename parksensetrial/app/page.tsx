import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-[var(--font-geist-sans)]">
      {/* Header Section */}
      <header className="bg-foreground text-background p-8 text-center">
        <h1 className="text-4xl font-semibold text-white">Smart Parking Solution</h1>
        <p className="mt-2 text-lg text-white">Revolutionizing the way we park with intelligent technology</p>
      </header>

      {/* Main Content Section */}
      <main className="p-8 sm:p-16 bg-white dark:bg-gray-800">
        <div className="text-center sm:text-left max-w-6xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-foreground dark:text-foreground">What is Smart Parking?</h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Smart parking uses technology to improve the efficiency of parking spaces. With sensors and real-time data, drivers can easily find available parking spots, reducing traffic and improving city mobility.
            </p>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-foreground dark:text-white">Real-Time Data</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Get instant updates on available parking spots in your vicinity.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-foreground dark:text-white">Easy Navigation</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Navigate to your parking spot with turn-by-turn directions.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-foreground dark:text-white">Sustainability</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Reduce traffic congestion and carbon emissions with efficient parking management.</p>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-foreground dark:text-foreground">Get Started with Smart Parking</h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Join the future of parking today and experience convenience at your fingertips.</p>
            <div className="mt-8 flex justify-center gap-8">
              <a
                href="#"
                className="bg-blue-600 text-white rounded-full px-8 py-3 text-xl transition hover:bg-blue-700"
              >
                Learn More
              </a>
              <a
                href="#"
                className="border-2 border-blue-600 text-blue-600 rounded-full px-8 py-3 text-xl transition hover:bg-blue-600 hover:text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-foreground text-background py-8">
        <div className="text-center text-white">
          <p>&copy; 2025 Smart Parking Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

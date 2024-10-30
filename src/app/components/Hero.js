import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-3xl mx-auto">
        {/* Profile Picture */}
        <Image
          src="/profile.jpg"
          alt="Syeda Areeba"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-teal-500 shadow-lg"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, I&apos;m <span className="text-teal-400">Syeda Areeba</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Creative Web Developer 
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="#projects" className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition cursor-pointer">
            View My Work
          </Link>
          <Link href="#contact" className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition cursor-pointer">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

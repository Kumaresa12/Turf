"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  // For making the component ready only after client-side rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-green-600 text-white">
      <header className="flex justify-between items-center px-16 py-6">
        <div className="text-3xl font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link
                href="#"
                className="text-white hover:text-yellow-200 text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-yellow-200 text-lg"
              >
                Find Turf
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-yellow-200 text-lg"
              >
                Login / Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row px-16 py-14 gap-10 items-start">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl font-bold mb-16 leading-tight">
            Find & Book the Best Sports Turfs Near You... Easy, Fast &
            Affordable!!!
          </h1>

          <ul className="space-y-6 mb-16">
            <li className="flex items-center text-lg">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-4"></div>
              Top-rated turfs for football, cricket, and more...
            </li>
            <li className="flex items-center text-lg">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-4"></div>
              Real-time slot availability & instant booking...
            </li>
            <li className="flex items-center text-lg">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-4"></div>
              Exclusive discounts on early morning & off-peak hours...
            </li>
          </ul>

          <button className="bg-yellow-400 text-green-600 font-bold px-10 py-4 rounded-full flex items-center text-xl hover:bg-yellow-300 transition duration-300">
            BOOK NOW
            <span className="ml-3 text-xl">→</span>
          </button>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="w-96 rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-72 w-full">
              <Image
                src="/turf-baby-home.jpg"
                alt="Baby's Turf"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-black p-5">
              <h2 className="text-2xl font-bold">Baby's Turf</h2>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400 text-xl">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <span className="text-gray-400 ml-2">(13.5k)</span>
              </div>
              <div className="h-px bg-gray-800 mt-5"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

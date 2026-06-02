"use client";

import { useState } from "react";
import Image from "next/image";
import { Newspaper, Heart, Gift, X } from 'lucide-react';

export default function Home() {
  // State to manage the active video for the lightbox modal
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 1. LOCAL VIDEO URLS
  const videos = [
    { id: 1, title: 'The Ultimate Birthday Wishes Compilation', src: '/bff.mp4' },
    { id: 2, title: 'Throwback: Sneha’s Funniest Moments of the Year', src: '/VID-20260602-WA0000.mp4' },
    { id: 3, title: 'A Special Montage From the Family Archive', src: '/VID-20260602-WA0001.mp4' },
    { id: 4, title: 'Behind the Scenes: Daily Adventures & Vibes', src: '/VID-20260602-WA0002.mp4' },
    { id: 5, title: 'Behind the Scenes: Daily Adventures & Vibes', src: '/VID-20260602-WA0032.mp4' },
    { id: 6, title: 'Behind the Scenes: Daily Adventures & Vibes', src: '/VID-20260602-WA0033.mp4' },
    { id: 7, title: 'Behind the Scenes: Daily Adventures & Vibes', src: '/VID-20260602-WA0034.mp4' },
    { id: 8, title: 'Behind the Scenes: Daily Adventures & Vibes', src: '/VID-20260602-WA0036.mp4' },
    { id: 9, title: 'Behind the Scenes: Daily Adventures & Vibes', src: '/VID-20260602-WA0037.mp4' },
    { id: 10, title: 'Behind the Scenes: Daily Adventures & Vibes', src: '/VID-20260602-WA0038.mp4' },
    { id: 11, title: 'Behind the Scenes: Daily Adventures & Vibes', src: '/VID-20260602-WA0039.mp4' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-serif p-4 md:p-8 selection:bg-amber-200">
      
      {/* ================= EXTRA BREAKING NEWS BANNER ================= */}
      <div className="max-w-6xl mx-auto mb-4 bg-stone-900 text-[#f4f1ea] font-sans text-xs md:text-sm font-bold uppercase tracking-widest py-2 px-4 flex justify-between items-center animate-fade-in">
        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-white px-2 py-0.5 text-[10px] tracking-normal font-black animate-pulse rounded-sm">BULLETIN</span>
          <span>Sneha Shrestha Turns a Year Wiser Today!</span>
        </div>
        <div className="hidden sm:block text-stone-400 text-[11px]">
          Special Edition &bull; Free Circulation
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-[#faf8f5] border border-stone-300 p-6 shadow-xl shadow-stone-800/10">
        
        {/* ================= NEWSPAPER HEADER ================= */}
        <header className="border-b-4 border-stone-900 pb-4 mb-6">
          <div className="flex justify-between items-center text-xs uppercase font-sans tracking-widest text-stone-600 border-b border-stone-300 pb-2 mb-3">
            <div>Vol. LVI, No. 301</div>
            <div className="hidden md:block">NATION'S 1ST ENGLISH BROADSHEET</div>
            <div>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          
          <h1 className="text-center font-black text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase my-4 font-serif border-y-2 border-stone-950 py-2">
            THE RISING SNEHA
          </h1>
          
          <div className="text-center italic text-sm text-stone-700 tracking-wide mt-2">
            "ALL BE HAPPY, ALL BE WELL — CELEBRATING AN EXTRAORDINARY HUMAN"
          </div>
        </header>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT & CENTER COLUMN: MAIN STORIES (8/12) */}
          <main className="lg:col-span-8 space-y-8 divide-y divide-stone-300">
            
            {/* FRONT PAGE LEADER ARTICLE */}
            <article className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight text-stone-900">
                Iconic Phenomenon Sneha Turns Another Year Wiser; Celebrations Erupt Nationwide
              </h2>
              <p className="text-sm font-sans uppercase tracking-wider text-stone-500 font-semibold">
                By Aashish Mishra &bull; Kathmandu, Nepal
              </p>

              {/* ================= HEADLINER PHOTO BANNER ================= */}
              <div className="border border-stone-300 bg-white p-3 shadow-sm my-4">
                <div className="relative w-full h-[250px] sm:h-[380px] overflow-hidden bg-stone-200 grayscale contrast-125 hover:grayscale-0 transition-all duration-500 border border-stone-200">
                  <Image 
                    src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200" 
                    alt="Sneha Headline Celebration Banner"
                    fill
                    priority
                    sizes="(max-w-1200px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 text-xs italic text-stone-600 text-center font-serif pt-2 border-t border-dashed border-stone-200">
                  Historic Record: Sneha captured during a historic moment of absolute milestone celebration. 
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-justify leading-relaxed text-sm text-stone-800">
                <p>
                  <span className="text-5xl font-bold float-left mr-2 mt-1 font-serif text-stone-950">S</span>
                  neha, the much-celebrated and revered icon of pure joy, friendship, and impeccable vibes, has officially reached a brand new milestone today. Following weeks of intense anticipation from friends and family worldwide, the global celebration commenced early this morning with an influx of wholesome messages, nostalgic throwbacks, and virtual toasts.
                </p>
                <p>
                  Known for an unmatched ability to bring warmth into any room, Sneha's legacy of kindness has impacted countless lives. Sources close to the icon state that today’s itinerary includes high-dosage cake consumption, endless laughter sessions, and an absolute ban on any form of stress. "She has lived a magnificent year, and the name shall live for millennia," noted an enthusiastic well-wisher.
                </p>
              </div>
            </article>

            {/* VIDEO GRID SECTION (Now 3 columns on desktop + Interactive Modal Click) */}
            <section className="pt-6">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-stone-900 pb-1">
                <Newspaper className="w-5 h-5 text-stone-800" />
                <h3 className="text-xl font-bold uppercase tracking-tight font-sans">Special Broadcasts: Living Pictures</h3>
              </div>
              
              {/* Changed grid layout to display 3 columns per row on larger viewports */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                {videos.map((video) => (
                  <div 
                    key={video.id} 
                    onClick={() => setSelectedVideo(video)}
                    className="bg-stone-50 border border-stone-300 p-3 flex flex-col justify-between shadow-sm cursor-pointer group hover:border-stone-600 hover:bg-stone-100/50 transition-all duration-300"
                  >
                    <div className="w-full bg-stone-950 mb-3 shadow-inner overflow-hidden border border-stone-300 relative">
                      <video 
                        src={video.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-auto block grayscale contrast-115 group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-stone-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-stone-900/80 text-white font-sans font-bold text-xs px-3 py-1.5 uppercase tracking-wider rounded-sm backdrop-blur-xs">
                          Click to Play Fullscreen
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-t border-dashed border-stone-300 pt-2">
                      <h4 className="font-bold text-xs text-stone-900 line-clamp-2 leading-snug mb-1 font-serif group-hover:text-amber-900 transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-sans italic">Moving broadcast &bull; Expandable</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ================= RIGHT COLUMN: EDITORIAL/OPINION (4/12) ================= */}
          <aside className="lg:col-span-4 border-t-4 lg:border-t-0 lg:border-l-2 border-stone-400 lg:pl-6 space-y-6 pt-6 lg:pt-0">
            
            <div className="bg-[#f0ece3] p-4 border border-stone-300">
              <div className="flex flex-col items-center text-center pb-4 border-b border-stone-300">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-stone-300 mb-2 border border-stone-400 grayscale">
                  <Image 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" 
                    alt="Editorial Board portrait" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg text-stone-900 font-sans tracking-tight">Editorial Board</h4>
                <p className="text-xs text-stone-500 font-sans italic">"On the Culture of Celebrating Sneha"</p>
              </div>
              
              <p className="text-sm text-stone-800 mt-4 text-justify font-serif leading-relaxed italic">
                "No, the way we cover culture here at The Rising Sneha is through experimentation. We explore how we can best honor our friends, keep them smiling throughout the story, and bring forth the issues that matter most to the relevant communities. Today, culture journalism is a hybrid of deep gratitude and legendary observations."
              </p>
            </div>

            <div className="border-4 double border-stone-900 p-4 text-center space-y-2 bg-amber-50/50">
              <span className="text-[10px] font-sans uppercase tracking-widest text-stone-400 block -mt-2">Advertisement</span>
              <Heart className="w-8 h-8 mx-auto text-red-700 animate-pulse" />
              <h3 className="font-bold tracking-tight text-xl font-sans uppercase">SNEHA'S HAPPINESS CORP.</h3>
              <p className="text-xs text-stone-700 font-serif px-2">
                Guaranteed satisfaction, top-tier advice, and an elite sense of humor. Operating globally since day one.
              </p>
              <div className="inline-block bg-stone-900 text-amber-50 text-xs px-3 py-1 font-sans uppercase tracking-wider font-bold">
                100% PURE JOY
              </div>
            </div>

            <div className="border border-stone-300 p-4 space-y-3">
              <h4 className="font-bold font-sans uppercase tracking-wider text-xs border-b border-stone-900 pb-1">Sneha At a Glance</h4>
              <ul className="text-xs space-y-2 font-serif text-stone-800">
                <li className="flex items-start gap-2">
                  <Gift className="w-3.5 h-3.5 mt-0.5 text-stone-600 shrink-0" />
                  <span><strong>Author of:</strong> Over 60 tonnes of witty comebacks and legendary text group chats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-3.5 h-3.5 mt-0.5 text-stone-600 shrink-0" />
                  <span><strong>Known Alliance:</strong> Mastered the art of choosing peace, treating friends, and curating immaculate music playlists.</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>

        {/* ================= FOOTER ================= */}
        <footer className="border-t-2 border-stone-900 mt-8 pt-4 text-center text-xs font-sans text-stone-500 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} The Rising Sneha BroadSheet Ltd. All Rights Reserved.
        </footer>

      </div>

      {/* ================= LIGHTBOX INTERACTIVE MODAL ================= */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-stone-950/90 z-50 flex flex-col justify-center items-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedVideo(null)} // Click outside to close
        >
          <div 
            className="relative w-full max-w-3xl bg-stone-900 border border-stone-700 shadow-2xl p-2 sm:p-4 rounded-md"
            onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking the inner layout
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 sm:right-2 bg-stone-800 hover:bg-stone-700 text-stone-200 p-2 rounded-full transition-colors focus:outline-hidden"
              aria-label="Close presentation"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player Box */}
            <div className="w-full bg-black flex justify-center items-center rounded-sm overflow-hidden aspect-video max-h-[70vh]">
              <video 
                src={selectedVideo.src}
                autoPlay
                controls
                muted={false} // Unmuted with audio enabled on expand
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title Metadata Block */}
            <div className="mt-4 px-2 pb-1 text-left border-t border-stone-800 pt-3">
              <span className="font-sans text-[10px] text-amber-400 tracking-widest uppercase font-bold block mb-1">
                Now Airing Theatre Broadcast
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-100 font-serif leading-snug">
                {selectedVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
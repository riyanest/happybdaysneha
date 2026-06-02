"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Newspaper, Heart, Gift, X, Volume2, VolumeX, MessageSquare, Puzzle } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  src: string;
}

interface Testimonial {
  id: number;
  author: string;
  location: string;
  message: string;
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sudoku state management (0 denotes empty cell)
  const initialSudoku = [
    [1, 0, 3, 0],
    [0, 0, 0, 2],
    [4, 0, 0, 0],
    [0, 2, 0, 1]
  ];
  const solutionSudoku = [
    [1, 4, 3, 2],
    [3, 2, 1, 4],
    [4, 1, 2, 3],
    [2, 3, 4, 1]
  ];
  const [sudokuGrid, setSudokuGrid] = useState<number[][]>(initialSudoku);
  const [sudokuSolved, setSudokuSolved] = useState(false);

  const videos: Video[] = [
    { id: 1, title: 'The Ultimate Birthday Wishes Compilation', src: '/bff.mp4' },
    { id: 2, title: 'Throwback: Sneha’s Funniest Moments of the Year', src: '/sayara.mp4' },
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

  const testimonials: Testimonial[] = [
    { id: 1, author: "A Dedicated Fan", location: "New York", message: "Wishing the actual queen of main character energy a spectacular year ahead!" },
    { id: 2, author: "The Group Chat Collective", location: "Global", message: "Thank you for holding our sanity together with top-tier stickers and immaculate humor." },
    { id: 3, author: "Anonymous Well-Wisher", location: "Kathmandu", message: "The vibe architect herself. May your day be fully clear of stress and overflowing with cake." },
    { id: 4, author: "Local Committee for Vibes", location: "Michigan", message: "Public Notice: Attendance is mandatory at all celebration milestones today. Be happy, be well!" },
    { id: 5, author: "Old Friend", location: "Mumbai", message: "Years fly by but your stellar playlist curation and warm energy remain unbothered by time." },
    { id: 6, author: "The Foodie Alliance", location: "New Delhi", message: "URGENT BULLETIN: High-dosage dessert consumption recommended today. Calorie counting is strictly prohibited by broadsheet decree." },
    { id: 7, author: "Late Night Scrolling Club", location: "London", message: "Nobody makes a midnight text layout or a witty comeback drop quite like Sneha. A true living legend." },
    { id: 8, author: "Department of Aesthetics", location: "Paris", message: "An impeccable fashion sense paired with an absolute refusal to let anyone experience a bad vibe. Elite behavior." },
    { id: 9, author: "The Nostalgia Archive", location: "Sydney", message: "Throwbacks are breaking the server infrastructure today! Here's to making a million more ridiculous memories." },
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked by browser. Awaiting user interaction.", err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
      if (audioRef.current.paused) {
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (selectedVideo) {
        audioRef.current.pause();
      } else if (!isMuted) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [selectedVideo, isMuted]);

  const handleSudokuChange = (row: number, col: number, val: string) => {
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 1 || num > 4) {
      const updatedGrid = [...sudokuGrid];
      updatedGrid[row][col] = 0;
      setSudokuGrid(updatedGrid);
      setSudokuSolved(false);
      return;
    }

    const updatedGrid = sudokuGrid.map((r, rowIndex) =>
      r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? num : cell))
    );
    setSudokuGrid(updatedGrid);

    const checkWin = updatedGrid.every((r, rowIndex) =>
      r.every((cell, colIndex) => cell === solutionSudoku[rowIndex][colIndex])
    );
    if (checkWin) setSudokuSolved(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-serif p-4 md:p-8 selection:bg-amber-200 relative pb-20">
      
      {/* Global style injection for seamless scrolling mechanics */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scrollVertical 65s linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Hidden Background Audio Element */}
      <audio 
        ref={audioRef}
        src="/Khat.mp3" 
        loop 
        muted={isMuted}
      />

      {/* ================= EXTRA BREAKING NEWS BANNER ================= */}
      <div className="max-w-6xl mx-auto mb-4 bg-stone-900 text-[#f4f1ea] font-sans text-xs md:text-sm font-bold uppercase tracking-widest py-2 px-4 flex justify-between items-center animate-fade-in">
        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-white px-2 py-0.5 text-[10px] tracking-normal font-black animate-pulse rounded-sm">BULLETIN</span>
          <span>Sneha Rathlaja Turns a Year Wiser Today!</span>
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
          
          <h1 className="text-center font-serif uppercase my-4 border-y-2 border-stone-950 py-3 flex flex-col items-center justify-center tracking-tight text-stone-950">
            <span className="text-xs md:text-sm font-sans font-black tracking-widest text-stone-600 mb-1 block">
              The Nation's Pride
            </span>
            <span className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              THE RISING BADDIE
            </span>
            <span className="font-medium italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl lowercase my-1 leading-none tracking-normal block text-stone-800">
              &mdash; ambassador &mdash;
            </span>
            <span className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tighter block">
              SNEHA
            </span>
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
                By Sayara Kafle &bull; Kathmandu, Nepal
              </p>

              {/* ================= HEADLINER PHOTO BANNER ================= */}
              <div className="border border-stone-300 bg-white p-3 shadow-sm my-4">
                <div className="relative w-full h-[250px] sm:h-[380px] overflow-hidden bg-stone-200 grayscale contrast-125 hover:grayscale-0 transition-all duration-500 border border-stone-200">
                  <Image 
                    src="/sneha.jpg" 
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

            {/* VIDEO GRID SECTION */}
            <section className="pt-6">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-stone-900 pb-1">
                <Newspaper className="w-5 h-5 text-stone-800" />
                <h3 className="text-xl font-bold uppercase tracking-tight font-sans">Special Broadcasts: Living Pictures</h3>
              </div>
              
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
                        <span className="bg-stone-900/80 text-white font-sans font-bold text-xs px-3 py-1.5 uppercase tracking-wider rounded-sm backdrop-blur-[2px]">
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

            {/* ================= MASSIVE LENGTH CLASSIFIEDS MARQUEE ================= */}
            <div className="border border-stone-300 p-4 space-y-3 bg-[#faf8f5]">
              <div className="flex items-center gap-1.5 border-b border-stone-900 pb-1">
                <MessageSquare className="w-3.5 h-3.5 text-stone-800" />
                <h4 className="font-bold font-sans uppercase tracking-wider text-xs">
                  Public Notices & Greetings
                </h4>
              </div>
              
              <div className="relative h-[1160px] overflow-hidden border border-dashed border-stone-300 p-1 bg-[#fbfbfa]">
                {/* Vintage Fade Gradient Shadows */}
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#fbfbfa] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#fbfbfa] to-transparent z-10 pointer-events-none" />
                
                {/* Scrolling Track */}
                <div className="flex flex-col gap-3 animate-scroll-vertical select-none">
                  {/* Base Set */}
                  {testimonials.map((item) => (
                    <div 
                      key={`orig-${item.id}`} 
                      className="p-2.5 bg-stone-50 border border-stone-200 shadow-2xs text-xs font-serif leading-relaxed text-stone-800 hover:bg-amber-50/50 hover:border-stone-400 transition-all"
                    >
                      <p className="italic">"{item.message}"</p>
                      <div className="mt-1.5 text-[10px] uppercase font-sans tracking-wider text-stone-500 font-bold flex justify-between">
                        <span>&mdash; {item.author}</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  ))}
                  {/* Clone Set for seamless continuous scrolling loop */}
                  {testimonials.map((item) => (
                    <div 
                      key={`clone-${item.id}`} 
                      className="p-2.5 bg-stone-50 border border-stone-200 shadow-2xs text-xs font-serif leading-relaxed text-stone-800 hover:bg-amber-50/50 hover:border-stone-400 transition-all"
                    >
                      <p className="italic">"{item.message}"</p>
                      <div className="mt-1.5 text-[10px] uppercase font-sans tracking-wider text-stone-500 font-bold flex justify-between">
                        <span>&mdash; {item.author}</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-center italic text-stone-400 font-sans">
                (Hover over notices to pause scroll track)
              </p>
            </div>

            {/* ================= VINTAGE DAILY COFFEE BREAK SUDOKU (NOW BELOW TESTIMONIALS) ================= */}
            <div className="border border-stone-300 p-4 space-y-3 bg-[#fdfdfd]">
              <div className="flex items-center gap-1.5 border-b border-stone-900 pb-1">
                <Puzzle className="w-3.5 h-3.5 text-stone-800" />
                <h4 className="font-bold font-sans uppercase tracking-wider text-xs">
                  Daily BroadSheet Coffee Break: Mini Sudoku
                </h4>
              </div>
              <p className="text-[11px] font-serif italic text-stone-600 leading-snug">
                Fill the empty boxes with numbers 1 through 4. Every row, column, and 2x2 square block must hold numbers unique.
              </p>

              <div className="flex flex-col items-center py-2 bg-stone-50/50 border border-stone-200 rounded-xs">
                {/* 4x4 Grid Block */}
                <div className="grid grid-cols-4 border-2 border-stone-950 bg-white">
                  {sudokuGrid.map((row, rIdx) =>
                    row.map((cell, cIdx) => {
                      const isPreFilled = initialSudoku[rIdx][cIdx] !== 0;
                      return (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className={`w-10 h-10 flex items-center justify-center border border-stone-300 text-sm font-sans font-bold
                            ${cIdx === 1 ? "border-r-2 border-r-stone-950" : ""}
                            ${rIdx === 1 ? "border-b-2 border-b-stone-950" : ""}
                          `}
                        >
                          {isPreFilled ? (
                            <span className="text-stone-950 select-none bg-stone-100/80 w-full h-full flex items-center justify-center">
                              {cell}
                            </span>
                          ) : (
                            <input
                              type="text"
                              maxLength={1}
                              value={cell === 0 ? "" : cell}
                              onChange={(e) => handleSudokuChange(rIdx, cIdx, e.target.value)}
                              className="w-full h-full text-center font-black focus:outline-none focus:bg-amber-100 text-amber-900 bg-transparent"
                            />
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {sudokuSolved && (
                  <div className="mt-3 text-center px-4 py-1 bg-emerald-50 border border-emerald-300 text-emerald-800 font-sans text-xs uppercase tracking-wider font-bold animate-fade-in rounded-sm">
                    ✨ Puzzle Solved! Pure Brilliance! ✨
                  </div>
                )}
              </div>
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
          className="fixed inset-0 bg-stone-950/90 z-50 flex flex-col justify-center items-center p-4 backdrop-blur-md"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-stone-900 border border-stone-700 shadow-2xl p-2 sm:p-4 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 sm:right-2 bg-stone-800 hover:bg-stone-700 text-stone-200 p-2 rounded-full transition-colors"
              aria-label="Close presentation"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full bg-black flex justify-center items-center rounded-sm overflow-hidden aspect-video max-h-[70vh]">
              <video 
                src={selectedVideo.src}
                autoPlay
                controls
                muted={false}
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

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

      {/* ================= FLOATING MUTE SWITCH (BOTTOM RIGHT) ================= */}
      <div className="fixed bottom-6 right-6 z-40 font-sans">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-50 px-4 py-2.5 rounded-full shadow-2xl border border-stone-700 transition-all duration-300 group hover:scale-105 active:scale-95"
          title={isMuted ? "Play Music" : "Mute Music"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-red-400" />
              <span className="text-xs uppercase tracking-wider font-bold pr-1">Music Muted</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 animate-bounce" />
              <span className="text-xs uppercase tracking-wider font-bold pr-1">Music Playing</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
import Image from "next/image";
import { Newspaper, Play, Heart, Gift, Award } from 'lucide-react';

export default function Home() {

  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500', caption: 'Sneha celebrating a milestone moment.' },
    { id: 2, url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500', caption: 'Spreading smiles and positivity, as always.' },
    { id: 3, url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500', caption: 'A core memory captured with closest friends.' },
    { id: 4, url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=500', caption: 'Radiating pure joy on an evening out.' },
  ];

  // Mock data for the video carousel
  const videos = [
    { id: 1, title: 'The Ultimate Birthday Wishes compilation', duration: '2:30' },
    { id: 2, title: 'Throwback: Sneha’s funniest moments of the year', duration: '1:45' },
    { id: 3, title: 'A special montage from the family', duration: '3:15' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-serif p-4 md:p-8 selection:bg-amber-200">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-justify leading-relaxed text-sm text-stone-800">
                <p>
                  <span className="text-5xl font-bold float-left mr-2 mt-1 font-serif line-height-none text-stone-950">S</span>
                  neha, the much-celebrated and revered icon of pure joy, friendship, and impeccable vibes, has officially reached a brand new milestone today. Following weeks of intense anticipation from friends and family worldwide, the global celebration commenced early this morning with an influx of wholesome messages, nostalgic throwbacks, and virtual toasts.
                </p>
                <p>
                  Known for an unmatched ability to bring warmth into any room, Sneha's legacy of kindness has impacted countless lives. Sources close to the icon state that today’s itinerary includes high-dosage cake consumption, endless laughter sessions, and an absolute ban on any form of stress. "She has lived a magnificent year, and the name shall live for millennia," noted an enthusiastic well-wisher.
                </p>
              </div>
            </article>

            {/* VIDEO CAROUSEL SECTION */}
            <section className="pt-6">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-stone-900 pb-1">
                <Newspaper className="w-5 h-5 text-stone-800" />
                <h3 className="text-xl font-bold uppercase tracking-tight font-sans">Special Broadcasts (Video Archive)</h3>
              </div>
              
              {/* Horizontal Scrollable Newspaper Video Row */}
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-stone-400">
                {videos.map((video) => (
                  <div key={video.id} className="min-w-[280px] md:min-w-[320px] bg-stone-100 border border-stone-300 p-3 flex flex-col justify-between group cursor-pointer hover:bg-stone-200 transition-colors">
                    <div className="relative aspect-video bg-stone-900 flex items-center justify-center text-white mb-3 shadow-inner">
                      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                      <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/40 group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                      <span className="absolute bottom-2 right-2 text-xs bg-black/70 px-1.5 py-0.5 font-sans tracking-wider rounded">{video.duration}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-stone-900 line-clamp-2 leading-snug mb-1 font-serif">{video.title}</h4>
                      <p className="text-xs text-stone-500 font-sans">Press to replay memory &rarr;</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PHOTO GRID GALLERY */}
            <section className="pt-6">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-stone-900 pb-1">
                <Award className="w-5 h-5 text-stone-800" />
                <h3 className="text-xl font-bold uppercase tracking-tight font-sans">Historic Exhibition: Sneha in Frames</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photos.map((photo) => (
                  <div key={photo.id} className="border border-stone-300 bg-white p-3 shadow-sm">
                    <div className="relative aspect-square overflow-hidden bg-stone-200 grayscale contrast-125 hover:grayscale-0 transition-all duration-500 border border-stone-200">
                      <img 
                        src={photo.url} 
                        alt="Sneha's memory" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 text-xs italic text-stone-600 text-center font-serif pt-2 border-t border-dashed border-stone-200">
                      Fig {photo.id}. {photo.caption}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ================= RIGHT COLUMN: EDITORIAL/OPINION (4/12) ================= */}
          <aside className="lg:col-span-4 border-t-4 lg:border-t-0 lg:border-l-2 border-stone-400 lg:pl-6 space-y-6 pt-6 lg:pt-0">
            
            {/* AUTHOR OPINION SECTION */}
            <div className="bg-[#f0ece3] p-4 border border-stone-300">
              <div className="flex flex-col items-center text-center pb-4 border-b border-stone-300">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-stone-300 mb-2 border border-stone-400 grayscale">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Author" className="object-cover w-full h-full"/>
                </div>
                <h4 className="font-bold text-lg text-stone-900 font-sans tracking-tight">Editorial Board</h4>
                <p className="text-xs text-stone-500 font-sans italic">"On the Culture of Celebrating Sneha"</p>
              </div>
              
              <p className="text-sm text-stone-800 mt-4 text-justify font-serif leading-relaxed italic">
                "No, the way we cover culture here at The Rising Sneha is through experimentation. We explore how we can best honor our friends, keep them smiling throughout the story, and bring forth the issues that matter most to the relevant communities. Today, culture journalism is a hybrid of deep gratitude and legendary observations."
              </p>
            </div>

            {/* ADVERTISEMENT BLOCK (Classic Newspaper Style) */}
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

            {/* QUICK STATS/BULLETINS */}
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
    </div>
  );
}

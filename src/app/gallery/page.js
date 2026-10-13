'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { Play, Image as ImageIcon, Video, Trophy, Flame, Eye, Sparkles } from 'lucide-react';
import { MEDIA_MANIFEST } from '@/lib/mediaManifest';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const images = MEDIA_MANIFEST.images;
  const videos = MEDIA_MANIFEST.videos;

  const filteredImages = images.filter((img) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'videos') return false;
    return img.page.toLowerCase().includes(activeTab.toLowerCase()) || img.section.toLowerCase().includes(activeTab.toLowerCase());
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-35 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Media Gallery</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-red/60 clip-angled mb-4">
            <Video className="w-4 h-4 text-brand-red" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              OFFICIAL 4K BROADCAST REELS & CHAMPIONSHIP ARCHIVE
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            ARENA <span className="text-brand-gold">BROADCAST GALLERY</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Experience the intensity of Baramunda Ground through full-bleed 4K imagery and cinematic sports videos covering stage bodybuilding, raw powerlifting, traditional akhara wrestling, and dawn marathons.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['all', 'videos', 'bodybuilding', 'powerlifting', 'dangal', 'marathon', 'experiences'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-heading text-xs uppercase tracking-wider font-bold clip-angled transition-all ${
                  activeTab === tab
                    ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(225,6,0,0.5)]'
                    : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Media' : tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Official Videos Rail */}
      {(activeTab === 'all' || activeTab === 'videos') && (
        <SectionWrapper id="video-rail" animation="fade-up" bg="bg-surface" diagonal="top">
          <SectionHeading
            tag="CINEMATIC BROADCASTS"
            title="OFFICIAL 4K SPORTS REELS"
            subtitle="Curated high-framerate clips capturing heavy lifts, stadium lighting, and raw competitive grit."
            accentColor="red"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-8">
            {videos.map((vid, idx) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideoModal(vid)}
                className="group relative bg-zinc-950 border border-zinc-800 clip-angled overflow-hidden cursor-pointer hover:border-brand-gold/70 transition-all duration-300 shadow-xl"
              >
                {/* Poster Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={vid.poster}
                    alt={vid.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-brand-red/90 group-hover:bg-brand-red text-white flex items-center justify-center shadow-[0_0_20px_#E10600] group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 text-[10px] font-heading uppercase tracking-wider bg-black/80 text-brand-gold border border-brand-gold/40 rounded">
                      {vid.page}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-heading text-lg font-bold uppercase text-white group-hover:text-brand-gold transition-colors">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Photo Grid */}
      {activeTab !== 'videos' && (
        <SectionWrapper id="photo-grid" animation="stagger-cascade" bg="bg-background">
          <SectionHeading
            tag="PHOTO DIRECTORY"
            title="40+ DISTINCT FESTIVAL IMAGES"
            subtitle="Stage photography, athlete warm-up zones, awards podiums, and historic Bhubaneswar arena visuals."
            accentColor="gold"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-12">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                className="group relative bg-zinc-950 border border-zinc-800 clip-angled overflow-hidden aspect-[4/3] hover:border-brand-red/70 transition-all duration-300"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <span className="text-[10px] font-heading uppercase tracking-wider text-brand-gold font-bold block mb-0.5">
                    {img.section}
                  </span>
                  <p className="text-xs text-white font-medium line-clamp-1">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div
          onClick={() => setActiveVideoModal(null)}
          className="fixed inset-0 z-[9990] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-zinc-950 border-2 border-brand-red clip-angled overflow-hidden shadow-[0_0_50px_rgba(225,6,0,0.5)]"
          >
            <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800">
              <span className="font-heading text-lg font-bold uppercase text-white">
                {activeVideoModal.title}
              </span>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="px-3 py-1 bg-brand-red text-white text-xs font-heading font-black uppercase rounded hover:bg-[#ff0700]"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                src={activeVideoModal.src}
                poster={activeVideoModal.poster}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 bg-zinc-950 text-xs text-zinc-400">
              {activeVideoModal.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

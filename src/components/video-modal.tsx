"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
};

export default function VideoModal({ isOpen, onClose, src }: PropsType) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 关闭时暂停视频
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-4xl text-white z-10"
        >
          &times;
        </button>

        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          className="w-full h-auto"
        />
      </div>
    </div>,
    document.body
  );
}

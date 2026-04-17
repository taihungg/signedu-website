"use client";

import { useEffect, useRef } from "react";

interface YouTubeScrollPlayerProps {
  videoId: string;
}

export default function YouTubeScrollPlayer({ videoId }: YouTubeScrollPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = iframeRef.current;
          if (!iframe || !iframe.contentWindow) return;

          if (entry.isIntersecting) {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "playVideo", args: [] }),
              "*"
            );
          } else {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
              "*"
            );
          }
        });
      },
      { threshold: 0.2 } // Trigger when at least 20% of the player is visible
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#3D4DA3]/10 bg-[#00105b] order-2 lg:order-1 focus-within:ring-4 focus-within:ring-[#83daf2]/50">
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${videoId}&controls=1&rel=0`}
        title="SignEdu Vision and Mission"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0 opacity-90 transition-opacity hover:opacity-100 duration-500"
      ></iframe>
    </div>
  );
}

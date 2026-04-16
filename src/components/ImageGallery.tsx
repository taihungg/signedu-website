interface ImageGalleryProps {
  images: string[];
  badge?: React.ReactNode;
}

export default function ImageGallery({ images, badge }: ImageGalleryProps) {
  if (!images || images.length !== 3) return null;

  return (
    <div className="p-3 pb-0">
      <div className="relative aspect-video flex gap-2">
        {/* Main Large Image */}
        <div className="relative w-2/3 h-full rounded-2xl overflow-hidden group shadow-sm bg-slate-100">
          <img
            src={images[0]}
            alt="gallery main"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && <div className="absolute top-4 left-4 z-10">{badge}</div>}
        </div>

        {/* Smaller Thumbnails */}
        <div className="w-1/3 flex flex-col gap-2 h-full">
          <div className="relative h-1/2 rounded-2xl overflow-hidden group shadow-sm bg-slate-100">
            <img
              src={images[1]}
              alt="gallery thumb 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <div className="relative h-1/2 rounded-2xl overflow-hidden group shadow-sm bg-slate-100">
            <img
              src={images[2]}
              alt="gallery thumb 2"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

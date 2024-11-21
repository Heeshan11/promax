import React, { useEffect, useRef, useState } from 'react';

interface WatermarkProps {
  imageUrl: string;
  logoUrl?: string;
  imgStyle?: string;
  targetHeight: number;
}

const Watermark: React.FC<WatermarkProps> = ({ imageUrl, logoUrl = '/logo.png', imgStyle, targetHeight }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [watermarkedImage, setWatermarkedImage] = useState<string | null>(null);

  const addWatermark = async () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Preload images concurrently for better performance
    const [image, watermark] = await Promise.all([loadImage(imageUrl), loadImage(logoUrl)]);

    // Calculate container width and target dimensions
    const targetWidth = container.offsetWidth;
    const aspectRatio = image.height / image.width;
    canvas.width = targetWidth;
    canvas.height = targetHeight;

    // Draw the main image resized
    ctx.drawImage(image, 0, 0, targetWidth, targetHeight);

    // Calculate watermark dimensions and position
    const watermarkWidth = targetWidth * 0.5;
    const watermarkHeight = watermarkWidth * (watermark.height / watermark.width);
    const xPosition = (targetWidth - watermarkWidth) / 2;
    const yPosition = (targetHeight - watermarkHeight) / 2;

    // Draw watermark with transparency
    ctx.globalAlpha = 0.15;
    ctx.drawImage(watermark, xPosition, yPosition, watermarkWidth, watermarkHeight);

    // Get the final image URL
    setWatermarkedImage(canvas.toDataURL('image/png'));
  };

  // Helper function to load images
  const loadImage = (src: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous'; // Allow cross-origin images
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });

  useEffect(() => {
    addWatermark();

   
  }, [imageUrl, logoUrl]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      {watermarkedImage && (
        <img src={watermarkedImage} alt="Watermarked" style={{ width: '100%' }} className={imgStyle} />
      )}
    </div>
  );
};

export default Watermark;

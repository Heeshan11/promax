var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
const Watermark = ({ imageUrl, logoUrl = '/logo.png', imgStyle, targetHeight }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [watermarkedImage, setWatermarkedImage] = useState(null);
    const addWatermark = () => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // Preload images concurrently for better performance
        const [image, watermark] = yield Promise.all([loadImage(imageUrl), loadImage(logoUrl)]);
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
    });
    // Helper function to load images
    const loadImage = (src) => new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous'; // Allow cross-origin images
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
    useEffect(() => {
        addWatermark();
    }, [imageUrl, logoUrl]);
    return (_jsxs("div", { ref: containerRef, style: { width: '100%' }, children: [_jsx("canvas", { ref: canvasRef, style: { display: 'none' } }), watermarkedImage && (_jsx("img", { src: watermarkedImage, alt: "Watermarked", style: { width: '100%' }, className: imgStyle }))] }));
};
export default Watermark;

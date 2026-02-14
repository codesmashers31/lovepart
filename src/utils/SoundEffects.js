// Simple Sound Effects Utility
// Using standard HTML5 Audio. 
// For production, you should host these files or use imports if configured.
// Using reliable CDN placeholders for generic sounds if local assets aren't available.

// Placeholder URLs for sounds (You can replace these with local imports if you have .mp3/.wav files in assets)
const SOUNDS = {
    pop: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.m4a', // Soft pop
    success: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.m4a', // Success chime
    fireworks: 'https://assets.mixkit.co/active_storage/sfx/1660/1660-preview.m4a', // Fireworks explosion
    magic: 'https://assets.mixkit.co/active_storage/sfx/2048/2048-preview.m4a' // Magic sparkle
};

const playSound = (type, volume = 0.5) => {
    try {
        const url = SOUNDS[type];
        if (url) {
            const audio = new Audio(url);
            audio.volume = volume;
            audio.play().catch(e => console.warn('Audio play failed', e));
        }
    } catch (err) {
        console.warn('Sound effect error', err);
    }
};

export const playPop = () => playSound('pop', 0.3);
export const playSuccess = () => playSound('success', 0.4);
export const playFireworks = () => playSound('fireworks', 0.6);
export const playMagic = () => playSound('magic', 0.4);

export default {
    playPop,
    playSuccess,
    playFireworks,
    playMagic
};

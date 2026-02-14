import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

// Manual imports for all 28 images
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.jpeg';
import img8 from '../assets/images/8.jpeg';
import img9 from '../assets/images/9.jpeg';
import img10 from '../assets/images/10.jpeg';
import img11 from '../assets/images/11.jpeg';
import img12 from '../assets/images/12.jpeg';
import img13 from '../assets/images/13.jpeg';
import img14 from '../assets/images/14.jpeg';
import img15 from '../assets/images/15.jpeg';
import img16 from '../assets/images/16.jpeg';
import img17 from '../assets/images/17.jpeg';
import img18 from '../assets/images/18.jpeg';
import img19 from '../assets/images/19.jpeg';
import img20 from '../assets/images/20.jpeg';
import img21 from '../assets/images/21.jpeg';
import img22 from '../assets/images/22.jpeg';
import img23 from '../assets/images/23.jpeg';
import img24 from '../assets/images/24.jpeg';
import img25 from '../assets/images/25.jpeg';
import img26 from '../assets/images/26.jpeg';
import img27 from '../assets/images/27.jpeg';
import img28 from '../assets/images/28.jpeg';

// Organizing all images into a single array with captions
const allImages = [
    { id: 1, img: img1, title: "The Beginning", sub: "Where it all started" },
    { id: 2, img: img2, title: "Adventures", sub: "Exploring together" },
    { id: 3, img: img3, title: "Laughter", sub: "Joy in every moment" },
    { id: 4, img: img4, title: "Friendship", sub: "My best friend" },
    { id: 5, img: img5, title: "First Trip", sub: "Unforgettable memories" },
    { id: 6, img: img6, title: "Celebrations", sub: "Cheers to us" },
    { id: 7, img: img7, title: "Smiles", sub: "Your smile lights up my world" },
    { id: 8, img: img8, title: "Together", sub: "Side by side" },
    { id: 9, img: img9, title: "Growth", sub: "Growing stronger" },
    { id: 10, img: img10, title: "Dreaming", sub: "Future plans" },
    { id: 11, img: img11, title: "Love", sub: "Pure and true" },
    { id: 12, img: img12, title: "Support", sub: "Always there" },
    { id: 13, img: img13, title: "Magic", sub: "Life is magical with you" },
    { id: 14, img: img14, title: "Holidays", sub: "Festive fun" },
    { id: 15, img: img15, title: "Engagement", sub: "The promise" },
    { id: 16, img: img16, title: "Wedding Day", sub: "Forever begins" },
    { id: 17, img: img17, title: "Just Married", sub: "Blissful days" },
    { id: 18, img: img18, title: "Honeymoon", sub: "Paradise" },
    { id: 19, img: img19, title: "Building Home", sub: "Our sanctuary" },
    { id: 20, img: img20, title: "Anniversary 1", sub: "Reviewing year one" },
    { id: 21, img: img21, title: "Pregnancy", sub: "Expecting a miracle" },
    { id: 22, img: img22, title: "Maternity", sub: "Glowing mama" },
    { id: 23, img: img23, title: "Baby Arrives", sub: "Welcome little one" },
    { id: 24, img: img24, title: "Family of 3", sub: "Circle completes" },
    { id: 25, img: img25, title: "Baby Smiles", sub: "Pure innocence" },
    { id: 26, img: img26, title: "First Steps", sub: "Milestones" },
    { id: 27, img: img27, title: "2nd Anniversary", sub: "Stronger than ever" },
    { id: 28, img: img28, title: "Forever", sub: "To infinity and beyond" }
];

const TimelineItem = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className={`flex items-center w-full mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
            {/* Empty space for alignment */}
            <div className="flex-1 w-5/12 hidden md:block" />

            {/* Center Node */}
            <div className="z-20 flex items-center justify-center bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-rose-900 mx-4 md:mx-0 flex-shrink-0">
                <Heart size={16} className="text-white fill-white" />
            </div>

            {/* Content Card */}
            <div className={`flex-1 w-5/12 md:px-10 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                <div className={`bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 hover:border-rose-300/50 transition-colors shadow-xl max-w-sm ${index % 2 !== 0 && "ml-auto"}`}>
                    <div className="mb-3 overflow-hidden rounded-xl h-48 md:h-64 shadow-inner relative group">
                        <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-transparent transition-colors z-10" />
                        <img
                            src={data.img}
                            alt={data.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <p className="text-white font-bold text-lg mb-1">{data.id}. {data.title}</p>
                    <p className="text-rose-200/80 font-handwriting text-sm italic">{data.sub}</p>
                </div>
            </div>

            {/* Mobile Spacer to push content to side correctly */}
            <div className="flex-1 w-1/12 md:hidden" />
        </motion.div>
    );
};

const StageTimeline = ({ onComplete }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden bg-[#0f0518]">
            <div className="text-center mb-16 relative z-10 pt-10">
                <h2 className="text-3xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-purple-300 drop-shadow-lg mb-4">
                    10 Years of Togetherness 💖
                </h2>
                <div className="flex flex-col gap-2 justify-center text-sm text-white/70">
                    <span className="font-bold text-lg">8 Years of Love + 2 Years of Marriage</span>
                    <span className="text-xs opacity-80">(From Friendship to Family)</span>
                </div>
            </div>

            {/* Thread Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 h-full transform md:-translate-x-1/2 rounded-full">
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-rose-400 via-purple-500 to-rose-600 h-full shadow-[0_0_15px_rgba(244,63,94,0.5)] rounded-full"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto pb-20 pl-8 md:pl-0">
                {allImages.map((item, index) => (
                    <TimelineItem key={item.id} data={item} index={index} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex justify-center pb-20 relative z-20 pt-10"
            >
                <button
                    onClick={onComplete}
                    className="px-10 py-4 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white rounded-full font-bold text-lg shadow-[0_0_30px_rgba(225,29,72,0.6)] hover:shadow-[0_0_40px_rgba(225,29,72,0.8)] hover:scale-105 transition-all flex items-center gap-3"
                >
                    <Star className="w-6 h-6 fill-current animate-pulse" />
                    See Our Beautiful Future
                </button>
            </motion.div>
        </div>
    );
};

export default StageTimeline;

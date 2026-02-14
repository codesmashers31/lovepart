import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
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

// Helper to categorize images
// 1-15: 10 Years of Love
// 16-22: 2 Years of Marriage
// 23-28: Our Little Miracle

const chapters = [
    {
        title: "Chapter 1: A Decade of Love ❤️",
        subtitle: "10 Years of Friendship & Romance",
        data: [
            { id: 1, img: img1, quote: "The beginning of our forever.", sub: "Nam kadhal payanam thodangiya naal." },
            { id: 2, img: img2, quote: "10 years felt like 10 seconds with you.", sub: "Unkooda irukura ovvoru nodiyum magic." },
            { id: 3, img: img3, quote: "Growing up together was the best gift.", sub: "Small fights, big love." },
            { id: 4, img: img4, quote: "You are my best friend and my soulmate.", sub: "En uyir nanbane, en kadhalane." },
            { id: 5, img: img5, quote: "Through every up and down, we held hands.", sub: "Kai korthu nadantha thoorangal." },
            { id: 6, img: img6, quote: "Your smile is my daily motivation.", sub: "Un punnagai podhum." },
            { id: 7, img: img7, quote: "Distance never mattered, love did.", sub: "Thooram nam kadhalai pirikkavillai." },
            { id: 8, img: img8, quote: "Finding a home in your heart.", sub: "En veedu un idhayam than." },
            { id: 9, img: img9, quote: "You are the most beautiful part of my life.", sub: "En vazhvin azhagiyaoviya." },
            { id: 10, img: img10, quote: "A decade down, a lifetime to go.", sub: "Oru yugam mudinthalum, nam kadhal thudarum." },
            { id: 11, img: img11, quote: "Nothing makes sense without you.", sub: "Nee illamal nan illai." },
            { id: 12, img: img12, quote: "My safe place is in your arms.", sub: "Un aravanaippu sorgham." },
            { id: 13, img: img13, quote: "Love deepened with every passing year.", sub: "Varudangal odinaalum kadhal koodiyathe." },
            { id: 14, img: img14, quote: "We built a foundation of trust.", sub: "Nambikkaiye nam kadhalin asthivaram." },
            { id: 15, img: img15, quote: "Ready for the next big step.", sub: "Adutha kattathirku thayar." },
        ]
    },
    {
        title: "Chapter 2: The Magic of Marriage 💍",
        subtitle: "Two Souls, One Heart (2 Years)",
        data: [
            { id: 16, img: img16, quote: "The day we became One.", sub: "Nam thirumana naal." },
            { id: 17, img: img17, quote: "Walking down the aisle to my forever.", sub: "Unnudan vazha oru varam." },
            { id: 18, img: img18, quote: "Waking up next to you is a blessing.", sub: "Kaalai pozhuthu un mugam parthu." },
            { id: 19, img: img19, quote: "Building our dream home together.", sub: "Nam kanavu illam." },
            { id: 20, img: img20, quote: "From partners to life partners.", sub: "Vazhkai thunaiyaga." },
            { id: 21, img: img21, quote: "Every anniversary reminds me how lucky I am.", sub: "En adhrshtam nee." },
            { id: 22, img: img22, quote: "Two years of pure marital bliss.", sub: "Iniya thirumana vazhkai." },
        ]
    },
    {
        title: "Chapter 3: Our Little Miracle 👶",
        subtitle: "And Then There Were Three",
        data: [
            { id: 23, img: img23, quote: "The moment our world changed forever.", sub: "Nam kutti angel." },
            { id: 24, img: img24, quote: "Holding our future in our hands.", sub: "Nam ethirkalam." },
            { id: 25, img: img25, quote: "You became the best parent.", sub: "Sirantha appa/amma." },
            { id: 26, img: img26, quote: "Our family is complete now.", sub: "Nam kudumbam muzhumai adainthathu." },
            { id: 27, img: img27, quote: "Watching our baby grow is magic.", sub: "Valarum payir." },
            { id: 28, img: img28, quote: "12 Years + Baby = Perfect Life.", sub: "Ithuvey sorgam." },
        ]
    }
];

const TimelineItem = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`flex md:justify-between items-center w-full mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-col`}
        >
            <div className="flex-1 w-full md:w-5/12"></div>

            <div className="z-20 flex items-center order-1 bg-rose-500 shadow-xl w-8 h-8 md:w-10 md:h-10 rounded-full justify-center border-4 border-rose-900/50">
                <Heart size={16} className="text-white" fill="currentColor" />
            </div>

            <div className={`order-1 w-full md:w-5/12 px-4 py-2 ${index % 2 === 0 ? "md:text-right text-center" : "md:text-left text-center"}`}>
                <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 hover:border-rose-300/50 transition-colors shadow-xl mx-auto md:mx-0 max-w-sm">
                    <div className="mb-3 overflow-hidden rounded-xl h-48 md:h-64 shadow-inner">
                        <img
                            src={data.img}
                            alt={data.quote}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <p className="text-white font-medium text-base mb-1">"{data.quote}"</p>
                    <p className="text-rose-200/80 font-handwriting text-sm italic">{data.sub}</p>
                </div>
            </div>
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
        <div ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden bg-black/20">
            {/* Thread Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 h-full transform -translate-x-1/2">
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-rose-400 via-purple-500 to-rose-600 h-full shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-16 relative z-10 pt-10"
            >
                <h2 className="text-3xl md:text-5xl font-display text-rose-100 mb-2 drop-shadow-lg">12 Years of Magic ✨</h2>
                <p className="text-white/70 text-sm max-w-xl mx-auto">From Friendship to Family</p>
            </motion.div>

            <div className="relative z-10 max-w-6xl mx-auto pb-20">
                {chapters.map((chapter, chapterIndex) => (
                    <div key={chapterIndex} className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-center mb-10 bg-black/30 backdrop-blur-sm py-4 rounded-xl border border-white/10 mx-auto max-w-md"
                        >
                            <h3 className="text-2xl font-display text-rose-300">{chapter.title}</h3>
                            <p className="text-white/60 text-xs uppercase tracking-widest">{chapter.subtitle}</p>
                        </motion.div>

                        {chapter.data.map((item, index) => (
                            <TimelineItem key={item.id} data={item} index={index} />
                        ))}
                    </div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex justify-center pb-20 relative z-20 bg-gradient-to-t from-black/80 to-transparent pt-10 -mt-10"
            >
                <button
                    onClick={onComplete}
                    className="px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white rounded-full font-bold text-base shadow-[0_0_20px_rgba(225,29,72,0.6)] hover:shadow-[0_0_30px_rgba(225,29,72,0.8)] hover:scale-105 transition-all flex items-center gap-3"
                >
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    See Our Beautiful Future
                </button>
            </motion.div>
        </div>
    );
};

export default StageTimeline;

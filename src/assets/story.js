import { Heart, Stars, Sparkles, Music } from 'lucide-react';

export const storyConfig = {
    // 1. Personal Details
    petName: ["my kutty", "princess", "baby", "love", "honey", "sweetheart", "darling"],
    partnerName: "My Love", // Used in greetings

    // 2. Intro Section
    intro: {
        title: "Hello My Love",
        subtitle: "A journey through our beautiful world...",
        buttonText: "Start Journey"
    },

    // 3. Login Section
    login: {
        title: "Who are you to me?",
        placeholder: "e.g. My Princess...",
        buttonText: "Open My Heart",
        hint: "Try 'My Kutty' or 'Princess'"
    },

    // 4. The Journey (Car Travel Mode)
    // Images: Use your own URLs. These are placeholders.
    journey: [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
            caption: "The day our stars aligned.",
            date: "First Meet"
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
            caption: "Every adventure with you is magic.",
            date: "First Trip"
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
            caption: "In your eyes, I found my home.",
            date: "Sweet Moments"
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1511253259073-4081f734d44d?q=80&w=800&auto=format&fit=crop",
            caption: "Your laughter is my favorite song.",
            date: "Pure Joy"
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800&auto=format&fit=crop",
            caption: "Walking hand in hand, forever.",
            date: "Together"
        },
        // Add more scenes as needed (User requested ~10, adding placeholders)
        { id: 6, img: "https://source.unsplash.com/random/800x600/?couple", caption: "Every sunset is better with you.", date: "Evenings" },
        { id: 7, img: "https://source.unsplash.com/random/800x600/?love", caption: "My heart beats only for you.", date: "Heartbeat" },
        { id: 8, img: "https://source.unsplash.com/random/800x600/?romance", caption: "You are my dream come true.", date: "Dreams" },
        { id: 9, img: "https://source.unsplash.com/random/800x600/?wedding", caption: "I can't wait for our forever.", date: "The Future" },
        { id: 10, img: "https://source.unsplash.com/random/800x600/?kiss", caption: "I love you more than words can say.", date: "Always" },
    ],

    // 5. Final Proposal
    proposal: {
        title: "Will You Walk With Me Forever?",
        acceptBtn: "Yes, Forever! 💍",
        celebrationMsg: "You & Me. Until the end of time. ❤️"
    }
};

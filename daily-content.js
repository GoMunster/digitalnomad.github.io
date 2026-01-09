// ============================================
// DIGITAL NOMAD DAILY - DAILY CONTENT UPDATE
// ============================================
// Update this file daily - it's the only file you need to edit!
// Just change the values below and refresh the page.

const DAILY_CONTENT = {
    
    // ============================================
    // TODAY'S FOCUS
    // ============================================
    todaysFocus: "Stop procrastinating on your side hustle. The best time to start was yesterday. The second best time is right now.",
    
    // ============================================
    // VIDEO OF THE DAY
    // ============================================
    video: {
        // Get this from YouTube URL: youtube.com/watch?v=YOUR_VIDEO_ID
        // Just copy the part after "v="
        youtubeId: "JBwkrOSRXFU",
        title: "Best Places for Digital Nomads to Live in 2026"
    },
    
    // ============================================
    // PODCAST OF THE DAY
    // ============================================
    podcast: {
        // Get embed URL from Apple Podcasts "Share Episode" -> "Embed"
        // Or use Spotify embed URL
        embedUrl: "https://embed.podcasts.apple.com/us/podcast/id1569923210?i=1000673280580",
        title: "How to Work with Your ADHD"
    },
    
    // ============================================
    // BOOK OF THE DAY
    // ============================================
    book: {
        title: "The 1-Page Marketing Plan",
        author: "Allan Dib",
        // Get image from Amazon - right click on book cover -> "Copy Image Address"
        imageUrl: "https://m.media-amazon.com/images/I/71nrGP9Gk8L._SY425_.jpg",
        description: "Serial entrepreneur Allan Dib reveals a marketing implementation breakthrough that makes creating a marketing plan simple and fast. Map out your own sophisticated marketing plan and go from zero to marketing hero with a single page divided into nine squares.",
        // Your Amazon affiliate link
        amazonUrl: "https://amzn.to/3ZmHsPn"
    },
    
    // ============================================
    // REMOTE WORK TIP
    // ============================================
    tip: "Set up a proper morning routine. Your morning sets the tone for your entire workday. Create a ritual that energizes you - whether it's meditation, exercise, or simply enjoying your coffee in peace. Your WiFi will probably die at 2pm anyway, so get your important work done early.",
    
    // ============================================
    // SKILL OF THE DAY
    // ============================================
    skill: {
        title: "Learn Python for Remote Work",
        description: "Master Python programming and unlock high-paying remote work opportunities. This specialization is perfect for aspiring digital nomads who want to break into tech and earn $80k+ from anywhere.",
        learningPoints: [
            "Python fundamentals that actually matter",
            "Web development basics",
            "Data analysis for business decisions",
            "Automation to work less, earn more"
        ],
        courseUrl: "https://imp.i384100.net/552bvo" // Coursera affiliate link
    },
    
    // ============================================
    // GADGET/GEAR OF THE DAY
    // ============================================
    gadget: {
        title: "Portable Second Monitor",
        // Use actual product image URL from Amazon or manufacturer
        imageUrl: "https://m.media-amazon.com/images/I/81rsMys9S8L._AC_SL1500_.jpg",
        description: "Boost your productivity anywhere with this ultra-slim portable monitor. Perfect for digital nomads who need extra screen real estate without the bulk.",
        whyEssential: "Weighs just 1.7 pounds, USB-C powered, works with any laptop. No more squinting at a 13-inch screen while debugging code in a café.",
        productUrl: "https://amzn.to/45phldt" // Amazon affiliate link
    },
    
    // ============================================
    // TOOLKIT ESSENTIAL
    // ============================================
    toolkit: {
        toolName: "NordVPN",
        whyMatters: "Because public WiFi in beach cafes isn't exactly Fort Knox. Secure your sensitive work data while hopping between coworking spaces and cafes. Your clients' data is worth more than the $3 monthly subscription.",
        toolUrl: "https://nordvpn.com/special/?utm_term=&utm_content" // NordVPN affiliate link
    },

    // ============================================
    // SIDE HUSTLE / BUSINESS IDEA
    // ============================================
    businessIdea: {
        title: "Start a Newsletter in Your Niche",
        difficulty: "Beginner-Friendly",
        startupCost: "$0-$50/month",
        timeToFirstDollar: "2-3 months",
        potentialIncome: "$500-$5,000/month within 6-12 months",
        description: "Newsletters enable you to talk directly to your ideal customer who are already interested in what you have to say and offer.",
        whyItWorks: "This method of community building is better than most because it doesn't depend on a social media account that could get banned, deleted, or any other issue.",
        firstSteps: [
            "Step 1: Define Your Target Audience",
            "Step 2: Create High Quality Content",
            "Step 3: Build Your Subscriber Base",
            "Step 4: Choose Your Newsletter Monetization Strategies"
        ],
        resourceUrl: "https://mailchimp.com/resources/how-to-monetize-a-newsletter/"
    },
    
    // ============================================
    // DESTINATION SPOTLIGHT
    // ============================================
    destination: {
        name: "China",
        monthlyCost: "$1,000-$2,000",
        internetSpeed: "200-300 Mbps in many big cities!",
        highlights: [
            "Growing in their digital nomad population!",
            "High Internet Speeds in the big cities but less rent than the big cities in US.",
            "Street food that'll ruin you for home cooking",
            "Coworking spaces"
        ],
        moreInfoUrl: "https://freakingnomads.com/best-places-for-digital-nomads-in-china/" // Destination guide link
    }
};

// ============================================
// DON'T EDIT BELOW THIS LINE
// (Unless you know what you're doing)
// ============================================

// Function to update the page content
function updatePageContent() {
    // Today's Focus
    document.querySelector('.focus-section p').textContent = DAILY_CONTENT.todaysFocus;
    
    // Video
    document.querySelector('.video-section iframe').src = `https://www.youtube.com/embed/${DAILY_CONTENT.video.youtubeId}`;
    document.querySelector('.video-section p strong').textContent = DAILY_CONTENT.video.title;
    
    // Podcast
    document.querySelector('.podcast-container iframe').src = DAILY_CONTENT.podcast.embedUrl;
    document.querySelector('.podcast-section p strong').textContent = DAILY_CONTENT.podcast.title;
    
    // Book
    document.querySelector('.book-image img').src = DAILY_CONTENT.book.imageUrl;
    document.querySelector('.book-image img').alt = `${DAILY_CONTENT.book.title} book cover`;
    document.querySelector('.book-details h3').textContent = DAILY_CONTENT.book.title;
    document.querySelector('.book-details p:nth-of-type(1) strong').nextSibling.textContent = ` ${DAILY_CONTENT.book.author}`;
    document.querySelector('.book-details p:nth-of-type(2)').textContent = DAILY_CONTENT.book.description;
    document.querySelector('.book-details .cta-button').href = DAILY_CONTENT.book.amazonUrl;
    
    // Tip
    document.querySelector('.tip p').textContent = DAILY_CONTENT.tip;
    
    // Skill
    const skillSection = document.querySelector('[data-section="skill"]');
    skillSection.querySelector('h3').textContent = DAILY_CONTENT.skill.title;
    skillSection.querySelector('p:first-of-type').textContent = DAILY_CONTENT.skill.description;
    const skillList = skillSection.querySelector('ul');
    skillList.innerHTML = DAILY_CONTENT.skill.learningPoints.map(point => `<li>${point}</li>`).join('');
    skillSection.querySelector('.cta-button').href = DAILY_CONTENT.skill.courseUrl;
    
    // Gadget
    const gadgetSection = document.querySelector('[data-section="gadget"]');
    gadgetSection.querySelector('.gadget-image img').src = DAILY_CONTENT.gadget.imageUrl;
    gadgetSection.querySelector('.gadget-image img').alt = DAILY_CONTENT.gadget.title;
    gadgetSection.querySelector('h3').textContent = DAILY_CONTENT.gadget.title;
    gadgetSection.querySelector('.gadget-details p:nth-of-type(1)').textContent = DAILY_CONTENT.gadget.description;
    gadgetSection.querySelector('.gadget-details p:nth-of-type(2)').innerHTML = `<strong>Why it's essential:</strong> ${DAILY_CONTENT.gadget.whyEssential}`;
    gadgetSection.querySelector('.cta-button').href = DAILY_CONTENT.gadget.productUrl;
    
    // Toolkit
    const toolkitSection = document.querySelector('[data-section="toolkit"]');
    toolkitSection.querySelector('.resource p:nth-of-type(1) strong').nextSibling.textContent = ` ${DAILY_CONTENT.toolkit.toolName}`;
    toolkitSection.querySelector('.resource p:nth-of-type(2)').innerHTML = `<strong>Why it matters:</strong> ${DAILY_CONTENT.toolkit.whyMatters}`;
    toolkitSection.querySelector('.cta-button').href = DAILY_CONTENT.toolkit.toolUrl;
    
    // Business Idea
    const businessSection = document.querySelector('[data-section="business"]');
    businessSection.querySelector('h3').textContent = DAILY_CONTENT.businessIdea.title;
    businessSection.querySelector('.difficulty').textContent = DAILY_CONTENT.businessIdea.difficulty;
    businessSection.querySelector('.startup-cost').textContent = DAILY_CONTENT.businessIdea.startupCost;
    businessSection.querySelector('.time-to-money').textContent = DAILY_CONTENT.businessIdea.timeToFirstDollar;
    businessSection.querySelector('.potential-income').textContent = DAILY_CONTENT.businessIdea.potentialIncome;
    businessSection.querySelector('.description').textContent = DAILY_CONTENT.businessIdea.description;
    businessSection.querySelector('.why-it-works').textContent = DAILY_CONTENT.businessIdea.whyItWorks;
    const businessSteps = businessSection.querySelector('.first-steps');
    businessSteps.innerHTML = DAILY_CONTENT.businessIdea.firstSteps.map(step => `<li>${step}</li>`).join('');
    businessSection.querySelector('.cta-button').href = DAILY_CONTENT.businessIdea.resourceUrl;
    
    // Destination
    const destSection = document.querySelector('[data-section="destination"]');
    destSection.querySelector('h3').textContent = DAILY_CONTENT.destination.name;
    destSection.querySelector('.resource p:nth-of-type(1) strong').nextSibling.textContent = ` ${DAILY_CONTENT.destination.monthlyCost}`;
    destSection.querySelector('.resource p:nth-of-type(2) strong').nextSibling.textContent = ` ${DAILY_CONTENT.destination.internetSpeed}`;
    const destList = destSection.querySelector('ul');
    destList.innerHTML = DAILY_CONTENT.destination.highlights.map(highlight => `<li>${highlight}</li>`).join('');
    destSection.querySelector('.cta-button').href = DAILY_CONTENT.destination.moreInfoUrl;
}

// Run when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updatePageContent);
} else {
    updatePageContent();
}

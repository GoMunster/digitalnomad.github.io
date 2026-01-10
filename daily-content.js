// ============================================
// DIGITAL NOMAD DAILY - DAILY CONTENT UPDATE
// ============================================
// Update this file daily - it's the only file you need to edit!
// Just change the values below and refresh the page.

const DAILY_CONTENT = {
    
    // ============================================
    // TODAY'S FOCUS
    // ============================================
    todaysFocus: "You don't have to see the whole staircase, just take the first step.",
    
    // ============================================
    // VIDEO OF THE DAY
    // ============================================
    video: {
        // Get this from YouTube URL: youtube.com/watch?v=YOUR_VIDEO_ID
        // Just copy the part after "v="
        youtubeId: "PTABougduks",
        title: "Take Your Creative Business from $0-$10k a Month"
    },
    
    // ============================================
    // PODCAST OF THE DAY
    // ============================================
    podcast: {
        // Get embed URL from Apple Podcasts "Share Episode" -> "Embed"
        // Or use Spotify embed URL
        embedUrl: "https://embed.podcasts.apple.com/us/podcast/a-real-look-into-the-day-in-the-life-of-a-digital-nomad-ep-229/id1578141284?i=1000742328260",
        title: "Real Daily Life as a Digital Nomad"
    },
    
    // ============================================
    // BOOK OF THE DAY
    // ============================================
    book: {
        title: "Never Eat Alone",
        author: "Keith Ferrazzi",
        // Get image from Amazon - right click on book cover -> "Copy Image Address"
        imageUrl: "https://m.media-amazon.com/images/I/71zhs-0cYpL._SL1500_.jpg",
        description: "The secret, master networker Keith Ferrazzi claims, is in reaching out to other people. As Ferrazzi discovered in early life, what distinguishes highly successful people from everyone else is the way they use the power of relationships—so that everyone wins",
        // Your Amazon affiliate link
        amazonUrl: "https://amzn.to/49exdBI"
    },
    
    // ============================================
    // REMOTE WORK TIP
    // ============================================
    tip: "When your office is just steps away, work can bleed endlessly into personal time. Create a simple 5-minute routine: close all work tabs, write tomorrow's top 3 priorities, and physically shut your laptop. Maybe change your clothes or take a short walk around the block.",
    
    // ============================================
    // SKILL OF THE DAY
    // ============================================
    skill: {
        title: "Machine Learning Engineer",
        description: "A Machine Learning Engineer builds and optimizes algorithms that enable computers to learn from data. They work with large datasets, develop models, and apply techniques like neural networks to enhance predictive accuracy.",
        learningPoints: [
            "Build ML models",
            "Build & train a neural network with TensorFlow",
            "Apply best practices for ML development ",
            "NumPy & scikit-learn, build & train supervised models for prediction & binary classification tasks"
        ],
        courseUrl: "https://imp.i384100.net/xLVn23" // Coursera affiliate link
    },
    
    // ============================================
    // GADGET/GEAR OF THE DAY
    // ============================================
    gadget: {
        title: "Anker Power Bank",
        // Use actual product image URL from Amazon or manufacturer
        imageUrl: "https://m.media-amazon.com/images/I/71JJLJnwREL._AC_SL1500_.jpg",
        description: "Slim Size, Big Power: One of the slimmest and lightest 10,000mAh portable chargers on the market. Provides 2 charges for iPhone 15, 1.93 charges for Galaxy S23, and 1.23 charges for iPad mini 6.",
        whyEssential: "What You Get: PowerCore Slim 10000, USB-C to USB-C cable, welcome guide, 18-month warranty, and friendly customer service.",
        productUrl: "https://amzn.to/4qjxpWv" // Amazon affiliate link
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
        title: "Website Flipping",
        difficulty: "Intermediate",
        startupCost: "$0-$100 a Month depending on tactics used",
        timeToFirstDollar: "2-3 months",
        potentialIncome: "$500-$5,000/month within 6-12 months",
        description: "Build high quality websites that produce money from ads and affiliates to then sell to a buyer at a high price for all the work and setup you did.",
        whyItWorks: "Once you sort of create a formula for yourself, you can reproduce it over and over and then sell for a high price to someone that doesn't want to take the time to learn how to make it profitable.",
        firstSteps: [
            "Step 1: Define Your Target Audience",
            "Step 2: Create High Quality Content Websites Around a relevent Topic",
            "Step 3: Monetize by applying for ad networks",
            "Step 4: List your website for sale on sites like flippa.com"
        ],
        resourceUrl: "https://www.businessinsider.com/website-flipping-how-to-make-money-building-buying-website-2022-9"
    },
    
    // ============================================
    // DESTINATION SPOTLIGHT
    // ============================================
    destination: {
        name: "Spain",
        monthlyCost: "$1,700-$3,000",
        internetSpeed: "200-300 Mbps in many big cities!",
        highlights: [
            "Digital Nomad Visa",
            "Residence Permit for up to 3 Years",
            "Free education and medical services available",
            "Mediterrean climate and food"
        ],
        moreInfoUrl: "https://www.immigrationspain.es/en/visa-for-digital-nomads/" // Destination guide link
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

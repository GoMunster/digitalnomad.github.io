# Digital Nomad Daily - Update Guide

## Quick Start: How to Update Daily Content

You now have **two files**:
- `index.html` - Your main website (rarely needs editing)
- `daily-content.js` - **THIS IS THE ONLY FILE YOU EDIT DAILY**

## Daily Update Process (2-3 minutes)

1. Open `daily-content.js` in any text editor
2. Find the section you want to update
3. Change the text/URLs between the quotes
4. Save the file
5. Refresh your browser - done!

## What Each Section Does

### 📌 Today's Focus
```javascript
todaysFocus: "Your motivational quote here"
```
Just edit the text between the quotes.

### 🎥 Video
```javascript
video: {
    youtubeId: "23OxV24mvuU",  // Just the video ID from YouTube URL
    title: "Your video title"
}
```
**How to get YouTube ID:**
- From URL: `youtube.com/watch?v=23OxV24mvuU`
- Copy everything after `v=`
- Paste between the quotes

### 🎧 Podcast
```javascript
podcast: {
    embedUrl: "https://embed.podcasts.apple.com/...",
    title: "Episode title"
}
```
**How to get embed URL:**
1. Go to Apple Podcasts or Spotify
2. Click "Share Episode"
3. Click "Embed"
4. Copy the URL from the embed code
5. Paste between the quotes

### 📚 Book
```javascript
book: {
    title: "Book Title",
    author: "Author Name",
    imageUrl: "https://amazon.image.url",
    description: "Your description here",
    amazonUrl: "Your affiliate link"
}
```
**How to get book cover image:**
1. Go to Amazon book page
2. Right-click on book cover
3. Select "Copy Image Address"
4. Paste as imageUrl

### 💡 Tip
```javascript
tip: "Your tip text here - can be multiple sentences."
```

### 📖 Skill
```javascript
skill: {
    title: "Course/Skill Name",
    description: "Why it's valuable",
    learningPoints: [
        "Point 1",
        "Point 2",
        "Point 3",
        "Point 4"
    ],
    courseUrl: "https://coursera.com/..."
}
```

### 🔌 Gadget
```javascript
gadget: {
    title: "Product Name",
    imageUrl: "https://product.image.url",
    description: "Main description",
    whyEssential: "Why nomads need this",
    productUrl: "Your Amazon affiliate link"
}
```

### 🔧 Toolkit
```javascript
toolkit: {
    toolName: "Tool Name (e.g., NordVPN)",
    whyMatters: "Explanation of why it's essential",
    toolUrl: "Your affiliate link"
}
```

### 💼 Job
```javascript
job: {
    title: "Job Title",
    company: "Company Name",
    salary: "$XX,XXX - $XX,XXX",
    perks: "Perks description",
    requirements: "Requirements description",
    applyUrl: "Application link"
}
```

### 🌴 Destination
```javascript
destination: {
    name: "City, Country",
    monthlyCost: "$X,XXX-$X,XXX",
    internetSpeed: "Speed description",
    highlights: [
        "Highlight 1",
        "Highlight 2",
        "Highlight 3",
        "Highlight 4"
    ],
    moreInfoUrl: "Link to guide"
}
```

## Tips for Smooth Updates

### ✅ DO:
- Keep text between the quotes
- Use real URLs (not #)
- Test links before adding them
- Keep descriptions concise and punchy
- Use the same voice throughout (direct, honest, no BS)

### ❌ DON'T:
- Remove the quotes around text
- Remove commas at the end of lines
- Edit the code below the "DON'T EDIT" line
- Use apostrophes directly (use `\'` instead: `don\'t`)

## Common Issues

**Problem:** Page doesn't update after changing content
**Solution:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**Problem:** Page breaks/looks wrong
**Solution:** Check you didn't accidentally delete a quote, comma, or bracket

**Problem:** Video won't load
**Solution:** Double-check you copied just the video ID, not the full URL

## File Structure

```
your-website/
├── index.html          ← Main website (don't edit daily)
└── daily-content.js    ← Edit this file daily
```

## Future Automation Ideas

Once you're comfortable with manual updates, we can:
1. Create a simple form/dashboard to update content
2. Pull content automatically from APIs
3. Schedule content in advance
4. Add version history/undo functionality

## Need Help?

If something breaks or you want to add a new section, just ask! The structure is designed to be flexible and expandable.

---

**Remember:** The `daily-content.js` file is your friend. Everything is organized clearly with comments. You got this! 🚀

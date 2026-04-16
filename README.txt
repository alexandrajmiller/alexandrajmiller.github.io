============================================================
  KINETIC ZENERGY WEBSITE — HOW TO EDIT & PUBLISH
============================================================

YOUR FILES
----------
index.html     — the website (don't touch this)
content.js     — ALL your text lives here (edit this freely)
alex-hero.jpg                          — hero background photo
Alex_Miller_Qi_Gong_600x700_compressed.jpg
Alex_Miller_Online_Coaching_600x700.jpg
AlexandraMiller2025_600x700_compressed.jpg
Sushi_Sana_600x700_compressed.jpg


HOW TO EDIT YOUR TEXT
---------------------
1. Open content.js in any text editor (TextEdit on Mac, Notepad on PC)
2. Find the line you want to change — they're all labeled clearly
3. Change the text between the quotes
4. Save the file
5. Push to GitHub (see below) — your site updates in ~1 minute


PREVIEW LOCALLY BEFORE PUBLISHING
----------------------------------
Put ALL files in the same folder on your computer.
Double-click index.html — it opens in your browser with photos.


HOW TO PUBLISH TO GITHUB (do this once)
----------------------------------------
1. Go to github.com — sign in or create a free account
2. Click the green "New" button to create a repository
3. Name it EXACTLY: alexandrajmiller.github.io
   (it must match your GitHub username)
4. Leave everything else as default, click "Create repository"
5. Click "uploading an existing file"
6. Drag ALL your files into the upload box
7. Click "Commit changes"
8. Wait 1-2 minutes, then visit: https://alexandrajmiller.github.io

Your site is live!


HOW TO UPDATE YOUR SITE AFTER IT'S LIVE
-----------------------------------------
1. Edit content.js on your computer
2. Go to your repo on github.com
3. Click on content.js in the file list
4. Click the pencil (edit) icon
5. Make your changes directly in the browser
6. Click "Commit changes"
7. Wait 1 minute — site is updated


HOW TO SWAP A PHOTO
--------------------
1. Prepare your new photo (right size + under 250KB)
2. Go to your repo on github.com
3. Click "Add file" → "Upload files"
4. Upload your new photo with the EXACT same filename
   as the old one (it will replace it automatically)
5. Click "Commit changes"


CHECKOUT FLOW (how it works right now — $0 cost)
-------------------------------------------------
When someone clicks a booking button, they go directly to
your Stripe payment link. After they pay, Stripe sends you
an email notification automatically.

To update a price or Stripe link:
→ Open content.js, find the session, update stripe_link or price.

To add Zapier automation (optional, still free tier):
→ Connect Stripe to Zapier
→ Trigger: "New payment in Stripe"
→ Action: Send yourself a Gmail with client details
→ Action: Add a row to a Google Sheet as your client log
This gives you a zero-cost CRM in Google Sheets.


QUESTIONS?
----------
Email: kinetic7energy@gmail.com
============================================================

---
type: markdown
title: Mindvora — 3-releases-a-year roadmap (50 features) and version plan
---

# Mindvora roadmap: 3 updates a year, 50 new features

A note on "no other platform has these": I can't promise that about every idea, because big apps test things quietly all the time. These are ideas that aren't standard features on the major social apps. They fit Mindvora's strengths: calls, creator earnings, airtime and data, and a Nigerian-first audience.

## Update 1 (January): "Connect"
1. **Data-saver calls**: users choose a call quality that uses a set amount of MB per minute, and the app shows the running MB cost live.
2. **Airtime-for-attention**: send someone ₦50 airtime with a DM, so they actually reply.
3. **Voice-note threads**: reply to a single sentence inside someone's voice note.
4. **Missed-call voicemail**: if nobody answers, the caller leaves a 30-second video or voice message.
5. **Group "walkie-talkie" rooms**: hold a button to talk, with no call setup.
6. **Call reactions** that float on the other person's screen.
7. **Share a moment from a call**: capture a 10-second clip (both sides must agree).
8. **"Available to call" status** with time windows, so people call only when you're free.
9. **Offline DMs by SMS fallback** when the other person has no data (paid per SMS).
10. **Trusted-contacts SOS**: one tap shares your live location and opens a call to 3 people.
11. **Chat time capsules**: messages that unlock on a future date.
12. **Read-later for DMs**: snooze a chat until a set time.
13. **Language-bridge chat**: Pidgin, Yoruba, Igbo and Hausa translation inside messages.
14. **Mutual-consent screenshots**: the other person is asked before a chat can be saved.
15. **Smart quiet hours** that hold notifications and deliver them as one summary.
16. **Low-end phone mode**: lighter feed, no autoplay, smaller images.
17. **"Who's awake" list**: which friends are online at night right now.

## Update 2 (May): "Earn"
18. **Split tips**: one tip automatically shared between collaborators on a post.
19. **Tip goals** with a live progress bar on a post or stream.
20. **Pay-per-question**: a creator answers paid questions by voice or video.
21. **Data-bundle giveaways**: a creator funds a data draw for followers during a live stream.
22. **Creator "salary day"**: a scheduled weekly automatic payout.
23. **Micro-courses**: 5 short paid lessons behind a single post.
24. **Paid voice rooms** with a ticket in naira.
25. **Fan leaderboards per creator**, reset monthly.
26. **Gift combos**: send 3 gifts in 10 seconds for a special animation.
27. **Local business stalls on profiles**: product list plus a Paystack checkout.
28. **Referral chains**: see how many people your invites brought in, with capped rewards.
29. **Escrow for creator deals**: a brand's payment is released when the post goes up.
30. **Earnings forecast** based on the last 30 days.
31. **Tip in airtime** instead of cash.
32. **"Sponsor this post"**: a fan pays to boost a creator's post.
33. **Creator co-op pools**: small creators pool promotion money.
34. **Verified-skill badges**, earned by a peer quiz, not by paying.

## Update 3 (September): "Platform", the yearly OS-minimum bump
35. **Watch-together live**: a creator and a guest stream split-screen to one audience.
36. **Live-stream replays chaptered** automatically by viewer activity peaks.
37. **Audience polls that change the stream**, e.g. vote for the next topic.
38. **Multi-host rooms** (needs the LiveKit upgrade described below).
39. **Offline mode** for the last 50 posts, with a size cap you choose.
40. **Neighbourhood feed**: posts within 5 km, opt-in only.
41. **Event check-ins** with QR codes and ticket payments.
42. **Memory lane**: your posts from this day in past years (private).
43. **Profile "chapters"** that group your posts by life period.
44. **Anonymous questions** with anti-abuse limits.
45. **Collaborative albums** for weddings and events.
46. **Streak-free mode**: no pressure counters, for wellbeing.
47. **Slow-reply mode**: tell people you answer DMs once a day.
48. **Private close-friends stories with expiry you set** (1 hour to 7 days).
49. **Account inheritance / legacy contact**.
50. **Transparency panel**: "why am I seeing this post?" in plain language.

---

## How the yearly version cut-off works (already built)

**Version numbers:** each release gets a number such as `3.0.0`, then `3.1.0` in May and `3.2.0` in September. The September release each year becomes `4.0.0`, `5.0.0` and so on, and that's the one that raises the minimum phone software.

**What I built:**
- `app-update.js` in the website knows its own version number. Each time the app opens, it asks the server which versions are still allowed.
- The backend has a new `/api/app/version` endpoint, which reads `config/app-version.json` (or Render settings such as `APP_ANDROID_MIN_SUPPORTED`).
- If someone's app is older than `minSupported`, they see a full-screen **Update required** page with a Play Store / App Store button. If a newer version exists but theirs is still allowed, they see **Update available** with a Later button.
- The mobile project starts at **Android 7.0 (API 24)** and **iOS 15**.

**How to do the September bump:**
1. In the mobile project, raise `minSdkVersion` in `android/variables.gradle` (e.g. 24 → 26) and the iOS "Minimum Deployments" setting in Xcode (e.g. 15 → 16).
2. Raise `versionCode`/`versionName` in `android/app/build.gradle`, and `APP_VERSION` in `app-update.js`.
3. Publish to the stores. Phones below the new minimum can't install it; the store blocks them automatically.
4. After most users have updated, raise `minSupported` in `config/app-version.json` to force the rest.

**Honest advice:** many Nigerian users have older Android phones. If you raise the minimum every year, you cut off people who can't afford new phones. I suggest raising it only when a new feature actually needs it, and keeping support for phones 4–5 years old.

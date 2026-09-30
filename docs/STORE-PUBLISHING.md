# Publishing Mindvora

## Android
- APK = Android only. iPhones cannot install APK files (Apple doesn't allow it).
- Test APK: GitHub Actions "Build Android" (see README) → share the .apk.
- Google Play: one-time $25 Play Console account. Upload a signed AAB:
  Android Studio → Build → Generate Signed Bundle → create an upload key (keep it safe forever).
- New personal Play accounts must run a closed test with at least 12 testers for 14 days before going public.
- Needed: privacy policy URL (privacy.html), app icon 512px, screenshots, content rating form, data-safety form.

## iOS
- Apple Developer Program: $99/year.
- Build needs a Mac with Xcode, or a cloud Mac service (e.g. Codemagic, Ionic Appflow).
- Test on iPhones with TestFlight (up to 10,000 testers), then submit for App Store review.
- Apple rejects apps that are "just a website" (guideline 4.2); native push, calls and camera help show real app value.

## Free option right now (both phones)
Open the site in Chrome (Android) or Safari (iPhone) → menu/Share → "Add to Home Screen". It installs like an app.

# Mindvora mobile app (Android + iOS)

This wraps the Mindvora web app in a real Android/iOS app using Capacitor.
The app loads your live site (`server.url` in capacitor.config.json), so a
normal Vercel deploy updates the app instantly — you only need a new store
release for native changes (permissions, icons, minimum OS version).

## Get an APK without installing anything (easiest)
1. Create a new GitHub repository (e.g. `mindvora-mobile`) and upload everything in this folder.
2. Open the repo → **Actions** → **Build Android** → **Run workflow**.
3. When it turns green (~8 min), open the run → **Artifacts** → download `mindvora-debug-apk`.
4. Send the `.apk` to an Android phone and open it (allow "Install unknown apps").

## Push notifications in the app
Firebase Console → Project settings → Your apps → **Add app → Android**, package name
`app.mindvora.social` → download `google-services.json`.
GitHub repo → Settings → Secrets → Actions → New secret `GOOGLE_SERVICES_JSON` = the whole file text.
(iOS: add an iOS app in Firebase, download `GoogleService-Info.plist`, and upload your APNs key in Firebase → Cloud Messaging.)

## Before you publish
- When your real domain is ready, change `server.url` in capacitor.config.json.
- Google Play: signed **AAB** (`./gradlew bundleRelease` with your upload key) — see docs/STORE-PUBLISHING.md.
- iOS: needs a Mac with Xcode (or a cloud Mac such as Codemagic) + Apple Developer account.

# Wedding Soundtrack Asset Guide: "weddingsong.mp3"

## 1. Integrated Audio Track Status: ACTIVE & VERIFIED
- **Track Title:** Wedding Song
- **File Location:** `public/assets/audio/weddingsong.mp3`
- **File Size:** 720,906 bytes (~721 KB)
- **Format:** MPEG Audio Layer 3 (audio/mpeg)
- **Serving Header:** `HTTP/1.1 200 OK`, `Content-Type: audio/mpeg`

---

## 2. Integration & Playback Behavior
The audio file is integrated with `src/components/SoundtrackControl.tsx`:
1. **Full Asset Preserved & Uncut:** The complete audio track plays from beginning (0:00) to end with no artificial cutting or segment boundaries.
2. **Looping:** Configured with continuous seamless looping (`loop = true`) so the soundtrack plays throughout the user's celebration experience.
3. **Autoplay Handling:** The player gracefully attempts autoplay on the guest's initial visit. If permitted by browser audio policy, playback starts immediately; if restricted, it stays ready in standby mode for 1-tap playback on guest interaction.
4. **Pause & Resume:** Pausing freezes playback at current timestamp; clicking play resumes smoothly.
5. **Visual Feedback:** Animated Kerala Kasavu gold equalizer wavebars during playback, with responsive floating controls on desktop and mobile.

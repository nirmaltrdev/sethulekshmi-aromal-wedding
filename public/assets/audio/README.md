# Wedding Soundtrack Asset Guide: "Sita Kalyanam" (Solo)

## 1. Integrated Audio Track Status: ACTIVE & VERIFIED
- **Track Title:** Sita Kalyanam (Solo) / Seetha Kalyana Vaibhogame
- **Film / Source:** *Solo* (2017) | Dulquer Salmaan, Neha Sharma | Bejoy Nambiar
- **Music Director:** Sooraj S. Kurup
- **Vocals:** Renuka Arun & Sooraj S. Kurup
- **Music Label:** Trend Music
- **File Location:** `public/assets/audio/seetha_kalyana_vaibhogame.mp3`
- **File Size:** 4,744,938 bytes (~4.74 MB)
- **Format:** MPEG Audio Layer 3 (audio/mpeg)
- **Serving Header:** `HTTP/1.1 200 OK`, `Content-Type: audio/mpeg`

---

## 2. Integration & Playback Behavior
The audio file is integrated with `src/components/SoundtrackControl.tsx`:
1. **Full Asset Preserved:** The original MP3 file remains 100% complete and intact without re-encoding or trimming.
2. **Segment Boundaries:**
   - **Start Timestamp:** `00:54` (54.0 seconds)
   - **End Timestamp:** `01:53` (113.0 seconds)
   - **Loop Duration:** 59.0 seconds
3. **Autoplay Handling:** The player gracefully attempts autoplay with sound on the guest's initial visit. If permitted by the visitor's browser/OS media policies, playback begins immediately; if restricted by policy, the player stays in an elegant ready-to-play standby state without throwing unhandled exceptions, enabling instant 1-tap playback upon guest click. Once paused by the guest, autoplay is never re-triggered.
4. **Seamless Looping:** When `currentTime` reaches `113` seconds, it immediately seeks back to `54` seconds and continues playback seamlessly.
5. **Pause & Resume:** Pausing freezes playback at the current second; resuming continues playback from that exact position within the segment.
6. **Visual Feedback:** Animated Kerala Kasavu gold equalizer wavebars during playback, with responsive floating controls on desktop and mobile.

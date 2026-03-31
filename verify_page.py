from pathlib import Path
import sys


html = Path("index.html").read_text(encoding="utf-8")

required_phrases = [
    "Claude Code 泄露事件",
    "事件概览",
    "发生了什么",
    "为什么这件事重要",
    "外界反应与后续影响",
    "赛博夜景片头",
    "发布链路异常",
    "视频信号墙",
]

forbidden_phrases = [
    "Codex 的核心能力",
    "视频展示区",
    "Anime Motion x AI Coding Agent",
]

missing = [phrase for phrase in required_phrases if phrase not in html]
present_forbidden = [phrase for phrase in forbidden_phrases if phrase in html]

required_fragments = [
    'class="hero-grid"',
    'class="scanlines"',
    'class="signal-board"',
    'class="signal-ticker"',
    'class="hero-video-stack"',
    'class="video-wall"',
    "coverr-anime.mp4",
    "coverr-sci-fi-portal.mp4",
    "coverr-cosmic-sky.mp4",
]

forbidden_fragments = [
    "mixkit-shanghai-night.mp4",
    "mixkit-aerial-night.mp4",
    "mixkit-city-road-night.mp4",
    "mixkit-tokyo-night.mp4",
    "mixkit-traffic-time-lapse.mp4",
]

missing_fragments = [fragment for fragment in required_fragments if fragment not in html]
present_forbidden_fragments = [
    fragment for fragment in forbidden_fragments if fragment in html
]

if missing or present_forbidden or missing_fragments or present_forbidden_fragments:
    if missing:
        print("Missing phrases:")
        for phrase in missing:
            print(f"  - {phrase}")
    if missing_fragments:
        print("Missing fragments:")
        for fragment in missing_fragments:
            print(f"  - {fragment}")
    if present_forbidden_fragments:
        print("Forbidden fragments still present:")
        for fragment in present_forbidden_fragments:
            print(f"  - {fragment}")
    if present_forbidden:
        print("Forbidden phrases still present:")
        for phrase in present_forbidden:
            print(f"  - {phrase}")
    sys.exit(1)

print("Page content matches the new incident-analysis structure.")

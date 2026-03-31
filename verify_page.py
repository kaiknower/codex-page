from pathlib import Path
import sys


html = Path("index.html").read_text(encoding="utf-8")

required_phrases = [
    "Claude Code 泄露事件",
    "事件概览",
    "发生了什么",
    "为什么这件事重要",
    "外界反应与后续影响",
]

forbidden_phrases = [
    "Codex 的核心能力",
    "视频展示区",
    "Anime Motion x AI Coding Agent",
]

missing = [phrase for phrase in required_phrases if phrase not in html]
present_forbidden = [phrase for phrase in forbidden_phrases if phrase in html]

if missing or present_forbidden:
    if missing:
        print("Missing phrases:")
        for phrase in missing:
            print(f"  - {phrase}")
    if present_forbidden:
        print("Forbidden phrases still present:")
        for phrase in present_forbidden:
            print(f"  - {phrase}")
    sys.exit(1)

print("Page content matches the new incident-analysis structure.")

const steps = {
  1: {
    title: "先理解任务",
    text: "通过目录、配置和关键文件快速建立上下文，再决定最合适的实现路径。",
  },
  2: {
    title: "再动手修改",
    text: "直接在项目里创建或调整文件，把需求变成具体实现，而不是只停留在建议层面。",
  },
  3: {
    title: "最后验证结果",
    text: "运行检查命令、核对关键输出，并明确说明完成项与仍需注意的限制。",
  },
};

const timelineItems = document.querySelectorAll(".timeline-item");
const stepTitle = document.querySelector("#step-title");
const stepText = document.querySelector("#step-text");
const backToTop = document.querySelector("#back-to-top");
const videos = document.querySelectorAll("video");
const videoStatus = document.querySelector("#video-status");
const previewFallback = document.querySelector(".preview-fallback");

function setVideoReadyState(isReady) {
  if (videoStatus) {
    videoStatus.innerHTML = isReady
      ? '已检测到视频文件，页面会自动播放 <code>media/coverr-anime.mp4</code>。'
      : '将 Coverr 下载的视频放到 <code>media/coverr-anime.mp4</code> 后，这里会自动播放。';
  }

  if (previewFallback) {
    previewFallback.style.display = isReady ? "none" : "grid";
  }
}

let loadedVideoCount = 0;

videos.forEach((video) => {
  video.addEventListener("loadeddata", () => {
    loadedVideoCount += 1;
    if (loadedVideoCount > 0) {
      setVideoReadyState(true);
    }
  });

  video.addEventListener("error", () => {
    if (loadedVideoCount === 0) {
      setVideoReadyState(false);
    }
  });
});

setVideoReadyState(false);

timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    const step = item.dataset.step;
    const content = steps[step];

    timelineItems.forEach((node) => node.classList.remove("active"));
    item.classList.add("active");
    stepTitle.textContent = content.title;
    stepText.textContent = content.text;
  });
});

backToTop?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const backToTop = document.querySelector("#back-to-top");
const videos = document.querySelectorAll("video");
const videoStatus = document.querySelector("#video-status");
const hero = document.querySelector(".hero");
let loadedVideoCount = 0;

function setVideoReadyState(isReady) {
  if (!videoStatus) {
    return;
  }

  document.body.classList.toggle("video-ready", isReady);
  document.body.classList.toggle("video-fallback", !isReady);

  videoStatus.innerHTML = isReady
    ? "已加载多支本地视频素材，首屏和视频信号墙现在会显示不同镜头。"
    : "视频素材未成功加载，页面会继续以静态专题页形式呈现。";
}

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

hero?.addEventListener("pointermove", (event) => {
  const bounds = hero.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;
  hero.style.setProperty("--pointer-x", `${x}%`);
  hero.style.setProperty("--pointer-y", `${y}%`);
});

backToTop?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

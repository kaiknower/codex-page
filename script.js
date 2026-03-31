const backToTop = document.querySelector("#back-to-top");
const heroVideo = document.querySelector(".hero-video");
const videoStatus = document.querySelector("#video-status");

function setVideoReadyState(isReady) {
  if (!videoStatus) {
    return;
  }

  videoStatus.innerHTML = isReady
    ? '已加载背景视频 <code>media/coverr-anime.mp4</code>。'
    : '背景视频未成功加载，页面会继续以静态专题页形式呈现。';
}

heroVideo?.addEventListener("loadeddata", () => {
  setVideoReadyState(true);
});

heroVideo?.addEventListener("error", () => {
  setVideoReadyState(false);
});

setVideoReadyState(false);

backToTop?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

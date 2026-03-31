const backToTop = document.querySelector("#back-to-top");
const heroVideo = document.querySelector(".hero-video");
const videoStatus = document.querySelector("#video-status");
const hero = document.querySelector(".hero");

function setVideoReadyState(isReady) {
  if (!videoStatus) {
    return;
  }

  document.body.classList.toggle("video-ready", isReady);
  document.body.classList.toggle("video-fallback", !isReady);

  videoStatus.innerHTML = isReady
    ? '已加载背景视频 <code>media/coverr-anime.mp4</code>，首屏现在会以赛博片头方式呈现。'
    : '背景视频未成功加载，页面会继续以静态专题页形式呈现。';
}

heroVideo?.addEventListener("loadeddata", () => {
  setVideoReadyState(true);
});

heroVideo?.addEventListener("error", () => {
  setVideoReadyState(false);
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

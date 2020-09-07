const options = {
  rootMargin: "0px 0px 500px 0px",
};

const io = new IntersectionObserver((entries) => {
  entries.forEach((video) => {
    if (video.isIntersecting) {
      video.target.src = video.target.dataset.src;
      video.target.load();
      video.target.removeAttribute("data-src");
      io.unobserve(video.target);
    }
  });
}, options);

const LazyLoading = () => {
  const lazyVideos = document.querySelectorAll("video");
  lazyVideos.forEach((video) => io.observe(video));
};

export default LazyLoading;

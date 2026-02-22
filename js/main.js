const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    const wrapper = sec.closest(".section-wrapper");
    const bg = wrapper.querySelector(".bg-title");
    const label = sec.getAttribute("data-bg");

    const inView = rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0;

    if (inView) {
      bg.textContent = label;

      // ★ 中に入った瞬間 → show が無ければ2秒後に付与
      if (!bg.classList.contains("show")) {
        bg.dataset.pending = "true"; // 連続発火防止
        setTimeout(() => {
          if (bg.dataset.pending === "true") {
            bg.classList.add("show");
          }
        }, 1000);
      }
    } else {
      // ★ 範囲外に出たら → リセット
      bg.classList.remove("show");
      bg.dataset.pending = "false";
    }
  });
});
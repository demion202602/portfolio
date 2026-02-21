console.log("System Online: Fortress JUNK Structure Booted.");
document.addEventListener("scroll", () => {
  const bg = document.getElementById("bgTitle");
  const hero = document.getElementById("hero");
  const rectHero = hero.getBoundingClientRect();

  // HERO が画面に見えているあいだ → 背景タイトル非表示
  if (rectHero.bottom > 0) {
    bg.style.opacity = 0;
    return;
  }

  // ↓ ここからはセクションごとの切り替え処理
  const sections = document.querySelectorAll("section");

  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();

    if (
      rect.top <= window.innerHeight * 0.4 &&
      rect.bottom >= window.innerHeight * 0.4
    ) {
      const newTitle = sec.dataset.bg;

      if (bg.textContent !== newTitle) {
        bg.style.opacity = 0;
        setTimeout(() => {
          bg.textContent = newTitle;
          bg.style.opacity = 1;
        }, 200);
      }
    }
  });
});

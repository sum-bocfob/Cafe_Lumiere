$(function () {
    // ハンバーガーメニュー
    const menu = $(".l-header__menu");
    const gnav = $(".l-header__gnav");
    menu.on("click", function () {
        $(this).toggleClass("is-open");
        gnav.toggleClass("is-open");
    });
    gnav.on("click", function () {
        $(this).removeClass("is-open");
    });
});

// 監視
const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ["blur(5px)", "blur(0)"],
                    translate: ["0 50px", "0"],
                },
                {
                    duration: 1500,
                    easing: "ease",
                    fill: "forwards",
                }
            );
            obs.unobserve(entry.target);
        }
    });
});

const elms = document.querySelectorAll(".c-menu");
elms.forEach((elm) => {
    observer.observe(elm);
});

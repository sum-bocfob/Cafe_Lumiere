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
                    duration: 1000,
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

// *予約確認モーダル ////////////////////////////////////////////////
const openBtn = document.querySelector(".js-open-modal");
const dialog = document.querySelector(".p-dialog");
openBtn.addEventListener("click", function () {
    dialog.showModal();
});

// 予約確定
const confirmBtn = document.querySelector(".p-dialog__confirm");
const dialogGotcha = document.querySelector(".p-dialog-gotcha");
confirmBtn.addEventListener("click", function () {
    dialog.close();
    dialogGotcha.show();
});
// 予約確定モーダルを閉じる
const closeGotchaBtn = document.querySelector(".p-dialog-gotcha__close");
closeGotchaBtn.addEventListener("click", function () {
    dialogGotcha.close();
});

// モーダル内キャンセル
const cancelBtn = document.querySelector(".p-dialog__cancel");
cancelBtn.addEventListener("click", function () {
    dialog.close();
});

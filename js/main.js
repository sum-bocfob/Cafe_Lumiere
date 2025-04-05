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

    // 現在の月を設定
    const date = new Date();
    const monthSelector = document.querySelector("#month");
    monthSelector.value = date.getMonth() + 1;

    // 現在の月から日数追加
    const dayNum = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let options = [];
    for (i = 1; i <= dayNum; i++) {
        options.push(`<option value="${i}">${i}</option>`);
    }
    document.querySelector("#date").innerHTML = options;
    // 現在の日を設定
    const dateSelector = document.querySelector("#date");
    dateSelector.value = date.getDate();
    // 曜日取得
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    document.querySelector(".p-form__day-of-week").textContent = days[date.getDay()];

    // 月が変更されたら日数更新
    monthSelector.addEventListener("change", function () {
        // 現在の月から日数追加
        const dayNum = new Date(date.getFullYear(), monthSelector.value, 0).getDate();
        let options = [];
        for (i = 1; i <= dayNum; i++) {
            options.push(`<option value="${i}">${i}</option>`);
        }
        document.querySelector("#date").innerHTML = options;
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
    inputToDialog();
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

// 入力項目をダイアログのテキストに入れる
function inputToDialog() {
    document.querySelector(".p-dialog__inputed--name").textContent = document.querySelector("#name").value;
    document.querySelector(".p-dialog__inputed--tel").textContent = document.querySelector("#tel").value;
    document.querySelector(".p-dialog__inputed--mail").textContent = document.querySelector("#mail").value;
    document.querySelector(".p-dialog__inputed--num").textContent = document.querySelector("#num").value + "名様";
    document.querySelector(".p-dialog__inputed--date").textContent = `${document.querySelector("#month").value}月${document.querySelector("#date").value}日 () ${document.querySelector("#hour").value}時${document.querySelector("#minutes").value}分`;
    document.querySelector(".p-dialog__inputed--seat").textContent = document.querySelector("#seat").value;
    document.querySelector(".p-dialog__inputed--option").textContent = document.querySelector("#option").value;
}

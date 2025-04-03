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

//<ルール>
// (() => {
// 即時関数で囲って命令をかく
// })();
// jsに引っかかるものはなるべくidで指定してあげて 頭にjs- をつける (例 js-tab
//$を頭に要素を作ると、ducment要素だよとわかり易くしている

(() => {
  // ★dom要素を一通りとる
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]"); //指定されたアイテムすべて
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is-active"; //定数には大文字
  const navLen = $nav.length;

  // 取得したdom要素を操作

  //★初期化
  const init = () => {
    //initはinitializeの略で初期化
    $content[0].style.display = "block"; //display noneで隠れたアイテムをひとつピックアップ
  };
  init();
  //★クリックしたら起こるイベント
  const handleClick = (e) => {
    //(e)はイベントを起こしたいときの無名関数

    //★1 aタグの持つリンク要素の無効化
    e.preventDefault();

    //★2 クリックされたnavとそのデータを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav; //dataset：その後のデータ属性の値を取得

    //★3 対象外のnavをリセット
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = "none";
      $nav[index].classList.remove("is-active");
      index++;
    }

    //★4 対象のコンテンツをアクティブ化する
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add("is-active");
  };
  // ★全nav要素に対して関数を適応
  let index = 0;
  while (index < navLen) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();

'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      // activeクラスを付ける前に全てのitemからactiveクラスを外す
      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      // チェックしたitemにactiveクラスを付ける
      clickedItem.classList.add('active');

      // 全てのcontentからactivekクラスを外す
      contents.forEach(content => {
        content.classList.remove('active');
      });

      // document.getElementById(clickedItem.dataset.id)で
      // クリックされたliのidを取得する
      // 取得した要素にactiveクラスを付ける
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

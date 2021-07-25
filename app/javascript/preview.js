window.addEventListener('DOMContentLoaded', function(){
  const ImageList = document.getElementById('image-list');
  document.getElementById('message_image').addEventListener('change', function(e){
    const file = e.target.files[0];

    // URLオブジェクト内の画像から画像URLを生成する
    const blob = window.URL.createObjectURL(file);

    //画像を表示するための div要素を生成
    const imageElement = document.createElement('div');

    //表示する画像imgを生成
    const blobImage = document.createElement('img');
  });
});
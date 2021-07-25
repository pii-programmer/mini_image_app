window.addEventListener('DOMContentLoaded', function(){
  if (document.getElementById('message_image')){
    const ImageList = document.getElementById('image-list');
    document.getElementById('message_image').addEventListener('change', function(e){
      //画像が表示されている場合のみ、すでに存在している画像を削除する。
      const imageContent = document.querySelector('img');
      if (imageContent){
        imageContent.remove();
      }
      const file = e.target.files[0];

      // URLオブジェクト内の画像から画像URLを生成する
      const blob = window.URL.createObjectURL(file);

      //画像を表示するための div要素を生成
      const imageElement = document.createElement('div');

      //表示する画像imgを生成
      const blobImage = document.createElement('img');

      // imageElement(=div要素)に子要素を追加する
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  if ( document.getElementById('message_image')){
    const ImageList = document.getElementById('image-list')

    // 選択した画像を表示する関数
    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div')
      imageElement.setAttribute('class', "image-element")
      let imageElementNum = document.querySelectorAll('.image-element').length

      // 表示する画像を生成
      const blobImage = document.createElement('img')
      blobImage.setAttribute('src', blob)

      //ファイル選択ボタンを生成
      const inputHTML = document.createElement('input')

      //作った input要素に属性をつける
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`)
      inputHTML.setAttribute('name', 'message[images][]')
      inputHTML.setAttribute('type', 'file')
      // ↑ で完成するHTML要素はこちら <input id="message_image_[番号]" name="message[images][]" type="file">

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage)
      ImageList.appendChild(imageElement)
    }

    document.getElementById('message_image').addEventListener('change', (e) => {
    // ここから削除
    // const imageContent = document.querySelector('img')
    // if (imageContent){
    // imageContent.remove();
    // }
    // ここまで削除

      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob)
    });
  }
});
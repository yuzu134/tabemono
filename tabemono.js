// 画像切り替え時にプレビュー表示
$('#Form-photo').on('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#Form-img").attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
});

// 削除ボタンクリック時にフォームとプレビューを初期化
$('#delete').on('click', function (e) {
  $("#Form-img").attr('src', 'Vector.svg');
  $("#Form-photo").val('');
});
$(function(){
  $('.mur')
  .on('mouseover', function(){
    $(this).stop(true).animate({
      'background-color' : '#2EFE9A'
    },
    300
    );
  })
  .on('mouseout', function(){
    $(this).stop(true).animate({
      'background-color' : '#FFFFFF'
    },
    300
    );
  });

  // 編集フォーム

  $("#edit").click(function() {
    $(".edit-form").fadeIn(200);
  });
  $("#edit-btn-close").click(function() {
    $(".edit-form").fadeOut(200);
  });

  // つぶやき削除確認
  $("#delete").click(function() {
    $(".delete-form").fadeIn(200);
  });
  $("#delete-no").click(function() {
    $(".delete-form").fadeOut(200);
  });


  // つぶやくボタンとフォームと閉じる
  $("#btn-open").click(function() {
    $(".mur-form").fadeIn(200);
  });
  $("#btn-close").click(function() {
    $(".mur-form").fadeOut(200);
  });

  // フォロー確認
  $("#follow").click(function() {
    $(".follow-check").fadeIn(200);
  });
  $("#follow-close").click(function() {
    $(".follow-check").fadeOut(200);
  });


  // パスワード確認用
  var pw = document.getElementById('password');
  var pwCheck = document.getElementById('password-check');
  pwCheck.addEventListener('change', function() {
    if(pwCheck.checked) {
      pw.setAttribute('type', 'text');
    } else {
      pw.setAttribute('type', 'password');
    }
  }, false);
});


<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Администратор сообщений</title>
    <link href="css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap&subset=cyrillic-ext" rel="stylesheet">
  </head>
  <body>
    <div class="form_block">
    <h2 class="form_title">ПРОСМОТРЕТЬ ДАННЫЕ</h2>
    <form class="form_fields" method="POST" action="feedbacks.php" enctype="encodingType">

        <label class="required_field_name" for="email">Email пользователя</label>
        <input required 
                class=<?php echo (($args['email_error_msg']) != null)?"text_field_error": "text_field";?>
                type="text" name="email" id="email" value="<?php echo $args['email'] ?? ''; ?>"> 
        <?php if (($args['email_error_msg']) == 'error'): ?>
        <p class="error_msg"><?php echo "Email введен неверно"; ?></p>
        <?php endif; ?> 
        <?php if (($args['email_error_msg']) == 'empty'): ?>
        <p class="error_msg"><?php echo "Файл не найден"; ?></p>
        <?php endif; ?> 
        <div <?echo isset($args['name']) ? 'class="profile"' : ''; ?>>
        <h3><? echo isset($args['name']) ? ('Данные пользователя ' . (($args['name'] != '') ? $args['name'] : 'Anonymous')) : '';?></h3>
          <?php foreach ($args as $key => $value): ?>
            <p><? echo (($key != 'email_error_msg') && ($key != 'name')) ? translateFieldName($key) . ': ' . $value : ''; ?></p>
          <? endforeach;?>
        </div>
        <input type="submit" class="button_send" value="Получить данные">     
        <a href="index.php" class="ref_feedback">Вернуться на главную страницу</a> 
    </form>	
    </div>
    <footer class="footer_decoration">
      &#169; 2006-2018 Поволжский государственный технологический университет, ФГБОУ ВО «ПГТУ»
    </footer>
  </body>      
</html>

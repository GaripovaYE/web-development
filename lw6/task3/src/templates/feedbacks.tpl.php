<div class="form_block">
  <h2 class="form_title">НАПИШИ МНЕ</h2>
  <form class="form_fields" method="POST" action="feedbacks.php" enctype="encodingType">

    <label class="required_field_name" for="email">Ваш email</label>
    <input required 
            class=<?php echo (($args['email_error_msg']) != NULL)?"text_field_error": "text_field";?>
            type="text" name="email" id="email" value="<?php echo $args['email'] ?? ''; ?>"> 
    <?php if (($args['email_error_msg']) == 'error'): ?>
    <p class="error_msg"><?php echo "Email введен неверно"; ?></p>
    <?php endif; ?> 
    <?php

// foreach ($args)
// Print $args

// renderTemplate('main.tpl.php');?>

    <div class="submit_result">
      <input type="submit" class="button_send" value="Отправить">
      <?php if (isset($args['result'])): ?>
      <p class=<? echo (($args['result'] == 'ok') ? "result_msg_ok" : "result_msg_err");?>><?php echo ('Данные ' . (($args['result'] == 'ok') ? 'отправлены' : 'введены некорректно')); ?></p>
      <?php endif; ?> 
    </div>          
    <a href="index.php" class="ref_feedback">Вернуться на главную страницу</a> 
  </form>	
</div>

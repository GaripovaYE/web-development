<div class="form_block">
  <h2 class="form_title">НАПИШИ МНЕ</h2>
  <form class="form_fields" method="POST" action="index.php" enctype="encodingType">

    <label class="required_field_name" for="name">Ваше имя</label>
    <input required 
            class=<?php echo (($args['name_error_msg']) != NULL)?"text_field_error": "text_field";?> 
            type="text" 
            name="name" 
            id="name" 
            value="<?php echo $args['name'] ?? ''; ?>">
    <?php if (($args['name_error_msg']) == 'error'): ?>
    <p class="error_msg"><?php echo "Имя введено неверно"; ?></p>
    <?php endif; ?> 

    <label class="required_field_name" for="email">Ваш email</label>
    <input required 
            class=<?php echo (($args['email_error_msg']) != NULL)?"text_field_error": "text_field";?>
            type="text" name="email" id="email" value="<?php echo $args['email'] ?? ''; ?>"> 
    <?php if (($args['email_error_msg']) == 'error'): ?>
    <p class="error_msg"><?php echo "Email введен неверно"; ?></p>
    <?php endif; ?> 

    <label class="field_name" for="country">Откуда Вы?</label>
    <select class="select_country" name="country" id="country">
      <option value="Белоруссия" 
        <?php echo (($args['country'] == 'Белоруссия')) ? 'selected' : '';?>>Белоруссия</option>
      <option value="Грузия" 
        <?php echo (($args['country'] == 'Грузия')) ? 'selected' : '';?>>Грузия</option>
      <option value="Монголия" 
        <?php echo (($args['country'] == 'Монголия')) ? 'selected' : '';?>>Монголия</option>		  
      <option value="Россия" 
        <?php echo ($args['country'] != NULL) || (($args['country'] == 'Россия')) ? 'selected' : '';?>>Россия</option>
      <option value="Украина" 
        <?php (($args['country'] == 'Украина')) ? 'selected' : '';?>>Украина</option>
    </select>
    <div>  
      <div class="radio_name">Ваш пол</div>
      <input class="radio_checker" type="radio" name="gender" id="male" value="male"
        <?php echo (($args['gender'] == 'male')) ? 'checked' : '';?>>
      <label class="radio_description" for="male">Мужской</label>
      <input class="radio_checker" type="radio" name="gender" id="female" value="female"  
        <?php echo (($args['gender'] == 'female')) ? 'checked' : '';?>>
      <label class="radio_description" for="female">Женский</label>
    </div>
    <label class="message_field_name" for="message">Ваше сообщение</label>
    <textarea required name="message" id="message"><?php echo $args['message'] ?? ''; ?></textarea>
    <div class="submit_result">
      <input type="submit" class="button_send" value="Отправить">
      <?php if (isset($args['result'])): ?>
      <p class=<? echo (($args['result'] == 'ok') ? "result_msg_ok" : "result_msg_err");?>><?php echo ('Данные ' . (($args['result'] == 'ok') ? 'отправлены' : 'введены некорректно')); ?></p>
      <?php endif; ?> 
    </div>          
    <a href="" class="ref_feedback">Получить данные пользователя</a> 
  </form>	
</div>
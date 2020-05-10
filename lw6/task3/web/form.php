<form class="form_fields" method="GET" action="../src/save_survey.php" enctype="encodingType">
  <label class="required_field_name" for="name">Ваше имя</label>
  <input required class="text_field" type="text" name="name" id="name">          
  <label class="required_field_name" for="email">Ваш email</label>
  <input required class="text_field" type="text" name="email" id="email">
  <label class="field_name" for="country">Откуда Вы?</label>
  <select class="select_country" name="country" id="country">
    <option>Белоруссия</option>
    <option>Грузия</option>
    <option>Монголия</option>		  
    <option selected>Россия</option>
    <option>Украина</option>
  </select>
  <div>  
    <label class="radio_name" for="gender">Ваш пол</br></label>
    <input class="radio_checker" type="radio" name="gender" id="gender" value="male" checked>
    <span class="radio_description">Мужской</span>
    <input class="radio_checker" type="radio" name="gender" id="gender" value="female">
    <span class="radio_description">Женский</span>
  </div>
  <div class="message_field_name">Ваше сообщение</div>
  <textarea required name="message"></textarea>
  <input type="submit" class="button_send" value="Отправить">
</form>	
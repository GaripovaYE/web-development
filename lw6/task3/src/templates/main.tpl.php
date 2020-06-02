<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Jane Doe. Personal web-site</title>
    <link href="css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap&subset=cyrillic-ext" rel="stylesheet">
  </head>
  <body>    
    <div class="background_image"></div>
    <div class="main_block">
      <div class="menu">
        <a class="menu_button_about" href="#about_ref">Обо мне</a>
        <a class="menu_button_hobby" href="#hobby_ref">Мое хобби</a>
        <a class="menu_button_films" href="#films_ref">Любимые фильмы</a>
      </div>
      <div class="block_top">
        <img class="photo" src="image/photoJane.jpg" alt="Фотография Jane Doe">
        <div class="block_quote">
          <blockquote class="quote"> 
            Мы берем на себя много, потому что мало чего боимся 
          </blockquote>
          <cite class="signature">— Том Демарко. Deadline</cite>
        </div>
        <div class="text_block">
          <h1 class="name">Jane Doe</h1>
          <img src="image/dash.png" class="dash" alt="-">
          <p class="paragraph">
            В 1930-е годы прошлого века физик Джордж Гамоу из университета штата Колорадо начал публиковать<br> 
            мини&#8209;сериал рассказов о неком мистере Томпкинсе, банковском клерке средних лет. Мистер Томпкинс, как явствовало из этих историй, интересовался современной наукой. 
          </p>
          <h2 class="hobby"><a id="hobby_ref"></a>Мое хобби</h2>
          <p class="text_hobby">
            Он регулярно посещал вечерние лекции местного профессора и, разумеется, 
            всегда засыпал на самом интересном месте.</br>
            А когда просыпался, то обнаруживал себя в каком-нибудь параллельном мире, 
            где один из основных законов физики действовал не так, как в его мире.  
          </p>        
          <a href="https://www.vk.com" class="ref">Напиши мне</a>  
        </div>
        <div class="favorits">
          <a id="about_ref"></a>
          <div class="user_list_writers">Любимые писатели:</div>
          <ul class="user_list_marker">
            <li><span  class="point">Айзек Азимов</span></li>
            <li><span  class="point">Говард Лавкрафт</span></li>
            <li><span  class="point">Дмитрий Глуховский</span></li>
            <li><span  class="point">Чак Паланик</span></li>
          </ul>
          <div class="user_list_films">Любимые фильмы:</div>
          <ol class="user_list">
            <li><span >Шоу Трумэна</span></li>
            <li><span >Малхолланд Драйв</span></li>
            <li><span >Семь жизней</span></li>
            <li><span >Гравитация</span></li>
          </ol>            
        </div>  
      </div>  
    </div>
    <div class="background_films">
      <div class="block_about_films">
        <a id="films_ref"></a>
        <h2 class="films_title_block">Любимые фильмы</h3>
        <div class="films">
          <div class="film_block">
            <img class="main_screen" src="image/films/the_shawshank_redemption.jpg" alt="Постер">
            <h3>Побег из Шоушенка</h3>
            <p class="film_description">
              Успешный банкир Энди Дюфрейн обвинен в убийстве собственной жены и ее любовника. 
              Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, 
              царящими по обе стороны решетки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. 
              Но Энди, вооруженный живым умом и доброй душой, отказывается мириться с 
              приговором судьбы и начинает разрабатывать невероятно дерзкий план своего освобождения.
            </p>
          </div>
          <div class="film_block">
            <img class="main_screen" src="image/films/awake.jpg" alt="Постер">
            <h3>Наркоз</h3>
            <p class="film_description">
              Клай Бересфорд вынужден лечь под нож. Однако в процессе операции на сердце он 
              неожиданно приходит в себя. Находясь в парализованном состоянии, будучи не в силах 
              пошевелить ни рукой, ни ногой, он, тем не менее, чувствует каждое касание скальпеля к своей плоти…
            </p>
          </div>
          <div class="film_block">
            <img class="main_screen" src="image/films/insidious.jpg" alt="Постер">
            <h3>Астрал</h3>
            <p class="film_description">
              Джош и Рене переезжают со своими детьми в новый дом, но не успевают толком 
              распаковать вещи, как начинаются странные события. Необъяснимо перемещаются 
              предметы, в детской звучат странные звуки… Но в настоящий ужас приходят родители, 
              когда их десятилетний сын Далтон впадает в кому.
              Все усилия врачей в больнице помочь мальчику безуспешны.
            </p>
          </div>
          <div class="film_block">
            <img class="main_screen" src="image/films/gravity.jpg" alt="Постер">
            <h3>Гравитация</h3>
            <p class="film_description">
              Доктор Райан Стоун, блестящий специалист в области медицинского инжиниринга, 
              отправляется в свою первую космическую миссию под командованием ветерана 
              астронавтики Мэтта Ковальски, для которого этот полет — последний перед отставкой. 
              Но во время, казалось бы, рутинной работы за бортом случается катастрофа.<br> 
              Шаттл уничтожен, а Стоун и Ковальски остаются совершенно одни; они находятся в связке друг с другом, и все, что они могут, — это двигаться по орбите в абсолютно черном пространстве без всякой связи с Землей и какой-либо надежды на спасение.
            </p>
          </div>
        </div>
        <a class="button_all_films" href="">Все фильмы</a>
      </div>
    </div>
    <div class="form_block">
      <h2 class="form_title">НАПИШИ МНЕ</h2>
        <form class="form_fields" method="POST" action="feedbacks.php" enctype="encodingType">

          <?php if (isset($args['msg'])): ?>
          <p><?php echo $args['msg']; ?></p>
          <?php endif; ?> 

          <label class="required_field_name" for="name">Ваше имя</label>
          <input required 
                 class=<?php echo (($args['name_error_msg']) != NULL)?"text_field_error": "text_field";?> 
                 type="text" 
                 name="name" 
                 id="name" 
                 value="<?php echo $args['name'] ?? ''; ?>">
          <?php if (($args['email_error_msg']) != NULL): ?>
          <p class="error_msg"><?php echo $args['name_error_msg']; ?></p>
          <?php endif; ?> 

          <label class="required_field_name" for="email">Ваш email</label>
          <input required 
                 class=<?php echo (($args['email_error_msg']) != NULL)?"text_field_error": "text_field";?>
                 type="text" name="email" id="email" value="<?php echo $args['email'] ?? ''; ?>"> 
          <?php if (($args['email_error_msg']) != NULL): ?>
          <p class="error_msg"><?php echo $args['email_error_msg']; ?></p>
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
          <input type="submit" class="button_send" value="Отправить">
        </form>	
      </div>
    <footer class="footer_decoration">
      &#169; 2006-2018 Поволжский государственный технологический университет, ФГБОУ ВО «ПГТУ»
    </footer>
  </body>      
</html>    
<!-- 
Тут должен быть html код главной страницы с php вставками, чтобы отобразить ошибки, например
…
<?php if (isset($args[‘email_error_msg’])): ?>
    <p><?php echo $args[‘email_error_msg’]; ?></p>
<?php endif; ?> 
…
Также можно использовать php вставки для отображения предыдущих значений формы
…
<input type=”email” name=”email” value=”<?php echo $args[‘email’] ?? ‘’; ?>)” />
…
-->

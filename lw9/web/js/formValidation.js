    function showNotValidFields(respond){
        if (respond['email_error_msg'] == 'error'){
            document.getElementById('email').classList.remove('text_field');
            document.getElementById('email').classList.add('text_field_error');
        }
        
        if (respond['name_error_msg'] == 'error'){
            document.getElementById('name').classList.remove('text_field');
            document.getElementById('name').classList.add('text_field_error');
        }

        const resultBlock = document.createElement("div");
        if ((respond == null) || (respond['result'] == 'error')){
            resultBlock.classList.add('result_msg_err');                   
            resultBlock.innerHTML = 'Сообщение не отправлено';    
        } else {
            resultBlock.classList.add('result_msg_ok');            
            resultBlock.innerHTML = 'Сообщение отправлено';   
        }             
        document.getElementById('result').appendChild(resultBlock);
    }

    function getFieldsArray(){
        const dataForm = document.forms["formFields"];
        formArray = [];
        for(let i = 0; i < dataForm.elements.length; i++){
            key = dataForm.elements[i].name;
            if (key != '')
            {
                formArray[key] = dataForm.elements[i].value;
            }
        }
        return formArray
    }

    async function sendData() {
        const formInfo = getFieldsArray();
        
        console.log('into sendData => push json');        
        console.log(formInfo) ;
        console.log(JSON.stringify(formInfo)) ;
        
        const response = await fetch(`form_validation.php`, {
          method: 'POST',
        //   body: formInfo
          body: JSON.stringify(formInfo)
        })
        if (response.ok) {
            const json = await response.json(); // <--------------------
            console.log(json);
            return json
        }
        return null;
      }    

    async function postForm(event) {
        
        event.preventDefault();
        console.log('into postForm => push sendData');  
        const response = await sendData();
        
        showNotValidFields(response);
        }

    function run(){
        const form = document.querySelector('form');
        form.addEventListener('submit', postForm);
    }

    window.onload = run
  
  
  // json.parse(personData) - преобразует json в объект в js
  // json_decode - преобразует json в объект php
  
  // json.strigify(percon) - преобразует объект в json в js
  // json_encode - преобразует объект в json в php
  
  
  // Перебор элементов массива
  // for (var i=0; i<=person.children.length-1; i++) {
   // if (person.children[i].hasOwnProperty(key)) {
      //i = индекс
      //значение = person.children[i]
      // console.log("Элемент [ "+ i +" ] = " + person.children[i]);
   // }
  
  // 1) Сформировать json по данным из формы 
  // 2) Отправить json для валидации в php файл => вызывается fetch
  // 3) Декодировать json в php
  // 4) Проверить, сформировать json
  // 5) вывести данные
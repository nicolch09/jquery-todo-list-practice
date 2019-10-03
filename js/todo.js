$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented

	//for editing 
	$(document).on('dblclick', 'li', function () {
            $(this).children('span').attr('contentEditable', 'true').focus().keypress(function (event){
                    var keycode = (event.keyCode ? event.keyCode : event.which);
                    if (keycode == '13') {
                        event.target.blur();   
		    }
            });
      	});

        $(document).on('click', 'input[name=done-todo]', function (event) {
             $(this)
             .parent()
             .toggleClass('checked');
             }
        );
	
        function addTask(){
            var generatedUUID = generateUUID();
            var task = $('input[name=ListItem]').val();
            $('input[name=ListItem]').val("");
             $('ol').append('<li id=' + generatedUUID + ' class="">' +
                '<input name="done-todo" type="checkbox" class="done-todo"><span>' +
                task + '</span></li>');
            console.log(tasksList);
        }
        $('#button').click(addTask);

        $('#filters li a').on('click',function(e){
        $('#filters').find('a').removeClass('selected');
                    $(this).addClass('selected');
            var classStatus = $(this).text().toLowerCase();
            var completedList = $('ol').find('li');

             switch(classStatus){
                case "all":
                   completedList.show();
                   break;

                case "active":
                    completedList.hide();
                    completedList.not('.'+('checked')).show();
                    break;

                case "complete":
                    completedList.show();
                    completedList.not('.'+('checked')).hide();
                    break;
            }
        })
    });
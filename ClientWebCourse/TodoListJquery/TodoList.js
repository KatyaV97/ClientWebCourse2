$(document).ready(function () {
    var newTodoTextField = $("new_todo_text");
    var list = $("list");
    var error = $("error");

    $("#add_button").click(function () {
        var text = $("#new_todo_text").val();

        console.log(text);

        if (text === "") {
            $("#error").text("Введите текст!");
            return;
        }

        $("#error").text("");


        var el = $("<li class = 'nodeList'><span class='text'></span> <button class='edit_button' type='button'>Редактировать</button> <button class='delete_button' type='button'>Удалить</button></li>");

        $(".delete_button").click(function () {
            $(this).parent().remove();
        });

        $(".edit_button").click(function () {
            $(this).parent().html("<li class = 'nodeList'><input class='edit_text' /><button class='save_button' type='button'>Сохранить</button><button class='cancel_button' type='button'>Отмена</button></li>");

            $(".save_button").click(function () {
                text = $(".edit_text").val();
                $(this).parent().html("<li class = 'nodeList'><span class='text'></span> <button class='edit_button' type='button'>Редактировать</button> <button class='delete_button' type='button'>Удалить</button></li>");
                $(".text").closest().text(text);
            });

            $(".cancel_button").click(function () {
                $(this).parent().html("<li class = 'nodeList'><span class='text'></span> <button class='edit_button' type='button'>Редактировать</button> <button class='delete_button' type='button'>Удалить</button></li>");
                $(".text").closest().text(text);
            });
        });

        $("#list").append(el);
        $(".text:last").text(text);
    });
});
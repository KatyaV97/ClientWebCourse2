document.addEventListener("DOMContentLoaded", function () {
    var newTodoTextField = document.getElementById("new_todo_text");
    var list = document.getElementById("list");
    var error = document.getElementById("error");

    document.getElementById("add_button").addEventListener("click", function () {
        var text = newTodoTextField.value;

        if (text === "") {
            error.textContent = "Введите текст!";
            return;
        }

        error.textContent = "";

        function setViewMode() {
            listItem.innerHTML = "<span class='text'></span><button class='edit_button' type='button'>Редактировать</button><button class='delete_button' type='button'>Удалить</button>";
            listItem.querySelector(".text").textContent = text;

            listItem.querySelector(".delete_button").addEventListener("click", function () {
                listItem.parentNode.removeChild(listItem);
            })

            listItem.querySelector(".edit_button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit_text' /><button class='save_button' type='button'>Сохранить</button><button class='cancel_button' type='button'>Отмена</button>";

                listItem.querySelector(".edit_text").value = text;

                listItem.querySelector(".save_button").addEventListener("click", function () {
                    text = listItem.querySelector(".edit_text").value;
                    setViewMode();
                })

                listItem.querySelector(".cancel_button").addEventListener("click", function () {
                    setViewMode();
                })

            })
        }

        var listItem = document.createElement("li");

        setViewMode();

        list.appendChild(listItem);

        newTodoTextField.value = "";
    })
})
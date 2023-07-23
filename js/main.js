// LS проверка данных
let data = localStorage.getItem('userList')
let userArr = []

if (data !== '' && data !== null) {
    userArr = JSON.parse(data)
}

// функция создания пользователя
function createNewUser(obj) {
    // создание строки таблицы
    let itemUser = document.createElement('li')
    itemUser.classList.add('user__item')

    // создание колонок в строке
    let subList = document.createElement('ul')
    subList.classList.add('user__sublist')

    // полt c именем
    let itemName = document.createElement('li')
    itemName.classList.add('user__subitem')
    itemName.textContent = obj.name

    // поле с фамилией
    let itemSurName = document.createElement('li')
    itemSurName.classList.add('user__subitem')
    itemSurName.textContent = obj.surName

    // поле с емайл
    let itemEmail = document.createElement('li')
    itemEmail.classList.add('user__subitem')
    itemEmail.textContent = obj.email

    // после с кнопкой
    let itemBtn = document.createElement('li')
    itemBtn.classList.add('user__subitem', 'user__subitem-action')

    // создание кнопки
    let removeBtn = document.createElement('button')
    removeBtn.classList.add('user__remove-btn')
    removeBtn.textContent = 'Удалить'

    // удаление польз
    removeBtn.onclick = function () {
        if (confirm('Вы уверены?')) {
            itemUser.remove()
            userArr.splice(obj, 1)

            localStorage.setItem('userList', JSON.stringify(userArr))
        }
    }

    itemUser.append(subList)
    subList.append(itemName, itemSurName, itemEmail, itemBtn)
    itemBtn.append(removeBtn)
    document.getElementById('userList').append(itemUser)
}

for (let user of userArr) {
    createNewUser(user)
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()

    let userName = document.getElementById('nameInp').value
    let userSurName = document.getElementById('surNameInp').value
    let userEmail = document.getElementById('EmailInp').value

    let itemObj = {
        name: userName,
        surName: userSurName,
        email: userEmail
    }

    userArr.push(itemObj)

    localStorage.setItem('userList', JSON.stringify(userArr))

    createNewUser(itemObj)

    document.getElementById('nameInp').value = ''
    document.getElementById('surNameInp').value = ''
    document.getElementById('EmailInp').value = ''
})


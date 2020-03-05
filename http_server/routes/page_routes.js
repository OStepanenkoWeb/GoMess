const {Router} = require('express')

const router = Router()

router.get('/', async (request, response) => {
    try{
        const chats = ['chat#1', 'chat#2', 'chat#3'] //temporary hardcode

        response.json(chats)
    }catch (e) {
        console.log(`Ошибка получения списка чатов ${e}`)

        response
            .status(500)
            .json({message: 'Не удалось получить список чатов'})

    }
})

module.exports = router
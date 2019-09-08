// проверка на пустое поле.
export const required = value => {
   if(value) return undefined
   return "Field is required"
}

// Замыкание. maxLengthCreator - это функция, которая принимает параметр и возаращает другую функцию. И эта возвращаемая функция получает доступ к параметрам, которые находятся в родительской функции.
// Т.е. чтобы вызвать валидатор, мы должны вызвать maxLengthCreator передав в нее нужную длинну, и нам вернет уникальный валидатор с переданным нами значением.

// проверка на количество введенных символов
export const maxLengthCreator = (maxLength) => (value) => {
   if(value.length > maxLength) return `Max length is ${maxLength} symbols`
   return undefined
}

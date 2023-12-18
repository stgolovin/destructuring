import { character, mark } from "../app";

test('testing mark func', () => {
    const { special } = character;
    const result = mark(special);
    const expectedResult = [
        {
          id: 8,
          name: 'Двойной выстрел',
          description: 'Двойной выстрел наносит двойной урон',
          icon: 'http://...'
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          description: 'Описание недоступно',
          icon: 'http://...'
        }
      ]; 
    expect(result).toStrictEqual(expectedResult);
})

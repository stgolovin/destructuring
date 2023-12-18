export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]	
  }

export function mark(special) {
    const objArray = new Array()
    for (const chunk of special) {
        const { id, name, description='Описание недоступно', icon  } = chunk
        objArray.push({
        'id': id,
        'name': name,
        'description': description,
        'icon': icon
    })
    }
    return objArray
}

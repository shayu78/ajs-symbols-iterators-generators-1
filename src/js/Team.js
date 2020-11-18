import Character from './Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (character && character instanceof Character) {
      if (this.members.has(character)) throw new Error('Персонаж уже добавлен ранее');
      this.members.add(character);
    } else throw new Error('Невозможно добавить объект данного типа или объект отсутствует');
  }

  addAll(...characters) {
    characters.forEach((value) => {
      if (value instanceof Character) this.members.add(value);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let currIndex = 0;
    const characters = this.toArray();
    const count = characters.length;

    return {
      next() {
        if (currIndex < count) {
          return {
            done: false,
            // eslint-disable-next-line no-plusplus
            value: characters[currIndex++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

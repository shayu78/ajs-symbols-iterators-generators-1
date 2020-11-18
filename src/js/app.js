/* eslint-disable no-console */

import Swordsman from './Swordsman';
import Magician from './Magician';
import Team from './Team';

try {
  const team = new Team();
  console.log('first for circle');
  for (const character of team) {
    console.log(character);
  }
  const swordsman = new Swordsman('swordsman');
  team.add(swordsman);
  console.log('second for circle');
  for (const character of team) {
    console.log(character);
  }
  const swordsman2 = new Swordsman('swordsman2');
  const swordsman3 = new Swordsman('swordsman3');
  const magician = new Magician('magician');
  team.addAll(swordsman2, true, magician, swordsman3, swordsman);
  console.log('third for circle');
  for (const character of team) {
    console.log(character);
  }
} catch (error) {
  console.error(error.message);
}

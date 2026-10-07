import { useState } from 'react'
import './App.css'

export function Card({ name, mobType, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{mobType}</p>
      <p>{bio}</p>
    </div>
  );
}

function App() {
  const profiles = [
    {
      id: 1,
      name: "Zombie",
      mobType: "Hostile Mob",
      bio: "A zombie is a common undead hostile mob that deals melee damage and is a source of rotten flesh, which it drops upon death."
    },
    {
      id: 2,
      name: "Creeper",
      mobType: "Hostile Mob",
      bio: "A creeper is a common hostile mob that quietly approaches a player, hisses, and explodes if the player remains near."
    },
    {
      id: 3,
      name: "Sheep",
      mobType: "Passive Mob",
      bio: "A sheep is a common passive mob that supplies wool and raw mutton and is found in most grassy biomes."
    },
  ];
  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          mobType={profile.mobType}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}
export default App
// Define the Level class globally
class Level {
    constructor(id, name, difficulty, scene, unlocked, mapName, tileMap) {
        this.id = id;
        this.name = name;
        this.difficulty = difficulty;
        this.scene = scene;
        this.unlocked = unlocked;
        this.mapName = mapName;
        this.tileMap = tileMap
        this.completed = false;
        this.score = 0;
        this.numStars = 0;
    }
  
    complete(score) {
      this.completed = true;
      this.score = score > this.score ? score : this.score;
      // set number of starts
      if (this.score > 4000) this.numStars = 3;
      else if (this.score > 3000) this.numStars = 2;
      else this.numStars = 1;

      // unlock next level
      if (levels[this.id + 1]){
        levels[this.id + 1].setUnlocked(true);
      }
    }

    setUnlocked(unlocked){
        this.unlocked = unlocked;
    }
}
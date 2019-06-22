class Game {
    constructor() {
        this.world = new World;
        this.replace = false;
        this.toolSelected = "";
    }
    startGame() {
        this.world.createWorld();
        this.world.createToolSidebar();

    }



}
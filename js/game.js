class Game {
    constructor() {
        this,
        this.cells = new Cell();
        this.tools = new Tool();
        this.matrix = new Matrix();
        this.replace = false;
        this.toolSelected = "";
    }
    startGame() {
        this.createWorld();
        this.createToolSidebar();

    }
    createWorld() {
        for (var i = 0; i < this.matrix.matrix.length; i++) {
            for (var j = 0; j < this.matrix.matrix[i].length; j++) {
                var cell = $('<div/>');
                cell.addClass(this.cells.cells[this.matrix.matrix[i][j]].class)
                    .addClass('box')
                    .attr('data', this.cells.cells[this.matrix.matrix[i][j]].data)
                    .click(this.clickBlock);

                $('#game-board').append(cell);

            }
        }
    };
    createToolSidebar() {
        var toolItemArray = $(".tool-item");
        for (var i = 0; i < toolItemArray.length; i++) {
            toolItemArray.eq(i).append("<img src=" + this.tools.tools[i].src + ">");
            toolItemArray.eq(i).attr('data', this.tools.tools[i].data);
        }

    };



}
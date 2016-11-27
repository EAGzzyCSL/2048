function Tile(position, value) {
    this.x = position.x;
    this.y = position.y;
    this.value = value || 2;

    this.previousPosition = null;
    this.mergedFrom = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function() {
    this.previousPosition = {
        x: this.x,
        y: this.y
    };
};

Tile.prototype.updatePosition = function(position) {
    this.x = position.x;
    this.y = position.y;
};

Tile.prototype.serialize = function() {
    return {
        position: {
            x: this.x,
            y: this.y
        },
        value: this.value
    };
};
var eagzzycsl_progress = {
    '2': '馋虫',
    '4': '馋猫',
    '8': '馋猴',
    '16': '馋鬼',
    '32': '猪',
    '64': '猪八戒',
    '128': '子公',
    '256': '张翰',
    '512': '懒羊羊',
    '1024': '饕餮',
    '2048': '王叮咚'
};
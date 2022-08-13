const default_width = 1364;

function getScale() {
        return (window.innerWidth / default_width);
}

const STATUS = {
        LOBBY: 0,
        GAME: 1
};

const GAME = {
        WIDTH_GAME: window.innerWidth,
        HEIGHT_GAME: window.innerHeight,
        SMALL_SIZE: getScale() * 20,
        BIG_SIZE: getScale() * 100,
        DIAMETER: 16 * getScale(),
        RADIUS: 5 * getScale(),
        STATUS: STATUS.LOBBY,
        IN_GAME: false,
        game: null
};

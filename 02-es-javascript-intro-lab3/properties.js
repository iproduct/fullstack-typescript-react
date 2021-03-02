
function PositionLogger(initilaPos) {
    var _position = initilaPos, positionLog = [{ pos: initilaPos }];

    Object.defineProperties(this, {
        position: {
            get: function () {
                return _position;
            },
            set: function (newPos) {
                _position = newPos;
                positionLog.push({ pos: newPos });
            }
        },
        getLog: {
            value: function () {
                return positionLog;
            },
            writable: false,
            configurable: false
        }
    });
}

pl = new PositionLogger(0);
console.log(++pl.position);
pl.position += 5;
console.log(pl.position);
pl.position += 10;
console.log(pl.position);
pl.position -= 8;
console.log(pl.position);

console.log(pl.getLog());

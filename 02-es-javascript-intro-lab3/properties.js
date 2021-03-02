
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
        positionLog: {
            get: function(){
                return positionLog
            }
        }
        // getLog: {
        //     value: function () {
        //         return positionLog;
        //     },
        //     writable: false,
        //     configurable: false
        // }
    });
}

PositionLogger.prototype.getLog = function () {
    return this.positionLog;
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

pl2 = new PositionLogger(100);
pl2.position += 5;
console.log(pl2.position);
pl2.position += 10;
console.log(pl2.position);
pl2.position -= 8;
console.log(pl2.position);

console.log(pl2.getLog());

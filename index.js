function receivesAFunction (cb) {
    return cb();
}

function returnsANamedFunction () {
    return function NamedFunction() {}
}

function returnsAnAnonymousFunction () {
    return function () {}
}
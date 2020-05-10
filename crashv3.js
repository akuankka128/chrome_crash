function alloc(bytes) {
    return new SharedArrayBuffer(bytes);
}

alloc(2147483648).slice.bind(alloc(2147483648), 0, this.byteLength).call(alloc(2147483648), 0, this.byteLength);
// Specs:
// RAM: 4GB DDR3 (3.68GB usable)
// Browser: Google Chrome x64 version 81.0.4044.138
// OS: Windows 10 Home x64 v1903 (OS build 18362.592)
// Processor: Intel(R) Core(TM) i3 CPU M 380 @ 2.53GHz x4

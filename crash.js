str = "1234567890";
str2 = "1234567890";
str3 = "1234567890";
str4 = "1234567890";
str5 = "1234567890"
str6 = "1234567890"
str7 = "1234567890"
str8 = "1234567890"
str9 = "1234567890"
document.title = str + str2 + str3 + str4 + str5 + str6 + str7 + str8 + str9 + " ";
setInterval(function k() {
	str = str + str;
	str2 = str2 - str2;
	str3 = str3 - str3;
	str4 = str4 - str4;
	str5 = str5 - str5;
	str6 = str6 - str6;
	str7 = str7 - str7;
	str8 = str8 - str8;
	str9 = str9 - str9;
	document.title = str + str2 + str3 + str4 + str5 + str6 + str7 + str8 + str9 + " ";
	setInterval(function kk() {
		document.title = str + str2 + str3 + str4 + str5 + str6 + str7 + str8 + str9 + " ";
		setInterval(function start() {
			k();
			kk();
			start();
			a();
			str = str + str;
			str2 = str2 + str2;
			str3 = str3 + str3;
			str4 = str4 + str4;
			str5 = str5 + str5;
			str6 = str6 + str6;
			str7 = str7 + str7;
			str8 = str8 + str8;
			str9 = str9 + str9;
			document.title = str + str2 + str3 + str4 + str5 + str6 + str7 + str8 + str9 + " ";
			setInterval(function a() {
				k();
				kk();
				start();
				a();
				document.title = str + str2 + str3 + str4 + str5 + str6 + str7 + str8 + str9 + " ";
			}, 250);
		}, 300);
	}, 200);
}, 200);

/*
	Looking back at this, this seems really ugly and very inefficient. I didn't seem to know much about JS back then..
*/

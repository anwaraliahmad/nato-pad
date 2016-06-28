"use strict";
module.exports = natoPad;

var natoAlphabet = {
	a: "ALPHA",
	b: "BRAVO",
	c: "CHARLIE",
	d: "DELTA",
	e: "ECHO",
	f: "FOXTROT",
	g: "GOLF",
	h: "HOTEL",
	i: "INDIA",
	j: "JULIETT",
	k: "KILO",
	l: "LIMA",
	m: "MIKE",
	n: "NOVEMBER",
	o: "OSCAR",
	p: "PAPA",
	q: "QUEBEC",
	r: "ROMEO",
	s: "SIERRA",
	t: "TANGO",
	u: "UNIFORM",
	v: "VICTOR",
	w: "WHISKEY",
	x: "XRAY",
	y: "YANKEE",
	z: "ZULU"

}
function natoPad(str) {
	var nato = "";
	str = str.toLowerCase();
 	for (var i = 0; i < str.length; i++) {
		if (natoAlphabet[str.substring(i,i+1)]) 
			nato += natoAlphabet[str.substring(i, i+1)] + " ";
	}	
	return nato;
}

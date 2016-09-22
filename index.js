var fs = require('fs');

var generateHaiku = function(data){
	generateWordMap();
	var haikuString = "";
		if (data.length > 5) {
		haikuString += generateHaikuLine(data, 5) + "\n"	
		haikuString += generateHaikuLine(data, 7) + "\n"
		haikuString += generateHaikuLine(data, 5)
		}	
	console.log(haikuString);
	return haikuString;
};

var wordMap = {};

function generateWordMap() {
	if (wordMap.size > 0){
		return;
	}
	try {  
	    var data = fs.readFileSync('cmudict.dict.txt', 'utf8');
    	var lines = data.split("\n");
	    for (var i in lines) {								
	    	var line = lines[i].split(" ");
	    	var word = line[0];
	    	var vowelCount = 0;
		    for (var k in line) {
		    	var piece = line[k];
		    	if ('AEIOUY'.indexOf(piece[0]) >=0 ){
		    		vowelCount ++
		    	}
		    	
		    } 
		    wordMap[word] = vowelCount;

	    }

	} catch(e) {
	    console.log('Error:', e.stack);
	}
}

var syllableCount = function(word) {

	generateWordMap();
	return wordMap[word];
}

var generateHaikuLine = function(data, syllables) {
	var line = "";
	while (syllables > 0) {
		var random = data[Math.floor(Math.random() * 100000000 % data.length)];
		if (syllableCount (random) <= syllables) {
			line += random + " ";
			syllables -= syllableCount (random);
		}	
	}	
	return line.trim();

}


module.exports.generateHaiku = generateHaiku;
module.exports.syllableCount = syllableCount;
module.exports.generateHaikuLine = generateHaikuLine;

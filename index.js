const createiTXtString = require('./util.js');
const png = require('png-metadata');
const fs = require('node:fs');

const readOnly = process.argv.indexOf('-r') >= 0 || process.argv.indexOf('--read-only') >= 0;
if (readOnly) process.argv = process.argv.filter(arg => arg !== '-r' && arg !== '--read-only');

const rawFile = png.readFileSync(process.argv[2]);

let fileChunks = png.splitChunk(rawFile);
if (readOnly) {
	console.log('file chunks: ', fileChunks);
	return 0;
}

const iend = fileChunks.pop();
fileChunks = fileChunks.filter(chunk => !chunk.data.includes('openbadges'));

const newchunk = png.createChunk('iTXt',
	createiTXtString({
		assertionDataFoo: 'foo',
		assertionDataBar: 'bar'
	}));

fileChunks.push(newchunk);
fileChunks.push(iend);
const newpng = png.joinChunk(fileChunks);

fs.writeFileSync('baked.png', newpng, 'binary');

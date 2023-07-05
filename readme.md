# Usage:
reading a PNG file as a list of chunks:
```
node index.js <filename> -r
```

adding an iTXt openbadge metadata chunk:
```
node index.js <filename>
```
this will create a file called `baked.png` with a predetermined JSON object as a string in the metadata:
```
{
    assertionDataFoo: 'foo',
    assertionDataBar: 'bar'
}
```
var Parser = require("fast-xml-parser").j2xParser;
//default options need not to set
var defaultOptions = {
    attributeNamePrefix : "@_",
    attrNodeName: "@", //default is false
    textNodeName : "#text",
    ignoreAttributes : true,
    cdataTagName: "__cdata", //default is false
    cdataPositionChar: "\\c",
    format: false,
    indentBy: "  ",
    supressEmptyNode: false,
    //tagValueProcessor: a=> he.encode(a, { useNamedReferences: true}),// default is a=>a
    attrValueProcessor: a=> he.encode(a, {isAttributeValue: isAttribute, useNamedReferences: true})// default is a=>a
};
var parser = new Parser(defaultOptions);

var json_or_js_obj = {teste: 'teste', x: {a: 'a', b: 'b'}}

var xml = parser.parse(json_or_js_obj);

console.log('XML ', xml);

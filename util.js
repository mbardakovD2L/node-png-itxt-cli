const nullSep = String.fromCharCode(0x00);

const createiTXtString = (data, lang = 'en') => {
    return `openbadges${nullSep}${nullSep}${nullSep}${lang}${nullSep}${nullSep}${JSON.stringify(data)}${nullSep}`;
}

module.exports = createiTXtString;
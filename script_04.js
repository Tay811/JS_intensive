//1

function concatStrings (argument, separator) {
    return (nextArgument) => {
        if (argument === 'string' && separator === 'string'){
            return res = argument.concat(separator);
        }
        if (argument !== 'string' && separator === 'string'){
            return res = separator;
        }
        if (argument === 'string' && separator !== 'string'){
            return res = argument;
        }
        if (argument !== 'string' && separator !== 'string'){
            return res = '';
        }
    }
}
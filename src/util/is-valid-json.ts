const isString = (value: any) => (
    typeof value === "string" || Object.prototype.toString.call(value) === "[object String]"
);
  
const isPlainObject = (value: any) => (
    Object.prototype.toString.call(value) === "[object Object]"
);

interface ValidateOptions {
    allowObjects?: boolean;
}
  
const isJSON = (str: any, options: ValidateOptions = {}) => {
    if (isPlainObject(str) && options.allowObjects === true) {
        return true;
    }

    if (!isString(str)) {
        return false;
    }

    if (!isNaN(str)) {
        return false;
    }

    try {
        JSON.parse(str);
    } catch (error) {
        return false;
    }

    return true;
};

export default isJSON;

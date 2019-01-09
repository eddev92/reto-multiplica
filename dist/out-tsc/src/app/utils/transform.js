var TransformData = /** @class */ (function () {
    function TransformData() {
    }
    TransformData.validateHasBodyOrQueryReq = function (element, onlyBody, key1, key2) {
        if (key2 === void 0) { key2 = ''; }
        var result;
        if (onlyBody) {
            if (element.put && element.put.parameters && element.put.parameters.length > 0) {
                element.put.parameters.forEach(function (elm) {
                    if (elm.in === key1) {
                        result = true;
                    }
                    else {
                        result = false;
                    }
                });
            }
            else {
                if (element.get.parameters && element.get.parameters.length > 0) {
                    element.get.parameters.forEach(function (elm) {
                        if (elm.in === key1) {
                            result = true;
                        }
                        else {
                            result = false;
                        }
                    });
                }
            }
        }
        else {
            if (element.get.parameters && element.get.parameters.length > 0) {
                element.get.parameters.forEach(function (elm) {
                    if (elm.in === key2 || elm.in === key1) {
                        result = true;
                    }
                    else {
                        result = false;
                    }
                });
            }
        }
        return result;
    };
    TransformData.existParameters = function (element) {
        var result;
        if (element.get || element.put) {
            if ((element.get.parameters && element.get.parameters.length > 0) || (element.put.parameters && element.put.parameters.length > 0)) {
                result = true;
            }
            else {
                result = false;
            }
        }
        return result;
    };
    TransformData.validateHasProperty = function (element, key) {
        var result = {};
        if (element.put && element.put.parameters && element.put.parameters.length > 0) {
            element.put.parameters.forEach(function (elm) {
                if (elm.in === key) {
                    result = {
                        value: true,
                        type: key
                    };
                }
                else {
                    result = {
                        value: false,
                        type: ''
                    };
                }
            });
        }
        else {
            if (element.get.parameters && element.get.parameters.length > 0) {
                element.get.parameters.forEach(function (elm) {
                    if (elm.in === key) {
                        result = {
                            value: true,
                            type: key
                        };
                    }
                    else {
                        result = {
                            value: false,
                            type: ''
                        };
                    }
                });
            }
        }
        return result;
    };
    TransformData.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    TransformData.generateParams = function (element) {
        var newArray = new Array();
        if (element.get.parameters.length) {
            newArray = element.get.parameters.map(function (param) {
                var obj = {
                    name: param.name,
                    isRequired: param.required,
                    comma: ((element.get.parameters).indexOf(param) === element.get.parameters.length - 1) ? false : true,
                    isBoolean: (typeof param.type === 'boolean') ? true : false,
                    isNumber: (typeof param.type === 'number') ? true : false,
                    isString: (typeof param.type === 'string') ? true : false
                };
                return obj;
            });
        }
        console.log(newArray);
        return newArray;
    };
    TransformData.TransformObj = function (element) {
        var arrayParams = new Array();
        var operation = TransformData.capitalizeFirstLetter(element.get.operationId);
        arrayParams = TransformData.generateParams(element);
        console.log(arrayParams);
        return {
            consumes: element.get.consumes[0],
            hasBodyOrQueryReq: TransformData.validateHasBodyOrQueryReq(element, false, 'query', 'body'),
            hasBodyReq: TransformData.validateHasBodyOrQueryReq(element, true, 'body'),
            hasParameters: TransformData.existParameters(element),
            hasPathReq: TransformData.validateHasBodyOrQueryReq(element, true, 'path'),
            hasQueryreq: TransformData.validateHasProperty(element, 'query').value,
            httpMethod: 'get',
            parameters: {
                body: {
                    isRequired: TransformData.validateHasProperty(element, 'body').value,
                },
                path: {
                    isRequired: TransformData.validateHasProperty(element, 'query').value,
                },
                query: {
                    modelName: "Req" + operation,
                    params: arrayParams
                }
            },
            path: ''
        };
    };
    return TransformData;
}());
export { TransformData };
//# sourceMappingURL=transform.js.map
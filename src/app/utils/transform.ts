export class TransformData {
    static validateHasBodyOrQueryReq(element, onlyBody, key1, key2 = '') {
        let result: boolean;
        if (onlyBody) {
            if (element.put && element.put.parameters && element.put.parameters.length > 0) {
                element.put.parameters.forEach(elm => {
                    if (elm.in === key1) {
                        result = true;
                    } else {
                        result = false;
                    }
                });
            } else {
                if (element.get.parameters && element.get.parameters.length > 0) {
                    element.get.parameters.forEach(elm => {
                        if (elm.in === key1) {
                            result = true;
                        } else {
                            result = false;
                        }
                    });
                }
            }
        } else {
            if (element.get.parameters && element.get.parameters.length > 0) {
                element.get.parameters.forEach(elm => {
                    if (elm.in === key2 || elm.in === key1) {
                        result = true;
                    } else {
                        result = false;
                    }
                });
            }
        }            
        return result;
    }
    static existParameters(element) {
        let result: boolean;
        if (element.get || element.put) {
            if ((element.get.parameters && element.get.parameters.length > 0) || (element.put.parameters && element.put.parameters.length > 0)) {
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    }
    static validateHasProperty(element, key) {
        let result: any = {};
        if (element.put && element.put.parameters && element.put.parameters.length > 0) {
            element.put.parameters.forEach(elm => {
                if (elm.in === key) {
                    result = {
                        value: true,
                        type: key
                    }
                } else {
                    result = {
                        value: false,
                        type: ''
                    }
                }
            });
        } else {
            if (element.get.parameters && element.get.parameters.length > 0) {
                element.get.parameters.forEach(elm => {
                    if (elm.in === key) {
                        result = {
                            value: true,
                            type: key
                        }
                    } else {
                        result = {
                            value: false,
                            type: ''
                        }
                    }
                });
            }
        }
        return result;
    }
    static capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static generateParams(element) {
        let newArray: any = new Array();
        if(element.get.parameters.length) {
            newArray = element.get.parameters.map(param => {
                const obj = {
                    name: param.name,
                    isRequired: param.required,
                    comma: ((element.get.parameters).indexOf(param) === element.get.parameters.length - 1) ? false : true,
                    isBoolean: (typeof param.type === 'boolean') ? true : false,
                    isNumber: (typeof param.type === 'number') ? true : false,
                    isString: (typeof param.type === 'string') ? true : false
                }
                return obj;
            })
        }
        console.log(newArray)
        return newArray;
    }
    static TransformObj(element) {
        console.log(element)
        let arrayParams: any = new Array();
        const operation =  TransformData.capitalizeFirstLetter(element.get.operationId);
        arrayParams = TransformData.generateParams(element);
        console.log(arrayParams)
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
                  modelName: `Req${operation}`,
                  params: arrayParams
                }
              },
              path: element.path
        }

    }
}
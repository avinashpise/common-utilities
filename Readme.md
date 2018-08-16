# Common Utility 

## Installation


Using npm:

    $ npm install common-node-utilities

Using bower:

    $ bower install common-node-utilities


## Description

This project provides a `common utilities` class that works both on __Node.js__ and the __Anguler__.

## Common Utility methods

- `Error.BadRequest(msg) : ` return the error object with default message if msg is undefined. <br/>for eg. <br/>
`{name = 'BadRequest';code = 400;msg = {"error": "Invalid_Request","description": "Invalid Request"};`<br/>
if msg is defined then it will be replaced with the description of error object.    <br/>for eg. `Error.BadRequest("Invalid Attribute"")` then response will be <br/>
`{name = 'BadRequest';code = 400;msg = {"error": "Invalid_Request","description": "Invalid Attribute"};`                                                                                                                                                                                                msg = {

- `Error.BadSession(msg) : ` return the error object with default message if msg is undefined.
- `Error.CallFailed(msg) : ` return the error object with default message if msg is undefined.
- `Error.NotFound(msg) : ` return the error object with default message if msg is undefined.
- `Error.ServiceUnAvailable(msg) : ` return the error object with default message if msg is undefined.
- `Error.Unauthorized(msg) : ` return the error object with default message if msg is undefined.
- `Error.Forbidden(msg) : ` return the error object with default message if msg is undefined.
- `Error.MethodNotAllowed(msg) : ` return the error object with default message if msg is undefined.
- `Error.BadGateway(msg) : ` return the error object with default message if msg is undefined.                                                                                                                                                                                                                                                                                                          

- `Validate.isNull(property) : ` validate the property and return the boolean value.
- `Validate.isNotNull(property) : ` validate the property and return the boolean value.
- `Validate.isNotEmpty(object) : ` validate the object and return the boolean value.
- `Validate.isEmptyObject(object) : ` validate the object and return the boolean value.

- `Objects.getJson(stringObject) : ` convert json string to json object.
- `Objects.addIfDefined(object,name, prop, hasProperty) : ` add key and value of respective key to given object, if value of that key is defined.
- `Objects.mergedIfDefined(object1,name, obj2, hasProperty) : ` add key's and value's of obj2 to given object1.
- `Objects.getKeyValueFromObject(object,key) : ` get the value from object for given key.
- `Objects.renameProperty(object,oldKey,newKey) : ` rename the existing key with new key name and return the object back.
- `Objects.objectToCommaString(object) : ` convert the given object to comma separated string latter on you can save this string to create csv file.
- `Objects.objectToTabString(object) : ` convert the given object to tab separated string latter on you can save this string to create csv file.

# common-utilities

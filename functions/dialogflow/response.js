
let Response = function() {
    this.message = '';
    this.payloadObject = undefined;
    this.event = undefined;
    this.contextOut = [];
};
Response.prototype.output = function(msg) {
    this.message = msg;
    return this;
};
Response.prototype.payload = function(obj) {
    this.payloadObject = obj;
    return this;
};
Response.prototype.followupEvent = function(eventName) {
    this.event = eventName;
    return this;
};
Response.prototype.putContext = function(contextName, lifespan) {
    this.contextOut.push({
        name: contextName,
        lifespan: lifespan
    });
    return this;
};
Response.prototype.build = function(result) {
    if (this.event) {
        return {
            followupEvent: {
                name: this.event
            }
        };
    }
    let resp = {
        speech: this.message,
        messages: [{
            speech: this.message,
            type: 0
        }]
    };
    if (this.payloadObject) {
        resp['messages'].push({
            payload: JSON.stringify(this.payloadObject),
            type: 4
        }); 
    }
    if (result && result.contexts) {
        let contextOutNames = this.contextOut.map(function(context, index) {
            return context.name;
        });
        let inputContexts = result.contexts.filter(function(context) {
            return !contextOutNames.includes(context.name);
        }).map(function(context, index) {
            return {
                name: context.name,
                lifespan: 0
            };
        }); // [ { name: "shop", lifespan: 0 }, { name: "shop-area", lifespan: 0 },]
        if (0 < inputContexts.length) this.contextOut = this.contextOut.concat(inputContexts);
    }
    if (0 < this.contextOut.length) {
        resp['contextOut'] = this.contextOut;
    }
    return resp;
};
module.exports = Response;


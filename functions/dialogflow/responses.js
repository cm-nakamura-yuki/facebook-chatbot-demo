"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function responses() {
    return new _response();
}
exports.responses = responses;
class _response {
    constructor() {
        this.text = '';
        this.context = [];
    }
    output(msg) {
        this.text = msg;
        return this;
    }
    putContext(contextName, lifespan) {
        this.context.push({
            name: contextName,
            lifespan: lifespan
        });
        return this;
    }
    addPayload(payload) {
        this.payload = payload;
        return this;
    }
    build(result) {
        console.log('build result: ' + JSON.stringify(result));
        let resp = {
            fulfillmentText: this.text,
            fulfillmentMessages: [],
            outputContexts: [],
        };
        let session = result.session;
        let outputContexts = [];
        let contexts = this.context;
        contexts.forEach(function (element) {
            outputContexts.push({
                name: session + '/contexts/' + element.name,
                lifespanCount: element.lifespan
            });
        });
        resp.fulfillmentMessages = this.payload;
        resp.outputContexts = outputContexts;
        return resp;
    }
}
//# sourceMappingURL=responses.js.map
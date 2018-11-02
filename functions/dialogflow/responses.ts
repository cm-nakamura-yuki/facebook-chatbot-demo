export { responses }

function responses() {
    return new _response();
}

class _response {
    private text: string;
    private context: {name: string, lifespan: number}[];
    private payload: any;
 
    constructor() {
        this.text = '';
        this.context = [];
    }

    output(msg: string) {
        this.text = msg;
        return this;
    }

    putContext(contextName: string, lifespan: number) {
        this.context.push({
            name: contextName,
            lifespan: lifespan
        });
        return this;
    }

    addPayload(payload: any) {
        this.payload = payload;
        return this;
    }

    build(result: any) {
        console.log('build result: ' + JSON.stringify(result));

        let resp: {fulfillmentText: string, fulfillmentMessages: any[], outputContexts: {name: string, lifespanCount: number}[]} = {
            fulfillmentText: this.text,
            fulfillmentMessages: [],
            outputContexts: [],
        }

        let session: string = result.session;
        let outputContexts: {name: string, lifespanCount: number}[] = [];
        let contexts = this.context;
        contexts.forEach(function(element) {
            outputContexts.push({
                name: session + '/contexts/' + element.name,
                lifespanCount: element.lifespan
            })
        });
        
        resp.fulfillmentMessages = this.payload;
        resp.outputContexts = outputContexts;

        return resp;
    }
}
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const handlers = {
    'LaunchRequest': require('./handlers/LaunchRequest'),
    'OccupationIntent': require('./handlers/OccupationIntent'),
    'IncomeIntent': require('./handlers/IncomeIntent')
};
exports.handler = (event) => __awaiter(this, void 0, void 0, function* () {
    console.log(JSON.stringify(event));
    const intentName = event.queryResult.intent.displayName;
    const query = event.queryResult.queryText;
    const params = event.queryResult.parameters;
    console.log('IntentName: ' + intentName);
    console.log('Query: ' + JSON.stringify(query));
    console.log('Parameters: ' + JSON.stringify(params));
    let response = yield handlers[intentName].call(query, params);
    let resp = response.build(event);
    console.log('Response: ' + JSON.stringify(resp));
    return resp;
});
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responses_1 = require("../responses");
module.exports = function (query, params) {
    console.log('query:' + JSON.stringify(query));
    console.log('params: ' + JSON.stringify(params));
    let payload = [{
            'platform': 'FACEBOOK',
            'quickReplies': {
                'title': 'こんにちは、ご希望の職種を教えてください。',
                'quickReplies': [
                    'エンジニア',
                    'デザイナー',
                    'ディレクター'
                ]
            }
        }];
    let resp = responses_1.responses();
    resp.output('こんにちは、ご希望の職種を教えてください。')
        .addPayload(payload)
        .putContext('occupation', 5);
    return resp;
};
//# sourceMappingURL=LaunchRequest.js.map
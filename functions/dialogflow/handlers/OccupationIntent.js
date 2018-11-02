"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responses_1 = require("../responses");
module.exports = function (query, params) {
    console.log('query:' + JSON.stringify(query));
    console.log('params: ' + JSON.stringify(params));
    let payload = [{
            'platform': 'FACEBOOK',
            'quickReplies': {
                'title': 'ご希望の年収を教えてください。',
                'quickReplies': [
                    '400~600万円',
                    '600~800万円',
                    '800~1,000万円',
                    '1,000万円以上'
                ]
            }
        }];
    let resp = responses_1.responses();
    resp.output('ご希望の年収を教えてください。')
        .addPayload(payload)
        .putContext('income', 5);
    return resp;
};
//# sourceMappingURL=OccupationIntent.js.map
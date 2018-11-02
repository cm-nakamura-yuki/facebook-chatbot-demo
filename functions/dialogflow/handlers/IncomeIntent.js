"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responses_1 = require("../responses");
module.exports = function (query, params) {
    console.log('query:' + JSON.stringify(query));
    console.log('params: ' + JSON.stringify(params));
    let resp = responses_1.responses();
    resp.output('ありがとうございます。Facebookに登録されているメールアドレスにメールを送信しました。');
    return resp;
};
//# sourceMappingURL=IncomeIntent.js.map
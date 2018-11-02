import { responses } from '../responses';

module.exports = function (query: any, params: any) {
    console.log('query:' + JSON.stringify(query));
    console.log('params: ' + JSON.stringify(params));

    let resp = responses();
    resp.output('ありがとうございます。Facebookに登録されているメールアドレスにメールを送信しました。')
    
    return resp;
};
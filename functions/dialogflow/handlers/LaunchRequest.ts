import { responses } from '../responses';

module.exports = function (query: any, params: any) {
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
    
    let resp = responses();
    resp.output('こんにちは、ご希望の職種を教えてください。')
        .addPayload(payload)
        .putContext('occupation', 5);

    return resp;
};
import { responses } from '../responses';

module.exports = function (query: any, params: any) {
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

    let resp = responses();
    resp.output('ご希望の年収を教えてください。')
        .addPayload(payload)
        .putContext('income', 5);

    return resp;
};
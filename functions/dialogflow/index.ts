const handlers: any = {
    'LaunchRequest': require('./handlers/LaunchRequest'),
    'OccupationIntent': require('./handlers/OccupationIntent'),
    'IncomeIntent': require('./handlers/IncomeIntent')
};

exports.handler = async (event: any) => {
    console.log(JSON.stringify(event));

    const intentName = event.queryResult.intent.displayName;
    const query = event.queryResult.queryText;
    const params = event.queryResult.parameters;

    console.log('IntentName: ' + intentName);
    console.log('Query: ' + JSON.stringify(query));
    console.log('Parameters: ' + JSON.stringify(params));
    
    let response = await handlers[intentName].call(query, params);
    let resp = response.build(event);
    console.log('Response: ' + JSON.stringify(resp));

    return resp;
};
'use strict';

exports.execute = function(req, res) {
    var reqParams = req.params;
    var startDate = reqParams.startDate;
    var endDate = reqParams.endDate;
    const fetch = require('node-fetch');

    (async () => {
        try {
            
            const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start='+startDate+'&end='+endDate)
                .then(checkStatus)
                .then(response => response.text())
                .catch(err => console.error(err));

            if (testJson(response) == true) {
                var dataObj = JSON.parse(response);

                if (dataObj.bpi) {
                    for ( const bpi in dataObj.bpi) {
                        dataObj.bpi[bpi] = (dataObj.bpi[bpi]*1000).toFixed(1);
                        console.log(`${bpi}: ${dataObj.bpi[bpi]}`);
                    }
                }
                // res.json(dataObj);
            } else {
                res.json({error: response});
            }

            await res.json(dataObj);
        } catch (error) {
            console.log(error);
        }
    })();

    function checkStatus(response) {
        if (response.ok) {
            return response;
        } else {
            res.json({error: response.statusText});
        }
    }

    function testJson(text) {
        if (typeof text !== "string") { 
            return false;
        } try { 
            JSON.parse(text);
            return true;
        } catch (error) { 
            return false;
        } 
    }
};

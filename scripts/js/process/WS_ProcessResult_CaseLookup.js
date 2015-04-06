var wsRexisCaseLookupResponse = _ws.caseLookupResult.body.contents;
_ws.errorCode = _ws.parseReturnedXML(wsRexisCaseLookupResponse, "<ErrorCode>","</ErrorCode>");
_ws.accountNumber = _ws.parseReturnedXML(wsRexisCaseLookupResponse, "<AccountNumber>","</AccountNumber>");
_ws.sfAccountID = _ws.parseReturnedXML(wsRexisCaseLookupResponse, "<SalesforceAccountID>","</SalesforceAccountID>");
_ws.sfInstrumentID = _ws.parseReturnedXML(wsRexisCaseLookupResponse, "<SalesforceInstrumentID>","</SalesforceInstrumentID>");
_ws.customerName = _ws.parseReturnedXML(wsRexisCaseLookupResponse, "<CustomerName>","</CustomerName>");
_ws.instrumentName = _ws.parseReturnedXML(wsRexisCaseLookupResponse, "<InstrumentName>","</InstrumentName>");
_ws.errorDesc = _ws.parseReturnedXML(wsRexisCaseLookupResponse, "<ErrorDesc>","</ErrorDesc>");

//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|accountNumber: ' +  _ws.accountNumber + '|instrumentName: ' + _ws.instrumentName + '|errorDesc: ' + _ws.errorDesc);

var wsRexisAccountSerialLookupResponse = _ws.accountSerialLookupResult.body.contents;
_ws.errorCode = _ws.parseReturnedXML(wsRexisAccountSerialLookupResponse, "<ErrorCode>","</ErrorCode>");
_ws.accountFound = _ws.parseReturnedXML(wsRexisAccountSerialLookupResponse, "<AccountFound>","</AccountFound>");
_ws.sfAccountID = _ws.parseReturnedXML(wsRexisAccountSerialLookupResponse, "<SalesforceAccountID>","</SalesforceAccountID>");
_ws.sfInstrumentID = _ws.parseReturnedXML(wsRexisSerialLookupResponse, "<SalesforceInstrumentID>","</SalesforceInstrumentID>");
_ws.instrumentName = _ws.parseReturnedXML(wsRexisCaseLookupResponse, "<InstrumentName>","</InstrumentName>");
_ws.customerName = _ws.parseReturnedXML(wsRexisAccountSerialLookupResponse, "<CustomerName>","</CustomerName>");
_ws.errorDesc = _ws.parseReturnedXML(wsRexisAccountSerialLookupResponse, "<ErrorDesc>","</ErrorDesc>");

//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|instrumentName: ' +  _ws.instrumentName + '|errorDesc: ' + _ws.errorDesc);

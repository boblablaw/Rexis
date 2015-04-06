var wsRexisSerialLookupResponse = _ws.serialLookupResult.body.contents;
_ws.errorCode = _ws.parseReturnedXML(wsRexisSerialLookupResponse, "<ErrorCode>","</ErrorCode>");
_ws.accountNumber = _ws.parseReturnedXML(wsRexisSerialLookupResponse, "<AccountNumber>","</AccountNumber>");
_ws.sfAccountID = _ws.parseReturnedXML(wsRexisSerialLookupResponse, "<SalesforceAccountID>","</SalesforceAccountID>");
_ws.sfInstrumentID = _ws.parseReturnedXML(wsRexisSerialLookupResponse, "<SalesforceInstrumentID>","</SalesforceInstrumentID>");
_ws.customerName = _ws.parseReturnedXML(wsRexisSerialLookupResponse, "<CustomerName>","</CustomerName>");
_ws.instrumentName = _ws.parseReturnedXML(wsRexisSerialLookupResponse, "<InstrumentName>","</InstrumentName>");
_ws.errorDesc = _ws.parseReturnedXML(wsRexisSerialLookupResponse, "<ErrorDesc>","</ErrorDesc>");

//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|accountNumber: ' +  _ws.accountNumber + '|instrumentName: ' + _ws.instrumentName + '|errorDesc: ' + _ws.errorDesc);

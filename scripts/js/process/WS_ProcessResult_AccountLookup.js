var wsRexisAccountLookupResponse, _ws.errorCode, _ws.accountFound, _ws.sfAccountID, _ws.customerName, _ws.errorDesc

wsRexisAccountLookupResponse = _ws.accountLookupResult.body.contents;

if (_ws.parseReturnedXML(wsRexisAccountLookupResponse, "<ErrorCode>","</ErrorCode>") != '') {
	_ws.errorCode = _ws.parseReturnedXML(wsRexisAccountLookupResponse, "<ErrorCode>","</ErrorCode>");
}

if (_ws.parseReturnedXML(wsRexisAccountLookupResponse, "<AccountFound>","</AccountFound>") != '') {
	_ws.accountFound = wsRexisAccountLookupResponse, "<AccountFound>","</AccountFound>";
}

if (_ws.parseReturnedXML(wsRexisAccountLookupResponse, "<AccountFound>","</AccountFound>") != '') {
	_ws.sfAccountID = _ws.parseReturnedXML(wsRexisAccountLookupResponse, "<SalesforceAccountID>","</SalesforceAccountID>");
}

if (_ws.parseReturnedXML(wsRexisAccountLookupResponse, "<CustomerName>","</CustomerName>") != '') {
	_ws.customerName = _ws.parseReturnedXML(wsRexisAccountLookupResponse, "<CustomerName>","</CustomerName>");
}

if (_ws.parseReturnedXML(_ws.parseReturnedXML(wsRexisAccountLookupResponse, "<ErrorDesc>","</ErrorDesc>") != '') {
	_ws.errorDesc = _ws.parseReturnedXML(wsRexisAccountLookupResponse, "<ErrorDesc>","</ErrorDesc>");
} 
//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|accountFound: ' +  _ws.accountFound + '|errorDesc: ' + _ws.errorDesc);

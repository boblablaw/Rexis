// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'ID3050_AccountNumber');




_ws.vm.addInitialPromptGroup();
  // IFCONDITION: If Task = New
  if (_ws.gateKeeper.getString("Task").equalsIgnoreCase("New"))
  {
    _ws.vm.addInitialPrompt('ID3050_i_1');  /* Please say or enter your account number. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    _ws.vm.addInitialPrompt('ID3050_i_2');  /* Next, say or enter your account number. */
  }
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3050_r_1');  /* Say or enter your account number or say 'I don't know it.' */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3050_r_2');  /* Say or enter your account number or say 'I don't know it.' */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3050_r_1');  /* Say or enter your account number or say 'I don't know it.' */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3050_r_2');  /* Say or enter your account number or say 'I don't know it.' */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3050_r_1');  /* Say or enter your account number or say 'I don't know it.' */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3050_r_2');  /* Say or enter your account number or say 'I don't know it.' */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3050_c_1', 'messageid' ];  /* That was... */
  {
    var f = _ws.gateKeeper._getDataFormat("accountnumber");
    promptArray[promptCounter++] = [ '<Result>', f ];
  }
  promptArray[promptCounter++] = [ 'ID3050_c_2', 'messageid' ];  /* Is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('accountnumber', 'DATA', '<[0055/0056] 6 digits >', promptArray);
  // TODO need to create dtmf grammar
  _ws.vm.addParallelGrammar('ID3050_AccountNumber_dtmf.grxml', 'dtmf');
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3050_c_3', 'messageid' ];  /* You don't know it or don't have it.  Is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('dontknowit', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('ID3050_AccountNumber.grxml', 'voice');


/*TODO DEV_NOTES When an account number is repeated to the customer, the first two zeroes will not be stated, although the zeroes will need to be retained in the code to allow data matches in APIs.*/
/*TODO SPECIAL_SETTINGS: Max Timeout = 30000 ms*/

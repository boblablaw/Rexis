// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'RP2250_FaxNumber');




_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('RP2250_i_1');  /* What's your fax number? */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('RP2250_r_1');  /* Please say or enter your 10 digit fax number. */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('RP2250_r_2');  /* Starting with the area code, please say or enter your 10 digit fax number. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('RP2250_r_1');  /* Please say or enter your 10 digit fax number. */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('RP2250_r_2');  /* Starting with the area code, please say or enter your 10 digit fax number. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('RP2250_r_1');  /* Please say or enter your 10 digit fax number. */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('RP2250_r_2');  /* Starting with the area code, please say or enter your 10 digit fax number. */
{
  var promptArray = [];
  var promptCounter = 0;
  {
    var f = _ws.gateKeeper._getDataFormat("faxnumber");
    promptArray[promptCounter++] = [ '<Result>', f ];
  }
  promptArray[promptCounter++] = [ 'RP2250_c_1', 'messageid' ];  /* Is that correct?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('faxnumber', 'DATA', '<10 digits>', promptArray);
  // TODO need to create dtmf grammar
  _ws.vm.addParallelGrammar('RP2250_FaxNumber_dtmf.grxml', 'dtmf');
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('RP2250_FaxNumber.grxml', 'voice');



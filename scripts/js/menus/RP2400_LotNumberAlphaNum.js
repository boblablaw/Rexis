// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'RP2400_LotNumberAlphaNum');




_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('RP2400_i_1');  /* Please say the lot number for the calibration information. */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('RP2400_r_1');  /* Please say the lot number, one character at a time. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('RP2400_r_1');  /* Please say the lot number, one character at a time. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('RP2400_r_1');  /* Please say the lot number, one character at a time. */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'RP2400_c_1', 'messageid' ];  /* That was... */
  {
    var f = _ws.gateKeeper._getDataFormat("lotnumber");
    promptArray[promptCounter++] = [ '<Result>', f ];
  }
  promptArray[promptCounter++] = [ 'RP2400_c_2', 'messageid' ];  /* Is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('lotnumber', 'DATA', 'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('RP2400_LotNumberAlphaNum.grxml', 'voice');



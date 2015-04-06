// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'RP2350_TypeOfString');




_ws.vm.addInitialPromptGroup();
  // IFCONDITION: If NumberType = SerialNumber
  if (_ws.gateKeeper.getString("NumberType").equalsIgnoreCase("SerialNumber"))
  {
    _ws.vm.addInitialPrompt('RP2350_i_1');  /* And does the serial number of your instrument have any letters of the alphabet in it?  Yes or no? */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    _ws.vm.addInitialPrompt('RP2350_i_2');  /* Does the lot number for the calibration information have any letters of the alphabet in it?  Yes or no? */
  }
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('RP2350_r_1');  /* Does the number also contain any letters?  Yes or no?  Or say, "I don't know". */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  // IFCONDITION: If NumberType = SerialNumber
  if (_ws.gateKeeper.getString("NumberType").equalsIgnoreCase("SerialNumber"))
  {
    _ws.vm.addNomatchPrompt('RP2350_r_2');  /* Does the instrument serial number have any letters in it?  Say yes or press 1, no or 2, or say I don't know, or press 3. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    _ws.vm.addNomatchPrompt('RP2350_r_3');  /* Please take a look at the lot number that would indicate which calibration information you need.  Does that lot number have any letters in it?  Say yes or press 1, no or 2, or say I don't know, or press 3. */
  }
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('RP2350_r_1');  /* Does the number also contain any letters?  Yes or no?  Or say, "I don't know". */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  // IFCONDITION: If NumberType = SerialNumber
  if (_ws.gateKeeper.getString("NumberType").equalsIgnoreCase("SerialNumber"))
  {
    _ws.vm.addNoinputPrompt('RP2350_r_2');  /* Does the instrument serial number have any letters in it?  Say yes or press 1, no or 2, or say I don't know, or press 3. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    _ws.vm.addNoinputPrompt('RP2350_r_3');  /* Please take a look at the lot number that would indicate which calibration information you need.  Does that lot number have any letters in it?  Say yes or press 1, no or 2, or say I don't know, or press 3. */
  }
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('yes', 'CHOICE',  '1');
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('no', 'CHOICE',  '2');
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'RP2350_c_1', 'messageid' ];  /* You said you don't know, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('idontknow', 'CHOICE',  '3', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('RP2350_TypeOfString.grxml', 'voice');



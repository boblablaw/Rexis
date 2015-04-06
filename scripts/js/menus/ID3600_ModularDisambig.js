// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'ID3600_ModularDisambig');




_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('ID3600_i_1');  /* Was that core, Modular D, Modular P or Modular E170? */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3600_r_1');  /* Please say the full phrase for core, Modular D, Modular P or Modular E170. */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3600_r_2');  /* Say core or press 1; Modular D, 2; Modular P, 3; or Modular E170 or press 4. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3600_r_1');  /* Please say the full phrase for core, Modular D, Modular P or Modular E170. */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3600_r_2');  /* Say core or press 1; Modular D, 2; Modular P, 3; or Modular E170 or press 4. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3600_r_1');  /* Please say the full phrase for core, Modular D, Modular P or Modular E170. */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3600_r_2');  /* Say core or press 1; Modular D, 2; Modular P, 3; or Modular E170 or press 4. */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3600_c_4', 'messageid' ];  /* That was core, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('core', 'CHOICE',  '1', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3600_c_1', 'messageid' ];  /* That was modular D, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('modulard', 'CHOICE',  '2', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3600_c_2', 'messageid' ];  /* That was modular P, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('modularp', 'CHOICE',  '3', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3600_c_3', 'messageid' ];  /* That was modular E 170, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('modulare170', 'CHOICE',  '4', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('ID3600_ModularDisambig.grxml', 'voice');



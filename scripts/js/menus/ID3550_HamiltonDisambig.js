// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'ID3550_HamiltonDisambig');




_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('ID3550_i_1');  /* Is that Hamilton, Hamilton Diluter or Hamilton Star? */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3550_i_2');  /* Please say Hamilton, Hamilton Diluter, or Hamilton Star. */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3550_r_1');  /* Say Hamilton or press 1, Hamilton Diluter, or press 2, or Hamilton Star, or press 3. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3550_i_2');  /* Please say Hamilton, Hamilton Diluter, or Hamilton Star. */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3550_r_1');  /* Say Hamilton or press 1, Hamilton Diluter, or press 2, or Hamilton Star, or press 3. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3550_i_2');  /* Please say Hamilton, Hamilton Diluter, or Hamilton Star. */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3550_r_1');  /* Say Hamilton or press 1, Hamilton Diluter, or press 2, or Hamilton Star, or press 3. */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3550_c_1', 'messageid' ];  /* That was Hamilton, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hamilton', 'CHOICE',  '1', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3550_c_2', 'messageid' ];  /* That was Hamilton Diluter, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hamiltondiluter', 'CHOICE',  '2', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3550_c_3', 'messageid' ];  /* That was Hamilton Star, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hamiltonstar', 'CHOICE',  '3', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('ID3550_HamiltonDisambig.grxml', 'voice');



// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'ID3650_CobasDisambig');




_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('ID3650_i_1');  /* Please say the specific Cobas instrument, or say "list them." */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3650_r_1');  /* If you know the name of the Cobas instrument, please say it now; otherwise, for a list of Cobas instruments, say "list them." */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3650_r_2');  /* Say the Cobas instrument name, or say "list them" for the list of possible instrument names. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3650_r_1');  /* If you know the name of the Cobas instrument, please say it now; otherwise, for a list of Cobas instruments, say "list them." */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3650_r_2');  /* Say the Cobas instrument name, or say "list them" for the list of possible instrument names. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3650_r_1');  /* If you know the name of the Cobas instrument, please say it now; otherwise, for a list of Cobas instruments, say "list them." */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3650_r_2');  /* Say the Cobas instrument name, or say "list them" for the list of possible instrument names. */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_1', 'messageid' ];  /* You wanted to hear the list, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('listthem', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_21', 'messageid' ];  /* Was that Cobas Amplicor?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('amplicor', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_22', 'messageid' ];  /* Was that Cobas Ampliprep?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('ampliprep', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_2', 'messageid' ];  /* Was that Mira or Mira plus?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasmira', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_3', 'messageid' ];  /* Was that Cobas IT Firewall?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('itfirewall', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_4', 'messageid' ];  /* Was that Integra interface?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integrainterface', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_5', 'messageid' ];  /* Was that Integra four hundred plus?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra400plus', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_6', 'messageid' ];  /* Was that Integra four hundred?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra400', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_7', 'messageid' ];  /* Was that Integra seven hundred?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra700', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_8', 'messageid' ];  /* Was that Integra eight hundred?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra800', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_9', 'messageid' ];  /* Was that Cobas Integra?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasintegra', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_23', 'messageid' ];  /* Was that Cobas 4800?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas4800', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_10', 'messageid' ];  /* Was that Cobas P five twelve?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasp512', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_11', 'messageid' ];  /* Was that Cobas P six twelve?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasp612', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_12', 'messageid' ];  /* Was that C one eleven?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c111', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_13', 'messageid' ];  /* Was that C three eleven?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c311', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_14', 'messageid' ];  /* Was that C five oh one?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c501', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_15', 'messageid' ];  /* Was that C five oh two?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c502', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_16', 'messageid' ];  /* Was that C seven oh one?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c701', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_19', 'messageid' ];  /* Was that C seven oh two?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c702', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_17', 'messageid' ];  /* Was that C six thousand?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c6000', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_18', 'messageid' ];  /* Was that C eight thousand?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c8000', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_25', 'messageid' ];  /* Was that Cobas IT1000?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('it1000', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_24', 'messageid' ];  /* Was that omni S?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('omnis', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_20', 'messageid' ];  /* Was that P three twelve?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('p312', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3650_c_26', 'messageid' ];  /* Was that Taqman?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('taqman', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('ID3650_CobasDisambig.grxml', 'voice');



// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'ID3350_MolecularProductName');




_ws.vm.addInitialPromptGroup();
  // IFCONDITION: If Task = AgentRequest
  if (_ws.gateKeeper.getString("Task").equalsIgnoreCase("AgentRequest"))
  {
    _ws.vm.addInitialPrompt('ID3350_i_3');  /* Before I transfer you, please say what instrument you're calling about. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    // IFCONDITION: Else if SupportType = Literature
    if (_ws.gateKeeper.getString("SupportType").equalsIgnoreCase("Literature"))
    {
      _ws.vm.addInitialPrompt('ID3350_i_2');  /* What instrument are you calling about? */
    }
    // ELSECONDITION: Else
    else if (true)
    {
      _ws.vm.addInitialPrompt('ID3350_i_1');  /* And finally, what instrument are you calling about? */
    }
  }
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3350_r_2');  /* Please say the name of the instrument once more. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3350_r_2');  /* Please say the name of the instrument once more. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3350_r_2');  /* Please say the name of the instrument once more. */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_3', 'messageid' ];  /* Was that plate reader?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('biotekplatereaderelx800', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3450_c_38', 'messageid' ];  /* Was that middleware?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('middleware', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_52', 'messageid' ];  /* Was that middleware?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('middleware', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_4', 'messageid' ];  /* Was that plate washer?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('biotekplatewasherelx50', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_5', 'messageid' ];  /* Was that Cap-Taq?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('captaq', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that Cobas Ampliprep?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasampliprep', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_7', 'messageid' ];  /* Was that Cobas Amplicor?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasamplicor', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_8', 'messageid' ];  /* Was that GeneAmp 9600?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('geneamppcssytem9600', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_23', 'messageid' ];  /* Was that a Hamilton product?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hamilton', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_11', 'messageid' ];  /* Was that for a centrifuge?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('heraeus17rscentrifuge', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_12', 'messageid' ];  /* Was that Light Cycler?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcycler', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_13', 'messageid' ];  /* Was that Linear Array?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lineararray', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_14', 'messageid' ];  /* Was that MagnaPure?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('magnapure', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_15', 'messageid' ];  /* Was that Matrix Pipette?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('matriximpactpipette', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_16', 'messageid' ];  /* Was that PDM?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('pdm', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_17', 'messageid' ];  /* Was that S201?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('s201', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_18', 'messageid' ];  /* Was that Taqman?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('taqman', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_1', 'messageid' ];  /* Was that either Amplilink or Ampliscreen?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('amplilinkampliscreen', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_19', 'messageid' ];  /* Was that Tecan?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('tecan', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_20', 'messageid' ];  /* Was that Cobas 4800?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas4800', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_21', 'messageid' ];  /* Was that Magnalyzer?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('magnalyzer', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_22', 'messageid' ];  /* Was that carousel centrifuge?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcyclercarouselcentrifuge', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_24', 'messageid' ];  /* Was that Amplichip?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('amplichip', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_25', 'messageid' ];  /* Was that MCOE?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('mcoe', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_26', 'messageid' ];  /* Was that Thermal Cycler?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('thermalcycler', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_28', 'messageid' ];  /* Was that donor screening?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('donorscreening', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_29', 'messageid' ];  /* Was that West Nile virus?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('westnilevirus', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_30', 'messageid' ];  /* Was that MPX?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('mpx', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_31', 'messageid' ];  /* Was that DPX?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('dpx', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_32', 'messageid' ];  /* Was that V four eighty?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('v480', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_27', 'messageid' ];  /* Was that Accuchek?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('accuchek', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_33', 'messageid' ];  /* Was that Cobas?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('ID3350_MolecularProductName.grxml', 'voice');


/*TODO DEV_NOTES 3350, 3400 and 3450 have the same verbiage, and are only separate modules so that the serial numbers may be separated by family line, so as to improve recognition.*/

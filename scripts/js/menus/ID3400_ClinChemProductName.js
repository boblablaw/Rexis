// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'ID3400_ClinChemProductName');




_ws.vm.addInitialPromptGroup();
  // IFCONDITION: If Task = AgentRequest
  if (_ws.gateKeeper.getString("Task").equalsIgnoreCase("AgentRequest"))
  {
    _ws.vm.addInitialPrompt('ID3400_i_3');  /* Before I transfer you, please say what instrument you're calling about. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    // IFCONDITION: Else if SupportType = Literature
    if (_ws.gateKeeper.getString("SupportType").equalsIgnoreCase("Literature"))
    {
      _ws.vm.addInitialPrompt('ID3400_i_2');  /* What instrument are you calling about? */
    }
    // ELSECONDITION: Else
    else if (true)
    {
      _ws.vm.addInitialPrompt('ID3400_i_1');  /* And finally, what instrument are you calling about? */
    }
  }
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3400_r_1');  /* What's the name of the instrument? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3400_r_2');  /* Please say the name of the instrument once more. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3400_r_1');  /* What's the name of the instrument? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3400_r_2');  /* Please say the name of the instrument once more. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3400_r_1');  /* What's the name of the instrument? */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3400_r_2');  /* Please say the name of the instrument once more. */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_1', 'messageid' ];  /* Was that Hitachi?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hitachi', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_2', 'messageid' ];  /* Was that either seven forty seven one hundred or two hundred?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('747100or200', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_3', 'messageid' ];  /* Was that nine oh two?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('902', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_4', 'messageid' ];  /* Was that nine eleven?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('911', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_5', 'messageid' ];  /* Was that nine twelve?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('912', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_6', 'messageid' ];  /* Was that nine seventeen rack?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('917rack', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_7', 'messageid' ];  /* Was that C three eleven?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c311', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_8', 'messageid' ];  /* Was that C five oh one?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c501', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_9', 'messageid' ];  /* Was that C five oh two?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c502', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_10', 'messageid' ];  /* Was that E six oh two?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('e602', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_11', 'messageid' ];  /* Was that C seven oh one?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c701', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_12', 'messageid' ];  /* Was that C eight thousand?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c8000', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_13', 'messageid' ];  /* Was that Cobas six thousand?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas6000', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_14', 'messageid' ];  /* Was that cardiac reader?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cardiacreader', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_15', 'messageid' ];  /* Was that CLAS?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('clas', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_16', 'messageid' ];  /* Was that E one seventy?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('e170', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_17', 'messageid' ];  /* Was that E four eleven?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('e411', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_18', 'messageid' ];  /* Was that E six oh one?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('e601', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_38', 'messageid' ];  /* Was that Elecsys 1010?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('elecsys1010', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_39', 'messageid' ];  /* Was that Elecsys 2010?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('elecsys2010', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_20', 'messageid' ];  /* Was that integrated modular analytics?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('ima', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_21', 'messageid' ];  /* Was that Hitachi interface?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hitachiinterface', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_23', 'messageid' ];  /* Was that MPA?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('mpa', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_24', 'messageid' ];  /* Was that P five oh one or seven oh one?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('p501701', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_25', 'messageid' ];  /* Was that PSD?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('psd', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_26', 'messageid' ];  /* Was that RSA Pro?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('rsapro', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_27', 'messageid' ];  /* Was that RSD Pro?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('rsdpro', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_28', 'messageid' ];  /* Was that VS two?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('vsii', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_29', 'messageid' ];  /* Was that VS two fifty?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('vs250', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_30', 'messageid' ];  /* Was that C one eleven?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c111', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_31', 'messageid' ];  /* Was that Cobas Integra?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasintegra', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_32', 'messageid' ];  /* Was that Integra four hundred?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra400', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_33', 'messageid' ];  /* Was that Integra four hundred plus?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra400plus', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_34', 'messageid' ];  /* Was that Integra seven hundred?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra700', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_35', 'messageid' ];  /* Was that Integra eight hundred?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra800', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_37', 'messageid' ];  /* Was that Mira or Mira plus?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('miraormiraplus', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_36', 'messageid' ];  /* Was that Integra interface?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integrainterface', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_40', 'messageid' ];  /* Was that Cobas P five twelve?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasp512', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_41', 'messageid' ];  /* Was that Cobas P six twelve?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasp612', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_22', 'messageid' ];  /* Was that Modular?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('modular', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_42', 'messageid' ];  /* Was that Urisys four eleven?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('urisys411', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_43', 'messageid' ];  /* Was that DI?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('di', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_44', 'messageid' ];  /* Was that Datacare P O C?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('datacarepoc', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_45', 'messageid' ];  /* Was that Datacare G M?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('datacaregm', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_46', 'messageid' ];  /* Was that instrument manager?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('diinstrumentmanager', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_47', 'messageid' ];  /* Was that H I S?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('his', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_48', 'messageid' ];  /* Was that IT products?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('itproducts', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_49', 'messageid' ];  /* Was that Omnilink?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('omnilink', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_50', 'messageid' ];  /* Was that Cobas IT Firewall?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('rocheproductfirewall', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_51', 'messageid' ];  /* Was that B G E Link?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('bgelink', 'CHOICE',  'null', promptArray);
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
  promptArray[promptCounter++] = [ 'ID3400_c_55', 'messageid' ];  /* Was that Cobas seven oh two?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c702', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_56', 'messageid' ];  /* Was that Cobas p three twelve?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasp312', 'CHOICE',  'null', promptArray);
}
{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_2', 'messageid' ];  /* Was that ninety one twenty?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('9120', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_3', 'messageid' ];  /* Was that ninety one thirty?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('9130', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_4', 'messageid' ];  /* Was that ninety one forty?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('9140', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_5', 'messageid' ];  /* Was that ninety one eighty?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('9180', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_6', 'messageid' ];  /* Was that ninety one eighty one?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('9181', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_7', 'messageid' ];  /* Was that nine eighty eight dash four?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('9884', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_8', 'messageid' ];  /* Was that B one twenty three,?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('b123', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_9', 'messageid' ];  /* Was that blood gas?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('bloodgas', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_10', 'messageid' ];  /* Was that Idexx vet lyte?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('idexxvetlyte', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_11', 'messageid' ];  /* Was that omni modular?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omnimodular', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_12', 'messageid' ];  /* Was that omni one?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni1', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_13', 'messageid' ];  /* Was that omni two?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni2', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_14', 'messageid' ];  /* Was that omni three?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni3', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_15', 'messageid' ];  /* Was that omni four?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni4', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_16', 'messageid' ];  /* Was that omni five?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni5', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_17', 'messageid' ];  /* Was that omni six?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni6', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_18', 'messageid' ];  /* Was that omni seven?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni7', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_19', 'messageid' ];  /* Was that omni eight?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni8', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_20', 'messageid' ];  /* Was that omni nine?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omni9', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_21', 'messageid' ];  /* Was that omni S?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omnis', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_22', 'messageid' ];  /* Was that starlyte three?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('starlyteiii', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_23', 'messageid' ];  /* Was that Urisys eighteen hundred?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('urisys1800', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_24', 'messageid' ];  /* Was that Urisys twenty four hundred?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('urisys2400', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_25', 'messageid' ];  /* Was that Urisys four eleven?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('urisys411', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_26', 'messageid' ];  /* Was that Criterion?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('criterion', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_27', 'messageid' ];  /* Was that CUA?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('cua', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_28', 'messageid' ];  /* Was that DI?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('di', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_29', 'messageid' ];  /* Was that Datacare P O C?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('datacarepoc', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_30', 'messageid' ];  /* Was that Datacare G M?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('datacaregm', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_31', 'messageid' ];  /* Was that instrument manager?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('diinstrumentmanager', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_32', 'messageid' ];  /* Was that H I S?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('his', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_33', 'messageid' ];  /* Was that IT products?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('itproducts', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_34', 'messageid' ];  /* Was that Omnilink?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('omnilink', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_35', 'messageid' ];  /* Was that Cobas IT Firewall?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('rocheproductfirewall', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_36', 'messageid' ];  /* Was that B G E Link?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('bgelink', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_37', 'messageid' ];  /* Was that cardiac reader?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('cardiacreader', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_38', 'messageid' ];  /* Was that middleware?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('middleware', 'CHOICE',  'null', promptArray);
	}
	{
	  _ws.vm.addMenuItemConfirmNever('p471', 'CHOICE',  'null');
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_40', 'messageid' ];  /* Was that S1?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('s1', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_42', 'messageid' ];  /* Was that S3?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('s3', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_44', 'messageid' ];  /* Was that S5?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('s5', 'CHOICE',  'null', promptArray);
	}
	{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3450_c_46', 'messageid' ];  /* Was that Cobas IT1000?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('cobasit1000', 'CHOICE',  'null', promptArray);
	}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_54', 'messageid' ];  /* Was that Cobas?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3400_c_53', 'messageid' ];  /* Was that Accuchek?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('accuchek', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('ID3400_ClinChemProductName.grxml', 'voice');


/*TODO DEV_NOTES 3350, 3400 and 3450 have the same verbiage, and are only separate modules so that the serial numbers may be separated by family line, so as to improve recognition.
This module is using confirmation prompts from table 3450.  If any changes are made to those confirmation prompts, but these need to remain the same, this table will need its own confirmation prompts.*/

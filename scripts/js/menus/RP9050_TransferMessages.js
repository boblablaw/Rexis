// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.pl = new promptConfig(_ws);
_ws.pl.setID('RP9050_TransferMessages');  //This PlayMsg can be used for Exit Actions or any PlayMsg steps
_ws.pl.addPromptGroup();


// IFCONDITION: If TransferReason = Standard
if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("Standard"))
{
  _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_1');  /* Just a moment while I transfer you. */
}
// ELSECONDITION: Else
else if (true)
{
  // IFCONDITION: Else if TransferReason = ITBloodGasClosed
  if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("ITBloodGasClosed"))
  {
    _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_2');  /* In that case, let me go ahead and transfer you to an operator to schedule a call back. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    // IFCONDITION: Else if TransferReason = TechSupportAndLiterature
    if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("TechSupportAndLiterature"))
    {
      _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_5');  /* I'll transfer you to a technical support specialist who will help with your support request and your product literature request. */
    }
    // ELSECONDITION: Else
    else if (true)
    {
      // IFCONDITION: Else if TransferReason = AgentRequestNeedProdName
      if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("AgentRequestNeedProdName"))
      {
        _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_6');  /* Transferring you now. */
      }
      // ELSECONDITION: Else
      else if (true)
      {
        // IFCONDITION: Else if TransferReason = AgentRequestHaveProdName
        if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("AgentRequestHaveProdName"))
        {
          _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_3');  /* Sure, just a moment while I connect you with a technical support specialist. */
        }
        // ELSECONDITION: Else
        else if (true)
        {
          // IFCONDITION: Else if TransferReason = MaxErrors
          if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("MaxErrors"))
          {
            _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_4');  /* I'm sorry we're having trouble.  Let me connect you with a technical support specialist. */
          }
          // ELSECONDITION: Else
          else if (true)
          {
            // IFCONDITION: Else if TransferReason = Accuchek
            if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("Accuchek"))
            {
              _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_7');  /* Let me get you to AccuCheck support. If you want to call that number directly, the number is 800-858-8072. */
            }
          }
        }
      }
    }
  }
}



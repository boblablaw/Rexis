// FASTPATH GENERATED FILE - DO NOT EDIT


/* ACTIONTEXT: Play ExitAlright
NumberType = SerialNumber*/
_ws.pl = new promptConfig(_ws);
_ws.pl.setID('ID3050_AccountNumber_accountnumber_ACTION_1');  //This PlayMsg can be used for Exit Actions or any PlayMsg steps
_ws.pl.addPromptGroup();


_ws.pl.addPromptGroupAudio('messageid', 'ID3050_e_1');  /* Alright. */
_ws.gateKeeper.setString("NumberType","SerialNumber");


/*TODO DEV_NOTES: When an account number is repeated to the customer, the first two zeroes will not be stated, although the zeroes will need to be retained in the code to allow data matches in APIs.*/

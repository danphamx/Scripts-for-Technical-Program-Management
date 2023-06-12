// https://developers.google.com/apps-script/reference/gmail/gmail-app

function testSendAsEmail(){
      GmailApp.sendEmail("--EMAIL_RECIPIENT--","--EMAIL_SUBJECT--","--EMAIL_BODY--",{
        name: '--FIRST NAME LAST NAME--',
        from: "--FROM_EMAIL--",
        cc: "--CC--",
        replyTo: "--REPLYTO--",
        htmlBody: "" +"<b>Date:</b> " + "blah" + "<br>" +
                "<b>E-mail:</b> " + "blah" + "<br>" +
                "<b>Field:</b> " + "blah" + "<br>" + 
                "<b>Field:</b> " + "blah" + "<br>" + 
                "<b>Additional Field:</b> " + "blah" + "" + 
              "You receieved this message because you contacted the Thangs Support Team.<br>",
      });
}

// use this for testing

function getAliases(){
  // Log the aliases for this Gmail account and send an email as the first one.
  var me = Session.getActiveUser().getEmail();
  var aliases = GmailApp.getAliases();
  Logger.log(aliases);
  if (aliases.length > 0) {
    GmailApp.sendEmail(me, 'From an alias', 'A message from an alias!', {'from': aliases[0]});
  } else {
    GmailApp.sendEmail(me, 'No aliases found', 'You have no aliases.');
  }
}

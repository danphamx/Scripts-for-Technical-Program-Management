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

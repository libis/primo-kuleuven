{
    "description": "add feedback in menu",
    "active": true,
    "record": false,
    "code": function(data) {
        feedbackForm = {
            message: '',
            display: function() {
                var report = jQuery.PRIMO.template.renderById('lbsFeedbackForm-tpl', {
		    replyTo: getI18N().reportAProblemContactEmail,
		    email: ($.PRIMO.session.user.email || '')
                });
                $('body').append(report);
                return false;
            },
            remove: function() {
                $('body').find('#feedbackForm').remove();
                return false;
            },
            send: function() {
                try {
                    var message = $('body').find('#feedbackForm textarea').val();
                    var replyTo = $('body').find('#feedbackForm input').val();
		    var subject = jQuery.PRIMO.session.view.code + ':' + $.PRIMO.session.sessionId
                    var data = {
			subject: subject,
                        sessionId: $.PRIMO.session.sessionId,
                        page: $.PRIMO.query.page,
                        fe: $.PRIMO.session.view.frontEndID,
                        searchType: jQuery.PRIMO.query.type,
                        query: jQuery.PRIMO.query.query.toText(),
                        view: jQuery.PRIMO.session.view.code,
                        inst: jQuery.PRIMO.session.view.institution.code,
                        loggedIn: $.PRIMO.session.user.isLoggedIn(),
                        onCampus: $.PRIMO.session.user.isOnCampus(),
                        user: $.PRIMO.session.user.name,
                        ip: $.PRIMO.session.ip.address,
                        type: 'feedback',
			tab: jQuery.PRIMO.query.tab,
			scope: jQuery.PRIMO.query.scope,
			feedback: message,
			email: replyTo,
			userAgent: navigator.userAgent
                    };

                    jQuery.ajax({
                        url: 'https://services.libis.be/feedback',
                        //url: 'http://127.0.0.1:9292/report_a_problem',
                        cache: false,
                        type: 'post',
                        crossDomain: true,
                        data: JSON.stringify(data),
                        dataType: 'json',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        beforeSend: function(jqXHR, s) {}
                    }).then(function(data, textStatus, jqXHR) {
                        console.log(data);
			feedbackForm.remove();
			alert("Thank you for your feedback!");
                    }, function(jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown.message);
			feedbackForm.remove();
			alert("Couldn't send feedback");
                    });

                } catch (e) {
                    console.log('Error sending report: ' + e.message);
                }
                return false;
            }
        }


	jQuery('li.EXLMainMenuItem a[href*="://services.libis.be/feedback"]').click(function(event) {
                event.preventDefault();
		feedbackForm.display();
                return false;
            });

    }
}

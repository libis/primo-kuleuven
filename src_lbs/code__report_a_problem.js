{
    "description": "report a problem with a resource link",
    "active": true,
    "record": true,
    "code": function(data) {
        reportAProblem = {
            message: '',
            display: function(idx) {
                var record = $.PRIMO.records[idx];
                var tab = record.tabs.getByName('ViewOnlineTab');
                var container = tab.container;

                var report = jQuery.PRIMO.template.renderById('lbsReport-tpl', {
                    idx: idx,
		    reportAProblemTitle: getI18N().reportAProblemTitle,
		    reportAProblemContactEmail: getI18N().reportAProblemContactEmail,
		    email: ($.PRIMO.session.user.email || '')
                });
                container.append(report);

                container.find('div.EXLTabHeader').hide();
                container.find('div.EXLTabContent').hide();

                return false;
            },
            remove: function(idx) {
                var record = $.PRIMO.records[idx];
                var tab = record.tabs.getByName('ViewOnlineTab');
                var container = tab.container;

                container.find('#report_a_problem_' + idx).remove();
                container.find('div.EXLTabHeader').show();
                container.find('div.EXLTabContent').show();
                return false;
            },
            send: function(idx) {
                try {
                    var record = $.PRIMO.records[idx];
                    var tab = record.tabs.getByName('ViewOnlineTab');
                    var container = tab.container;

                    var message = container.find('#report_a_problem_' + idx + ' textarea').val();
                    var replyTo = container.find('#report_a_problem_' + idx + ' input').val();
                    var data = {
                        sessionId: $.PRIMO.session.sessionId,
                        page: $.PRIMO.query.page,
                        recordId: record.id,
                        index: idx,
                        fe: $.PRIMO.session.view.frontEndID,
                        searchType: jQuery.PRIMO.query.type,
                        query: jQuery.PRIMO.query.query.toText(),
                        view: jQuery.PRIMO.session.view.code,
                        loggedIn: $.PRIMO.session.user.isLoggedIn(),
                        onCampus: $.PRIMO.session.user.isOnCampus(),
                        user: $.PRIMO.session.user.name,
                        ip: $.PRIMO.session.ip.address,
                        type: 'resource_problem',
                        title: record.title,
			tab: jQuery.PRIMO.query.tab,
			scope: jQuery.PRIMO.query.scope,
			message: message,
			replyTo: replyTo,
                        userAgent: navigator.userAgent
                    };
                    this.remove(idx);

                    jQuery.ajax({
                        url: 'https://services.libis.be/report_a_problem',
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
                    }, function(jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown.message);
                    });

                } catch (e) {
                    console.log('Error sending report: ' + e.message);
                }
                return false;
            }
        }

        $.each($.PRIMO.records, function(i, record) {
            var viewOnlineTab = record.tabs.getByName('ViewOnlineTab');

            if (viewOnlineTab != null) {
                viewOnlineTab[0].onTabReady = function(record, container, tab) {
                    if ($(container).find('.EXLTabHeaderContent > a[id^="report_a_problem_link_"]').length == 0) {
                        $(container).find('.EXLTabHeaderContent')
                            .append('<span>|</span><a title="' + getI18N().reportAProblemTitle + '" onclick="return reportAProblem.display(' + record.index + ');" id="report_a_problem_link_' + record.index + '" href="#">' + getI18N().reportAProblem + '</a>');
                    }
                }

            }
        });

    }
}

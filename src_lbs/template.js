var libisFixesTiming = performance.now();
var i18n = {
    'default': {
        'en_US': {
            tabText: "Export",
            recordID: "record_id",
            dedupedRecord: "deduplicated record",
            bookmarkOrShare: "Bookmark or share",
            pushToToledo: "Push to Toledo",
            permLink: "Perm Link",
            print: "Print",
            printNewWindow: "Print record (opens in a new window)",
            eMail: "E-mail",
            eMailNewWindow: "Send record by E-mail(opens in a new window)",
            exportR_E: "Export to RefMan/EndNote",
            exportRIS: "Export to RIS format",
            addToCitations: "Add to citations",
	    reportAProblemTitle: "Report a problem for this resource",
	    reportAProblem: "Report a problem",
	    reportAProblemContactEmail: "Contact eMail:"
        },
        'fr_FR': {
            tabText: "Exporter",
            recordID: "record_id",
            dedupedRecord: "record d<E9>dupliqu<E9>es",
            bookmarkOrShare: "Bookmark or share",
            pushToToledo: "Push to Toledo",
            permLink: "Hyperlien permanent",
            print: "Imprimer",
            printNewWindow: "Print record (opens in a new window)",
            eMail: "Envoyer la notice par courriel",
            eMailNewWindow: "Send record by E-mail(opens in a new window)",
            exportR_E: "Exporter vers RefMan/EndNote",
            exportRIS: "Exporter vers format RIS",
            addToCitations: "Ajouter au Panier de citations",
	    reportAProblemTitle: "Signaler une erreur lien texte",
	    reportAProblem: "Signaler une erreur lien",
	    reportAProblemContactEmail: "Contact eMail:"
        },
	'nl_BE': {
	    reportAProblemTitle: "Meld een probleem met deze bron",
	    reportAProblem: "Meld een probleem",
	    reportAProblemContactEmail: "Contact eMail:",
            tabText: "Export",
            recordID: "record_id",
            dedupedRecord: "deduplicated record",
            bookmarkOrShare: "Bookmark or share",
            pushToToledo: "Push to Toledo",
            permLink: "Perm Link",
            print: "Print",
            printNewWindow: "Print record (opens in a new window)",
            eMail: "E-mail",
            eMailNewWindow: "Send record by E-mail(opens in a new window)",
            exportR_E: "Export to RefMan/EndNote",
            exportRIS: "Export to RIS format",
            addToCitations: "Add to citations",
	}
    },
    'ECB': {
        'en_US': {
            tabText: "More Options",
            recordID: "record_id",
            dedupedRecord: "deduplicated record",
            bookmarkOrShare: "Bookmark or share",
            pushToToledo: "Push to Toledo",
            permLink: "Perm Link",
            print: "Print",
            printNewWindow: "Print record (opens in a new window)",
            eMail: "E-mail",
            eMailNewWindow: "Send record by E-mail(opens in a new window)",
            exportR_E: "Export to RefMan/EndNote",
            exportRIS: "Export to RIS format",
            addToCitations: "Add to citations",
	    reportAProblemTitle: "Report a broken full text link",
	    reportAProblem: "Report a broken link",
	    reportAProblemContactEmail: "Contact eMail:"
        }
    }
};

var libisFixes = [
//$LIBIS
];

function getI18N() {
	var view = jQuery.PRIMO.session.view.code;
	var language = jQuery.PRIMO.session.view.interfaceLanguage;
	
	if (jQuery.inArray(view, Object.keys(i18n)) == -1){
	  view='default';
	}
	
	if (jQuery.inArray(language, Object.keys(i18n[view])) == -1){
	  language='en_US';
	}

	try {
		return i18n[view][language];
	} catch(error) {
		return i18n.default.en_US;
	}
}

function runFix(fix, data) {
    try {
        console.log('\tLIBIS fix:', fix.description);
        var libisFixTiming = performance.now();
        fix.code.call(this, data);
        console.log('\t\tin ' + (performance.now() - libisFixTiming) + " ms");
    } catch (error) {
        console.log("\t\tError: " + error);
    }
}

jQuery(document).ready(function() {
  try{
    console.log("\n\n\n\nGeneral UI fixes.");
    var generalFixes = jQuery.map(libisFixes, function(fix, i) {
        return (fix.active && !fix.record) ? fix : null;
    });
    jQuery(generalFixes).each(function(j, fix) {
        runFix(fix, j);
    });

    console.log("\n\n\n\nRecord fixes.");
    var recordFixes = jQuery.map(libisFixes, function(fix, i) {
        return (fix.active && fix.record) ? fix : null;
    });
    jQuery.PRIMO.records.each(function(i, record) {
        console.log(record.id);
        jQuery(recordFixes).each(function(j, fix) {
            runFix(fix, record);
        });
    });
  } catch(error) {
    console.log(error);
  }

  console.log("Fixes ran in : " + Math.round(performance.now() - libisFixesTiming) + " ms");
});


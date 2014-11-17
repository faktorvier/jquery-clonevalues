/*! jQuery clone with form values v1.0.1 | (c) 2014 FAKTOR VIER GmbH | http://faktorvier.ch */

(function($) {
	$.fn.cloneValues = function(withDataAndEvents, deepWithDataAndEvents) {
		// Set default values
		withDataAndEvents = withDataAndEvents || false;
		deepWithDataAndEvents = deepWithDataAndEvents || withDataAndEvents;

		// Set and check input/textarea values
		this.find('input, textarea').each(function() {
			if($(this).is(find('input[type="checkbox"], input[type="radio"]'))) {
				$(this).attr('checked', $(this).prop('checked'));
			} else if($(this).get(0).tagName.toLowerCase() == 'textarea') {
				$(this).html($(this).val());
			} else {
				$(this).attr('value', $(this).val());
			}
		});

		// Select selected options
		this.find('select option').each(function() {
			$(this).attr('selected', $(this).prop('selected'));
		});

		// Clone object
		var $clonedObject = this.clone(withDataAndEvents, deepWithDataAndEvents);

		return $clonedObject;
	};
}(jQuery));
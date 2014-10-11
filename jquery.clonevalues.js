/*! jQuery clone with form values v1.0.0 | (c) 2014 FAKTOR VIER GmbH | http://faktorvier.ch */

(function($) {
	$.fn.cloneValues = function(withDataAndEvents, deepWithDataAndEvents) {
		// Set default values
		withDataAndEvents = withDataAndEvents || false;
		deepWithDataAndEvents = deepWithDataAndEvents || withDataAndEvents;

		// Clone object
		var $clonedObject = this.clone(withDataAndEvents, deepWithDataAndEvents);

		// Set and check input/textarea values
		$clonedObject.find('input, textarea').each(function() {
			if($(this).is(find('input[type="checkbox"], input[type="radio"]'))) {
				$(this).prop('checked', $(this).prop('checked'));
			} else {
				$(this).attr('value', $(this).val());
			}
		});

		// Select selected options
		$clonedObject.find('select option').each(function() {
			$(this).prop('selected', $(this).prop('selected'));
		});

		return $clonedObject;
	};
}(jQuery));
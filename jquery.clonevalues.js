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
			if(jQuery(this).is(find('input[type="checkbox"], input[type="radio"]'))) {
				jQuery(this).prop('checked', jQuery(this).prop('checked'));
			} else {
				jQuery(this).attr('value', jQuery(this).val());
			}
		});

		// Select selected options
		$clonedObject.find('select option').each(function() {
			jQuery(this).prop('selected', jQuery(this).prop('selected'));
		});

		return $clonedObject;
	};
}(jQuery));
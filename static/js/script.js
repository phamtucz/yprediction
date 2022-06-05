var plans = {
	1: {
		name: "Lite",
		amount: 9900
	},
	2: {
		name: "Pro",
		amount: 19900
	},
	3: {
		name: "Elite",
		amount: 29900
	}
}

var STF_EMBEDDED = window.location.href.indexOf("shopthisfeed.com") == -1 &&
				   window.location.href.indexOf("localhost") == -1;

function setImageHeightEqualsWidth(element) {
	element.css("height", element.css("width"));
}


/* for multi link things */
function createDotLink(number, url, posX, posY, item_link_id) {
	var $s = $("<a class='dot_link'></a>");
	$s.attr("href", url)
		.data("itemlinkd", item_link_id)
	 	.html(number)
	 	.css("top", posY)
	 	.css("left", posX);

	$s.click(function() {
		$.ajax({
			url: "//www.shopthisfeed.com/f/record_item_hit",
			type: "post",
			data: { item_link_id: item_link_id }
		});
	});

	return $s;
}


function createViewLink(link_obj, index, mobile) {
	var link_url = link_obj.item_url;
	var thumbnail_url = link_obj.item_thumbnail_url;
	var link_id = link_obj.id;

	var $img = $("<img>").attr("src", thumbnail_url);

	var $s = createDotLink(index+1, link_url, 5, 5);
	var $a = $("<a></a>")
		.attr("href", link_url)
		.data("itemlinkid", link_id)
		.html($img).append($s);

	$a.addClass("item_link");

	$a.click(function() {
		$.ajax({
			url: "//www.shopthisfeed.com/f/record_item_hit",
			type: "post",
			data: { item_link_id: link_id }
		});
	});

	if (mobile) {
		$a.addClass("col-fluid");
	} else {
		$a.addClass("col-sm-6");
	}
	return $a;
}

function validateURL(textval) {
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);
	if (textval.match(regex) )
	{
		return true;
	} else {
		return false;
	}
}

function validateURLOld(textval) {
    var urlregex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    return urlregex.test(textval);
}

function isTouchDevice() {return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}


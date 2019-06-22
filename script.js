$(document).ready(function(){

if($("#container").size()>0){
				if (document.createStyleSheet){
						document.createStyleSheet('style.css');
				}
				else {
						$("head").append($("<link rel='stylesheet' href='style.css' type='text/css' media='screen' />"));
				}
		}
});

// Constants
var tax = 1.065,
	ppp = 1219*tax,
	pp = 1119*tax,
	pppfl = 999*tax,
	ppfl = 899*tax,
	gp = 699*tax,
	sp = 519*tax,
	tpsp = 439*tax,
	wsp = 349*tax,
	eafp = 309*tax,
	ticket = 44.80,
	hopper = 7.47,
	photopass = 169,
	apFoodDiscount = 0.1,
	apMerchDiscount = 0.2,
	wonderlandDiscount = 0.2,
	regWonderlandCost = 175,
	apWonderlandCost = 150,
	regTip = 0.18,
	apTip = 0.18,
	visaFoodDiscount = 0.1,
	visaMerchDiscount = 0.1,
	t1HotelDiscount = 0.3,
	t2HotelDiscount = 0.25,
	t3HotelDiscount = 0.2,
	t4HotelDiscount = 0.15,
	// Hotels
	// Disney Vacation Club Rental
	point = 17,
	akldvchotel = 8*point,
	bltdvchotel = 14*point,
	bcdvchotel = 15*point,
	bwdvchotel = 10*point,
	gfdvchotel = 17*point,
	okwdvchotel = 10*point,
	pvdvchotel = 16*point,
	rdvchotel = 12*point,
	ssdvchotel = 11*point,
	wldvchotel = 15*point,
	// Deluxe Hotels
	aklhotel = 417,
	bchotel = 487,
	bwhotel = 533,
	conhotel = 498,
	gfhotel = 710,
	pvhotel = 593,
	wlhotel = 406,
	ychotel = 487,
	// Moderate Hotels
	cbhotel = 230,
	cshotel = 223,
	pohotel = 246,
	// Value Hotels
	amohotel = 112,
	amuhotel = 112,
	asphotel = 112,
	aoahotel = 180,
	aoashotel = 366,
	pchotel = 154,
	fwhotel = 400,
	// Off-Site or Custom Price
	offhotel = 100,

	// Constants Array for Table
	constants = [
		[ "Platinum Pass Plus", "$" + (ppp).toFixed(2) ],
		[ "Plainum Pass", "$" + (pp).toFixed(2) ],
		[ "Platinum Pass Plus (FL/DVC)", "$" + (pppfl).toFixed(2) ],
		[ "Plainum Pass (FL/DVC)", "$" + (ppfl).toFixed(2) ],
		[ "Gold Pass (FL/DVC)", "$" + (gp).toFixed(2) ],
		[ "Silver Pass (FL/DVC)", "$" + (sp).toFixed(2) ],
		[ "Theme Park Select Pass (FL/DVC)", "$" + (tpsp).toFixed(2) ],
		[ "Weekday Select Pass (FL/DVC)", "$" + (wsp).toFixed(2) ],
		[ "EPCOT After 4 Pass (FL/DVC)", "$" + (eafp).toFixed(2) ],
		[ "Ticket/Day", "$" + (ticket).toFixed(2) ],
		[ "Hopper/Day", "$" + (hopper).toFixed(2) ],
		[ "Photopass", "$" + (photopass).toFixed(2) ],
		[ "AP Food Discount", (apFoodDiscount * 100).toFixed(0) + "%" ],
		[ "AP Merch Discount", (apMerchDiscount * 100).toFixed(0) + "%" ],
		[ "VISA Food Discount", (visaFoodDiscount * 100).toFixed(0) + "%" ],
		[ "VISA Merch Discount", (visaMerchDiscount * 100).toFixed(0) + "%" ],
    [ "Tier 1 Hotel Discount", (t1HotelDiscount * 100).toFixed(0) + "%" ],
		[ "Tier 2 Hotel Discount", (t1HotelDiscount * 100).toFixed(0) + "%" ],
		[ "Tier 3 Hotel Discount", (t1HotelDiscount * 100).toFixed(0) + "%" ],
		[ "Tier 4 Hotel Discount", (t1HotelDiscount * 100).toFixed(0) + "%" ]
	],

	// Hotels Array for Table
	hotels = [
		[ "Animal Kingdom Lodge (DVC)", "$" + (akldvchotel).toFixed(2) ],
		[ "Bay Lake Tower (DVC)", "$" + (bltdvchotel).toFixed(2) ],
		[ "Beach Club (DVC)", "$" + (bcdvchotel).toFixed(2) ],
		[ "BoardWalk Inn (DVC)", "$" + (bwdvchotel).toFixed(2) ],
		[ "Grand Floridian (DVC)", "$" + (gfdvchotel).toFixed(2) ],
		[ "Old Key West (DVC)", "$" + (okwdvchotel).toFixed(2) ],
		[ "Polynesian Village (DVC)", "$" + (pvdvchotel).toFixed(2) ],
		[ "Riviera (DVC)", "$" + (rdvchotel).toFixed(2) ],
		[ "Saratoga Springs (DVC)", "$" + (ssdvchotel).toFixed(2) ],
		[ "Wilderness Lodge (DVC)", "$" + (wldvchotel).toFixed(2) ],
		[ "Animal Kingdom Lodge", "$" + (aklhotel).toFixed(2) ],
		[ "Beach Club", "$" + (bchotel).toFixed(2) ],
		[ "BoardWalk Inn", "$" + (bwhotel).toFixed(2) ],
		[ "Contemporary", "$" + (conhotel).toFixed(2) ],
		[ "Grand Floridian", "$" + (gfhotel).toFixed(2) ],
		[ "Polynesian Village", "$" + (pvhotel).toFixed(2) ],
		[ "Wilderness Lodge", "$" + (wlhotel).toFixed(2) ],
		[ "Yacht Club", "$" + (ychotel).toFixed(2) ],
		[ "Caribbean Beach", "$" + (cbhotel).toFixed(2) ],
		[ "Coronado Springs", "$" + (cshotel).toFixed(2) ],
		[ "Port Orleans", "$" + (pohotel).toFixed(2) ],
		[ "All-Star Movies", "$" + (amohotel).toFixed(2) ],
		[ "All-Star Music", "$" + (amuhotel).toFixed(2) ],
		[ "All-Star Sports", "$" + (asphotel).toFixed(2) ],
		[ "Art of Animation", "$" + (aoahotel).toFixed(2) ],
		[ "Art of Animation - Suites", "$" + (aoashotel).toFixed(2) ],
		[ "Pop Century", "$" + (pchotel).toFixed(2) ],
		[ "Fort Wilderness", "$" + (fwhotel).toFixed(2) ],
		[ "Off-Site", "$" + (offhotel).toFixed(2) ]
	];

// Create Constants DataTable
$( '#chartconstants' )
	.DataTable( {
		data: constants,
		columns: [
			{ title: "Item" },
			{ title: "Value",	orderable: false }
        ],
		paging: false,
		info: false,
		searching: false,
	} );

// Create Hotels DataTable
$( '#charthotels' )
	.DataTable( {
		data: hotels,
		columns: [
			{ title: "Hotel" },
			{ title: "Cost/Night" }
        ],
		paging: false,
		info: false,
		searching: false
	} );
	$('th').addClass('table-toggle btn-outline-dark');

// Copy Data from Typical to Annual Pass
copydata = function() {
		// Typical Trip Variables
		var regNum = Number($("#reg_num").val())-1,
		regAP = 1,
		regUpgrade = Number($("#reg_upgrade").val()),
		regDays = Number($("#reg_days").val()),
		regFood = Number($("#reg_food").val()),
		regTrips = Number($("#reg_trips").val()),
		regNights = Number($("#reg_nights").val()),
		regRooms = Number($("#reg_rooms").val()),
		regRoomsPeople = Number($("#reg_rooms_people").val()),
		regMerch = Number($("#reg_merch").val()),
		regWonderland = Number($("#reg_wonderland").val());
		// Copy to AP
		$("#ap_num").val(regAP);
		$("#ap_reg_num").val(regNum);
		$("#ap_reg_upgrade").val(regUpgrade);
		$("#ap_days").val(regDays);
		$("#ap_food").val(regFood);
		$("#ap_trips").val(regTrips);
		$("#ap_nights").val(regNights);
		$("#ap_rooms").val(regRooms);
		$("#ap_rooms_people").val(regRoomsPeople);
		$("#ap_merch").val(regMerch);
		$("#ap_wonderland").val(regWonderland);
};
// Calculate AP and Create DataTable
calculate = function() {
	var customhotel = Number($("#custom_hotel").val()),
		// Typical Trip Variables
		regVisa = Number($("#reg_visa").val()),
		regFoodDiscount = 0,
		regMerchDiscount = 0,
		regPhotopass = Number($("#reg_photopass").val()),
		regNum = Number($("#reg_num").val()),
		regUpgrade = Number($("#reg_upgrade").val()),
		regDays = Number($("#reg_days").val()),
		regFood = Number($("#reg_food").val()),
		regTrips = Number($("#reg_trips").val()),
		regNights = Number($("#reg_nights").val()),
		regRooms = Number($("#reg_rooms").val()),
		regRoomsPeople = Number($("#reg_rooms_people").val()),
		regMerch = Number($("#reg_merch").val()),
		regWonderland = Number($("#reg_wonderland").val()),
		// Annual Pass Trip Variables
		apNum = Number($("#ap_num").val()),
		apUpgrade = Number($("#ap_upgrade").val()),
		apRegNum = Number($("#ap_reg_num").val()),
		apRegUpgrade = Number($("#ap_reg_upgrade").val()),
		apDays = Number($("#ap_days").val()),
		apFood = Number($("#ap_food").val()),
		apTrips = Number($("#ap_trips").val()),
		apNights = Number($("#ap_nights").val()),
		apRooms = Number($("#ap_rooms").val()),
		apRoomsPeople = Number($("#ap_rooms_people").val()),
		apMerch = Number($("#ap_merch").val()),
		apWonderland = Number($("#ap_wonderland").val());
	// Optional Variables
	// Calculations
	if ( regPhotopass > 0 ) {
		regPhotopass = photopass;
	} else {
		regPhotopass = 0;
	}
	if ( regVisa > 0 ) {
		regFoodDiscount = visaFoodDiscount;
		regMerchDiscount = visaMerchDiscount;
	} else {
		regFoodDiscount = 0;
		regMerchDiscount = 0;
	}
	if ( regWonderland > 0 ) {
		regFoodDiscount = wonderlandDiscount;
		regWonderlandCost = regWonderlandCost;
		regTip = 0;
	} else {
		regFoodDiscount = regFoodDiscount;
		regWonderlandCost = 0;
		regTip = regTip;
	}
	if ( regUpgrade > 0 ) {
		regUpgrade = hopper;
	} else {
		regUpgrade = 0;
	}
	if ( apUpgrade === 0 ) {
		apUpgrade = ppp;
	} else if ( apUpgrade === 1 ) {
		apUpgrade = pp;
	} else if ( apUpgrade === 2 ) {
		apUpgrade = pppfl;
	} else if ( apUpgrade === 3 ) {
		apUpgrade = ppfl;
	} else if ( apUpgrade === 4 ) {
		apUpgrade = gp;
	} else if ( apUpgrade === 5 ) {
		apUpgrade = sp;
	} else if ( apUpgrade === 6 ) {
		apUpgrade = tpsp;
	} else if ( apUpgrade === 7 ) {
		apUpgrade = wsp;
	} else if ( apUpgrade === 8 ) {
		apUpgrade = eafp;
	} else {
		apUpgrade =pp;
	}
	if ( apRegUpgrade > 0 ) {
		apRegUpgrade = hopper;
	} else {
		apRegUpgrade = 0;
	}
	if ( apWonderland > 0 ) {
		apFoodDiscount = wonderlandDiscount;
		apWonderlandCost = apWonderlandCost;
		apTip = 0;
	} else {
		apFoodDiscount = apFoodDiscount;
		apWonderlandCost = 0;
		apTip = apTip;
	}
	var resorts = [
	  [ "Animal Kingdom Lodge (DVC)", akldvchotel, 0],
	  [ "Bay Lake Tower (DVC)", bltdvchotel, 0],
	  [ "Beach Club (DVC)", bcdvchotel, 0],
	  [ "BoardWalk Inn (DVC)", bwdvchotel, 0],
	  [ "Grand Floridian (DVC)", gfdvchotel, 0],
	  [ "Old Key West (DVC)", okwdvchotel, 0],
	  [ "Polynesian Village (DVC)", pvdvchotel, 0],
	  [ "Riviera (DVC)", rdvchotel, 0],
	  [ "Saratoga Springs (DVC)", ssdvchotel, 0],
	  [ "Wilderness Lodge (DVC)", wldvchotel, 0],
	  [ "Animal Kingdom Lodge", aklhotel, t1HotelDiscount],
	  [ "Beach Club", bchotel, 	t3HotelDiscount],
	  [ "BoardWalk Inn", bwhotel, t1HotelDiscount],
	  [ "Contemporary", conhotel, t3HotelDiscount],
	  [ "Grand Floridian", gfhotel, t2HotelDiscount],
	  [ "Polynesian Village", pvhotel, t3HotelDiscount],
	  [ "Wilderness Lodge", wlhotel, t1HotelDiscount],
	  [ "Yacht Club", ychotel, t1HotelDiscount],
	  [ "Caribbean Beach", cbhotel, t3HotelDiscount],
	  [ "Coronado Springs", cshotel, t3HotelDiscount],
	  [ "Port Orleans", pohotel,	t3HotelDiscount],
	  [ "All-Star Movies", amohotel, t4HotelDiscount],
	  [ "All-Star Music", amuhotel, t4HotelDiscount],
	  [ "All-Star Sports", asphotel, t4HotelDiscount],
	  [ "Art of Animation", aoahotel, t4HotelDiscount],
	  [ "Art of Animation - Suites", aoashotel, t4HotelDiscount],
	  [ "Pop Century", pchotel, t4HotelDiscount],
	  [ "Fort Wilderness", fwhotel, t2HotelDiscount],
	  [ "Off-Site", offhotel, 0],
	  [ "Custom", customhotel, 0]
	];

	// Base Calculations
	var apmargin = (apNum * apDays * hopper) + ( photopass * apTrips ) +
								( apFood * apFoodDiscount * ( apNum + apRegNum ) * apDays * ( 1 - apTip ) ) +
								( apFood * apFoodDiscount * ( apNum +	apRegNum ) * apDays * apTip ) +
								( apMerch * apMerchDiscount ) - ( apWonderlandCost ) - ( apNum * apUpgrade ),
			ap = ( apNum * apUpgrade ) + ( apRegNum * ( ticket + apRegUpgrade ) * apDays ) +
					( apFood * ( 1 - apFoodDiscount ) * ( apNum + apRegNum ) * apDays *
					( 1 + apTip ) ) + ( apMerch * ( 1 - apMerchDiscount ) ),
		typ = ( photopass * regTrips ) + ( regNum * ( ticket + regUpgrade ) * regDays ) +
				( regFood * ( 1 - regFoodDiscount ) * regNum * regDays * ( 1 + regTip ) ) +
				( regMerch * ( 1 - regMerchDiscount ) );

	var results = [
		["Excluding Hotel", (apmargin).toFixed(2), (ap).toFixed(2), (typ-ap).toFixed(2), (typ).toFixed(2)]
	];
  var resortapmargin, resortap, resorttyp;

	// Invidiual Calculations
	$.each(resorts, function (i) {
		// Without Room Discount
	  if (resorts[i][2] === 0) {
	    resortapmargin = apmargin;
	    resortap = ( resorts[i][1] * apNights * apRooms ) + ap;
	    resorttyp = ( resorts[i][1] * regNights * regRooms ) + typ;
	    results.push([resorts[i][0], (resortapmargin).toFixed(2), (resortap).toFixed(2), (resorttyp-resortap).toFixed(2), (resorttyp).toFixed(2)]);
	  }
		// With Room Discount
	  else {
	    resortapmargin = ( resorts[i][1] * resorts[i][2] * apNights * apRooms ) + apmargin;
	    resortap = ( resorts[i][1] * ( 1 - resorts[i][2] ) * apNights * apRooms ) + ap;
	    resorttyp = ( resorts[i][1] * regNights * regRooms ) + typ;
	    results.push([resorts[i][0], (resortapmargin).toFixed(2), (resortap).toFixed(2), (resorttyp-resortap).toFixed(2), (resorttyp).toFixed(2)]);
	  }
	});

	// Display Calculations
	$( '#chart' )
		.DataTable( {
			destroy: true,
			data: results,
			columns: [
				{ title: "Hotel" },
				{ title: "AP Loss(-)/Savings(+)", className: "compare" },
				{ title: "AP Cost per Year" },
				{ title: "Regular - AP Cost", className: "compare" },
				{ title: "Regular Cost per Year" }
        ],
			processing: true,
			stateSave: true,
			paging: false,
			info: false,
			searching: false,
			responsive: true,
			fixedHeader: true
		} );

		$('th').addClass('table-toggle btn-outline-dark');
		var table = document.getElementById('chart');
		var tbody = table.getElementsByTagName('tbody')[0];
		var cells = tbody.getElementsByTagName('td');

		for (var i=0, len=cells.length; i<len; i++){
		  if (Number(cells[i].innerHTML) > 0 && cells[i].classList.contains('compare')){
		      cells[i].className = 'uk-text-success';
		  }
		  else if (Number(cells[i].innerHTML) < 0 && cells[i].classList.contains('compare')){
		      cells[i].className = 'uk-text-danger';
		  }
		}
		$('#chart td:not(:first-child)').prepend('$');
};

// Smooth Scroll To Content
// Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
$( document )
	.ready( function() {
		// Add smooth scrolling to all links
		$( "#tocontent" )
			.on( 'click', function( event ) {
				// Make sure this.hash has a value before overriding default behavior
				if ( this.hash !== "" ) {
					// Prevent default anchor click behavior
					event.preventDefault();
					// Store hash
					var hash = this.hash;
					// Using jQuery's animate() method to add smooth page scroll
					// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
					$( 'html, body' )
						.animate( {
							scrollTop: $( hash )
								.offset()
								.top
						}, 800 );
				} // End if
			} );
	} );
// Show License Modal
// Source: Bootstrap
$( '#license' )
	.on( 'shown.bs.modal', function() {
		$( '#license' )
			.trigger( 'focus' );
	} );
// Round Values
function round( value, decimals ) {
	return Number( value.toFixed( decimals ));
}
// Main JS for Calculator and DataTables
// Constants
var pp = 829.64,
	ppp = 925.49,
	ticket = 48.99,
	hopper = 7.98,
	photopass = 169,
	apFoodDiscount = 0.15,
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
	akldvchotel = 114,
	bltdvchotel = 224,
	bcdvchotel = 240,
	bwdvchotel = 160,
	gfdvchotel = 272,
	okwdvchotel = 160,
	pvdvchotel = 256,
	ssdvchotel = 176,
	wldvchotel = 240,
	// Deluxe Hotels
	aklhotel = 378,
	bchotel = 441,
	bwhotel = 483,
	conhotel = 450,
	gfhotel = 646,
	pvhotel = 536,
	wlhotel = 366,
	ychotel = 441,
	// Moderate Hotels
	cbhotel = 187,
	cshotel = 201,
	pohotel = 224,
	// Value Hotels
	amohotel = 110,
	amuhotel = 110,
	asphotel = 110,
	aoahotel = 148,
	aoashotel = 354,
	pchotel = 126,
	fwhotel = 364,
	// Off-Site or Custom Price
	offhotel = 90,
	// Constants Array
	constants = [
		[ "Platinum Pass +", "$" + round( ppp, 2 ) ],
		[ "Plainum Pass", "$" + round( pp, 2 ) ],
		[ "Ticket/Day", "$" + round( ticket, 2 ) ],
		[ "Hopper/Day", "$" + round( hopper, 2 ) ],
		[ "Photopass", "$" + round( photopass, 2 ) ],
		[ "AP Food Discount", round( apFoodDiscount * 100, 0 ) + "%" ],
		[ "AP Merch Discount", round( apMerchDiscount * 100, 0 ) + "%" ],
		[ "VISA Food Discount", round( visaFoodDiscount * 100, 0 ) + "%" ],
		[ "VISA Merch Discount", round( visaMerchDiscount * 100, 0 ) + "%" ],
    [ "Tier 1 Hotel Discount", round( t1HotelDiscount * 100, 0 ) + "%" ],
		[ "Tier 2 Hotel Discount", round( t1HotelDiscount * 100, 0 ) + "%" ],
		[ "Tier 3 Hotel Discount", round( t1HotelDiscount * 100, 0 ) + "%" ],
		[ "Tier 4 Hotel Discount", round( t1HotelDiscount * 100, 0 ) + "%" ]
	],
	// Hotels Array
	hotels = [
		[ "Animal Kingdom Lodge (DVC)", "$" + round( akldvchotel, 2 ) ],
		[ "Bay Lake Tower (DVC)", "$" + round( bltdvchotel, 2 ) ],
		[ "Beach Club (DVC)", "$" + round( bcdvchotel, 2 ) ],
		[ "BoardWalk Inn (DVC)", "$" + round( bwdvchotel, 2 ) ],
		[ "Grand Floridian (DVC)", "$" + round( gfdvchotel, 2 ) ],
		[ "Old Key West (DVC)", "$" + round( okwdvchotel, 2 ) ],
		[ "Grand Floridian", "$" + round( gfhotel, 2 ) ],
		[ "Polynesian Village (DVC)", "$" + round( pvdvchotel, 2 ) ],
		[ "Saratoga Springs (DVC)", "$" + round( ssdvchotel, 2 ) ],
		[ "Wilderness Lodge (DVC)", "$" + round( wldvchotel, 2 ) ],
		[ "Animal Kingdom Lodge", "$" + round( aklhotel, 2 ) ],
		[ "Beach Club", "$" + round( bchotel, 2 ) ],
		[ "BoardWalk Inn", "$" + round( bwhotel, 2 ) ],
		[ "Contemporary", "$" + round( conhotel, 2 ) ],
		[ "Grand Floridian", "$" + round( gfhotel, 2 ) ],
		[ "Polynesian Village", "$" + round( pvhotel, 2 ) ],
		[ "Wilderness Lodge", "$" + round( wlhotel, 2 ) ],
		[ "Yacht Club", "$" + round( ychotel, 2 ) ],
		[ "Caribbean Beach", "$" + round( cbhotel, 2 ) ],
		[ "Coronado Springs", "$" + round( cshotel, 2 ) ],
		[ "Port Orleans", "$" + round( pohotel, 2 ) ],
		[ "All-Star Movies", "$" + round( amohotel, 2 ) ],
		[ "All-Star Music", "$" + round( amuhotel, 2 ) ],
		[ "All-Star Sports", "$" + round( asphotel, 2 ) ],
		[ "Art of Animation", "$" + round( aoahotel, 2 ) ],
		[ "Art of Animation - Suites", "$" + round( aoashotel, 2 ) ],
		[ "Pop Century", "$" + round( pchotel, 2 ) ],
		[ "Fort Wilderness", "$" + round( fwhotel, 2 ) ],
		[ "Off-Site", "$" + round( offhotel, 2 ) ]
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
// Calculate AP and Create DataTable
calculate = function() {
	var customhotel = Number(document.getElementById( "custom_hotel" ).value),
		// Typical Trip Variables
		regVisa = Number(document.getElementById( "reg_visa" ).value),
		regFoodDiscount = 0,
		regMerchDiscount = 0,
		regPhotopass = Number(document.getElementById( "reg_photopass" ).value),
		regNum = Number(document.getElementById( "reg_num" ).value),
		regUpgrade = Number(document.getElementById( "reg_upgrade" ).value),
		regDays = Number(document.getElementById( "reg_days" ).value),
		regFood = Number(document.getElementById( "reg_food" ).value),
		regTrips = Number(document.getElementById( "reg_trips" ).value),
		regNights = Number(document.getElementById( "reg_nights" ).value),
		regRooms = Number(document.getElementById( "reg_rooms" ).value),
		regRoomsPeople = Number(document.getElementById( "reg_rooms_people" ).value),
		regMerch = Number(document.getElementById( "reg_merch" ).value),
		regWonderland = Number(document.getElementById( "reg_wonderland" ).value),
		// Annual Pass Trip Variables
		apNum = Number(document.getElementById( "ap_num" ).value),
		apUpgrade = Number(document.getElementById( "ap_upgrade" ).value),
		apRegNum = Number(document.getElementById( "ap_reg_num" ).value),
		apRegUpgrade = Number(document.getElementById( "ap_reg_upgrade" ).value),
		apDays = Number(document.getElementById( "ap_days" ).value),
		apFood = Number(document.getElementById( "ap_food" ).value),
		apTrips = Number(document.getElementById( "ap_trips" ).value),
		apNights = Number(document.getElementById( "ap_nights" ).value),
		apRooms = Number(document.getElementById( "ap_rooms" ).value),
		apRoomsPeople = Number(document.getElementById( "ap_rooms_people" ).value),
		apMerch = Number(document.getElementById( "ap_merch" ).value),
		apWonderland = Number(document.getElementById( "ap_wonderland" ).value);
	// Optional Variables
	// Calculations
	if ( regPhotopass > 0 ) {
		regPhotopass = photopass;
	} else {
		regPhotopass = 0;
	};
	if ( regVisa > 0 ) {
		regFoodDiscount = visaFoodDiscount;
		regMerchDiscount = visaMerchDiscount;
	} else {
		regFoodDiscount = 0;
		regMerchDiscount = 0;
	};
	if ( regWonderland > 0 ) {
		regFoodDiscount = wonderlandDiscount;
		regWonderlandCost = regWonderlandCost;
		regTip = 0;
	} else {
		regFoodDiscount = regFoodDiscount;
		regWonderlandCost = 0;
		regTip = regTip;
	};
	if ( regUpgrade > 0 ) {
		regUpgrade = hopper;
	} else {
		regUpgrade = 0;
	};
	if ( apUpgrade > 0 ) {
		apUpgrade = ppp;
	} else {
		apUpgrade = pp;
	};
	if ( apRegUpgrade > 0 ) {
		apRegUpgrade = hopper;
	} else {
		apRegUpgrade = 0;
	};
	if ( apWonderland > 0 ) {
		apFoodDiscount = wonderlandDiscount;
		apWonderlandCost = apWonderlandCost;
		apTip = 0;
	} else {
		apFoodDiscount = apFoodDiscount;
		apWonderlandCost = 0;
		apTip = apTip;
	};
	// Base Calculations
	var apmargin = ( photopass * apTrips ) + ( apFood * apFoodDiscount * ( apNum +
			apRegNum ) * apDays * ( 1 - apTip ) ) + ( apFood * apFoodDiscount * ( apNum +
					apRegNum ) * apDays * apTip ) + ( apMerch * apMerchDiscount ) - (
			apWonderlandCost ) - ( apNum * apUpgrade ),
		ap = ( apNum * apUpgrade ) + ( apRegNum * ( ticket + apRegUpgrade ) * apDays ) +
		( apFood * ( 1 - apFoodDiscount ) * ( apNum + apRegNum ) * apDays * ( 1 +
			apTip ) ) + ( apMerch * ( 1 - apMerchDiscount ) ),
		typ = ( photopass * regTrips ) + ( regNum * ( ticket + regUpgrade ) *
			regDays ) + ( regFood * ( 1 - regFoodDiscount ) * regNum * regDays * (
			1 + regTip ) ) + ( regMerch * ( 1 - regMerchDiscount ) ),
		// Disney Vacation Club Rental
		dvcapmargin = round( apmargin, 2 ),
		// Animal Kingdom Lodge (DVC) Calculations
		akldvcap = round( ( akldvchotel * apNights * apRooms ) + ap, 2 ),
		akldvctyp = round( ( akldvchotel * regNights * regRooms ) + typ, 2 ),
		// Bay Lake Tower (DVC) Calculations
		bltdvcap = round( ( bltdvchotel * apNights * apRooms ) + ap, 2 ),
		bltdvctyp = round( ( bltdvchotel * regNights * regRooms ) + typ, 2 ),
		// Beach Club (DVC) Calculations
		bcdvcap = round( ( bcdvchotel * apNights * apRooms ) + ap, 2 ),
		bcdvctyp = round( ( bcdvchotel * regNights * regRooms ) + typ, 2 ),
		// BoardWalk Inn (DVC) Calculations
		bwdvcap = round( ( bwdvchotel * apNights * apRooms ) + ap, 2 ),
		bwdvctyp = round( ( bwdvchotel * regNights * regRooms ) + typ, 2 ),
		// Grand Floridan (DVC) Calculations
		gfdvcap = round( ( gfdvchotel * apNights * apRooms ) + ap, 2 ),
		gfdvctyp = round( ( gfdvchotel * regNights * regRooms ) + typ, 2 ),
		// Old Key West (DVC) Calculations
		okwdvcap = round( ( okwdvchotel * apNights * apRooms ) + ap, 2 ),
		okwdvctyp = round( ( okwdvchotel * regNights * regRooms ) + typ, 2 ),
		// Polynesian Village (DVC) Calculations
		pvdvcap = round( ( pvdvchotel * apNights * apRooms ) + ap, 2 ),
		pvdvctyp = round( ( pvdvchotel * regNights * regRooms ) + typ, 2 ),
		// Saratoga Springs (DVC) Calculations
		ssdvcap = round( ( ssdvchotel * apNights * apRooms ) + ap, 2 ),
		ssdvctyp = round( ( ssdvchotel * regNights * regRooms ) + typ, 2 ),
		// Wilderness Lodge (DVC) Calculations
		wldvcap = round( ( wldvchotel * apNights * apRooms ) + ap, 2 ),
		wldvctyp = round( ( wldvchotel * regNights * regRooms ) + typ, 2 ),
		// Delux Hotels
		// Animal Kingdom Lodge Calculations
		aklapmargin = round( ( aklhotel * t1HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		aklap = round( ( aklhotel * ( 1 - t1HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		akltyp = round( ( aklhotel * regNights * regRooms ) + typ, 2 ),
		// Beach Club Calculations
		bcapmargin = round( ( bchotel * t3HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		bcap = round( ( bchotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		bctyp = round( ( bchotel * regNights * regRooms ) + typ, 2 ),
		// BoardWalk Inn Calculations
		bwapmargin = round( ( bwhotel * t1HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		bwap = round( ( bwhotel * ( 1 - t1HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		bwtyp = round( ( bwhotel * regNights * regRooms ) + typ, 2 ),
		// Contemporary Calculations
		conapmargin = round( ( conhotel * t3HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		conap = round( ( conhotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		contyp = round( ( conhotel * regNights * regRooms ) + typ, 2 ),
		// Grand Floridan Calculations
		gfapmargin = round( ( gfhotel * t2HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		gfap = round( ( gfhotel * ( 1 - t2HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		gftyp = round( ( gfhotel * regNights * regRooms ) + typ, 2 ),
		// Polynesian Village Calculations
		pvapmargin = round( ( pvhotel * t3HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		pvap = round( ( pvhotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		pvtyp = round( ( pvhotel * regNights * regRooms ) + typ, 2 ),
		// Wilderness Lodge Calculations
		wlapmargin = round( ( wlhotel * t1HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		wlap = round( ( wlhotel * ( 1 - t1HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		wltyp = round( ( wlhotel * regNights * regRooms ) + typ, 2 ),
		// Yacht Club Calculations
		ycapmargin = round( ( ychotel * t1HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		ycap = round( ( ychotel * ( 1 - t1HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		yctyp = round( ( ychotel * regNights * regRooms ) + typ, 2 ),
		// Moderate Hotels
		// Caribbean Beach Calculations
		cbapmargin = round( ( cbhotel * t3HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		cbap = round( ( cbhotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		cbtyp = round( ( cbhotel * regNights * regRooms ) + typ, 2 ),
		// Coronado Springs Calculations
		csapmargin = round( ( cshotel * t3HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		csap = round( ( cshotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		cstyp = round( ( cshotel * regNights * regRooms ) + typ, 2 ),
		// Port Orleans Calculations
		poapmargin = round( ( pohotel * t3HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		poap = round( ( pohotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		potyp = round( ( pohotel * regNights * regRooms ) + typ, 2 ),
		// Value Resorts
		// All-Star Movies Calculations
		amoapmargin = round( ( amohotel * t4HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		amoap = round( ( amohotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		amotyp = round( ( amohotel * regNights * regRooms ) + typ, 2 ),
		// All-Star Music Calculations
		amuapmargin = round( ( amuhotel * t4HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		amuap = round( ( amuhotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		amutyp = round( ( amuhotel * regNights * regRooms ) + typ, 2 ),
		// All-Star Sports Calculations
		aspapmargin = round( ( asphotel * t4HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		aspap = round( ( asphotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		asptyp = round( ( asphotel * regNights * regRooms ) + typ, 2 ),
		// Art of Animation Calculations
		aoaapmargin = round( ( aoahotel * t4HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		aoaap = round( ( aoahotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		aoatyp = round( ( aoahotel * regNights * regRooms ) + typ, 2 ),
		// Art of Animation - Suites Calculations
		aoasapmargin = round( ( aoashotel * t4HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		aoasap = round( ( aoashotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		aoastyp = round( ( aoashotel * regNights * regRooms ) + typ, 2 ),
		// Pop Century Calculations
		pcapmargin = round( ( pchotel * t4HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		pcap = round( ( pchotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		pctyp = round( ( pchotel * regNights * regRooms ) + typ, 2 ),
		// Fort Wilderness Calculations
		fwapmargin = round( ( fwhotel * t2HotelDiscount * apNights * apRooms ) +
			apmargin, 2 ),
		fwap = round( ( fwhotel * ( 1 - t2HotelDiscount ) * apNights * apRooms ) +
			ap, 2 ),
		fwtyp = round( ( fwhotel * regNights * regRooms ) + typ, 2 ),
		// Off-Site or Custom Price
		// Off-Site Calculations
		offapmargin = round( ( offhotel * apNights * apRooms ) + apmargin, 2 ),
		offap = round( ( offhotel * apNights * apRooms ) + ap, 2 ),
		offtyp = round( ( offhotel * regNights * regRooms ) + typ, 2 ),
		// Custom Calculations
		customapmargin = round( apmargin, 2 ),
		customap = round( ( customhotel * apNights * apRooms ) + ap, 2 ),
		customtyp = round( ( customhotel * regNights * regRooms ) + typ, 2 );
	// Display Calculations
	var results = [
		[ "Animal Kingdom Lodge (DVC)", dvcapmargin, akldvcap,
			round( akldvctyp - akldvcap, 2 ), akldvctyp ],
		[ "Bay Lake Tower (DVC)", dvcapmargin, bltdvcap, round(
			bltdvctyp - bltdvcap, 2 ), bltdvctyp ],
		[ "Beach Club (DVC)", dvcapmargin, bcdvcap, round(
				bcdvctyp - bcdvcap, 2 ), bcdvctyp ],
		[ "BoardWalk Inn (DVC)", dvcapmargin, bwdvcap, round(
				bwdvctyp - bwdvcap, 2 ), bwdvctyp ],
		[ "Grand Floridian (DVC)", dvcapmargin, gfdvcap, round(
			gfdvctyp - gfdvcap, 2 ), gfdvctyp ],
		[ "Old Key West (DVC)", dvcapmargin, okwdvcap, round(
			okwdvctyp - okwdvcap, 2 ), okwdvctyp ],
		[ "Polynesian Village (DVC)", dvcapmargin, pvdvcap, round(
			pvdvctyp - pvdvcap, 2 ), pvdvctyp ],
		[ "Saratoga Springs (DVC)", dvcapmargin, ssdvcap, round(
			ssdvctyp - ssdvcap, 2 ), ssdvctyp ],
		[ "Wilderness Lodge (DVC)", dvcapmargin, wldvcap, round(
			wldvctyp - wldvcap, 2 ), wldvctyp ],
		[ "Animal Kingdom Lodge", aklapmargin, aklap, round( akltyp -
				aklap, 2 ),	akltyp ],
		[ "Beach Club", bcapmargin, bcap, round( bctyp - bcap, 2 ),
			bctyp ],
		[ "BoardWalk Inn", bwapmargin, bwap, round( bwtyp - bwap, 2 ),
			bwtyp ],
		[ "Contemporary", conapmargin, conap, round( contyp - conap,
			2 ), contyp ],
		[ "Grand Floridian", gfapmargin, gfap, round( gftyp - gfap,
			2 ), gftyp ],
		[ "Polynesian Village", pvapmargin, pvap, round( pvtyp -
			pvap, 2 ), pvtyp ],
		[ "Wilderness Lodge", wlapmargin, wlap, round( wltyp - wlap,
			2 ), wltyp ],
		[ "Yacht Club", ycapmargin, ycap, round( yctyp - ycap, 2 ),
			yctyp ],
		[ "Caribbean Beach", cbapmargin, cbap, round( cbtyp - cbap,
			2 ), cbtyp ],
		[ "Coronado Springs", csapmargin, csap, round( cstyp - csap,
			2 ), cstyp ],
		[ "Port Orleans", poapmargin, poap, round( potyp - poap, 2 ),
			potyp ],
		[ "All-Star Movies", amoapmargin, amoap, round( amotyp -
				amoap, 2 ),	amotyp ],
		[ "All-Star Music", amuapmargin, amuap, round( amutyp -
				amuap, 2 ),	amutyp ],
		[ "All-Star Sports", aspapmargin, aspap, round( asptyp -
				aspap, 2 ),	asptyp ],
		[ "Art of Animation", aoaapmargin, aoaap, round( aoatyp -
				aoaap, 2 ), aoatyp ],
		[ "Art of Animation - Suites", aoasapmargin, aoasap, round(
			aoastyp - aoasap, 2 ), aoastyp ],
		[ "Pop Century", pcapmargin, pcap, round( pctyp - pcap, 2 ),
			pctyp ],
		[ "Fort Wilderness", fwapmargin, fwap, round( fwtyp - fwap,
			2 ), fwtyp ],
		[ "Off-Site", offapmargin, offap, round( offtyp - offap, 2 ),
			offtyp ],
		[ "Custom", customapmargin, customap, round( customtyp -
			customap, 2 ), customtyp ]
	];
	$( '#chart' )
		.DataTable( {
			destroy: true,
			data: results,
			columns: [
				{ title: "Hotel" },
				{ title: "AP Loss/Gain", className: "compare" },
				{ title: "AP Cost/Year" },
				{ title: "AP vs Typical Cost", className: "compare" },
				{ title: "Typical Cost/Year" }
        ],
			processing: true,
			stateSave: true,
			paging: false,
			info: false,
			searching: false,
			responsive: true
		} );
		$('th').addClass('table-toggle btn-outline-dark');
		var table = document.getElementById('chart');
		var tbody = table.getElementsByTagName('tbody')[0];
		var cells = tbody.getElementsByTagName('td');

		for (var i=0, len=cells.length; i<len; i++){
		  if (Number(cells[i].innerHTML) > 0 && cells[i].classList.contains('compare')){
		      cells[i].className = 'text-success';
		  }
		  else if (Number(cells[i].innerHTML) < 0 && cells[i].classList.contains('compare')){
		      cells[i].className = 'text-danger';
		  }
		}
		$('#chart td:not(:first-child)').prepend('$');
};

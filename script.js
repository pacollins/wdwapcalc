$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
$('#license').on('shown.bs.modal', function () {
  $('#license').trigger('focus')
})
function round( value, decimals ) {
	return Number( Math.round( value + 'e' + decimals ) + 'e-' + decimals )
		.toFixed( decimals );
}
calculate = function() {
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
		customhotel = document.getElementById( "custom_hotel" )
		.value,
		// Typical Trip Variables
		regVisa = document.getElementById( "reg_visa" )
		.value,
		regFoodDiscount = 0,
		regMerchDiscount = 0,
		regPhotopass = document.getElementById( "reg_photopass" )
		.value,
		regNum = document.getElementById( "reg_num" )
		.value,
		regUpgrade = document.getElementById( "reg_upgrade" )
		.value,
		regDays = document.getElementById( "reg_days" )
		.value,
		regFood = document.getElementById( "reg_food" )
		.value,
		regTrips = document.getElementById( "reg_trips" )
		.value,
		regNights = document.getElementById( "reg_nights" )
		.value,
		regRooms = document.getElementById( "reg_rooms" )
		.value,
		regRoomsPeople = document.getElementById( "reg_rooms_people" )
		.value,
		regMerch = document.getElementById( "reg_merch" )
		.value,
		regWonderland = document.getElementById( "reg_wonderland" )
		.value,
		// Annual Pass Trip Variables
		apNum = document.getElementById( "ap_num" )
		.value,
		apUpgrade = document.getElementById( "ap_upgrade" )
		.value,
		apRegNum = document.getElementById( "ap_reg_num" )
		.value,
		apRegUpgrade = document.getElementById( "ap_reg_upgrade" )
		.value,
		apDays = document.getElementById( "ap_days" )
		.value,
		apFood = document.getElementById( "ap_food" )
		.value,
		apTrips = document.getElementById( "ap_trips" )
		.value,
		apNights = document.getElementById( "ap_nights" )
		.value,
		apRooms = document.getElementById( "ap_rooms" )
		.value,
		apRoomsPeople = document.getElementById( "ap_rooms_people" )
		.value,
		apMerch = document.getElementById( "ap_merch" )
		.value,
		apWonderland = document.getElementById( "ap_wonderland" )
		.value;
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
	if ( apUpgrade > 0 ) {
		apUpgrade = ppp;
	} else {
		apUpgrade = pp;
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
	// Base Calculations
	var apmargin = ( photopass * apTrips ) + ( apFood * apFoodDiscount * ( apNum +
			apRegNum ) * apDays ) + ( apFood * ( 1 - apFoodDiscount ) * ( apNum +
			apRegNum ) * apDays * apTip ) + ( apMerch * apMerchDiscount ) + (
			apWonderlandCost ) - ( apNum * apUpgrade ),
		ap = ( apNum * apUpgrade ) + ( apRegNum * ( ticket + apRegUpgrade ) * apDays ) +
		( apFood * ( 1 - apFoodDiscount ) * ( apNum + apRegNum ) * apDays * ( 1 +
			apTip ) ) + ( apMerch * ( 1 - apMerchDiscount ) ),
		typ = ( photopass * regTrips ) + ( regNum * ( ticket + regUpgrade ) *
			regDays ) + ( regFood * ( 1 - regFoodDiscount ) * ( regNum * regDays ) * (
			1 + regTip ) ) + ( regMerch * ( 1 - regMerchDiscount ) ),
		// Disney Vacation Club Rental
		// Animal Kingdom Lodge (DVC) Calculations
		akldvcapmargin = round( ( akldvchotel * apNights * apRooms ) + apmargin, 2 ),
		akldvcap = round( ( akldvchotel * apNights * apRooms ) + ap, 2 ),
		akldvctyp = round( ( akldvchotel * regNights * regRooms ) + typ, 2 ),
		// Bay Lake Tower (DVC) Calculations
		bltdvcapmargin = round( ( bltdvchotel * apNights * apRooms ) + apmargin, 2 ),
		bltdvcap = round( ( bltdvchotel * apNights * apRooms ) + ap, 2 ),
		bltdvctyp = round( ( bltdvchotel * regNights * regRooms ) + typ, 2 ),
		// Beach Club (DVC) Calculations
		bcdvcapmargin = round( ( bcdvchotel * apNights * apRooms ) + apmargin, 2 ),
		bcdvcap = round( ( bcdvchotel * apNights * apRooms ) + ap, 2 ),
		bcdvctyp = round( ( bcdvchotel * regNights * regRooms ) + typ, 2 ),
		// BoardWalk Inn (DVC) Calculations
		bwdvcapmargin = round( ( bwdvchotel * apNights * apRooms ) + apmargin, 2 ),
		bwdvcap = round( ( bwdvchotel * apNights * apRooms ) + ap, 2 ),
		bwdvctyp = round( ( bwdvchotel * regNights * regRooms ) + typ, 2 ),
		// Grand Floridan (DVC) Calculations
		gfdvcapmargin = round( ( gfdvchotel * apNights * apRooms ) + apmargin, 2 ),
		gfdvcap = round( ( gfdvchotel * apNights * apRooms ) + ap, 2 ),
		gfdvctyp = round( ( gfdvchotel * regNights * regRooms ) + typ, 2 ),
		// Old Key West (DVC) Calculations
		okwdvcapmargin = round( ( okwdvchotel * apNights * apRooms ) + apmargin, 2 ),
		okwdvcap = round( ( okwdvchotel * apNights * apRooms ) + ap, 2 ),
		okwdvctyp = round( ( okwdvchotel * regNights * regRooms ) + typ, 2 ),
		// Polynesian Village (DVC) Calculations
		pvdvcapmargin = round( ( pvdvchotel * apNights * apRooms ) + apmargin, 2 ),
		pvdvcap = round( ( pvdvchotel * apNights * apRooms ) + ap, 2 ),
		pvdvctyp = round( ( pvdvchotel * regNights * regRooms ) + typ, 2 ),
		// Saratoga Springs (DVC) Calculations
		ssdvcapmargin = round( ( ssdvchotel * apNights * apRooms ) + apmargin, 2 ),
		ssdvcap = round( ( ssdvchotel * apNights * apRooms ) + ap, 2 ),
		ssdvctyp = round( ( ssdvchotel * regNights * regRooms ) + typ, 2 ),
		// Wilderness Lodge (DVC) Calculations
		wldvcapmargin = round( ( wldvchotel * apNights * apRooms ) + apmargin, 2 ),
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
		customapmargin = round( ( customhotel * apNights * apRooms ) + apmargin, 2 ),
		customap = round( ( customhotel * apNights * apRooms ) + ap, 2 ),
		customtyp = round( ( customhotel * regNights * regRooms ) + typ, 2 );
	// Display Calculations
	var constants = [
		[ "Platinum Pass +", round( ppp, 2 ) ],
		[ "Plainum Pass", round( pp, 2 ) ],
		[ "Ticket/Day", round( ticket, 2 ) ],
		[ "Hopper/Day", round( hopper, 2 ) ],
		[ "Photopass", round( photopass, 2 ) ],
		[ "AP Food Discount", round( apFoodDiscount, 2 ) ],
		[ "AP Merch Discount", round( apMerchDiscount, 2 ) ],
		[ "VISA Food Discount", round( visaFoodDiscount, 2 ) ],
		[ "VISA Merch Discount", round( visaMerchDiscount, 2 ) ],
		[ "Tier 1 Hotel Discount", round( t1HotelDiscount, 2 ) ],
		[ "Tier 2 Hotel Discount", round( t1HotelDiscount, 2 ) ],
		[ "Tier 3 Hotel Discount", round( t1HotelDiscount, 2 ) ],
		[ "Tier 4 Hotel Discount", round( t1HotelDiscount, 2 ) ]
	];
	var hotels = [
		[ "Animal Kingdom Lodge (DVC)", round( akldvchotel, 2 ) ],
		[ "Bay Lake Tower (DVC)", round( bltdvchotel, 2 ) ],
		[ "Beach Club (DVC)", round( bcdvchotel, 2 ) ],
		[ "BoardWalk Inn (DVC)", round( bwdvchotel, 2 ) ],
		[ "Grand Floridian (DVC)", round( gfdvchotel, 2 ) ],
		[ "Old Key West (DVC)", round( okwdvchotel, 2 ) ],
		[ "Grand Floridian", round( gfhotel, 2 ) ],
		[ "Polynesian Village (DVC)", round( pvdvchotel, 2 ) ],
		[ "Saratoga Springs (DVC)", round( ssdvchotel, 2 ) ],
		[ "Wilderness Lodge (DVC)", round( wldvchotel, 2 ) ],
		[ "Animal Kingdom Lodge", round( aklhotel, 2 ) ],
		[ "Beach Club", round( bchotel, 2 ) ],
		[ "BoardWalk Inn", round( bwhotel, 2 ) ],
		[ "Contemporary", round( conhotel, 2 ) ],
		[ "Grand Floridian", round( gfhotel, 2 ) ],
		[ "Polynesian Village", round( pvhotel, 2 ) ],
		[ "Wilderness Lodge", round( wlhotel, 2 ) ],
		[ "Yacht Club", round( ychotel, 2 ) ],
		[ "Caribbean Beach", round( cbhotel, 2 ) ],
		[ "Coronado Springs", round( cshotel, 2 ) ],
		[ "Port Orleans", round( pohotel, 2 ) ],
		[ "All-Star Movies", round( amohotel, 2 ) ],
		[ "All-Star Music", round( amuhotel, 2 ) ],
		[ "All-Star Sports", round( asphotel, 2 ) ],
		[ "Art of Animation", round( aoahotel, 2 ) ],
		[ "Art of Animation - Suites", round( aoashotel, 2 ) ],
		[ "Pop Century", round( pchotel, 2 ) ],
		[ "Fort Wilderness", round( fwhotel, 2 ) ],
		[ "Off-Site", round( offhotel, 2 ) ]
	];
	var results = [
		[ "Animal Kingdom Lodge (DVC)", akldvcapmargin, akldvcap, round( akldvcap -
			akldvctyp, 2 ), akldvctyp ],
		[ "Bay Lake Tower (DVC)", bltdvcapmargin, bltdvcap, round( bltdvcap -
			bltdvctyp, 2 ), bltdvctyp ],
		[ "Beach Club (DVC)", bcdvcapmargin, bcdvcap, round( bcdvcap - bcdvctyp, 2 ),
			bcdvctyp ],
		[ "BoardWalk Inn (DVC)", bwdvcapmargin, bwdvcap, round( bwdvcap - bwdvctyp, 2 ),
			bwdvctyp ],
		[ "Grand Floridian (DVC)", gfdvcapmargin, gfdvcap, round( gfdvcap - gfdvctyp,
			2 ), gfdvctyp ],
		[ "Old Key West (DVC)", okwdvcapmargin, okwdvcap, round( okwdvcap - okwdvctyp,
			2 ), okwdvctyp ],
		[ "Polynesian Village (DVC)", pvdvcapmargin, pvdvcap, round( pvdvcap -
			pvdvctyp, 2 ), pvdvctyp ],
		[ "Saratoga Springs (DVC)", ssdvcapmargin, ssdvcap, round( ssdvcap - ssdvctyp,
			2 ), ssdvctyp ],
		[ "Wilderness Lodge (DVC)", wldvcapmargin, wldvcap, round( wldvcap - wldvctyp,
			2 ), wldvctyp ],
		[ "Animal Kingdom Lodge", aklapmargin, aklap, round( aklap - akltyp, 2 ),
			akltyp ],
		[ "Beach Club", bcapmargin, bcap, round( bcap - bctyp, 2 ), bctyp ],
		[ "BoardWalk Inn", bwapmargin, bwap, round( bwap - bwtyp, 2 ), bwtyp ],
		[ "Contemporary", conapmargin, conap, round( conap - contyp, 2 ), contyp ],
		[ "Grand Floridian", gfapmargin, gfap, round( gfap - gftyp, 2 ), gftyp ],
		[ "Polynesian Village", pvapmargin, pvap, round( pvap - pvtyp, 2 ), pvtyp ],
		[ "Wilderness Lodge", wlapmargin, wlap, round( wlap - wltyp, 2 ), wltyp ],
		[ "Yacht Club", ycapmargin, ycap, round( ycap - yctyp, 2 ), yctyp ],
		[ "Caribbean Beach", cbapmargin, cbap, round( cbap - cbtyp, 2 ), cbtyp ],
		[ "Coronado Springs", csapmargin, csap, round( csap - cstyp, 2 ), cstyp ],
		[ "Port Orleans", poapmargin, poap, round( poap - potyp, 2 ), potyp ],
		[ "All-Star Movies", amoapmargin, amoap, round( amoap - amotyp, 2 ),
			amotyp ],
		[ "All-Star Music", amuapmargin, amuap, round( amuap - amutyp, 2 ),
			amutyp ],
		[ "All-Star Sports", aspapmargin, aspap, round( aspap - asptyp, 2 ),
			asptyp ],
		[ "Art of Animation", aoaapmargin, aoaap, round( aoaap - aoatyp, 2 ),
			aoatyp ],
		[ "Art of Animation - Suites", aoasapmargin, aoasap, round( aoasap - aoastyp,
			2 ), aoastyp ],
		[ "Pop Century", pcapmargin, pcap, round( pcap - pctyp, 2 ), pctyp ],
		[ "Fort Wilderness", fwapmargin, fwap, round( fwap - fwtyp, 2 ), fwtyp ],
		[ "Off-Site", offapmargin, offap, round( offap - offtyp, 2 ), offtyp ],
		[ "Custom", customapmargin, customap, round( customap - customtyp, 2 ),
			customtyp ]
	];
	$( '#chart' )
		.DataTable( {
			destroy: true,
			data: results,
      columns: [
            { title: "Hotel" },
            { title: "AP Loss/Gain" },
            { title: "AP Cost/Year" },
            { title: "AP vs Typical Cost" },
            { title: "Typical Cost/Year" }
        ],
			paging: false,
			info: false,
			searching: false
		} );
};

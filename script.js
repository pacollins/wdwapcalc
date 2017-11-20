$( 'table tr th' )
	.on( 'click touch', function() {
		$( this )
			.siblings()
			.removeClass( 'sort' );
		$( this )
			.toggleClass( 'sort' );
	} );

function sortTable( n ) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById( "chart" );
	switching = true;
	//Set the sorting direction to ascending:
	dir = "desc";
	/*Make a loop that will continue until
	no switching has been done:*/
	while ( switching ) {
		//start by saying: no switching is done:
		switching = false;
		rows = table.getElementsByTagName( "TR" );
		/*Loop through all table rows (except the
		first, which contains table headers):*/
		for ( i = 1; i < ( rows.length - 1 ); i++ ) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			x = rows[ i ].getElementsByTagName( "TD" )[ n ];
			y = rows[ i + 1 ].getElementsByTagName( "TD" )[ n ];
			/*check if the two rows should switch place,
			based on the direction, asc or desc:*/
			if ( dir == "asc" ) {
				if ( x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() ) {
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			} else if ( dir == "desc" ) {
				if ( x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() ) {
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if ( shouldSwitch ) {
			/*If a switch has been marked, make the switch
			and mark that a switch has been done:*/
			rows[ i ].parentNode.insertBefore( rows[ i + 1 ], rows[ i ] );
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchcount++;
		} else {
			/*If no switching has been done AND the direction is "asc",
			set the direction to "desc" and run the while loop again.*/
			if ( switchcount === 0 && dir == "desc" ) {
				dir = "asc";
				switching = true;
			}
		}
	}
}

function round( value, decimals ) {
	return Number( Math.round( value + 'e' + decimals ) + 'e-' + decimals )
		.toFixed( decimals );
}
calculate = function() {
	// Constants
	var photopass = 149;
	var ppp = 869;
	var pp = 799;
	var ticket = 45.14;
	var hopper = 7.71;
	var apFoodDiscount = 0.15;
	var apMerchDiscount = 0.2;
	var visaFoodDiscount = 0.1;
	var visaMerchDiscount = 0.1;
	var t1HotelDiscount = 0.3;
	var t2HotelDiscount = 0.25;
	var t3HotelDiscount = 0.2;
	var t4HotelDiscount = 0.15;
	// Hotels
	var gfhotel = 699;
	var pvhotel = 560;
	var bwhotel = 505;
	var ychotel = 477;
	var bchotel = 477;
	var aoashotel = 450;
	var conhotel = 444;
	var fwhotel = 415;
	var aklhotel = 407;
	var wlhotel = 387;
	var pvdvchotel = 1935 / 7;
	var gfdvchotel = 1935 / 7;
	var porhotel = 233;
	var cshotel = 227;
	var bwdvchotel = 1560 / 7;
	var cbhotel = 223;
	var bltdvchotel = 1560 / 7;
	var wldvchotel = 1500 / 7;
	var fwdvchotel = 1500 / 7;
	var bcdvchotel = 1500 / 7;
	var ssdvchotel = 1230 / 7;
	var okwdvchotel = 1230 / 7;
	var pchotel = 175;
	var asphotel = 165;
	var amuhotel = 165;
	var amohotel = 165;
	var akldvchotel = 945 / 7;
	var offhotel = 90;
	// Typical Trip Variables
	var regVisa = document.getElementById( "reg_visa" )
		.value;
	var regVisaFood = 0;
	var regVisaMerch = 0;
	var regPhotopass = document.getElementById( "reg_photopass" )
		.value;
	var regNum = document.getElementById( "reg_num" )
		.value;
	var regUpgrade = document.getElementById( "reg_upgrade" )
		.value;
	var regDays = document.getElementById( "reg_days" )
		.value;
	var regFood = document.getElementById( "reg_food" )
		.value;
	var regTrips = document.getElementById( "reg_trips" )
		.value;
	var regNights = document.getElementById( "reg_nights" )
		.value;
	var regRooms = document.getElementById( "reg_rooms" )
		.value;
	var regRoomsPeople = document.getElementById( "reg_rooms_people" )
		.value;
	var regMerch = document.getElementById( "reg_merch" )
		.value;
	var regWonderland = document.getElementById( "reg_wonderland" )
		.value;
	// Annual Pass Trip Variables
	var apNum = document.getElementById( "ap_num" )
		.value;
	var apUpgrade = document.getElementById( "ap_upgrade" )
		.value;
	var apRegNum = document.getElementById( "ap_reg_num" )
		.value;
	var apRegUpgrade = document.getElementById( "ap_reg_upgrade" )
		.value;
	var apDays = document.getElementById( "ap_days" )
		.value;
	var apFood = document.getElementById( "ap_food" )
		.value;
	var apTrips = document.getElementById( "ap_trips" )
		.value;
	var apNights = document.getElementById( "ap_nights" )
		.value;
	var apRooms = document.getElementById( "ap_rooms" )
		.value;
	var apRoomsPeople = document.getElementById( "ap_rooms_people" )
		.value;
	var apMerch = document.getElementById( "ap_merch" )
		.value;
	var apWonderland = document.getElementById( "ap_wonderland" )
		.value;
	// Optional Variables
	// Calculations
	if ( regVisa > 0 ) {
		regVisaFood = visaFoodDiscount;
		regVisaMerch = visaMerchDiscount;
	} else {
		regVisaFood = 0;
		regVisaMerch = 0;
	}
	if ( regPhotopass > 0 ) {
		regPhotopass = photopass;
	} else {
		regPhotopass = 0;
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
	// Base Calculations
	var apmargin = ( photopass * apTrips ) + ( apFood * apFoodDiscount * ( apNum +
		apRegNum ) * apDays ) + ( apMerch * apMerchDiscount ) - ( apNum * apUpgrade );
	var ap = ( apNum * apUpgrade ) + ( apRegNum * ( ticket + apRegUpgrade ) *
		apDays ) + ( apFood * ( 1 - apFoodDiscount ) * ( apNum + apRegNum ) *
		apDays ) + ( apMerch * ( 1 - apMerchDiscount ) );
	var typ = ( photopass * regTrips ) + ( regNum * ( ticket + regUpgrade ) *
		regDays ) + ( regFood * ( 1 - regVisaFood ) * ( regNum * regDays ) ) + (
		regMerch * ( 1 - regVisaMerch ) );
	// Grand Floridan Calculations
	var gfapmargin = round( ( gfhotel * t2HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var gfap = round( ( gfhotel * ( 1 - t2HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var gftyp = round( ( gfhotel * regNights * regRooms ) + typ, 2 );
	// Polynesian Village Calculations
	var pvapmargin = round( ( pvhotel * t3HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var pvap = round( ( pvhotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var pvtyp = round( ( pvhotel * regNights * regRooms ) + typ, 2 );
	// BoardWalk Inn Calculations
	var bwapmargin = round( ( bwhotel * t1HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var bwap = round( ( bwhotel * ( 1 - t1HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var bwtyp = round( ( bwhotel * regNights * regRooms ) + typ, 2 );
	// Yacht Club Calculations
	var ycapmargin = round( ( ychotel * t1HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var ycap = round( ( ychotel * ( 1 - t1HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var yctyp = round( ( ychotel * regNights * regRooms ) + typ, 2 );
	// Beach Club Calculations
	var bcapmargin = round( ( bchotel * t3HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var bcap = round( ( bchotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var bctyp = round( ( bchotel * regNights * regRooms ) + typ, 2 );
	// Art of Animation - Suites Calculations
	var aoasapmargin = round( ( aoashotel * t4HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var aoasap = round( ( aoashotel * ( 1 - t4HotelDiscount ) * apNights *
		apRooms ) + ap, 2 );
	var aoastyp = round( ( aoashotel * regNights * regRooms ) + typ, 2 );
	// Contemporary Calculations
	var conapmargin = round( ( conhotel * t3HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var conap = round( ( conhotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var contyp = round( ( conhotel * regNights * regRooms ) + typ, 2 );
	// Fort Wilderness Calculations
	var fwapmargin = round( ( fwhotel * t2HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var fwap = round( ( fwhotel * ( 1 - t2HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var fwtyp = round( ( fwhotel * regNights * regRooms ) + typ, 2 );
	// Animal Kingdom Lodge Calculations
	var aklapmargin = round( ( aklhotel * t1HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var aklap = round( ( aklhotel * ( 1 - t1HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var akltyp = round( ( aklhotel * regNights * regRooms ) + typ, 2 );
	// Wilderness Lodge Calculations
	var wlapmargin = round( ( wlhotel * t1HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var wlap = round( ( wlhotel * ( 1 - t1HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var wltyp = round( ( wlhotel * regNights * regRooms ) + typ, 2 );
	// Polynesian Village (DVC) Calculations
	var pvdvcapmargin = round( ( pvdvchotel * apNights * apRooms ) + apmargin, 2 );
	var pvdvcap = round( ( pvdvchotel * apNights * apRooms ) + ap, 2 );
	var pvdvctyp = round( ( pvdvchotel * regNights * regRooms ) + typ, 2 );
	// Grand Floridan (DVC) Calculations
	var gfdvcapmargin = round( ( gfdvchotel * apNights * apRooms ) + apmargin, 2 );
	var gfdvcap = round( ( gfdvchotel * apNights * apRooms ) + ap, 2 );
	var gfdvctyp = round( ( gfdvchotel * regNights * regRooms ) + typ, 2 );
	// Port Orleans - Riverside Calculations
	var porapmargin = round( ( porhotel * t3HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var porap = round( ( porhotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var portyp = round( ( porhotel * regNights * regRooms ) + typ, 2 );
	// Coronado Springs Calculations
	var csapmargin = round( ( cshotel * t3HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var csap = round( ( cshotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var cstyp = round( ( cshotel * regNights * regRooms ) + typ, 2 );
	// BoardWalk Inn (DVC) Calculations
	var bwdvcapmargin = round( ( bwdvchotel * apNights * apRooms ) + apmargin, 2 );
	var bwdvcap = round( ( bwdvchotel * apNights * apRooms ) + ap, 2 );
	var bwdvctyp = round( ( bwdvchotel * regNights * regRooms ) + typ, 2 );
	// Caribbean Beach Calculations
	var cbapmargin = round( ( cbhotel * t3HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var cbap = round( ( cbhotel * ( 1 - t3HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var cbtyp = round( ( cbhotel * regNights * regRooms ) + typ, 2 );
	// Bay Lake Tower (DVC) Calculations
	var bltdvcapmargin = round( ( bltdvchotel * apNights * apRooms ) + apmargin,
		2 );
	var bltdvcap = round( ( bltdvchotel * apNights * apRooms ) + ap, 2 );
	var bltdvctyp = round( ( bltdvchotel * regNights * regRooms ) + typ, 2 );
	// Wilderness Lodge (DVC) Calculations
	var wldvcapmargin = round( ( wldvchotel * apNights * apRooms ) + apmargin, 2 );
	var wldvcap = round( ( wldvchotel * apNights * apRooms ) + ap, 2 );
	var wldvctyp = round( ( wldvchotel * regNights * regRooms ) + typ, 2 );
	// Fort Wilderness (DVC) Calculations
	var fwdvcapmargin = round( ( fwdvchotel * apNights * apRooms ) + apmargin, 2 );
	var fwdvcap = round( ( fwdvchotel * apNights * apRooms ) + ap, 2 );
	var fwdvctyp = round( ( fwdvchotel * regNights * regRooms ) + typ, 2 );
	// Beach Club (DVC) Calculations
	var bcdvcapmargin = round( ( bcdvchotel * apNights * apRooms ) + apmargin, 2 );
	var bcdvcap = round( ( bcdvchotel * apNights * apRooms ) + ap, 2 );
	var bcdvctyp = round( ( bcdvchotel * regNights * regRooms ) + typ, 2 );
	// Saratoga Springs (DVC) Calculations
	var ssdvcapmargin = round( ( ssdvchotel * apNights * apRooms ) + apmargin, 2 );
	var ssdvcap = round( ( ssdvchotel * apNights * apRooms ) + ap, 2 );
	var ssdvctyp = round( ( ssdvchotel * regNights * regRooms ) + typ, 2 );
	// Old Key West (DVC) Calculations
	var okwdvcapmargin = round( ( okwdvchotel * apNights * apRooms ) + apmargin,
		2 );
	var okwdvcap = round( ( okwdvchotel * apNights * apRooms ) + ap, 2 );
	var okwdvctyp = round( ( okwdvchotel * regNights * regRooms ) + typ, 2 );
	// Pop Century Calculations
	var pcapmargin = round( ( pchotel * t4HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var pcap = round( ( pchotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var pctyp = round( ( pchotel * regNights * regRooms ) + typ, 2 );
	// All-Star Sports Calculations
	var aspapmargin = round( ( asphotel * t4HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var aspap = round( ( asphotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var asptyp = round( ( asphotel * regNights * regRooms ) + typ, 2 );
	// All-Star Music Calculations
	var amuapmargin = round( ( amuhotel * t4HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var amuap = round( ( amuhotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var amutyp = round( ( amuhotel * regNights * regRooms ) + typ, 2 );
	// All-Star Movies Calculations
	var amoapmargin = round( ( amohotel * t4HotelDiscount * apNights * apRooms ) +
		apmargin, 2 );
	var amoap = round( ( amohotel * ( 1 - t4HotelDiscount ) * apNights * apRooms ) +
		ap, 2 );
	var amotyp = round( ( amohotel * regNights * regRooms ) + typ, 2 );
	// Animal Kingdom Lodge (DVC) Calculations
	var akldvcapmargin = round( ( akldvchotel * apNights * apRooms ) + apmargin,
		2 );
	var akldvcap = round( ( akldvchotel * apNights * apRooms ) + ap, 2 );
	var akldvctyp = round( ( akldvchotel * regNights * regRooms ) + typ, 2 );
	// Off-Site Calculations
	var offapmargin = round( ( offhotel * apNights * apRooms ) + apmargin, 2 );
	var offap = round( ( offhotel * apNights * apRooms ) + ap, 2 );
	var offtyp = round( ( offhotel * regNights * regRooms ) + typ, 2 );
	// Display Calculations
	var constants = [ [ "Photopass", round( photopass, 2 ) ],
    [ "Platinum Pass +", round( ppp, 2 ) ],
    [ "Plainum Pass", round( pp, 2 ) ],
    [ "Ticket/Day", round( ticket, 2 ) ],
    [ "Hopper/Day", round( hopper, 2 ) ],
    [ "AP Food Discount", round( apFoodDiscount, 2 ) ],
    [ "AP Merch Discount", round( apMerchDiscount, 2 ) ],
    [ "VISA Food Discount", round( visaFoodDiscount, 2 ) ],
    [ "VISA Merch Discount", round( visaMerchDiscount, 2 ) ],
    [ "Tier 1 Hotel Discount", round( t1HotelDiscount, 2 ) ],
    [ "Tier 2 Hotel Discount", round( t1HotelDiscount, 2 ) ],
    [ "Tier 3 Hotel Discount", round( t1HotelDiscount, 2 ) ],
    [ "Tier 4 Hotel Discount", round( t1HotelDiscount, 2 ) ],
  ];
	var hotels = [
   [ "Grand Floridian", round( gfhotel, 2 ) ],
   [ "Polynesian Village", round( pvhotel, 2 ) ],
   [ "BoardWalk Inn", round( bwhotel, 2 ) ],
   [ "Yacht Club", round( ychotel, 2 ) ],
   [ "Beach Club", round( bchotel, 2 ) ],
   [ "Art of Animation - Suites", round( aoashotel, 2 ) ],
   [ "Contemporary", round( conhotel, 2 ) ],
   [ "Fort Wilderness", round( fwhotel, 2 ) ],
   [ "Animal Kingdom Lodge", round( aklhotel, 2 ) ],
   [ "Wilderness Lodge", round( wlhotel, 2 ) ],
   [ "Polynesian Village (DVC)", round( pvdvchotel, 2 ) ],
   [ "Grand Floridian (DVC)", round( gfdvchotel, 2 ) ],
   [ "Port Orleans - Riverside", round( porhotel, 2 ) ],
   [ "Coronado Springs", round( cshotel, 2 ) ],
   [ "BoardWalk Inn (DVC)", round( bwdvchotel, 2 ) ],
   [ "Caribbean Beach", round( cbhotel, 2 ) ],
   [ "Bay Lake Tower (DVC)", round( bltdvchotel, 2 ) ],
   [ "Wilderness Lodge (DVC)", round( wldvchotel, 2 ) ],
   [ "Fort Wilderness (DVC)", round( fwdvchotel, 2 ) ],
   [ "Beach Club (DVC)", round( bcdvchotel, 2 ) ],
   [ "Saratoga Springs (DVC)", round( ssdvchotel, 2 ) ],
   [ "Old Key West (DVC)", round( okwdvchotel, 2 ) ],
   [ "Pop Century", round( pchotel, 2 ) ],
   [ "All-Star Sports", round( asphotel, 2 ) ],
   [ "All-Star Music", round( amuhotel, 2 ) ],
   [ "All-Star Movies", round( amohotel, 2 ) ],
   [ "Animal Kingdom Lodge (DVC)", round( akldvchotel, 2 ) ],
   [ "Off-Site", round( offhotel, 2 ) ]
 ];
	var results = [
    [ "Grand Floridian", gfapmargin, gfap, round( gfap - gftyp, 2 ), gftyp ],
    [ "Polynesian Village", pvapmargin, pvap, round( pvap - pvtyp, 2 ), pvtyp ],
    [ "BoardWalk Inn", bwapmargin, bwap, round( bwap - bwtyp, 2 ), bwtyp ],
    [ "Yacht Club", ycapmargin, ycap, round( ycap - yctyp, 2 ), yctyp ],
    [ "Beach Club", bcapmargin, bcap, round( bcap - bctyp, 2 ), bctyp ],
    [ "Art of Animation - Suites", aoasapmargin, aoasap, round( aoasap -
			aoastyp, 2 ), aoastyp ],
    [ "Contemporary", conapmargin, conap, round( conap - contyp, 2 ), contyp ],
    [ "Fort Wilderness", fwapmargin, fwap, round( fwap - fwtyp, 2 ), fwtyp ],
    [ "Animal Kingdom Lodge", aklapmargin, aklap, round( aklap - akltyp, 2 ),
   akltyp ],
    [ "Wilderness Lodge", wlapmargin, wlap, round( wlap - wltyp, 2 ), wltyp ],
    [ "Polynesian Village (DVC)", pvdvcapmargin, pvdvcap, round( pvdvcap -
			pvdvctyp, 2 ), pvdvctyp ],
    [ "Grand Floridian (DVC)", gfdvcapmargin, gfdvcap, round( gfdvcap -
			gfdvctyp, 2 ), gfdvctyp ],
    [ "Port Orleans - Riverside", porapmargin, porap, round( porap - portyp, 2 ),
			portyp ],
    [ "Coronado Springs", csapmargin, csap, round( csap - cstyp, 2 ), cstyp ],
    [ "BoardWalk Inn (DVC)", bwdvcapmargin, bwdvcap, round( bwdvcap - bwdvctyp,
			2 ), bwdvctyp ],
    [ "Caribbean Beach", cbapmargin, cbap, round( cbap - cbtyp, 2 ), cbtyp ],
    [ "Bay Lake Tower (DVC)", bltdvcapmargin, bltdvcap, round( bltdvcap -
			bltdvctyp, 2 ), bltdvctyp ],
    [ "Wilderness Lodge (DVC)", wldvcapmargin, wldvcap, round( wldvcap -
			wldvctyp, 2 ), wldvctyp ],
    [ "Fort Wilderness (DVC)", fwdvcapmargin, fwdvcap, round( fwdvcap -
			fwdvctyp, 2 ), fwdvctyp ],
    [ "Beach Club (DVC)", bcdvcapmargin, bcdvcap, round( bcdvcap - bcdvctyp, 2 ),
			bcdvctyp ],
    [ "Saratoga Springs (DVC)", ssdvcapmargin, ssdvcap, round( ssdvcap -
			ssdvctyp, 2 ), ssdvctyp ],
    [ "Old Key West (DVC)", okwdvcapmargin, okwdvcap, round( okwdvcap -
			okwdvctyp, 2 ), okwdvctyp ],
    [ "Pop Century", pcapmargin, pcap, round( pcap - pctyp, 2 ), pctyp ],
    [ "All-Star Sports", aspapmargin, aspap, round( aspap - asptyp, 2 ),
   asptyp ],
    [ "All-Star Music", amuapmargin, amuap, round( amuap - amutyp, 2 ),
   amutyp ],
    [ "All-Star Movies", amoapmargin, amoap, round( amoap - amotyp, 2 ),
   amotyp ],
    [ "Animal Kingdom Lodge (DVC)", akldvcapmargin, akldvcap, round( akldvcap -
			akldvctyp, 2 ), akldvctyp ],
    [ "Off-Site", offapmargin, offap, round( offap - offtyp, 2 ), offtyp ]
  ];
	table = document.getElementById( "chart" );
	// rows
	for ( i = 1; i < table.rows.length; i++ ) {
		// cells
		for ( j = 0; j < table.rows[ i ].cells.length; j++ ) {
			table.rows[ i ].cells[ j ].innerHTML = results[ i - 1 ][ j ];
		}
	}
};

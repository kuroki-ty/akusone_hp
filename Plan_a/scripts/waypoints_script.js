/***ヘッダーの追従***/
var $head = $( '#ha-header' ); //headerのIDを記述
$( '.ha-waypoint' ).each( function(i) {　//トリガーになる要素のClassを記述
	var $el = $( this ),
	animClassDown = $el.data( 'animateDown' ),
	animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$head.attr('class', 'ha-header ' + animClassDown);//下スクロールだった場合ヘッダーにdata-animate-downのクラスを追加
		}
		else{
			$head.attr('class', 'ha-header ' + animClassUp); //ヘッダーにdata-animate-upのクラスを追加
		}
	}, { offset: '100px' }); //要素の100px上を通過したら切り替え開始
});
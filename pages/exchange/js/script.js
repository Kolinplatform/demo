var _datafeed = new Datafeeds.UDFCompatibleDatafeed($.getJSON("https://api.wavesplatform.com/v0/candles/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW/8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS?timeStart=2018-10-20T19%3A40%3A41.377Z&interval=1d", function(result){
  $.each(result, function(tv){time: Date.parse(tv.data.time), close: tv.data.close,  open: tv.data.open, low: tv.data.low,  high: tv.data.high,}) }))

new TradingView.widget({
    autosize: true,
    symbol: "KOLIN",
    interval: "D",
    timezone: "Etc/UTC",
	datafeed: "_datafeed",
    theme: "light",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    save_image: true,
    hideideas: true,
    container_id: "tradingview_35f2b",
	disabled_features: ["use_localstorage_for_settings", "header_symbol_search", "symbol_search_hot_key"],
	//subscribeBars: function(){ 	},
})
/**
 * -----------
 * FeedRequest
 * -----------
 * @constructor
 * @param {string} url
 */
function FeedRequest(url) {
    this._numItems = 0;
    this._output = "";
    this._url = url;
}
FeedRequest.prototype.toString = function() {
    return this._output;
}
FeedRequest.prototype.size = function() {
    return this._numItems;
}
/**
 * @param {string} symbol
 */
FeedRequest.prototype.cmdSymbol = function(symbol) {
    this._output += '0' + symbol + '~';
}
/**
 * @param {number} param
 */
FeedRequest.prototype.cmdParam = function(param) {
    this._output += '2' + param.toString(16) + '~';
    this._numItems++;
}
/**
 * @param {Array} param
 */
FeedRequest.prototype.cmdParamArray = function(param) {
    for (var i = 0; i < param.length; i++) {
        this._output += '2' + param[i].toString(16) + '~';
    }
    this._numItems += param.length;
}
/** @static */
FeedRequest.P_SYMBOL = 0x10;
FeedRequest.P_NAME = 0x11;
FeedRequest.P_CHANGE = 0x20;
FeedRequest.P_CHANGE_PC = 0x21;
FeedRequest.P_CUR_PRICE = 0x22;
FeedRequest.P_BID_PRICE = 0x23;
FeedRequest.P_OFFER_PRICE = 0x24;
FeedRequest.P_MID_PRICE = 0x25;
FeedRequest.P_SPREAD = 0x26;
FeedRequest.P_SPREAD_PC = 0x27;
FeedRequest.P_OPEN_PRICE = 0x28;
FeedRequest.P_HIGH_PRICE = 0x29;
FeedRequest.P_LOW_PRICE = 0x2a;
FeedRequest.P_CLOSE_PRICE = 0x2b;
FeedRequest.P_LAST_CHANGE_TIME = 0x2c;
FeedRequest.P_OPEN_CHANGE = 0x2d;
FeedRequest.P_OPEN_CHANGE_PC = 0x2e;
FeedRequest.P_VOLUME = 0x30;
FeedRequest.P_BUY_VOLUME = 0x31;
FeedRequest.P_SELL_VOLUME = 0x32;
FeedRequest.P_UNKNOWN_VOLUME = 0x33;
FeedRequest.P_BUY_SELL_UNKNOWN = 0x34;
FeedRequest.P_BUY_PC = 0x35;
FeedRequest.P_SELL_PC = 0x36;
FeedRequest.P_UNKNOWN_PC = 0x37;
FeedRequest.P_V1_LAST_CHANGE_TIME = 0x38;
FeedRequest.P_V1_LAST_CHANGE_TIME_WITH_AT = 0x39;
FeedRequest.P_OOH_PRICE = 0x3a;
FeedRequest.P_OOH_CHANGE_PREV = 0x3b;
FeedRequest.P_OOH_CHANGE_PREV_PC = 0x3c;
FeedRequest.P_OOH_CHANGE_YEST = 0x3d;
FeedRequest.P_OOH_CHANGE_YEST_PC = 0x3e;
FeedRequest.P_PREV_CLOSE = 0x3f;
FeedRequest.P_FLAGS = 0x40;
FeedRequest.P_LONG_FLAGS = 0x41;
FeedRequest.P_V1_CHANGE_ARROW = 0x42;
FeedRequest.P_V1_A_FLAG = 0x43;
FeedRequest.P_V1_EX_MARKER = 0x44;
FeedRequest.P_NEWS_COUNT_BB = 0x4a;
FeedRequest.P_NEWS_COUNT_NEWS_ALL = 0x4b;
FeedRequest.P_NEWS_COUNT_NEWS_REG = 0x4c;
FeedRequest.P_NEWS_COUNT_NEWS_NON_REG = 0x4d;
FeedRequest.P_YEST_BID = 0x50;
FeedRequest.P_YEST_OFFER = 0x51;
FeedRequest.P_YEST_CLOSE = 0x52;
FeedRequest.P_BID_SIZE = 0x60;
FeedRequest.P_OFFER_SIZE = 0x61;
FeedRequest.P_OPEN_INTEREST = 0x70;
FeedRequest.P_LSE_REFERENCE_PRICE = 0x71;
FeedRequest.P_LSE_DAILY_VWAP = 0x72;
FeedRequest.P_LSE_UNCROSSING_PRICE = 0x73;
FeedRequest.P_LSE_UNCROSSING_VOLUME = 0x74;
FeedRequest.P_LSE_AUCTION_TIME = 0x75;
FeedRequest.P_TRADE_PRICE_0 = 0xa0;
FeedRequest.P_TRADE_PRICE_1 = 0xa1;
FeedRequest.P_TRADE_PRICE_2 = 0xa2;
FeedRequest.P_TRADE_PRICE_3 = 0xa3;
FeedRequest.P_TRADE_PRICE_4 = 0xa4;
FeedRequest.P_TRADE_SIZE = 0xa5;
FeedRequest.P_TRADE_TIME = 0xa6;
FeedRequest.P_TRADE_TYPE = 0xa7;
FeedRequest.P_TRADE_HIGH = 0xa8;
FeedRequest.P_TRADE_LOW = 0xa9;
FeedRequest.P_NUM_TRADES = 0xaa;
FeedRequest.P_NUM_ORDERS_AT_BID = 0xc0;
FeedRequest.P_VOLUME_ORDERS_AT_BID =  0xc1;
FeedRequest.P_NUM_ORDERS_AT_OFFER =0xc2;
FeedRequest.P_VOLUME_ORDERS_AT_OFFER = 0xc3;
FeedRequest.P_NUM_BUY_ORDERS = 0xc4;
FeedRequest.P_NUM_SELL_ORDERS =0xc5;
FeedRequest.P_AVG_BUY_ORDER = 0xc6;
FeedRequest.P_AVG_SELL_ORDER = 0xc7;
FeedRequest.P_BUY_ORDER_VOLUME =  0xc8;
FeedRequest.P_SELL_ORDER_VOLUME = 0xc9;
FeedRequest.P_BUY_VWAP =  0xca;
FeedRequest.P_SELL_VWAP = 0xcb;
FeedRequest.P_TIME =  0xe0;
FeedRequest.P_TEST_CLOCK = 0xe1;
FeedRequest.P_DELAYED =0xe2;
FeedRequest.P_OPEN_TIME = 0xe3;
FeedRequest.P_CLOSE_TIME = 0xe4;
FeedRequest.P_TRADES_TIME =0x100;
FeedRequest.P_TRADES_PRICE =  0x101;
FeedRequest.P_TRADES_SIZE =0x102;
FeedRequest.P_TRADES_TYPE =0x103;
FeedRequest.P_TRADES_EXCHANGE =0x104;
FeedRequest.P_TRADES_BID = 0x105;
FeedRequest.P_TRADES_OFFER =  0x106;
FeedRequest.P_TRADES_BUY_SIZE =0x107;
FeedRequest.P_TRADES_SELL_SIZE =  0x108;
FeedRequest.P_TRADES_UNKNOWN_SIZE =0x109;
FeedRequest.P_TRADES_BUY_VOLUME = 0x10a;
FeedRequest.P_TRADES_SELL_VOLUME = 0x10b;
FeedRequest.P_TRADES_UNKNOWN_VOLUME = 0x10c;
FeedRequest.P_TRADES_NUMBER = 0x10d;
FeedRequest.P_TRADES_BUY_SELL_UNKNOWN =0x110;
FeedRequest.P_TRADES_FLAGS =  0x111;
// added to convert old trades applets to use javaclient3
FeedRequest.P_V1_TRADES_CODE = 0x116;
FeedRequest.P_TRADES_LIST_COMMAND =0x1ff;
FeedRequest.P_ORDERS_BID_TIME= 0x0200;
FeedRequest.P_ORDERS_BID_SIZE= 0x0201;
FeedRequest.P_ORDERS_BID_PRICE  = 0x0202;
FeedRequest.P_ORDERS_BID_CODE= 0x0203;
FeedRequest.P_V1_ORDERS_BID_TIME = 0x0204;
FeedRequest.P_V1_ORDERS_BID_SIZE = 0x0205;
FeedRequest.P_V1_ORDERS_BID_PRICE= 0x0206;
FeedRequest.P_V1_ORDERS_BID_CODE = 0x0207;
FeedRequest.P_V1_ORDERS_BID_LIST_COMMAND = 0x0208;
FeedRequest.P_V1_NUM_BUY_ORDERS = 0x0209;
FeedRequest.P_V1_BUY_ORDER_VOLUME= 0x0210;
FeedRequest.P_V1_AVG_BUY_ORDER  = 0x0211;
FeedRequest.P_V1_ORDER_NUM_AT_BID= 0x0212;
FeedRequest.P_V1_ORDER_VOL_AT_BID= 0x0213;
FeedRequest.P_V1_ORDERS_BID_SHORT_SIZE  = 0x0214;
FeedRequest.P_ORDERS_BID_LIST_COMMAND= 0x02ff;
FeedRequest.P_ORDERS_OFFER_TIME = 0x0300;
FeedRequest.P_ORDERS_OFFER_SIZE = 0x0301;
FeedRequest.P_ORDERS_OFFER_PRICE = 0x0302;
FeedRequest.P_ORDERS_OFFER_CODE = 0x0303;
FeedRequest.P_V1_ORDERS_OFFER_TIME  = 0x0304;
FeedRequest.P_V1_ORDERS_OFFER_SIZE  = 0x0305;
FeedRequest.P_V1_ORDERS_OFFER_PRICE = 0x0306;
FeedRequest.P_V1_ORDERS_OFFER_CODE  = 0x0307;
FeedRequest.P_V1_ORDERS_OFFER_LIST_COMMAND = 0x0308;
FeedRequest.P_V1_NUM_SELL_ORDERS = 0x0309;
FeedRequest.P_V1_SELL_ORDER_VOLUME  = 0x0310;
FeedRequest.P_V1_AVG_SELL_ORDER = 0x0311;
FeedRequest.P_V1_ORDER_NUM_AT_OFFER = 0x0312;
FeedRequest.P_V1_ORDER_VOL_AT_OFFER = 0x0313;
FeedRequest.P_V1_ORDERS_OFFER_SHORT_SIZE = 0x0314;
FeedRequest.P_ORDERS_OFFER_LIST_COMMAND = 0x03ff;
FeedRequest.P_PERIOD_1_PERIOD =0x400;
FeedRequest.P_PERIOD_5_PERIOD =0x401;
FeedRequest.P_PERIOD_10_PERIOD =  0x402;
FeedRequest.P_PERIOD_15_PERIOD =  0x403;
FeedRequest.P_PERIOD_30_PERIOD =  0x404;
FeedRequest.P_PERIOD_60_PERIOD =  0x405;
FeedRequest.P_PERIOD_D_PERIOD =0x406;
FeedRequest.P_PERIOD_W_PERIOD =0x407;
FeedRequest.P_PERIOD_M_PERIOD =0x408;
FeedRequest.P_PERIOD_Q_PERIOD =0x409;
FeedRequest.P_PERIOD_Y_PERIOD =0x40a;
FeedRequest.P_PERIOD_1_BID_OPEN = 0x410;
FeedRequest.P_PERIOD_5_BID_OPEN = 0x411;
FeedRequest.P_PERIOD_10_BID_OPEN = 0x412;
FeedRequest.P_PERIOD_15_BID_OPEN = 0x413;
FeedRequest.P_PERIOD_30_BID_OPEN = 0x414;
FeedRequest.P_PERIOD_60_BID_OPEN = 0x415;
FeedRequest.P_PERIOD_D_BID_OPEN = 0x416;
FeedRequest.P_PERIOD_W_BID_OPEN = 0x417;
FeedRequest.P_PERIOD_M_BID_OPEN = 0x418;
FeedRequest.P_PERIOD_Q_BID_OPEN = 0x419;
FeedRequest.P_PERIOD_Y_BID_OPEN = 0x41a;
FeedRequest.P_PERIOD_1_BID_HIGH = 0x420;
FeedRequest.P_PERIOD_5_BID_HIGH = 0x421;
FeedRequest.P_PERIOD_10_BID_HIGH = 0x422;
FeedRequest.P_PERIOD_15_BID_HIGH = 0x423;
FeedRequest.P_PERIOD_30_BID_HIGH = 0x424;
FeedRequest.P_PERIOD_60_BID_HIGH = 0x425;
FeedRequest.P_PERIOD_D_BID_HIGH = 0x426;
FeedRequest.P_PERIOD_W_BID_HIGH = 0x427;
FeedRequest.P_PERIOD_M_BID_HIGH = 0x428;
FeedRequest.P_PERIOD_Q_BID_HIGH = 0x429;
FeedRequest.P_PERIOD_Y_BID_HIGH = 0x42a;
FeedRequest.P_PERIOD_1_BID_LOW =  0x430;
FeedRequest.P_PERIOD_5_BID_LOW =  0x431;
FeedRequest.P_PERIOD_10_BID_LOW = 0x432;
FeedRequest.P_PERIOD_15_BID_LOW = 0x433;
FeedRequest.P_PERIOD_30_BID_LOW = 0x434;
FeedRequest.P_PERIOD_60_BID_LOW = 0x435;
FeedRequest.P_PERIOD_D_BID_LOW =  0x436;
FeedRequest.P_PERIOD_W_BID_LOW =  0x437;
FeedRequest.P_PERIOD_M_BID_LOW =  0x438;
FeedRequest.P_PERIOD_Q_BID_LOW =  0x439;
FeedRequest.P_PERIOD_Y_BID_LOW =  0x43a;
FeedRequest.P_PERIOD_1_BID_CLOSE = 0x440;
FeedRequest.P_PERIOD_5_BID_CLOSE = 0x441;
FeedRequest.P_PERIOD_10_BID_CLOSE =0x442;
FeedRequest.P_PERIOD_15_BID_CLOSE =0x443;
FeedRequest.P_PERIOD_30_BID_CLOSE =0x444;
FeedRequest.P_PERIOD_60_BID_CLOSE =0x445;
FeedRequest.P_PERIOD_D_BID_CLOSE = 0x446;
FeedRequest.P_PERIOD_W_BID_CLOSE = 0x447;
FeedRequest.P_PERIOD_M_BID_CLOSE = 0x448;
FeedRequest.P_PERIOD_Q_BID_CLOSE = 0x449;
FeedRequest.P_PERIOD_Y_BID_CLOSE = 0x44a;
FeedRequest.P_PERIOD_1_OFFER_OPEN =0x450;
FeedRequest.P_PERIOD_5_OFFER_OPEN =0x451;
FeedRequest.P_PERIOD_10_OFFER_OPEN =  0x452;
FeedRequest.P_PERIOD_15_OFFER_OPEN =  0x453;
FeedRequest.P_PERIOD_30_OFFER_OPEN =  0x454;
FeedRequest.P_PERIOD_60_OFFER_OPEN =  0x455;
FeedRequest.P_PERIOD_D_OFFER_OPEN =0x456;
FeedRequest.P_PERIOD_W_OFFER_OPEN =0x457;
FeedRequest.P_PERIOD_M_OFFER_OPEN =0x458;
FeedRequest.P_PERIOD_Q_OFFER_OPEN =0x459;
FeedRequest.P_PERIOD_Y_OFFER_OPEN =0x45a;
FeedRequest.P_PERIOD_1_OFFER_HIGH =0x460;
FeedRequest.P_PERIOD_5_OFFER_HIGH =0x461;
FeedRequest.P_PERIOD_10_OFFER_HIGH =  0x462;
FeedRequest.P_PERIOD_15_OFFER_HIGH =  0x463;
FeedRequest.P_PERIOD_30_OFFER_HIGH =  0x464;
FeedRequest.P_PERIOD_60_OFFER_HIGH =  0x465;
FeedRequest.P_PERIOD_D_OFFER_HIGH =0x466;
FeedRequest.P_PERIOD_W_OFFER_HIGH =0x467;
FeedRequest.P_PERIOD_M_OFFER_HIGH =0x468;
FeedRequest.P_PERIOD_Q_OFFER_HIGH =0x469;
FeedRequest.P_PERIOD_Y_OFFER_HIGH =0x46a;
FeedRequest.P_PERIOD_1_OFFER_LOW = 0x470;
FeedRequest.P_PERIOD_5_OFFER_LOW = 0x471;
FeedRequest.P_PERIOD_10_OFFER_LOW =0x472;
FeedRequest.P_PERIOD_15_OFFER_LOW =0x473;
FeedRequest.P_PERIOD_30_OFFER_LOW =0x474;
FeedRequest.P_PERIOD_60_OFFER_LOW =0x475;
FeedRequest.P_PERIOD_D_OFFER_LOW = 0x476;
FeedRequest.P_PERIOD_W_OFFER_LOW = 0x477;
FeedRequest.P_PERIOD_M_OFFER_LOW = 0x478;
FeedRequest.P_PERIOD_Q_OFFER_LOW = 0x479;
FeedRequest.P_PERIOD_Y_OFFER_LOW = 0x47a;
FeedRequest.P_PERIOD_1_OFFER_CLOSE =  0x480;
FeedRequest.P_PERIOD_5_OFFER_CLOSE =  0x481;
FeedRequest.P_PERIOD_10_OFFER_CLOSE = 0x482;
FeedRequest.P_PERIOD_15_OFFER_CLOSE = 0x483;
FeedRequest.P_PERIOD_30_OFFER_CLOSE = 0x484;
FeedRequest.P_PERIOD_60_OFFER_CLOSE = 0x485;
FeedRequest.P_PERIOD_D_OFFER_CLOSE =  0x486;
FeedRequest.P_PERIOD_W_OFFER_CLOSE =  0x487;
FeedRequest.P_PERIOD_M_OFFER_CLOSE =  0x488;
FeedRequest.P_PERIOD_Q_OFFER_CLOSE =  0x489;
FeedRequest.P_PERIOD_Y_OFFER_CLOSE =  0x48a;
FeedRequest.P_PERIOD_1_CUR_OPEN = 0x490;
FeedRequest.P_PERIOD_5_CUR_OPEN = 0x491;
FeedRequest.P_PERIOD_10_CUR_OPEN = 0x492;
FeedRequest.P_PERIOD_15_CUR_OPEN = 0x493;
FeedRequest.P_PERIOD_30_CUR_OPEN = 0x494;
FeedRequest.P_PERIOD_60_CUR_OPEN = 0x495;
FeedRequest.P_PERIOD_D_CUR_OPEN = 0x496;
FeedRequest.P_PERIOD_W_CUR_OPEN = 0x497;
FeedRequest.P_PERIOD_M_CUR_OPEN = 0x498;
FeedRequest.P_PERIOD_Q_CUR_OPEN = 0x499;
FeedRequest.P_PERIOD_Y_CUR_OPEN = 0x49a;
FeedRequest.P_PERIOD_1_CUR_HIGH = 0x4a0;
FeedRequest.P_PERIOD_5_CUR_HIGH = 0x4a1;
FeedRequest.P_PERIOD_10_CUR_HIGH = 0x4a2;
FeedRequest.P_PERIOD_15_CUR_HIGH = 0x4a3;
FeedRequest.P_PERIOD_30_CUR_HIGH = 0x4a4;
FeedRequest.P_PERIOD_60_CUR_HIGH = 0x4a5;
FeedRequest.P_PERIOD_D_CUR_HIGH = 0x4a6;
FeedRequest.P_PERIOD_W_CUR_HIGH = 0x4a7;
FeedRequest.P_PERIOD_M_CUR_HIGH = 0x4a8;
FeedRequest.P_PERIOD_Q_CUR_HIGH = 0x4a9;
FeedRequest.P_PERIOD_Y_CUR_HIGH = 0x4aa;
FeedRequest.P_PERIOD_1_CUR_LOW =  0x4b0;
FeedRequest.P_PERIOD_5_CUR_LOW =  0x4b1;
FeedRequest.P_PERIOD_10_CUR_LOW = 0x4b2;
FeedRequest.P_PERIOD_15_CUR_LOW = 0x4b3;
FeedRequest.P_PERIOD_30_CUR_LOW = 0x4b4;
FeedRequest.P_PERIOD_60_CUR_LOW = 0x4b5;
FeedRequest.P_PERIOD_D_CUR_LOW =  0x4b6;
FeedRequest.P_PERIOD_W_CUR_LOW =  0x4b7;
FeedRequest.P_PERIOD_M_CUR_LOW =  0x4b8;
FeedRequest.P_PERIOD_Q_CUR_LOW =  0x4b9;
FeedRequest.P_PERIOD_Y_CUR_LOW =  0x4ba;
FeedRequest.P_PERIOD_1_CUR_CLOSE = 0x4c0;
FeedRequest.P_PERIOD_5_CUR_CLOSE = 0x4c1;
FeedRequest.P_PERIOD_10_CUR_CLOSE =0x4c2;
FeedRequest.P_PERIOD_15_CUR_CLOSE =0x4c3;
FeedRequest.P_PERIOD_30_CUR_CLOSE =0x4c4;
FeedRequest.P_PERIOD_60_CUR_CLOSE =0x4c5;
FeedRequest.P_PERIOD_D_CUR_CLOSE = 0x4c6;
FeedRequest.P_PERIOD_W_CUR_CLOSE = 0x4c7;
FeedRequest.P_PERIOD_M_CUR_CLOSE = 0x4c8;
FeedRequest.P_PERIOD_Q_CUR_CLOSE = 0x4c9;
FeedRequest.P_PERIOD_Y_CUR_CLOSE = 0x4ca;
FeedRequest.P_PERIOD_1_TOTAL_VOLUME = 0x4d0;
FeedRequest.P_PERIOD_5_TOTAL_VOLUME = 0x4d1;
FeedRequest.P_PERIOD_10_TOTAL_VOLUME = 0x4d2;
FeedRequest.P_PERIOD_15_TOTAL_VOLUME = 0x4d3;
FeedRequest.P_PERIOD_30_TOTAL_VOLUME = 0x4d4;
FeedRequest.P_PERIOD_60_TOTAL_VOLUME = 0x4d5;
FeedRequest.P_PERIOD_D_TOTAL_VOLUME = 0x4d6;
FeedRequest.P_PERIOD_W_TOTAL_VOLUME = 0x4d7;
FeedRequest.P_PERIOD_M_TOTAL_VOLUME = 0x4d8;
FeedRequest.P_PERIOD_Q_TOTAL_VOLUME = 0x4d9;
FeedRequest.P_PERIOD_Y_TOTAL_VOLUME = 0x4da;
FeedRequest.P_PERIOD_1_BUY_VOLUME =0x4e0;
FeedRequest.P_PERIOD_5_BUY_VOLUME =0x4e1;
FeedRequest.P_PERIOD_10_BUY_VOLUME =  0x4e2;
FeedRequest.P_PERIOD_15_BUY_VOLUME =  0x4e3;
FeedRequest.P_PERIOD_30_BUY_VOLUME =  0x4e4;
FeedRequest.P_PERIOD_60_BUY_VOLUME =  0x4e5;
FeedRequest.P_PERIOD_D_BUY_VOLUME =0x4e6;
FeedRequest.P_PERIOD_W_BUY_VOLUME =0x4e7;
FeedRequest.P_PERIOD_M_BUY_VOLUME =0x4e8;
FeedRequest.P_PERIOD_Q_BUY_VOLUME =0x4e9;
FeedRequest.P_PERIOD_Y_BUY_VOLUME =0x4ea;
FeedRequest.P_PERIOD_1_SELL_VOLUME =  0x4f0;
FeedRequest.P_PERIOD_5_SELL_VOLUME =  0x4f1;
FeedRequest.P_PERIOD_10_SELL_VOLUME = 0x4f2;
FeedRequest.P_PERIOD_15_SELL_VOLUME = 0x4f3;
FeedRequest.P_PERIOD_30_SELL_VOLUME = 0x4f4;
FeedRequest.P_PERIOD_60_SELL_VOLUME = 0x4f5;
FeedRequest.P_PERIOD_D_SELL_VOLUME =  0x4f6;
FeedRequest.P_PERIOD_W_SELL_VOLUME =  0x4f7;
FeedRequest.P_PERIOD_M_SELL_VOLUME =  0x4f8;
FeedRequest.P_PERIOD_Q_SELL_VOLUME =  0x4f9;
FeedRequest.P_PERIOD_Y_SELL_VOLUME =  0x4fa;
FeedRequest.P_PERIOD_1_UNKNOWN_VOLUME =0x500;
FeedRequest.P_PERIOD_5_UNKNOWN_VOLUME =0x501;
FeedRequest.P_PERIOD_10_UNKNOWN_VOLUME =  0x502;
FeedRequest.P_PERIOD_15_UNKNOWN_VOLUME =  0x503;
FeedRequest.P_PERIOD_30_UNKNOWN_VOLUME =  0x504;
FeedRequest.P_PERIOD_60_UNKNOWN_VOLUME =  0x505;
FeedRequest.P_PERIOD_D_UNKNOWN_VOLUME =0x506;
FeedRequest.P_PERIOD_W_UNKNOWN_VOLUME =0x507;
FeedRequest.P_PERIOD_M_UNKNOWN_VOLUME =0x508;
FeedRequest.P_PERIOD_Q_UNKNOWN_VOLUME =0x509;
FeedRequest.P_PERIOD_Y_UNKNOWN_VOLUME =0x50a;
FeedRequest.P_V1_NAME= 0x0600;
FeedRequest.P_V1_NAME_BOLD_NO_LINK  = 0x0601;
FeedRequest.P_FLOW_I_P1_BID = 0x0610;
FeedRequest.P_FLOW_I_P1_OFFER= 0x0611;
FeedRequest.P_FLOW_I_P5_BID = 0x0612;
FeedRequest.P_FLOW_I_P5_OFFER= 0x0613;
FeedRequest.P_FLOW_I_P10_BID = 0x0614;
FeedRequest.P_FLOW_I_P10_OFFER  = 0x0615;
FeedRequest.P_FLOW_I_P15_BID = 0x0616;
FeedRequest.P_FLOW_I_P15_OFFER  = 0x0617;
FeedRequest.P_FLOW_I_P30_BID = 0x0618;
FeedRequest.P_FLOW_I_P30_OFFER  = 0x0619;
FeedRequest.P_FLOW_I_P60_BID = 0x061a;
FeedRequest.P_FLOW_I_P60_OFFER  = 0x061b;
FeedRequest.P_FLOW_D_P1_BID = 0x061c;
FeedRequest.P_FLOW_D_P1_OFFER= 0x061d;
FeedRequest.P_FLOW_D_P5_BID = 0x061e;
FeedRequest.P_FLOW_D_P5_OFFER= 0x061f;
FeedRequest.P_FLOW_D_P10_BID = 0x0620;
FeedRequest.P_FLOW_D_P10_OFFER  = 0x0621;
FeedRequest.P_FLOW_D_P15_BID = 0x0622;
FeedRequest.P_FLOW_D_P15_OFFER  = 0x0623;
FeedRequest.P_FLOW_D_P30_BID = 0x0624;
FeedRequest.P_FLOW_D_P30_OFFER  = 0x0625;
FeedRequest.P_FLOW_D_P60_BID = 0x0626;
FeedRequest.P_FLOW_D_P60_OFFER  = 0x0627;
FeedRequest.P_FLOW_PU_P1_BID = 0x0628;
FeedRequest.P_FLOW_PU_P1_OFFER  = 0x0629;
FeedRequest.P_FLOW_PU_P5_BID = 0x062a;
FeedRequest.P_FLOW_PU_P5_OFFER  = 0x062b;
FeedRequest.P_FLOW_PU_P10_BID= 0x062c;
FeedRequest.P_FLOW_PU_P10_OFFER = 0x062d;
FeedRequest.P_FLOW_PU_P15_BID= 0x062e;
FeedRequest.P_FLOW_PU_P15_OFFER = 0x062f;
FeedRequest.P_FLOW_PU_P30_BID= 0x0630;
FeedRequest.P_FLOW_PU_P30_OFFER = 0x0631;
FeedRequest.P_FLOW_PU_P60_BID= 0x0632;
FeedRequest.P_FLOW_PU_P60_OFFER = 0x0633;
FeedRequest.P_FLOW_PD_P1_BID = 0x0634;
FeedRequest.P_FLOW_PD_P1_OFFER  = 0x0635;
FeedRequest.P_FLOW_PD_P5_BID = 0x0636;
FeedRequest.P_FLOW_PD_P5_OFFER  = 0x0637;
FeedRequest.P_FLOW_PD_P10_BID= 0x0638;
FeedRequest.P_FLOW_PD_P10_OFFER = 0x0639;
FeedRequest.P_FLOW_PD_P15_BID= 0x063a;
FeedRequest.P_FLOW_PD_P15_OFFER = 0x063b;
FeedRequest.P_FLOW_PD_P30_BID= 0x063c;
FeedRequest.P_FLOW_PD_P30_OFFER = 0x063d;
FeedRequest.P_FLOW_PD_P60_BID= 0x063e;
FeedRequest.P_FLOW_PD_P60_OFFER = 0x0670;
FeedRequest.P_FLOW_SU_P1_BID = 0x0671;
FeedRequest.P_FLOW_SU_P1_OFFER  = 0x0672;
FeedRequest.P_FLOW_SU_P5_BID = 0x0673;
FeedRequest.P_FLOW_SU_P5_OFFER  = 0x0674;
FeedRequest.P_FLOW_SU_P10_BID= 0x0675;
FeedRequest.P_FLOW_SU_P10_OFFER = 0x0676;
FeedRequest.P_FLOW_SU_P15_BID= 0x0677;
FeedRequest.P_FLOW_SU_P15_OFFER = 0x0678;
FeedRequest.P_FLOW_SU_P30_BID= 0x0679;
FeedRequest.P_FLOW_SU_P30_OFFER = 0x067a;
FeedRequest.P_FLOW_SU_P60_BID= 0x067b;
FeedRequest.P_FLOW_SU_P60_OFFER = 0x067c;
FeedRequest.P_FLOW_SD_P1_BID = 0x067d;
FeedRequest.P_FLOW_SD_P1_OFFER  = 0x067e;
FeedRequest.P_FLOW_SD_P5_BID = 0x067f;
FeedRequest.P_FLOW_SD_P5_OFFER  = 0x0680;
FeedRequest.P_FLOW_SD_P10_BID= 0x0681;
FeedRequest.P_FLOW_SD_P10_OFFER = 0x0682;
FeedRequest.P_FLOW_SD_P15_BID= 0x0683;
FeedRequest.P_FLOW_SD_P15_OFFER = 0x0684;
FeedRequest.P_FLOW_SD_P30_BID= 0x0685;
FeedRequest.P_FLOW_SD_P30_OFFER = 0x0686;
FeedRequest.P_FLOW_SD_P60_BID= 0x0687;
FeedRequest.P_FLOW_SD_P60_OFFER = 0x0688;
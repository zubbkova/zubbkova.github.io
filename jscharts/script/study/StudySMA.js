/* eslint no-unused-vars: "off" */
/* global Study, Series, Language, Utils, StudyDialog_StudyEditParameter, MetaStudy */
/**
 * @constructor
 * @extends {Study}
 * @param {Overlay} o
 */
function StudySMA(o) {
    Study.call(this, o);
    this._period = 15;
    this._offset = 0;
    this._series = new Series();
}
/**
 * Inheriting
 */
StudySMA.prototype = Object.create(Study.prototype);
StudySMA.prototype.constructor = StudySMA;
/** @static */
StudySMA.getItems = function() {
    return [new StudyDialog_StudyEditParameter("period", Language.getString("toolbardialogs_period")), new StudyDialog_StudyEditParameter("offset", Language.getString("toolbardialogs_offset"))];
}
/** 
 * @static
 * @param {Overlay} o
 */
StudySMA.newInstance = function(o) {
    return new StudySMA(o);
}
/** @static */
StudySMA.mnemonic = "SMA";
/** @static */
StudySMA.helpID = 418;
/** @static */
StudySMA.ownOverlay = false;
/** @override */
StudySMA.prototype.setName = function() {
    this._name = Language.getString("study_simplemovingaverage") + " (" + this._period + "," + this._offset + ")";
}
/** @override */
StudySMA.prototype.getParams = function() {
    return "period-" + this._period + ":offset-" + this._offset;
}
/** @override */
StudySMA.prototype.setParams = function(params) {
    var items = Utils.convertStringParams(params, ":", "-");
    if (items.hasOwnProperty("period") && typeof items["period"] !== "undefined")
        this._period = parseInt(items["period"], 10);
    if (items.hasOwnProperty("offset") && typeof items["offset"] !== "undefined")
        this._offset = parseInt(items["offset"], 10);
    Study.prototype.setParams.call(this, params);
}
/** @override */
StudySMA.prototype.update = function(start, end) {
    this._series = MetaStudy.SMA(this._parent._chart, this._source, this._period, this._offset);
}
/** @override */
StudySMA.prototype.drawPrice = function() {
    this._parent.drawPrice(this._series.get(this._parent._chart._currentSymbol._timeEnd), this._colour);
}
/** @override */
StudySMA.prototype.draw = function() {
    this.updateY();
    this._parent.drawLineNormal(this._series, this._colour);
}
/** @override */
StudySMA.prototype.getRange = function() {
    return this._period;
}
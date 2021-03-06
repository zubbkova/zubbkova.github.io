/* global Study, Language, Utils, StudyDialog_StudyEditParameter */
/**
 * ---------------
 * StudyWithPeriod
 * ---------------
 * @constructor
 * @extends {Study}
 * @param {Overlay} o
 * @param {number=} p
 */
function StudyWithPeriod(o, p) {
    Study.call(this, o);
    this._period = p;
}
/**
 * Inheriting
 */
StudyWithPeriod.prototype = Object.create(Study.prototype);
StudyWithPeriod.prototype.constructor = StudyWithPeriod;
/** @static */
StudyWithPeriod.getItems = function() {
    return [new StudyDialog_StudyEditParameter("period", Language.getString("toolbardialogs_period"))];
}
/** 
 * @static
 * @param {Overlay} o
 */
StudyWithPeriod.newInstance = function(o) {
    return new StudyWithPeriod(o);
}
/** @override */
StudyWithPeriod.prototype.getParams = function() {
    return "period-" + this._period;
}
/** @override */
StudyWithPeriod.prototype.setParams = function(params) {
    var items = Utils.convertStringParams(params, ":", "-");
    if (items.hasOwnProperty("period") && typeof items["period"] !== "undefined")
        this._period = parseInt(items["period"], 10);
    Study.prototype.setParams.call(this, params);
}
/** @override */
StudyWithPeriod.prototype.getRange = function() {
    return this._period;
}
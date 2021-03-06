/* eslint no-unused-vars: "off" */
/* global Study, Language, XTIterator, Color */
/**
 * @constructor
 * @extends {Study}
 * @param {Overlay} o
 */
function StudyHist(o) {
    Study.call(this, o);
    this._count = new Array(StudyHist.COLUMNS);
    this._count.fillArrayWithValue(0);
    this._volumes = new Array(StudyHist.COLUMNS);
    this._volumes.fillArrayWithValue(0);
    this._name = Language.getString("study_histogram");
}
/**
 * Inheriting
 */
StudyHist.prototype = Object.create(Study.prototype);
StudyHist.prototype.constructor = StudyHist;
/** @static */
StudyHist.getItems = function() {
    return [];
}
/** 
 * @static
 * @param {Overlay} o
 */
StudyHist.newInstance = function(o) {
    return new StudyHist(o);
}
/** @static */
StudyHist.mnemonic = "Hist";
/** @static */
StudyHist.helpID = 422;
/** @static */
StudyHist.ownOverlay = false;
/** @static */
StudyHist.COLUMNS = 50;
/** @override */
StudyHist.prototype.getMaxMin = function(i) {
    this._range.reset();
    this._range._min = this._close.get(this._parent._chart._currentSymbol._timeEnd);
    this._range._max = this._range._min;
}
/** @override */
StudyHist.prototype.draw = function() {
    var yStart =  this._parent._yMid - this._parent._ySpread / 2;
    var yInterval = this._parent._ySpread / StudyHist.COLUMNS;
    var totalVol = 0, maxCount = 0;
    this.updateDefaultDataSource();
    var i;
    // Have to calculate here because mid/spread values aren't set when update() is called.
    for (i = 0; i < StudyHist.COLUMNS; i++) {
        this._count[i] = 0;
        this._volumes[i] = 0;
    }
    // Initial pass to calc total volume.
    i = XTIterator.reverseScreenIterator(this._parent._chart);
    do {
        totalVol += this._vol.get(i._d);
    } while (i.move());
    i = XTIterator.reverseScreenIterator(this._parent._chart);
    do {
        if (i._d > this._close.timeByIndex(-1))
            continue;
        var closeVal = this._close.get(i._d);
        if (!isNaN(closeVal)) {
            var idx = Math.min(49, parseInt((closeVal - yStart) * 50.0 / this._parent._ySpread, 10));
            if (idx < this._count.length && idx > 0) {
                this._count[idx]++;
                this._volumes[idx] += this._vol.get(i._d);
                if (this._count[idx] > maxCount)
                    maxCount = this._count[idx];
            }
        }
    } while (i.move());
    // Painting code.
    this._parent._chartCanvas.setFillColor(Color.lightGray);
    if (this._parent._legend && this._parent._legend.getItem(this._legendIndex)) {
        this._parent._legend.getItem(this._legendIndex)._colour = Color.lightGray;
    }
    for (var t = 0; t < StudyHist.COLUMNS; t++) {
        var labely = yStart + t * yInterval;
        var cury = parseInt(this._parent.getY(labely), 10);
        var width = parseInt(75 * this._count[t] / maxCount, 10);
        if (totalVol > 0.0) {
            var perc = 0.75 - this._volumes[t] / (2.0 * totalVol);
            this._parent._chartCanvas.setFillColor(new Color(perc, perc, perc));
        }
        this._parent._chartCanvas.fillRectWithAdjust(this._parent._chartCanvas._topLineStartX, cury - 4, width, 5);
    }
}
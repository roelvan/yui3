// Implements the natvie array functions Mozilla introduced in JS 1.6
// http://developer.mozilla.org/en/docs/New_in_JavaScript_1.6
// @todo evaulate the implementations
YUI.add("arrayextras", function(Y) {

    var L = Y.Lang, Native = Array.prototype;
    
    var Extras = {

        contains: function (a, o) {
            return Y.Array.indexOf(a, o) != -1;
        },

        copy: function (a, o) {
            return a.concat();
        },

        every: function (a, f, o) {
            var l = a.length;
            for (var i = 0; i < l; i=i+1) {
                if (!f.call(o, a[i], i, a)) {
                    return false;
                }
            }
            return true;
        },

        filter = function (a, f, o) {
            var l = a.length, r = [];
            for (var i = 0; i < l; i=i+1) {
                if (f.call(o, a[i], i, a)) {
                    r.push(a[i]);
                }
            }
            return r;
        },


        indexOf: function (a, o, idx) {
            idx = idx || 0;
            if (idx < 0) {
                idx = Math.max(0, a.length + idx);
            }
            for (var i = idx; i < a.length; i=i+1) {
                if (a[i] === o) {
                    return i;
                }
            }
            return -1;
        },

        insertAt: function (a, o, i) {
            a.splice(i, 0, o);
        },

        insertBefore: function (a, o, o2) {
            var i = Y.Array.indexOf(a, o2);
            if (i === -1)
                a.push(o);
            else
                a.splice(i, 0, o);
        },

        lastIndexOf: function (a, o, idx) {
            if (idx == null) {
                idx = a.length - 1;
            } else if (idx < 0) {
                idx = Math.max(0, a.length + idx);
            }
            for (var i = idx; i >= 0; i=i-1) {
                if (a[i] === o) {
                    return i;
                }
            }
            return -1;
        },

        map: function (a, f, o) {
            var l = a.length, r = [];
            for (var i = 0; i < l; i=i+1) {
                r.push(f.call(o, a[i], i, a));
            }
            return r;
        },

        removeAt: function (a, i) {
            a.splice(i, 1);
        },

        remove: function (a, o) {
            var i = Y.Array.indexOf(a, o);
            if (i != -1) {
                a.splice(i, 1);
            }
        },

        some: function (a, f, o) {
            var l = a.length;
            for (var i = 0; i < l; i=i+1) {
                if (f.call(o, a[i], i, a)) {
                    return true;
                }
            }
            return false;
        }
    };

    // map the utility functions to the native array functions if they
    // are available.
    for (var i in Extras) {
        Y.Array[i] = (Native[i]) ? function() {
            Native[i].apply(arguments[0], Native.slice.call(arguments, 1));
        } : Extras[i];
    }

}, "3.0.0");

// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  /**
   * @class ServerOverview
   * Server cpu and memory utilization data.
   * @extends Backbone.Model
  */

  var ServerOverview;
  return ServerOverview = (function(_super) {

    __extends(ServerOverview, _super);

    /**
     * @constructor
     * Creates a new ServerOverview model.
     * @param {Object} [options] config options for Backbone.Model
    */


    function ServerOverview(options) {
      if (options == null) {
        options = {};
      }
      this.remote = true;
      this.defaults = {
        'cpu': 0,
        'memory': 0
      };
      this.url = 'http://10.0.1.6:3000/cpumem';
      ServerOverview.__super__.constructor.apply(this, arguments);
      this.fetch();
      /*
                  setInterval(() =>
                      @fetch()
                      return
                  , 5000)
      */

      return;
    }

    /**
     * @method @private
     * Formats data returned from the server after fetch is called.
     * @param {Object} stats JSON data from the server
     * @param {Object} [jqXHR] jQuery jqXHR
     * @return {Object} re-formmated JSON data
    */


    ServerOverview.prototype.parse = function(stats, xhr) {
      var totalCpulUtilization, totalMemUtilization;
      totalCpulUtilization = 0;
      stats.cpus.forEach(function(item, index, allItems) {
        return totalCpulUtilization = +item.utilization;
      });
      if (totalCpulUtilization > 1) {
        totalCpulUtilization = Math.round(totalCpulUtilization);
      } else {
        totalCpulUtilization = String(totalCpulUtilization).slice(1);
      }
      totalMemUtilization = 0;
      if (stats.mem.utilization > 1) {
        totalMemUtilization = Math.round(stats.mem.utilization);
      } else {
        totalMemUtilization = String(totalMemUtilization).slice(1);
      }
      return {
        cpu: totalCpulUtilization,
        memory: totalMemUtilization
      };
    };

    return ServerOverview;

  })(Backbone.Model);
});
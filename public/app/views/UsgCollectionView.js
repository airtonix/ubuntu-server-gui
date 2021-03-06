// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'underscore', 'marionette'], function($, _, BackboneMarionette) {
  /**
   * @class UsgCollectionView
   * Encapsulates Ubuntu Server GUI specific collection view functionality.
   * @extends BackboneMarionette.CollectionView
  */

  var UsgCollectionView;
  return UsgCollectionView = (function(_super) {

    __extends(UsgCollectionView, _super);

    /**
     * @constructor
     * Creates a new CwCollectionView instance.
     *
     * @param {Object} [options] config options for BackboneMarionette.CollectionView.
     * @return {Object} MainToolbar instance
    */


    function UsgCollectionView(options) {
      if (options == null) {
        options = {};
      }
      UsgCollectionView.__super__.constructor.apply(this, arguments);
      return;
    }

    /**
     * @method
     * Renders HTML template for collection view if one exists.
     * Regular Marionette CollectionView does not render a template for
     * the collection view itself just for itemView.
     *
    */


    UsgCollectionView.prototype.beforeRender = function() {
      var data, html, template;
      if ((this.template != null)) {
        template = this.getTemplate();
        if (this.data === void 0) {
          data = {};
        }
        html = BackboneMarionette.Renderer.render(template, data);
        this.$el.html(html);
        return;
      }
    };

    /**
     * @method
     * Overriding initialEvents with this implementation allows us to
     * hook the collection reset event into the show method of the 
     * parentRegion (if one is supplied). The parentRegion will then 
     * call render on this view and insert the result into the region. 
     *
    */


    UsgCollectionView.prototype.initialEvents = function() {
      if (this.collection) {
        this.bindTo(this.collection, "add", this.addChildView, this);
        this.bindTo(this.collection, "remove", this.removeItemView, this);
        this.bindTo(this.collection, "change", this.render, this);
        if (this.parentRegion) {
          this.bindTo(this.collection, "reset", this.showInsideParentRegion, this);
        } else {
          this.bindTo(this.collection, "reset", this.render, this);
        }
      }
    };

    /**
     * @method
     * Allows us to smoothly delegate rendering to the parentRegion. 
     *
    */


    UsgCollectionView.prototype.showInsideParentRegion = function() {
      this.parentRegion.show(this);
    };

    return UsgCollectionView;

  })(BackboneMarionette.CollectionView);
});

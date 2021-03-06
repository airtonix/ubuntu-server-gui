define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Marionette = require('marionette'),
        popoverTpl = require('text!views/modal/templates/noob-tour-popover.html');

    require('bootstrap_tooltip');
    require('bootstrap_popover');

    return Marionette.ItemView.extend({
        template: _.template(popoverTpl),
        tagName: 'div',
        className: 'noobtour-popover popover fade top in',

        onRender: function() {
            var topCoord = $('#lsfb_btn_add_server').position().top - 133;
            this.$el.css({top: topCoord, left: 2, display: 'block'});

            this.resizeListener = _.bind(this.onWindowResize, this);
            $(window).resize(this.resizeListener);
        },

        onWindowResize: function() {
            var topCoord = $('#lsfb_btn_add_server').position().top - 133;
            this.$el.css({top: topCoord});
        },

        onClose: function() {
            $(window).off('resize', this.resizeListener);
        }
    });
});


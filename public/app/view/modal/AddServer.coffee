define([
    'jquery'
    'underscore'
    'app'
    'model/Server'
    'collection/ServerList'
    'view/BaseForm'
    'text!view/modal/tpl/add-server.html'
    'bootstrap_modal'
    'bootstrap_transition'
],
($, _, App, Server, ServerList, BaseForm, addServerTpl) ->
    
    ###*
     * @class AddServerModal
     * Add server modal dialog.
     * @extends BackboneMarionette.ItemView
     ###
    class AddServerModal extends BaseForm

        ###*
         * @constructor
         * Creates a new AddServerModal instance.
         * @param {Object} [options] config options for BackboneMarionette.ItemView.
         ###
        constructor: (options={}) ->
            @App = App
            
            @template = _.template(addServerTpl)
            @tagName = 'div'

            @id = 'modal_add_server'
            @className = 'modal hide fade'
            
            #@collection = new ServerList()

            @App.vent.on('server:add-via-modal', @showModal, @)

            @events =
                'click #add_server_btn': 'onSubmit',
                'keyup input': 'onInputKeyup'

            super
            return

        hideModal: () ->
            $('#modal_add_server').modal('hide')
            @clearForm()
            return

        onSubmit: (eventObj) ->
            eventObj.stopPropagation()
            eventObj.preventDefault()
            eventObj.returnValue = false

            @hideError()
            @disableForm()
            
            name = $.trim($('input[name=name]').val())
            ipv4 = $.trim($('input[name=ipv4]').val())

            #@collection.create({name: name, ipv4: ipv4})
            server = new Server({name: name, ipv4: ipv4})
            server.save()
            @App.vent.trigger('server:new-server-added')
            @hideModal()
            return

        onInputKeyup: (eventObj) ->
            eventObj.stopPropagation()
            eventObj.preventDefault()
            eventObj.returnValue = false

            if (eventObj.keyCode == 13)
                @onSubmit(eventObj)

            return false

        onAddServerError: ->
            @showError(@model.get('errorMsg'))
            return            

        render: () ->
            super
            $('#main_footerbar_container').after(@el)
            $('#modal_add_server').modal({
                show: false
            }).on('hidden', =>
                @clearForm()
                return
            )
            return @el

        showError: (msg) ->
            @enableForm()
            $('#error_alert').text(msg).show()            
            return

        showModal: () ->           
            $('#modal_add_server').modal('show')
            $('#modal_add_server input').first().focus()
            return




)
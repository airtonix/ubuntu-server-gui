Ext.data.JsonP.NetServices({"tagname":"class","name":"NetServices","extends":"Backbone.Collection","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"assignment","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-NetServices","members":{"cfg":[],"property":[],"method":[{"name":"formatService","tagname":"method","owner":"NetServices","meta":{"private":true},"id":"method-formatService"},{"name":"parse","tagname":"method","owner":"NetServices","meta":{"private":true},"id":"method-parse"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"NetServices.js","href":"NetServices.html#NetServices"}],"html_meta":{},"component":false,"superclasses":["Backbone.Collection"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.Collection<div class='subclass '><strong>NetServices</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/NetServices.html#NetServices' target='_blank'>NetServices.js</a></div></pre><div class='doc-contents'><p>Running network services.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-formatService' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NetServices'>NetServices</span><br/><a href='source/NetServices.html#NetServices-method-formatService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NetServices-method-formatService' class='name expandable'>formatService</a>( <span class='pre'>String str</span> ) : String<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Formats network service names. ...</div><div class='long'><p>Formats network service names.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>network service name from the server.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>re-formmated service name</p>\n</div></li></ul></div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NetServices'>NetServices</span><br/><a href='source/NetServices.html#NetServices-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NetServices-method-parse' class='name expandable'>parse</a>( <span class='pre'>Object response, [Object jqXHR]</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Formats data returned from the server after fetch is called. ...</div><div class='long'><p>Formats data returned from the server after fetch is called.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>JSON data from the server</p>\n</div></li><li><span class='pre'>jqXHR</span> : Object (optional)<div class='sub-desc'><p>jQuery jqXHR</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>re-formmated JSON data</p>\n</div></li></ul></div></div></div></div></div></div></div>"});
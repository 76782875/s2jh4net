+function(c){var e=function(i,h){this.$element=c(i);this.options=c.extend({},e.DEFAULTS,h);var l=this.$element.data("placeholder")||(this.$element.data("tags")?"请选择或输入...":"请选择...");if(this.$element.find(' > option[value=""]').size()==0){this.$element.prepend('<option value="">'+l+"</option>")}if(this.$element.find(" > option[selected]").size()==0){this.$element.find(' > option[value=""]').attr("selected",true)}var g=this.$element.data("url");if(g){h=c.extend({minimumInputLength:1,ajax:{url:g,dataType:"json",data:function(n){var m={rows:this.$element.data("term-rows")||10,page:n.page||1};m[this.$element.data("term-query")]=n.term;return m},processResults:function(m,n){return{results:m.content,pagination:{more:!m.last}}}},templateResult:function(n){if(n.loading){return n.text}var o=n.display;var m=this.$element.attr("data-item-display");if(m){o=n[m]}return o},templateSelection:function(n){if(n.display==undefined){return n.text}var o=n.display;var m=this.$element.attr("data-item-label");if(m){o=n[m]}return o}},h)}var k=this.$element.attr("data-cascade-parent");if(k){var f=this.$element.closest("form").find("select[name='"+k+"']");this.$element.data("cachedOptions",this.$element.children("option").clone());var j=f.val();if(j&&j!=""){this.$element.children("option").each(function(m,n){var p=c(this);var o=p.attr("data-cascade-parent");if(o&&o!=j){p.remove()}})}else{this.$element.empty()}}this.$element.select2(h);this.$element.on("change",function(s){var p=c(this).children("option:selected").val();var w=this.$element.attr("data-cascade-name");if(w){var t=this.$element.closest("form").find("select[name='"+w+"']");t.empty();if(p&&p!=""){var u=t.attr("data-cascade-parent");if(u){t.data("cachedOptions").each(function(){var y=c(this);var x=y.attr("data-cascade-parent");if(x==undefined||x==p){t.append(y);t.select2(h)}})}else{var r=t.data(p);if(r){t.append(r);t.select2(h)}else{var n=this.$element.attr("data-cascade-url");var o=p;var q=this.$element.attr("name");var v=this.$element.attr("data-cascade-property");if(v){var m=this.$element.find("option[value='"+p+"']");q=v;o=m.attr("data-"+v)}n=Util.AddOrReplaceUrlParameter(n,q,o);t.ajaxJsonUrl(n,function(y){var x=[];x.push("<option value=''></option>");for(var z in y){x.push("<option value='"+z+"'>"+y[z]+"</option>")}r=x.join("");t.append(r);t.select2(h);t.data(p,r)})}}}}});if(this.$element.attr("required")=="required"||this.$element.attr("required")=="true"||this.$element.attr("data-rule-required")=="true"){this.$element.on("select2-close",function(m){this.$element.valid()})}};e.VERSION="1.0.0";e.DEFAULTS={language:"zh-CN",matcher:function(l,h){if(c.trim(l.term)===""){return h}if(typeof h.text==="undefined"){return null}if(c.trim(h.text)===""){return h}var g=l.term;var k=h.text;var f=Pinyin.getCamelChars(k)+"";var j=f.toUpperCase().indexOf(g.toUpperCase())==0;var i=k.toUpperCase().indexOf(g.toUpperCase())==0;if(j||i){return h}return null}};function b(f){return this.each(function(){var h=c(this);var g=h.data("extSelect");if(!g){h.data("extSelect",(g=new e(this)))}if(typeof f=="string"){g[f]()}})}var a=c.fn.extDoubleSelect;c.fn.extDoubleSelect=b;c.fn.extDoubleSelect.Constructor=e;c.fn.extDoubleSelect.noConflict=function(){c.fn.extDoubleSelect=a;return this};var d="select";c(document).on("after.ajax.page.show",function(f){console.log();c(d,f.container).each(function(){var g=c(this);var h=g.data();b.call(g,h)})})}(jQuery);
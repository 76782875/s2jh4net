jQuery(document).ready(function(){$("#login-form").find("input[name='username']").focus();$("#login-form").validate({errorElement:"span",errorClass:"help-block",focusInvalid:false,rules:{username:{required:true},password:{required:true},captcha:{required:true}},messages:{username:{required:"请填写登录账号"},password:{required:"请填写登录密码"},captcha:{required:"请填写登录验证码"}},highlight:function(b){$(b).closest(".form-group").addClass("has-error")},success:function(b){b.closest(".form-group").removeClass("has-error");b.remove()},errorPlacement:function(b,c){b.appendTo(c.closest(".form-group"))},submitHandler:function(b){b.submit()}});var a="h";if($(window).height()>$(window).width()){a="v"}$.backstretch([WEB_ROOT+"/assets/apps/img/bg01_"+a+".jpg",WEB_ROOT+"/assets/apps/img/bg02_"+a+".jpg"],{fade:1000,duration:8000});$("#reset-form").validate({errorElement:"span",errorClass:"help-block",focusInvalid:false,ignore:"",rules:{password:{required:true},rpassword:{required:true,equalToByName:"password"}},messages:{password:{required:"请输入登录密码"},rpassword:{required:"请再次输入登录密码",equalTo:"确认密码必须与登录密码一致"}},highlight:function(b){$(b).closest(".form-group").addClass("has-error")},success:function(b){b.closest(".form-group").removeClass("has-error");b.remove()},errorPlacement:function(b,c){b.insertAfter(c)},submitHandler:function(b){$(b).ajaxPostForm(function(){$(b).find('button[data-dismiss="modal"]').click();bootbox.dialog({message:"您可以马上使用新设定密码登录系统啦",title:"恭喜，密码设置成功",buttons:{main:{label:"关闭",className:"blue"}}})});return false}})});
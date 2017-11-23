if(jQuery.validator){jQuery.validator.addMethod("unique",function(d,b){var c=$(b).closest("form");var e=c.attr("data-editrulesurl");Util.assertNotBlank(e,"表单data-editrulesurl属性未定义");var a=WEB_ROOT+"/admin/util/validate/unique?clazz="+e.split("clazz=")[1]+"&element="+$(b).attr("name");var f=c.find("input[name='id']");if(f.size()>0){a=a+"&id="+f.val()}return $.validator.methods.remote.call(this,d,b,a)},"数据已存在");jQuery.validator.addMethod("timestamp",function(c,a){if(c==""){return this.optional(a)}var b=/^(?:[0-9]{4})-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;if(!b.test(c)){return false}return true},"请输入合法的日期时间格式（如2011-08-15 13:40:00）");jQuery.validator.addMethod("shortTimestamp",function(c,a){if(c==""){return this.optional(a)}var b=/^(?:[0-9]{4})-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]$/;if(!b.test(c)){return false}return true},"请输入合法的日期时间格式（如2011-08-15 13:40）");jQuery.validator.addMethod("yearMonth",function(c,a){if(c==""){return this.optional(a)}var b=/^(?:[0-9]{4})(?:(?:0[1-9])|(?:1[0-2]))$/;if(!b.test(c)){return false}return true},"请输入合法的年月格式（如201201）");jQuery.validator.addMethod("startWith",function(b,a,c){if(this.optional(a)){return true}if(c.length>b.length){return false}if(b.substr(0,c.length)==c){return true}else{return false}},"请输入以{0}开头字符串");jQuery.validator.addMethod("dateLT",function(value,element,param){if(value==""){return this.optional(element)}var $param=$(param);if($param.size()==0){$param=$(element).closest("form").find("[name='"+param+"']")}var endDate=$param.val();if(endDate==""){return true}var startDate=eval("new Date("+value.replace(/[\-\s:]/g,",")+")");endDate=eval("new Date("+endDate.replace(/[\-\s:]/g,",")+")");if(startDate>endDate){return false}else{return true}},"输入的日期数据必须小于结束日期");jQuery.validator.addMethod("dateGT",function(value,element,param){if(value==""){return this.optional(element)}var $param=$(param);if($param.size()==0){$param=$(element).closest("form").find("[name='"+param+"']")}var startDate=$param.val();if(startDate==""){return true}var endDate=eval("new Date("+value.replace(/[\-\s:]/g,",")+")");startDate=eval("new Date("+startDate.replace(/[\-\s:]/g,",")+")");if(startDate>endDate){return false}else{return true}},"输入的日期数据必须大于开始日期");var idCardNoUtil={provinceAndCitys:{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",99:"其他"},powers:["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],parityBit:["1","0","X","9","8","7","6","5","4","3","2"],genders:{male:"男",female:"女"},checkAddressCode:function(b){var a=/^[1-9]\d{5}$/.test(b);if(!a){return false}if(idCardNoUtil.provinceAndCitys[parseInt(b.substring(0,2))]){return true}else{return false}},checkBirthDayCode:function(f){var c=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(f);if(!c){return false}var e=parseInt(f.substring(0,4),10);var d=parseInt(f.substring(4,6),10);var a=parseInt(f.substring(6),10);var b=new Date(e,d-1,a);if(b>new Date()){return false}else{if((b.getFullYear()==e)&&(b.getMonth()==d-1)&&(b.getDate()==a)){return true}else{return false}}},getParityBit:function(d){var e=d.substring(0,17);var c=0;for(var b=0;b<17;b++){c+=parseInt(e.charAt(b),10)*parseInt(idCardNoUtil.powers[b])}var a=c%11;return idCardNoUtil.parityBit[a]},checkParityBit:function(b){var a=b.charAt(17).toUpperCase();if(idCardNoUtil.getParityBit(b)==a){return true}else{return false}},checkIdCardNo:function(b){if(Util.startWith(b,"99")){return true}var a=/^\d{15}|(\d{17}(\d|x|X))$/.test(b);if(!a){return false}if(b.length==15){return idCardNoUtil.check15IdCardNo(b)}else{if(b.length==18){return idCardNoUtil.check18IdCardNo(b)}else{return false}}},check15IdCardNo:function(c){var a=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(c);if(!a){return false}var b=c.substring(0,6);a=idCardNoUtil.checkAddressCode(b);if(!a){return false}var d="19"+c.substring(6,12);return idCardNoUtil.checkBirthDayCode(d)},check18IdCardNo:function(c){var a=/^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(c);if(!a){return false}var b=c.substring(0,6);a=idCardNoUtil.checkAddressCode(b);if(!a){return false}var d=c.substring(6,14);a=idCardNoUtil.checkBirthDayCode(d);if(!a){return false}return a},formateDateCN:function(b){if(idCardNoUtil.checkBirthDayCode(b)){var d=b.substring(0,4);var c=b.substring(4,6);var a=b.substring(6);return d+"-"+c+"-"+a}return""},getIdCardInfo:function(b){var a={gender:"",birthday:""};if(b.length==15){var c="19"+b.substring(6,12);a.birthday=idCardNoUtil.formateDateCN(c);if(parseInt(b.charAt(14))%2==0){a.gender=idCardNoUtil.genders.female}else{a.gender=idCardNoUtil.genders.male}}else{if(b.length==18){var c=b.substring(6,14);a.birthday=idCardNoUtil.formateDateCN(c);if(parseInt(b.charAt(16))%2==0){a.gender=idCardNoUtil.genders.female}else{a.gender=idCardNoUtil.genders.male}}}return a},getId15:function(a){if(a.length==15){return a}else{if(a.length==18){return a.substring(0,6)+a.substring(8,17)}else{return null}}},getId18:function(b){if(b.length==15){var c=b.substring(0,6)+"19"+b.substring(6);var a=idCardNoUtil.getParityBit(c);return c+a}else{if(b.length==18){return b}else{return null}}}};jQuery.validator.addMethod("idCardNo",function(b,a,c){return this.optional(a)||idCardNoUtil.checkIdCardNo(b)},"请输入有效的身份证件号");jQuery.validator.addMethod("phone",function(c,b){var a=/^\d|-$/;return this.optional(b)||(a.test(c))},"请输入有效的电话号码：数字或'-'");jQuery.validator.addMethod("mobile",function(c,b){var a=/^1\d{10}$/;return this.optional(b)||(a.test(c))},"请输入有效的手机号码");jQuery.validator.addMethod("zipCode",function(c,b){var a=/^[0-9]{6}$/;return this.optional(b)||(a.test(c))},"请输入有效的6位数字邮政编码");jQuery.validator.addMethod("numberEndWithPointFive",function(c,a){var b=/^(0|[1-9]\d*)([.][05])?$/;return this.optional(a)||(b.test(c))},"必须以.0或.5作为小数结尾");jQuery.validator.addMethod("equalToByName",function(b,a,d){var c=$(a).closest("form").find("input[name='"+d+"']");if(this.settings.onfocusout){c.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(a).valid()})}return b===c.val()},"请输入前后相等数据");jQuery.validator.addMethod("idCardNoSex",function(c,a,e){var d=$(a).closest("form").find("input[name='"+e+"']:checked");var b=c.substring(16,17);return this.optional(a)||(b%2===d.val()%2)},"身份证号与性别不匹配");jQuery.validator.addMethod("requiredByName",function(b,a,d){var c=$(a).closest("form").find("input[name='"+d+"']");if(c.val().length>0){if(b==undefined||b.length==0){return false}}return true},"此数据由于依赖关系必须填写");jQuery.validator.addMethod("remoteCallback",function(value,element,param){if(this.optional(element)){return"dependency-mismatch"}var previous=this.previousValue(element);if(!this.settings.messages[element.name]){this.settings.messages[element.name]={}}previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param==="string"&&{url:param}||param;if(previous.old===value){return previous.valid}previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true||response==="true";if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);delete validator.invalid[element.name];validator.showErrors()}else{var showError=true;var callback=$(element).attr("data-remoteCallback");if(callback){var result=eval(callback);if(result!=undefined&&result===false){showError=false}}if(showError){var errors={};var message=response||validator.defaultMessage(element,"remoteCallback");errors[element.name]=previous.message=$.isFunction(message)?message(value):message;validator.invalid[element.name]=true;validator.showErrors(errors)}}previous.valid=valid;validator.stopRequest(element,valid)}},param));return"pending"},"数据校验未过");$.validator.addMethod("regex",function(d,a,c){var b=new RegExp(c);return this.optional(a)||b.test(d)},"数据校验未通过");$.validator.addMethod("custom",function(c,a,d){var b=$(a).attr("data-rule-custom");if(b=="true"){$(a).attr("data-rule-custom","false");return false}else{return true}},"自定义校验未通过")};
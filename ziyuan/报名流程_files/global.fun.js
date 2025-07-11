function submit_search()
{
	if (document.getElementById("Vcl_H_Street").value == "") {
		window.alert("请选择 [幼儿园所在街道] ！")
		document.getElementById("Vcl_H_Street").focus()
		return
	}
	show_load();
	setTimeout('document.getElementById("submit_form").submit();',2000)
}
function submit_search_forsetclass()
{
	if (document.getElementById("Vcl_Key").value == "") {
		if (document.getElementById("Vcl_H_Street").value == "") {
			window.alert("请选择 [幼儿园所在街道] ！")
			document.getElementById("Vcl_H_Street").focus()
			return
		}
	}
	show_load();
	setTimeout('document.getElementById("submit_form").submit();',5000)
}
function change_jiedao(obj)
{
	if (obj.value=="")
	{
		var s_html='<div><label>幼儿园所在社区</label><select id="Vcl_H_Shequ" name="Vcl_H_Shequ"><option value=""></option></select></div><div class="space10"></div>'
		document.getElementById("h_shequ").innerHTML=s_html
		return
	}
	var value=obj.value
	var a_shequ=JieDao[value];
	a_shequ.sort();
	var s_html='<div><label>幼儿园所在社区</label><select id="Vcl_H_Shequ" name="Vcl_H_Shequ"><option value=""></option>'
	for(var i=0;i<a_shequ.length;i++)
	{
		s_html=s_html+'<option value="'+a_shequ[i]+'">'+a_shequ[i]+'</option>'
	}
	s_html=s_html+'</select></div><div class="space10"></div>'
	document.getElementById("h_shequ").innerHTML=s_html
}
function delete_signup(id)
{
	var b=window.confirm("请您确认是否取消该园所的报名记录，学位有限，请谨慎操作。")
	if(b)
	{
		show_load();
		document.getElementById("Vcl_FunName").value='signupCancel'
		document.getElementById("Vcl_Id").value=id
		document.getElementById("submit_form").submit()
	}
}
function delete_second(id)
{
	var b=window.confirm("请您确认是否取消该园所的报名记录，学位有限，请谨慎操作。")
	if(b)
	{
		show_load();
		document.getElementById("Vcl_FunName").value='secondCancel'
		document.getElementById("Vcl_Id").value=id
		document.getElementById("submit_form").submit()
	}
}
function giveup_signup(id,name)
{
	var b=window.confirm("请确定是否放弃预录取结果，该操作无法撤回，您选择放弃后只能参加补录报名，补录环节中报名志愿不分先后顺序，且进入补录环节的幼儿园数量和学位有限，请谨慎操作。")
	if(b)
	{
		var b=window.confirm("我是幼儿【"+name+"】的监护人，我自愿放弃本轮预录取结果，并已知晓由此产生的后果及风险。")
		if(b)
		{
			show_load();
			document.getElementById("Vcl_FunName").value='signupGiveup'
			document.getElementById("Vcl_Id").value=id
			document.getElementById("submit_form").submit()	
		}
	}
	
}
function giveup_second(id,name)
{
	var b=window.confirm("请确定是否放弃预录取结果，该操作无法撤回，您选择放弃后只能进行入园登记咨询环节，因进入入园登记咨询环节的幼儿园数量和学位有限，请谨慎选择。")
	if(b)
	{
		var b=window.confirm("我是幼儿【"+name+"】的监护人，我自愿放弃本轮预录取结果，并已知晓由此产生的后果及风险。")
		if(b)
		{
			show_load();
			document.getElementById("Vcl_FunName").value='secondGiveup'
			document.getElementById("Vcl_Id").value=id
			document.getElementById("submit_form").submit()
		}
	}
}
function signupConfirm()
{
	var b=window.confirm("确认提示：\n\n请注意！！！确认报名志愿表后，幼儿信息与报名志愿表将不能修改！如发现问题，可在报名时间范围内进行撤销操作，撤销修改后，可再次确认报名志愿！\n\n是否确认所有志愿报名表？");
	if(b)
	{
		show_load();
		document.getElementById("Vcl_FunName").value='signupConfirm'
		document.getElementById("submit_form").submit()
	}
}
function signupBack()
{
	var b=window.confirm("确认提示：\n\n请注意！！！撤销后后可对志愿报名表进行修改，修改后，请再次确认志愿报名表，方可有效！\n\n是否确认所撤销？");
	if(b)
	{
		show_load();
		document.getElementById("submit_form").submit()
	}
}
function change_nationality(obj)
{
	if (obj.value=="中国")
	{
		document.getElementById("nation").style.display='block';
		document.getElementById("other_base").style.display='block';
		document.getElementById("h_info").style.display='block';
		document.getElementById("is_same").style.display='block';
	}else{
		document.getElementById("nation").style.display='none';
		document.getElementById("other_base").style.display='none';
		document.getElementById("h_info").style.display='none';
		document.getElementById("Vcl_Z_Same").value='否';
		change_address(document.getElementById("Vcl_Z_Same"))
		document.getElementById("is_same").style.display='none';
	}
}
function change_idtype(obj)
{
	if (obj.value=="居民身份证")
	{
		document.getElementById("birthday").innerHTML='<label>出生日期</label><input name="Vcl_Birthday" id="Vcl_Birthday" maxlength="10" type="text" readonly="readonly" value="">';
	}else{
		document.getElementById("birthday").innerHTML='<label>出生日期</label><input name="Vcl_Birthday" id="Vcl_Birthday" maxlength="10" type="text" readonly="readonly" onclick="WdatePicker()" value="">';
	}
}
function change_iscanji(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("canji").style.display='block';
	}else{
		document.getElementById("canji").style.display='none';
	}
}
function change_isdibao(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("dibao").style.display='block';
	}else{
		document.getElementById("dibao").style.display='none';
	}
}
function change_yiwang(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("yiwang").style.display='block';
	}else{
		document.getElementById("yiwang").style.display='none';
	}
}
function change_yichuan(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("yichuan").style.display='block';
	}else{
		document.getElementById("yichuan").style.display='none';
	}
}
function change_shoushu(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("shoushu").style.display='block';
	}else{
		document.getElementById("shoushu").style.display='none';
	}
}
function change_guomin(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("guomin").style.display='block';
	}else{
		document.getElementById("guomin").style.display='none';
	}
}
function change_only(obj)
{
	/*
	if (obj.value=="否")
	{
		document.getElementById("first").style.display='block';
		document.getElementById("only_code").style.display='none';
	}else{
		document.getElementById("only_code").style.display='block';
		document.getElementById("first").style.display='none';
	}*/
}
function change_qulity(obj)
{
	if (obj.value=="非农业户口")
	{
		document.getElementById("quality_type").style.display='block';
	}else{
		document.getElementById("quality_type").style.display='none';
	}
}
function change_canjizheng1(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("canjizheng1").style.display='block';
	}else{
		document.getElementById("canjizheng1").style.display='none';
	}
}
function change_canjizheng2(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("canjizheng2").style.display='block';
	}else{
		document.getElementById("canjizheng2").style.display='none';
	}
}
function change_address(obj)
{
	if (obj.value=="是")
	{
		document.getElementById("address").style.display='none';
	}else{
		document.getElementById("address").style.display='block';
		
	}
}
function change_h_city(obj)
{
	if (obj.value=="")
	{
		document.getElementById("h_qu").style.display='none';
		document.getElementById("h_jiedao").style.display='none';
		document.getElementById("h_shequ").style.display='none';
		document.getElementById("h_qu").innerHTML=''
		document.getElementById("h_jiedao").innerHTML=''
		document.getElementById("h_shequ").innerHTML=''
	}else{
		var value=obj.value
		var a_shequ=CITY_I[value];
		var s_html='<label>户籍所在（市/区）</label><select onchange="change_h_qu(this)" id="Vcl_H_Area" name="Vcl_H_Area"><option value="">请选择</option>'
		for(var i=0;i<a_shequ.length;i++)
		{
			s_html=s_html+'<option value="'+a_shequ[i][0]+'">'+a_shequ[i][1]+'</option>'
		}
		s_html=s_html+'</select><div class="space10"></div>'
		document.getElementById("h_qu").innerHTML=s_html
		document.getElementById("h_qu").style.display='block';
		document.getElementById("h_jiedao").style.display='none';
		document.getElementById("h_shequ").style.display='none';
		document.getElementById("h_jiedao").innerHTML=''
		document.getElementById("h_shequ").innerHTML=''
	}
}
function change_h_qu(obj)
{
	try{
		if (obj.value=="110102000000")
		{
			var s_jedao='<div><label>户籍所在街道</label><select id="Vcl_H_Street" name="Vcl_H_Street" onchange="change_h_jiedao(this)"><option value="">请选择</option><option value="德胜街道">德胜街道</option><option value="什刹海街道">什刹海街道</option><option value="西长安街街道">西长安街街道</option><option value="大栅栏街道">大栅栏街道</option><option value="天桥街道">天桥街道</option><option value="新街口街道">新街口街道</option><option value="金融街街道">金融街街道</option><option value="椿树街道">椿树街道</option><option value="陶然亭街道">陶然亭街道</option><option value="展览路街道">展览路街道</option><option value="月坛街道">月坛街道</option><option value="广内街道">广内街道</option><option value="牛街街道">牛街街道</option><option value="白纸坊街道">白纸坊街道</option><option value="广外街道">广外街道</option></select></div><div class="space10"></div>';
			document.getElementById("h_jiedao").style.display='block';
			document.getElementById("h_jiedao").innerHTML=s_jedao;
			document.getElementById("h_shequ").style.display='block';
			document.getElementById("h_shequ").innerHTML='<div><label>户籍所在社区<span style="color:red">（咨询居委会）</span></label><select id="Vcl_H_Shequ" name="Vcl_H_Shequ"><option value="">请选择</option></select></div><div class="space10"></div>';
		}else{
			var value=obj.value
			var a_shequ=CITY_II[value];
			if (a_shequ==undefined)
			{
				document.getElementById("h_jiedao").style.display='none';
				document.getElementById("h_shequ").style.display='none';
				document.getElementById("h_jiedao").innerHTML=''
				document.getElementById("h_shequ").innerHTML=''
				return;
			}
			var s_html='<label>户籍所在（区/县）</label><select id="Vcl_H_Street" name="Vcl_H_Street"><option value="">请选择</option>'
			for(var i=0;i<a_shequ.length;i++)
			{
				s_html=s_html+'<option value="'+a_shequ[i][0]+'">'+a_shequ[i][1]+'</option>'
			}
			s_html=s_html+'</select><div class="space10"></div>'
			document.getElementById("h_jiedao").innerHTML=s_html
			document.getElementById("h_jiedao").style.display='block';
			
			document.getElementById("h_shequ").style.display='none';
			document.getElementById("h_shequ").innerHTML=''
		}
	}catch(e){};
}
function change_c_city(obj)
{
	if (obj.value=="" || obj.value=="710000000000")
	{
		document.getElementById("c_street").innerHTML=''
		document.getElementById("c_street").style.display="block"
		document.getElementById("c_area").innerHTML=''
		document.getElementById("c_area").style.display="block"
		return
	}
	var value=obj.value
	var a_shequ=CITY_I[value];
	var s_html='<label>出生所在（市/区）</label><select onchange="change_c_area(this)" id="Vcl_C_Area" name="Vcl_C_Area"><option value="">请选择</option>'
	for(var i=0;i<a_shequ.length;i++)
	{
		s_html=s_html+'<option value="'+a_shequ[i][0]+'">'+a_shequ[i][1]+'</option>'
	}
	s_html=s_html+'</select><div class="space10"></div>'
	document.getElementById("c_area").innerHTML=s_html
	document.getElementById("c_area").style.display="block"
	document.getElementById("c_street").innerHTML=''
	document.getElementById("c_street").style.display="block"
}
function change_c_area(obj)
{
	if (obj.value=="")
	{
		document.getElementById("c_street").innerHTML=''
		document.getElementById("c_street").style.display="block"
		return
	}
	var value=obj.value
	var a_shequ=CITY_II[value];
	if (a_shequ==undefined)
	{
		document.getElementById("c_street").innerHTML=''
		document.getElementById("c_street").style.display="block"
		return;
	}
	var s_html='<label>出生所在（区/县）</label><select id="Vcl_C_Street" name="Vcl_C_Street"><option value="">请选择</option>'
	for(var i=0;i<a_shequ.length;i++)
	{
		s_html=s_html+'<option value="'+a_shequ[i][0]+'">'+a_shequ[i][1]+'</option>'
	}
	s_html=s_html+'</select><div class="space10"></div>'
	document.getElementById("c_street").innerHTML=s_html
	document.getElementById("c_street").style.display="block"
}
function change_h_jiedao(obj)
{
	if (obj.value=="")
	{
		var s_html='<div><label>户籍所在社区<span style="color:red">（咨询居委会）</span></label><select id="Vcl_H_Shequ" name="Vcl_H_Shequ"><option value="">请选择</option></select></div><div class="space10"></div>'
		document.getElementById("h_shequ").innerHTML=s_html
		return
	}
	var value=obj.value
	var a_shequ=JieDao[value];
	a_shequ.sort();
	var s_html='<div><label>户籍所在社区<span style="color:red">（咨询居委会）</span></label><select id="Vcl_H_Shequ" name="Vcl_H_Shequ"><option value="">请选择</option>'
	for(var i=0;i<a_shequ.length;i++)
	{
		s_html=s_html+'<option value="'+a_shequ[i]+'">'+a_shequ[i]+'</option>'
	}
	s_html=s_html+'</select></div><div class="space10"></div>'
	document.getElementById("h_shequ").innerHTML=s_html
}
function change_z_city(obj)
{
	if (obj.value=="北京市")
	{
		document.getElementById("z_qu").style.display='block';
		change_z_qu(document.getElementById("Vcl_Z_Area"))
	}else{
		document.getElementById("z_qu").style.display='none';
		document.getElementById("z_jiedao").style.display='none';
		document.getElementById("z_shequ").style.display='none';
	}
}
function change_z_qu(obj)
{
	if (obj.value=="西城区")
	{
		document.getElementById("z_jiedao").style.display='block';
		document.getElementById("z_shequ").style.display='block';
	}else{
		document.getElementById("z_jiedao").style.display='none';
		document.getElementById("z_shequ").style.display='none';
	}
}
function changeJh2(value)
{
	if (value!='')
	{
		document.getElementById("jh_2").style.display='block';
	}else{
		document.getElementById("jh_2").style.display='none';
	}
}
function change_z_jiedao(obj)
{
	if (obj.value=="")
	{
		var s_html='<div><label>现住址社区<span style="color:red">（咨询居委会）</span></label><select id="Vcl_Z_Shequ" name="Vcl_Z_Shequ"><option value="">请选择</option></select></div><div class="space10"></div>'
		document.getElementById("z_shequ").innerHTML=s_html
		return
	}
	var value=obj.value
	var a_shequ=JieDao[value];
	a_shequ.sort();
	var s_html='<div><label>现住址社区<span style="color:red">（咨询居委会）</span></label><select id="Vcl_Z_Shequ" name="Vcl_Z_Shequ"><option value="">请选择</option>'
	for(var i=0;i<a_shequ.length;i++)
	{
		s_html=s_html+'<option value="'+a_shequ[i]+'">'+a_shequ[i]+'</option>'
	}
	s_html=s_html+'</select></div><div class="space10"></div>'
	document.getElementById("z_shequ").innerHTML=s_html
}
function change_z_property(obj)
{
	if (obj.value=="租借借用房产")
	{
		document.getElementById("z_owner").style.display='none';
		document.getElementById("z_guanxi").style.display='none';
	}else{
		document.getElementById("z_owner").style.display='block';
		document.getElementById("z_guanxi").style.display='block';
	}
}
function check_id(){
	var documentType=document.getElementById("Vcl_IdType").value;
	if(documentType=='居民身份证'){
	 	var studentCardNo = document.getElementById("Vcl_ID").value;
		if(studentCardNo!="" || studentCardNo!=null){
		   if(studentCardNo.length != 15 && studentCardNo.length != 18){
		   		document.getElementById("Vcl_Birthday").value="";
		        alert("幼儿身份证号长度应为15或者18位")
		        return false;
		   }else{
		   		var newCardNoAdd = checkId(studentCardNo.toLowerCase());
				if("身份证输入错误！" == newCardNoAdd){
		        	alert("幼儿身份证输入错误！");
		            return false;
		    	}
		   		var sexValue = (newCardNoAdd.slice(14,17)%2 ? '男' : '女');
		      	var birthdayValue = newCardNoAdd.slice(6,10) +"-"+ newCardNoAdd.slice(10,12) +"-"+ newCardNoAdd.slice(12,14);
			    document.getElementById("Vcl_Birthday").value=birthdayValue;
			    var checkStr = "0123456789xX";
			    var reg = /^[0-9xX]+$/;
				
				
			    if (!reg.test(studentCardNo))
			    {
					alert("幼儿身份证号格式错误，只能由数字或X组成。");   
					return false;  
				}
				document.getElementById("Vcl_Sex").value=sexValue;
		   	}
		 }
	  }else{
	  	var studentCardNo = document.getElementById("Vcl_ID").value;
		if(studentCardNo==""){
	  		alert("基本信息的 [证件号] 不能为空值！");
		  	return false;
	  	}else if (studentCardNo.length<5){
	  		alert("基本信息的 [证件号] 长度不能小于5位！");
		  	return false;
	  	}
	  }
	  document.getElementById("Vcl_CheckId").value=studentCardNo;
	  document.getElementById("submit_form_checkid").submit();	 
}
function check_id_submit(){
	var documentType=document.getElementById("Vcl_IdType").value;
	if(documentType=='居民身份证'){
	 	var studentCardNo = document.getElementById("Vcl_ID").value;
		if(studentCardNo!="" || studentCardNo!=null){
		   if(studentCardNo.length != 15 && studentCardNo.length != 18){
		   		document.getElementById("Vcl_Birthday").value="";
		        alert("幼儿身份证号长度应为15或者18位")
		        return false;
		   }else{
		   		var newCardNoAdd = checkId(studentCardNo.toLowerCase());
				if("身份证输入错误！" == newCardNoAdd){
		        	alert("幼儿身份证输入错误！");
		            return false;
		    	}
		   		var sexValue = (newCardNoAdd.slice(14,17)%2 ? '男' : '女');
		      	var birthdayValue = newCardNoAdd.slice(6,10) +"-"+ newCardNoAdd.slice(10,12) +"-"+ newCardNoAdd.slice(12,14);
			    document.getElementById("Vcl_Birthday").value=birthdayValue;
			    var checkStr = "0123456789xX";
			    var reg = /^[0-9xX]+$/;
				
				
			    if (!reg.test(studentCardNo))
			    {
					alert("幼儿身份证号格式错误，只能由数字或X组成。");   
					return false;  
				}
				document.getElementById("Vcl_Sex").value=sexValue;
		   	}
		 }
	  }else{
	  	var studentCardNo = document.getElementById("Vcl_ID").value;
		if(studentCardNo==""){
	  		alert("基本信息的 [证件号] 不能为空值！");
		  	return false;
	  	}else if (studentCardNo.length<5){
	  		alert("基本信息的 [证件号] 长度不能小于5位！");
		  	return false;
	  	}
	  } 
}
function checkId(pId){
    var arrVerifyCode = [1,0,"x",9,8,7,6,5,4,3,2];
    var Wi = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    var Checker = [1,9,8,7,6,5,4,3,2,1,1];
    if(pId.length != 15 && pId.length != 18) return "身份证号共有 15 码或18位";
    var Ai=pId.length==18 ?  pId.substring(0,17)   :   pId.slice(0,6) + "19" + pId.slice(6,16);
    if (!/^\d+$/.test(Ai))  return "身份证除最后一位外，必须为数字！";
    var yyyy=Ai.slice(6,10) ,  mm=Ai.slice(10,12)-1  ,  dd=Ai.slice(12,14);
    var d=new Date(yyyy,mm,dd) ,  now=new Date();
    var year=d.getFullYear() ,  mon=d.getMonth() , day=d.getDate();
    if (year!=yyyy || mon!=mm || day!=dd || d>now || year<1940) return "身份证输入错误！";
    for(var i=0,ret=0;i<17;i++)  ret+=Ai.charAt(i)*Wi[i];    
    Ai+=arrVerifyCode[ret %=11];     
    return pId.length ==18 && pId != Ai?"身份证输入错误！":Ai;        
}
function check_1_id(){
	var documentType=document.getElementById("Vcl_Jh_1_IdType").value;
	if(documentType=='居民身份证'){
	 	var studentCardNo = document.getElementById("Vcl_Jh_1_ID").value;
		if(studentCardNo!="" || studentCardNo!=null){
		   if(studentCardNo.length != 15 && studentCardNo.length != 18){
		        alert("法定监护人一信息的 [身份证] 长度应为15或者18位")
		        return false;
		   }else{
		   		var newCardNoAdd = checkId(studentCardNo.toLowerCase());
				if("身份证输入错误！" == newCardNoAdd){
		        	alert("法定监护人一信息的 [身份证] 输入错误！");
		            return false;
		    	}
		   		var sexValue = (newCardNoAdd.slice(14,17)%2 ? '男' : '女');
		      	var birthdayValue = newCardNoAdd.slice(6,10) +"-"+ newCardNoAdd.slice(10,12) +"-"+ newCardNoAdd.slice(12,14);
			    var checkStr = "0123456789xX";
			    var reg = /^[0-9xX]+$/;

			    if (!reg.test(studentCardNo))
			    {
					alert("法定监护人一信息的 [身份证] 格式错误，只能由数字或X组成。");   
					return false;  
				}
		   	}
		 }
	  }else{
	  	var studentCardNo = document.getElementById("Vcl_Jh_1_ID").value;
		if(studentCardNo==""){
	  		alert("法定监护人一信息的 [证件号] 不能为空值！");
		  	return false;
	  	}else if (studentCardNo.length<5){
	  		alert("法定监护人一信息的 [证件号] 长度不能小于5位！");
		  	return false;
	  	}
	  }	 
}
function check_2_id(){
	var documentType=document.getElementById("Vcl_Jh_2_IdType").value;
	if(documentType=='居民身份证'){
	 	var studentCardNo = document.getElementById("Vcl_Jh_2_ID").value;
		if(studentCardNo!="" || studentCardNo!=null){
		   if(studentCardNo.length != 15 && studentCardNo.length != 18){
		        alert("法定监护人二信息的 [身份证] 长度应为15或者18位")
		        return false;
		   }else{
		   		var newCardNoAdd = checkId(studentCardNo.toLowerCase());
				if("身份证输入错误！" == newCardNoAdd){
		        	alert("法定监护人二信息的 [身份证] 输入错误！");
		            return false;
		    	}
		   		var sexValue = (newCardNoAdd.slice(14,17)%2 ? '男' : '女');
		      	var birthdayValue = newCardNoAdd.slice(6,10) +"-"+ newCardNoAdd.slice(10,12) +"-"+ newCardNoAdd.slice(12,14);
			    var checkStr = "0123456789xX";
			    var reg = /^[0-9xX]+$/;
				
				
			    if (!reg.test(studentCardNo))
			    {
					alert("法定监护人二信息的 [身份证] 格式错误，只能由数字或X组成。");   
					return false;  
				}
		   	}
		 }
	  }else{
	  	var studentCardNo = document.getElementById("Vcl_Jh_1_ID").value;
		if(studentCardNo==""){
	  		alert("法定监护人二信息的 [证件号] 不能为空值！");
		  	return false;
	  	}else if (studentCardNo.length<5){
	  		alert("法定监护人二信息的 [证件号] 长度不能小于5位！");
		  	return false;
	  	}
	  }	 
}
function submit_signin(modify)
{
	if (document.getElementById("Vcl_Name").value=="")
	{
		window.alert("基本信息的 [幼儿姓名] 不能为空！")
		document.getElementById("Vcl_Name").focus()
		return
	}
	if (document.getElementById("Vcl_Birthday").value=="")
	{
		window.alert("基本信息的 [出生日期] 不能为空！")
		document.getElementById("Vcl_Birthday").focus()
		return
	}
	if(modify=='false')
	{
		if (check_id_submit()==false)
		{
			return
		}
	}
	if (document.getElementById("Vcl_Nationality").value == "中国") {
		if (document.getElementById("Vcl_Only").value=="是")
		{
			if (document.getElementById("Vcl_OnlyCode").value=="")
			{
				window.alert("基本信息的 [独生子女证号] 不能为空！")
				document.getElementById("Vcl_OnlyCode").focus()
				return
			}
		}
		if (document.getElementById("Vcl_IsDibao").value == "是") {
			if (document.getElementById("Vcl_DibaoCode").value == "") {
				window.alert("基本信息的 [低保证号]不能为空 ！")
				document.getElementById("Vcl_DibaoCode").focus()
				return
			}
		}
		if (document.getElementById("Vcl_IsCanji").value == "是") {
			if (document.getElementById("Vcl_CanjiType").value == "") {
				window.alert("请选择基本信息的 [残疾幼儿类别] ！")
				document.getElementById("Vcl_CanjiType").focus()
				return
			}
			if (document.getElementById("Vcl_CanjiCode").value == "") {
				window.alert("基本信息的 [幼儿残疾证号] 不能为空！")
				document.getElementById("Vcl_CanjiCode").focus()
				return
			}
		}
	}
	/*
	if (document.getElementById("Vcl_IsYiwang").value=="是")
	{
		if (document.getElementById("Vcl_Illness").value=="")
		{
			window.alert("请选择基本信息的 [以往病史] ！")
			document.getElementById("Vcl_Illness").focus()
			return
		}
	}
	*/
	/*
	if (document.getElementById("Vcl_IsShoushu").value=="是")
	{
		if (document.getElementById("Vcl_Shoushu").value=="")
		{
			window.alert("健康信息的 [手术名称] 不能为空！")
			document.getElementById("Vcl_Shoushu").focus()
			return
		}
	}
	*/
	/*
	if (document.getElementById("Vcl_IsGuomin").value=="是")
	{
		if (document.getElementById("Vcl_Allergic").value=="")
		{
			window.alert("健康信息的 [过敏源] 不能为空！")
			document.getElementById("Vcl_Allergic").focus()
			return
		}
	}
	*/
	if (document.getElementById("Vcl_Nationality").value == "中国") {
		if (document.getElementById("Vcl_C_City").value == "") {
			window.alert("请选择户籍信息的 [出生所在（省/市）] ！")
			document.getElementById("Vcl_C_City").focus()
			return
		}
		try{
			if (document.getElementById("c_area").innerHTML != "") {
				if (document.getElementById("Vcl_C_Area").value == "") {
					window.alert("请选择户籍信息的 [出生所在（市/区）] ！")
					document.getElementById("Vcl_C_Area").focus()
					return
				}
			}
			if (document.getElementById("c_street").innerHTML != "") {
				if (document.getElementById("Vcl_C_Street").value == "") {
					window.alert("请选择户籍信息的 [出生所在（区/县）] ！")
					document.getElementById("Vcl_C_Street").focus()
					return
				}
			}
		}catch(e){};
		if (document.getElementById("Vcl_H_In_Time").value == "") {
			window.alert("户籍信息的 [落户时间] 不能为空！")
			document.getElementById("Vcl_H_In_Time").focus()
			return
		}
		if (document.getElementById("Vcl_H_City").value == "")
		{
			window.alert("请选择户籍信息的 [户籍所在（省/市）] ！")
			document.getElementById("Vcl_H_Street").focus()
			return
		}
		if (document.getElementById("h_qu").innerHTML != "") {
			if (document.getElementById("Vcl_H_Area").value == "") {
				window.alert("请选择户籍信息的 [户籍所在（市/区）] ！")
				document.getElementById("Vcl_H_Area").focus()
				return
			}
		}
		if (document.getElementById("h_jiedao").innerHTML != "") {
			if (document.getElementById("Vcl_H_Street").value == "") {
				if (document.getElementById("Vcl_H_Area").value == "110102000000" && document.getElementById("Vcl_H_City").value == "110000000000") 
				{
					window.alert("请选择户籍信息的 [户籍所在街道] ！")
				}
				else
				{
					window.alert("请选择户籍信息的 [户籍所在（区/县）] ！")
				}
				document.getElementById("Vcl_H_Street").focus()
				return
			}
		}	
		if (document.getElementById("h_shequ").innerHTML != "") {
			if (document.getElementById("Vcl_H_Shequ").value == "") {
				window.alert("请选择户籍信息的 [户籍所在社区] ！")
				document.getElementById("Vcl_H_Shequ").focus()
				return
			}
		}
		if (document.getElementById("Vcl_H_Add").value == "") {
			window.alert("户籍信息的 [户籍详细地址] 不能为空！")
			document.getElementById("Vcl_H_Add").focus()
			return
		}
		if (document.getElementById("Vcl_H_Owner").value == "") {
			window.alert("户籍信息的 [户主姓名] 不能为空！")
			document.getElementById("Vcl_H_Owner").focus()
			return
		}
	}	
	if(document.getElementById("Vcl_Z_Same").value=="否")
	{
		if (document.getElementById("Vcl_H_Add").value==document.getElementById("Vcl_Z_Add").value)
		{
			window.alert("请注意：您填写的[户籍详细地址]与 [现住址详细地址]相同，如果真的为相同，请将[现住址是否与户籍为同一地址]选择为“是”，在进行提交。")
			document.getElementById("Vcl_Z_Same").focus()
			return
		}
		if (document.getElementById("Vcl_Z_City").value=="北京市" && document.getElementById("Vcl_Z_Area").value=="西城区")
		{
			if (document.getElementById("Vcl_Z_Street").value=="")
			{
				window.alert("请选择现住址信息的 [现住址所在街道]！")
				document.getElementById("Vcl_Z_Street").focus()
				return
			}
			if (document.getElementById("Vcl_Z_Shequ").value=="")
			{
				window.alert("请选择现住址信息的 [现住址所在社区]！")
				document.getElementById("Vcl_Z_Shequ").focus()
				return
			}
		}
		if (document.getElementById("Vcl_Z_Add").value=="")
		{
			window.alert("现住址信息的 [现住址详细地址] 不能为空！")
			document.getElementById("Vcl_Z_Add").focus()
			return
		}
	}
	if (document.getElementById("Vcl_Z_Owner").value=="" && document.getElementById("Vcl_Z_Property").value=="直系亲属房产")
	{
		window.alert("现住址信息的 [产权人姓名] 不能为空！")
		document.getElementById("Vcl_Z_Owner").focus()
		return
	}
	if (document.getElementById("Vcl_Jh_1_Name").value=="")
	{
		window.alert("法定监护人一信息的 [姓名] 不能为空！")
		document.getElementById("Vcl_Jh_1_Name").focus()
		return
	}
	if (check_1_id()==false)
	{
		return
	}
	if (document.getElementById("Vcl_Jh_1_Danwei").value=="")
	{
		//window.alert("法定监护人一信息的 [工作单位全称] 不能为空！")
		//document.getElementById("Vcl_Jh_1_Danwei").focus()
		//return
	}
	if (document.getElementById("Vcl_Jh_1_Phone").value=="")
	{
		window.alert("法定监护人一信息的 [联系电话] 不能为空！")
		document.getElementById("Vcl_Jh_1_Phone").focus()
		return
	}
	if (document.getElementById("Vcl_Jh_2_Connection").value != "") {//如果第二法定监护人姓名不是空，那么
		if (document.getElementById("Vcl_Jh_2_Name").value == "") {
			window.alert("法定监护人二信息的 [姓名] 不能为空！")
			document.getElementById("Vcl_Jh_2_Name").focus()
			return
		}
		if (document.getElementById("Vcl_Jh_2_IdType").value == "") {
			window.alert("请选择法定监护人二信息的 [证件类型] ！")
			document.getElementById("Vcl_Jh_2_IdType").focus()
			return
		}
		/*
		if (check_2_id() == false) {
			return
		}*/
		if (document.getElementById("Vcl_Jh_2_IsZhixi").value == "") {
			window.alert("请选择法定监护人二信息的 [是否是直系亲属] ！")
			document.getElementById("Vcl_Jh_2_IsZhixi").focus()
			return
		}
		if (document.getElementById("Vcl_Jh_2_Danwei").value=="")
		{
			//window.alert("法定监护人二信息的 [工作单位全称] 不能为空！")
			//document.getElementById("Vcl_Jh_2_Danwei").focus()
			//return
		}
		if (document.getElementById("Vcl_Jh_2_Phone").value == "") {
			window.alert("法定监护人二信息的 [联系电话] 不能为空！")
			document.getElementById("Vcl_Jh_2_Phone").focus()
			return
		}
	}
	if (document.getElementById("Vcl_JianhuName").value!="")
	{
		if (document.getElementById("Vcl_JianhuConnection").value=="")
		{
			window.alert("请选择其他监护人信息的 [关系] ！")
			document.getElementById("Vcl_JianhuConnection").focus()
			return
		}
		if (document.getElementById("Vcl_JianhuName").value=="")
		{
			window.alert("其他监护人信息的 [姓名] 不能为空！")
			document.getElementById("Vcl_JianhuName").focus()
			return
		}
		if (document.getElementById("Vcl_JianhuPhone").value=="")
		{
			window.alert("其他监护人信息的 [联系电话] 不能为空！")
			document.getElementById("Vcl_JianhuPhone").focus()
			return
		}
	}
	if (document.getElementById("Vcl_Email").value=="")
	{
		window.alert("[联系邮箱] 不能为空！")
		document.getElementById("Vcl_Email").focus()
		return
	}
	if(modify=='false')
	{
		if (document.getElementById("Vcl_ValidCode").value=="")
		{
			window.alert("[验证码] 不能为空！")
			document.getElementById("Vcl_ValidCode").focus()
			return
		}
	}
	var b=window.confirm("请您确认信息真实无误后提交采集。")
	if(b)
	{
		show_load();
		document.getElementById("submit_form").submit();	
	}
}
function verifyBrowser()
{
	var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";"); 
	if (version.length>1)
	{
		var trim_Version=version[1].replace(/[ ]/g,""); 
	}else{
		var trim_Version=version[0].replace(/[ ]/g,""); 
	}
	var jump=false; 
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
	{ 
		jump=true; 
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
	{ 
		jump=true; 
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
	{ 
		jump=true; 
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") 
	{ 
		jump=true; 
	} 
    if (jump)
    {
        location="browser_error.html"
    }
}
function show_load()
{
	document.getElementById("mask").style.display="block"
}
function hide_load()
{
	document.getElementById("mask").style.display="none"
}
function dialog_show(text)
{
	document.getElementById("massagebox_text").innerHTML=text
	//window.alert(text)
	document.getElementById("massagebox").style.display="block"
}
function dialog_close()
{
	if (time<=1)
	{
		if (document.getElementById("read").checked==false)
		{
			window.alert('点击确认前，请勾选“已阅读”！');
			return
		}
		document.getElementById("massagebox").style.display="none"
		$.cookie("Read",'1');
	}
}
function up_signup(id)
{
	show_load();
	document.getElementById("Vcl_FunName").value='signupUp'
	document.getElementById("Vcl_Id").value=id
	document.getElementById("submit_form").submit()
}
function down_signup(id)
{
	show_load();
	document.getElementById("Vcl_FunName").value='signupDown'
	document.getElementById("Vcl_Id").value=id
	document.getElementById("submit_form").submit()
}
verifyBrowser()
var JieDao=new Array();
JieDao['非西城区']=new Array("非西城区");
JieDao['德胜街道']=new Array("六铺炕南小街社区","安德路南社区","安德路北社区","德外大街东社区","德外大街西社区","人定湖西里社区","六铺炕北小街社区","新外大街北社区","德胜里社区","新明家园社区","新康社区","新风中直社区","北广社区","马甸社区","双旗杆社区","裕中西里社区","裕中东里社区","黄寺大街西社区","黄寺大街24号社区","阳光丽景社区");
JieDao['什刹海街道']=new Array("西四北社区","柳荫街社区","大红罗社区","护国寺社区","前铁社区","景山社区","前海社区","松树街社区","西巷社区","西什库社区","兴华社区","鼓西社区","米粮库社区","后海社区","后海西沿社区","四环社区","爱民街社区","西海社区","苇坑社区","旧鼓楼社区","双寺社区","白米社区");
JieDao['西长安街街道']=new Array("义达里社区","和平门社区","西单北社区","六部口社区","未英社区","北新华街社区","府右街南社区","太仆寺街社区","西交民巷社区","西黄城根南街社区","钟声社区");
JieDao['大栅栏街道']=new Array("百顺社区","大安澜营社区","大栅栏西街社区","煤市街东社区","前门西河沿社区","三井社区","石头社区","铁树斜街社区","延寿街社区");
JieDao['天桥街道']=new Array("福长街社区","天桥小区社区","虎坊路社区","留学路社区","禄长街社区","太平街社区","先农坛社区","香厂路社区","永安路社区");
JieDao['新街口街道']=new Array("西四北头条社区","西四北三条社区","西四北六条社区","育德社区","冠英园社区","玉桃园社区","前公用社区","官园社区","大觉社区","宫门口社区","南小街社区","西里一区社区","北顺社区","半壁街社区","西里二区社区","富国里社区","北草厂社区","西里三区社区","安平巷社区","中直社区","西里四区社区");
JieDao['金融街街道']=new Array("宏汇园社区","文昌社区","受水河社区","丰汇园社区","大院社区","民康社区","丰融园社区","手帕社区","京畿道社区","二龙路社区","砖塔社区","新文化街社区","新华社社区","西太平街社区","丰盛社区","教育部社区","温家街社区","东太平街社区","中央音乐学院社区","华嘉社区");
JieDao['椿树街道']=new Array("椿树园社区","宣武门外东大街社区","梁家园社区","琉璃厂西街社区","四川营社区","香炉营社区","永光社区");
JieDao['陶然亭街道']=new Array("福州馆社区","南华里社区","黑窑厂社区","红土店社区","龙泉社区","米市社区","新兴里社区","粉房琉璃街社区","大吉巷社区","壹瓶社区");
JieDao['展览路街道']=new Array("德宝社区","露园社区","朝阳庵社区","新华南社区","文兴街社区","黄瓜园社区","团结社区","北营房西里社区","榆树馆社区","北营房东里社区","新华东社区","阜外西社区","新华里社区","洪茂沟社区","车公庄社区","阜外东社区","百万庄西社区","南营房社区","百万庄东社区","万明园社区","三塔社区","滨河社区","扣钟社区");
JieDao['月坛街道']=new Array("社会路社区","铁道部住宅区第三社区","月坛社区","公安住宅区社区","三里河社区","南沙沟社区","铁道部住宅区第二、一社区","白云观社区","复兴门北大街社区","全国总工会住宅区社区","三里河三区第三社区","三里河三区第一社区","三里河二区社区","广电总局住宅区第一社区","西便门社区","真武庙社区","铁道部住宅区第二、二社区","木樨地社区","铁道部住宅区第四社区","广电总局住宅区第二社区","复兴门外社区","南礼士路社区","三里河一区社区","汽车局河南社区","汽车局河北社区","复兴门外大街甲7号院社区");
JieDao['广内街道']=new Array("西便门西里社区","西便门东里社区","西便门内社区","长椿街西社区","槐柏树街北里社区","槐柏树街南里社区","核桃园社区","报国寺社区","长椿里社区","宣武门西大街社区","三庙街社区","校场社区","长椿街社区","康乐里社区","上斜街社区","大街东社区","广安东里社区","老墙根社区");
JieDao['牛街街道']=new Array("牛街西里一区社区","牛街东里社区","南线阁社区","枫桦社区","菜园北里社区","牛街西里二区社区","钢院社区","法源寺社区","春风社区","白广路社区");
JieDao['白纸坊街道']=new Array("建功北里社区","右内后身社区","新安中里社区","右北大街社区","新安南里社区","建功南里社区","万博苑社区","清芷园社区","光源里社区","双槐里社区","樱桃园社区","菜园街社区","崇效寺社区","右内西街社区","自新路社区","半步桥社区","里仁街社区","平原里南区社区","平原里北区社区");
JieDao['广外街道']=new Array("鸭子桥社区","青年湖社区","椿树馆社区","白菜湾社区","车站东街社区","手帕口南街社区","朗琴园社区","红居街社区","红居南街社区","车站西街十五号院社区","车站西街社区","乐城社区","红莲北里社区","红莲中里社区","红莲南里社区","三义东里社区","三义里社区","马连道中里社区","马连道社区","湾子街社区","依莲轩社区","手帕口北街社区","天宁寺北里社区","二热社区","天宁寺南里社区","莲花河社区","蝶翠华庭社区","中新佳园社区","广源社区","京铁和园社区","茶源社区","茶马北街社区","茶马南街社区","小马厂东社区","小马厂西社区","荣丰南社区","荣丰北社区","名苑社区");

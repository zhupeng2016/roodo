       function checkUS(){
	        	var user=document.getElementById("us");
	        	var reg=/^\S+$/;
	        	if(user.value==""||user.value==null){
	        		document.getElementById("yh").innerHTML="  * 用户名不能为空！！！";
	        		user.focus();
	        		return false;
	        	}else{
	        		if(reg.test(user.value)){
	        			document.getElementById("yh").innerHTML="";
	        			return true;
	        		}else{
	        			document.getElementById("yh").innerHTML="  * 用户名不能有空格！！！";
	        			user.focus();
	        			return false;
	        		}
	        	}
	        }
	        function checkPS(){
	        	var ps=document.getElementById("ps");
	        	var reg=/^[A-Za-z0-9]+$/;
	        	if(ps.value==""||ps.value==null){
	        		document.getElementById("mm").innerHTML= " * 密码不能为空！！！";
	        		ps.focus();
	        		return false;
	        	}else{
	        		if(reg.test(ps.value)){
	        			document.getElementById("mm").innerHTML="";
	        			return true;
	        		}else{
	        			document.getElementById("mm").innerHTML=" * 密码格式不正确！！！";
	        			ps.focus();
	        			return false;
	        		}
	        	}
	        }
	        function checkYZ(){
	        	var yzm=document.getElementById("yy");
	        	if(yzm.value==""||yzm==null){
	        		document.getElementById("yz").innerHTML=" * 验证码不能为空！！！";
	        		yzm.focus();
	        		return false;
	        	}else{
	        		document.getElementById("yz").innerHTML="";
	        		return true;
	        	}
	        }
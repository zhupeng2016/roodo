function Uusername() {
		var name = document.getElementById("username");
		if (name.value == null || name.value == "") {
			document.getElementById("us").innerHTML = " 用户名不能为空！！！";
			name.focus();
			return false;
		} else {
			document.getElementById("us").innerHTML = " ";
			return true;
		}
	}
	function LloginName() {
		
		var reg = /^[a-zA-Z]{6,16}$/;
		var loginname = document.getElementById("loginname");
		if (loginname.value == null || loginname.value == "") {	
			document.getElementById("ln").innerHTML = " 登录账户不能为空！！！";
			return false;
		} else {
			if (reg.test(loginname.value)) {
				var xmlHttp=null;
                if(window.ActiveXObject){
                	xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
                }else if(window.XMLHttpRequest){
                	xmlHttp=new XMLHttpRequest();
                }
                //打开与服务器的连接
                xmlHttp.open("post","UserServlet.do?method=onename&loginname="+loginname.value,false);
                //设置回调函数
                xmlHttp.onreadystatechange= function(){
                	var flag=true;
                	//对回调函数做出响应
                	var result=xmlHttp.responseText;
                	if(result==0){
						document.getElementById("ln").innerHTML = " 登录名已存在！！！";
						flag= false;
                	}else{
                		document.getElementById("ln").innerHTML = " 登录账户可以使用。";
                		document.getElementById("ln").style.color="green";
                	}
                };
                //发送数据
                xmlHttp.send(null);
                return flag;
			} else {
				document.getElementById("ln").innerHTML = " 登录账户格式不正确！！！";
				document.getElementById("in").style.color="red";
				return false;
			}
		}
	}
	function Pass() {
		var pw = document.getElementById("password");
		var reg = /^\w{8,32}$/;
		if (pw.value == null || pw.value == "") {
			document.getElementById("ps").innerHTML = " 密码不能为空！！！";
			pw.focus();
			return false;
		} else {
			if (reg.test(pw.value)) {

				document.getElementById("ps").innerHTML = "";
				return true;
			} else {
				document.getElementById("ps").innerHTML = " 密码不符合格式！！！";
				pw.focus();
				return false;
			}

		}
	}
	function repass() {
		var reps = document.getElementById("repassword");
		var pw = document.getElementById("password");
		if (reps.value == null || reps.value == "") {
			document.getElementById("rps").innerHTML = " 请确认密码！！！";
			reps.focus();
			return false;
		} else {
			if (reps.value != pw.value) {
				document.getElementById("rps").innerHTML = " 两次密码输入不一致！！！";
				reps.focus();
				return false;
			} else {
				document.getElementById("rps").innerHTML = "";
				return true;
			}
		}

	}
	function Idcard() {
		var idd = document.getElementById("idcard");
		document.getElementById("ic").innerHTML = "";
		var reg = /^[0-9]{1,}$/;
		if(idd.value==null || idd.value==""){
			document.getElementById("ic").innerHTML = " 身份证不能为空！！！";
			idd.focus();
			return false;
		}else if(reg.test(idd.value)){
			if ((idd.value).length==15||(idd.value).length==18) {
				return true;
			} else {
				document.getElementById("ic").innerHTML = " 身份证号格式不正确！！！";
				idd.focus();
				return false;
			}
		}
	}
	function checkPhone() {
		var phh = document.getElementById("phon");
		var reg = /^((\d{3,4}-)|\d{3,4}-)?\d{7,8}$/;
		if (phh.value == null || phh.value == "") {
			document.getElementById("ph").innerHTML = " 办公电话不能为空！！！";
			phh.focus();
			return false;
		} else {
			if (reg.test(phh.value)) {
				document.getElementById("ph").innerHTML = "";
				return true;

			} else {
				document.getElementById("ph").innerHTML = " 办公电话格式不正确！！！";
				phh.focus();
				return false;
			}
		}
	}
	function checkM() {
		var mpp = document.getElementById("pho");
		var reg = /^1[3-8][0-9]{9}$/;
		if (mpp.value == null || mpp.value == "") {
			document.getElementById("mp").innerHTML = " 手机号不能为空！！！";
			mpp.focus();
			return false;
		} else {
			if (reg.test(mpp.value)) {
				document.getElementById("mp").innerHTML = "";
				return true;

			} else {
				document.getElementById("mp").innerHTML = " 手机号格式不正确！！！";
				mpp.focus();
				return false;
			}
		}
	}
	function checkEM() {
		var emm = document.getElementById("ea");
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if (emm.value == null || emm.value == "") {
			document.getElementById("ei").innerHTML = " 邮箱不能为空！！！";
			emm.focus();
			return false;
		} else {
			if (reg.test(emm.value)) {
                
				document.getElementById("ei").innerHTML = "";
				return true;
			} else {
				document.getElementById("ei").innerHTML = " 邮箱格式不正确！！！";
				emm.focus();
				return false;
			}

		}

	}
	function Mark() {
		var rem = document.getElementById("mark");
		if (rem.value.length == 0) {
			alert("文本框不能为空！！！");
			return false;
		} else if (rem.value.length > 100) {
			alert("字符长度不符！！！");
			return false;
		} else {
			return true;
		}
	}
	function buttonName() {
		var is = confirm("确认提交么？");
		if(is){
			if (!Uusername()) {

			} else if (!LloginName()) {

			} else if (!Pass()) {

			} else if (!repass()) {

			} else if (!Idcard()) {

			} else if (!checkPhone()) {

			} else if (!checkM()) {

			} else if (!checkEM()) {

			} else if (!Mark()) {

			} else {
				document.getElementById("myform").submit();
			}
		}
		
	}
	function fanhui() {
		location.href = "UserServlet.do";
	}
	function test() {
		var msg = document.getElementById("msg").value;
		if (msg != null && msg != "") {
			alert(msg);
		}
	}
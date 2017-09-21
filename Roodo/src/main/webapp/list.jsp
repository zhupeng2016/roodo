<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML >
<html>
<head>
<base href="<%=basePath%>">
<link rel="stylesheet" href="css/base.css" />
<link rel="stylesheet" href="css/info-mgt.css" />
<link rel="stylesheet" href="css/WdatePicker.css" />
<title>Roodo乐多文档管理系统</title>
</head>
<body>

展现所有用户如下：<br>
<c:forEach items="${list }" var="l">
  ${l.userId}---${l.loginname }---${l.password }---${l.userName }---${l.sex }---${l.del }<br>  
  </c:forEach>
</body>


</html>


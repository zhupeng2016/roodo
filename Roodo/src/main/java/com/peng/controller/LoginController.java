package com.peng.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.peng.bean.UserBean;
import com.peng.service.UserService;
import com.peng.util.State;

@Controller
@SessionAttributes({"ub"})
public class LoginController {

	@Autowired
	private UserService us;
	@RequestMapping("/login")
	public String login(String loginName,String password,Model m){
		UserBean ub=us.login(loginName, password);
		if(ub!=null){
			if(ub.getDel()==State.DELETE){
				m.addAttribute("msg","您的账号已被禁用！！！");
				return "/login.jsp";
			}
		    m.addAttribute("ub",ub);
		    return "/index.jsp";
		    
		}else{
			m.addAttribute("msg","您的账号和密码输入错误！！！");
			return "/login.jsp";
		}
	}
	
	@RequestMapping("/l")
	public String getUsers(Model m){
		List<UserBean> list=us.getUsers();
		m.addAttribute("list", list);
		return "/list.jsp";
		
	}
	
}

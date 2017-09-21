package com.peng.service;

import java.util.List;

import com.peng.bean.UserBean;

public interface UserService {

	public UserBean login(String loginName,String password);
	
	
	public List<UserBean> getUsers();
}

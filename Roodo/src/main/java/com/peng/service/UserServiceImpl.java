package com.peng.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peng.bean.UserBean;
import com.peng.dao.UserDao;

@Service
public class UserServiceImpl implements UserService {
 
	@Autowired
	private UserDao ud;
	
	@Override
	public UserBean login(String loginName, String password) {
		// TODO Auto-generated method stub

		return ud.login(loginName, password);
	}

	@Override
	public List<UserBean> getUsers() {
		// TODO Auto-generated method stub
		return ud.getUsers();
	}

}

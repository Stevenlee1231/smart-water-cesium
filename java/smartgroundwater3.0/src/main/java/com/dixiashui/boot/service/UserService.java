package com.dixiashui.boot.service;


import com.dixiashui.boot.bean.User;
import com.dixiashui.boot.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    public User getUserById(Long id){
        return userMapper.getById(id);
    }
    public User checkUsernameAndPassword(String username,String password){
        return userMapper.checkUsernameAndPassword(username,password);
    }
    public List<User> getAllUser(){
        return  userMapper.getAllUser();
    }
    public int deleteUser(Integer id){
        return userMapper.deleteUser(id);
    }

    public int insertRainFall(String username,String password,Integer permission){
        return userMapper.insertRainFall(username, password, permission);
    }

    public int updateRainFall(Integer id,String username,String password,Integer permission){
        return userMapper.updateRainFall(id, username, password, permission);
    }
}

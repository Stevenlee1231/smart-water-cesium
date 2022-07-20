package com.dixiashui.boot.mapper;

import com.dixiashui.boot.bean.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select * from t_user where id=#{id}")
    public User getById(Long id);
    @Select("select * from t_user where username=#{username} and password=#{password}")
    public User checkUsernameAndPassword(String username,String password);
    @Select("select * from t_user")
    public List<User> getAllUser();
    @Delete("delete from t_user where  id=#{id}")
    public int deleteUser(Integer id);
    @Insert("INSERT INTO t_user  \n" +
            "(`username`,`password`,`permission`)\n" +
            "VALUES\n" +
            "(#{username},#{password},#{permission})")
    public int insertRainFall(String username,String password,Integer permission);
    @Update("UPDATE t_user  SET `username`=#{username},`password`=#{password},permission=#{permission}\n" +
            "WHERE id=#{id} ")
    public int updateRainFall(Integer id,String username,String password,Integer permission);
}

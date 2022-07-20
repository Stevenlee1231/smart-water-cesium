package com.dixiashui.boot.controller;
import com.dixiashui.boot.bean.*;
import com.dixiashui.boot.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
@CrossOrigin(origins = "*")
@Controller
public class UserController {

    @Autowired
    UserService userService;

  //superordinary才能获得密码
    @ResponseBody
    @GetMapping("/get/users")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }
    @ResponseBody
    @GetMapping("/delete/user")
    public int deleteUser(Integer id){
        return userService.deleteUser(id);
    }
    @ResponseBody
    @GetMapping("/post/user")
    public int insertRainFall(String username,String password,Integer permission){
        return userService.insertRainFall(username, password, permission);
    }//http://localhost:8080/post/users?username=aaa&password=132&permission=3
    @ResponseBody
    @GetMapping("/put/user")
    public int updateRainFall(Integer id,String username,String password,Integer permission){
        return userService.updateRainFall(id, username, password, permission);
    }//http://localhost:8080/put/users?id=4&username=avvvv11aba&password=132&permission=3
    @ResponseBody
    @GetMapping("/post/loginout")
    public ReturnInformation loginout(HttpServletRequest httpServletRequest) {
        httpServletRequest.getSession().invalidate();
        ReturnInformation returnInformation=new ReturnInformation("200","注销账号成功！");
            return returnInformation;
    }

    @ResponseBody
    @GetMapping("/post/login")//post请求不能用@RequestParam 接收。
    public ReturnInformation login(String username,
                        String password, User user, HttpServletRequest httpServletRequest)
    {

        user = userService.checkUsernameAndPassword(username, password);
        if (user == null) {
            ReturnInformation returnInformation=new ReturnInformation("0","账号或密码错误");


            return returnInformation;
        } else if (1 == user.getPermission()) {
            httpServletRequest.getSession().setAttribute("ordinaryUser", user);
            ReturnInformation returnInformation=new ReturnInformation("200","ordinaryUser");
            return returnInformation;
        } else if (2 == user.getPermission()) {

           Object user1= httpServletRequest.getSession().getAttribute("ordinaryUser");
            if (user1!=null){
                httpServletRequest.getSession().invalidate();

            }
            httpServletRequest.getSession().setAttribute("admin", user);
            ReturnInformation returnInformation=new ReturnInformation("200","admin");
            return returnInformation;
        } else{

            Object user1= httpServletRequest.getSession().getAttribute("ordinaryUser");
            Object user2= httpServletRequest.getSession().getAttribute("admin");
            if (user1 !=null||user2 !=null){
                httpServletRequest.getSession().invalidate();

            }
            httpServletRequest.getSession().setAttribute("superadmin", user);
            ReturnInformation returnInformation=new ReturnInformation("200","superadmin");
            return returnInformation;
        }


    }


}

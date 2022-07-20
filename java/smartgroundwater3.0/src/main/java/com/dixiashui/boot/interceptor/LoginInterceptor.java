package com.dixiashui.boot.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        HttpSession session =request.getSession();
        Object ordinaryUser =session.getAttribute("ordinaryUser");
        Object superUser =session.getAttribute("superUser");
        Object admin =session.getAttribute("admin");
        String RequestURI= request.getRequestURI();

        if (ordinaryUser !=null|| superUser !=null||admin!=null){
            if (ordinaryUser !=null && (RequestURI.contains("user")||RequestURI.contains("admin"))){
                System.out.println("user");
                return false;
            }else if (superUser !=null&& RequestURI.contains("admin")){

            return false;
            }
            else {

                return  true;
            }

        }

        response.sendRedirect("/");

        return false;
    }


}

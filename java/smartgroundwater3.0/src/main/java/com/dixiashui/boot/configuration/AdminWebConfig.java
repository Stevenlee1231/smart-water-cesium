package com.dixiashui.boot.configuration;

import com.dixiashui.boot.interceptor.LoginInterceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;




@Configuration
public class AdminWebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor()).
                addPathPatterns("/13s").excludePathPatterns("/post/login");
        System.out.println("AdminWebConfig.addInterceptors");
        ///get/*","/admin/*","/put/*","/post/*","/delete/*
                //.excludePathPatterns("/","/post/login","/imag/**");
        //静态资源也拦截了
    }
}

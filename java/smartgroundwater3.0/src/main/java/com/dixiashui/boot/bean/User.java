package com.dixiashui.boot.bean;

import lombok.Data;

@Data
public class User {
    private  Integer id;
    private  Integer permission;
    private  String  username;
    private  String   password;

}

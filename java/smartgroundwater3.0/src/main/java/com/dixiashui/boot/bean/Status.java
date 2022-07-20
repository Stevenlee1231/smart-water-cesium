package com.dixiashui.boot.bean;

import lombok.Data;


public class Status {
private String status;
    private String code ;
    private String message;

    public Status(String status, String code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}

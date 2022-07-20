package com.dixiashui.boot.bean;
import lombok.Data;

@Data
public class complex {
  public   double real=0.0;
  public   double imag=0.0;
    public complex(double real,double imag){
        this.real = real;
        this.imag = imag;


    }


}

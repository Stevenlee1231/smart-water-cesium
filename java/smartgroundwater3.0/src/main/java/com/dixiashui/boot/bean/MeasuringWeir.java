package com.dixiashui.boot.bean;

import lombok.Data;

@Data
public class MeasuringWeir {
    private Long id;
    private String sensor;
    private String date;
    private double  modulus;
    private double weirhead;
    private double flow;

    public MeasuringWeir(String sensor, String date, double modulus, double weirhead, double flow) {
        this.sensor = sensor;
        this.date = date;
        this.modulus = modulus;
        this.weirhead = weirhead;
        this.flow = flow;
    }

    public MeasuringWeir(Long id, String sensor, String date, double modulus, double weirhead, double flow) {
        this.id = id;
        this.sensor = sensor;
        this.date = date;
        this.modulus = modulus;
        this.weirhead = weirhead;
        this.flow = flow;
    }
}

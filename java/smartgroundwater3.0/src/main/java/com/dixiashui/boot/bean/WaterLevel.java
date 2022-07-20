package com.dixiashui.boot.bean;

import lombok.Data;

import java.util.Date;


@Data
public class WaterLevel {
    private Long id;
    private String sensor;
    private String date;
    private double level;
    private double rainfall;

    public WaterLevel(Long id, String sensor, String date, double level, double rainfall) {
        this.id = id;
        this.sensor = sensor;
        this.date = date;
        this.level = level;
        this.rainfall = rainfall;
    }

    public WaterLevel(String sensor, String date, double level, double rainfall) {

        this.sensor = sensor;
        this.date = date;
        this.level = level;
        this.rainfall = rainfall;
    }

    public WaterLevel(String date, double level) {
        this.date = date;
        this.level = level;
    }
}

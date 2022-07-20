package com.dixiashui.boot.bean;

import lombok.Data;

@Data
public class CurrentSpeed {
    private Long id;
    private String date;
    private String sensor;
    private Double  DepthRaw;
    private  Double  DepthAvg;
    private Double  VelocityRaw;
    private Double  VelocityAvg;
    private Double  TemperatureRaw;
    private Double  BatteryRaw;
    private Double  QuartileRaw;
    private Double  SamplesRaw;

    public CurrentSpeed(Long id, String date, String sensor, Double depthRaw, Double depthAvg, Double velocityRaw, Double velocityAvg, Double temperatureRaw, Double batteryRaw, Double quartileRaw, Double samplesRaw) {
        this.id = id;
        this.date = date;
        this.sensor = sensor;
        DepthRaw = depthRaw;
        DepthAvg = depthAvg;
        VelocityRaw = velocityRaw;
        VelocityAvg = velocityAvg;
        TemperatureRaw = temperatureRaw;
        BatteryRaw = batteryRaw;
        QuartileRaw = quartileRaw;
        SamplesRaw = samplesRaw;
    }

    public CurrentSpeed(String date, String sensor, Double depthRaw, Double depthAvg, Double velocityRaw, Double velocityAvg, Double temperatureRaw, Double batteryRaw, Double quartileRaw, Double samplesRaw) {
        this.date = date;
        this.sensor = sensor;
        DepthRaw = depthRaw;
        DepthAvg = depthAvg;
        VelocityRaw = velocityRaw;
        VelocityAvg = velocityAvg;
        TemperatureRaw = temperatureRaw;
        BatteryRaw = batteryRaw;
        QuartileRaw = quartileRaw;
        SamplesRaw = samplesRaw;
    }
}

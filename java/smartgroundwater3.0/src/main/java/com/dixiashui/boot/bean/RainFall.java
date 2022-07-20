package com.dixiashui.boot.bean;

import lombok.Data;

@Data
public class RainFall {
    private Long id;
    private String sensor;
    private String date;
    private Double moudles;
    private Double rainfall;
    private Double  accumulatedrainfall;


//一定要加上这个全参构造否则报错Bad format for number 'XinfengWeatherStation' in column 2
    public RainFall(Long id, String sensor, String date, Double moudles, Double rainfall, Double accumulatedrainfall) {
        this.id = id;
        this.sensor = sensor;
        this.date = date;
        this.moudles = moudles;
        this.rainfall = rainfall;
        this.accumulatedrainfall = accumulatedrainfall;
    }

    public RainFall(String sensor, String date, Double moudles, Double rainfall, Double accumulatedrainfall) {
        this.sensor = sensor;
        this.moudles = moudles;
        this.rainfall = rainfall;
        this.accumulatedrainfall = accumulatedrainfall;
        this.date=date;
    }
}

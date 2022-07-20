package com.dixiashui.boot.bean;

import lombok.Data;

@Data
public class EvaporationCapacity {
    private Long id;
    private String sensor;
    private  String date;
    private Double waterlevel;
    private Double accumulatedrainfall;
    private Double evaporation;

    public EvaporationCapacity(String sensor, String date, Double waterlevel, Double accumulatedrainfall, Double evaporation) {
        this.sensor = sensor;
        this.date = date;
        this.waterlevel = waterlevel;
        this.accumulatedrainfall = accumulatedrainfall;
        this.evaporation = evaporation;
    }

    public EvaporationCapacity(Long id, String sensor, String date, Double waterlevel, Double accumulatedrainfall, Double evaporation) {
        this.id = id;
        this.sensor = sensor;
        this.date = date;
        this.waterlevel = waterlevel;
        this.accumulatedrainfall = accumulatedrainfall;
        this.evaporation = evaporation;
    }
}

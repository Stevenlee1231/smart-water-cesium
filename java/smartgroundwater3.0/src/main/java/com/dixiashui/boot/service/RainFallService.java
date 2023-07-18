package com.dixiashui.boot.service;

import com.dixiashui.boot.bean.CurrentSpeed;

import com.dixiashui.boot.bean.RainFall;
import com.dixiashui.boot.mapper.RainFallMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RainFallService {
    @Autowired
    RainFallMapper rainFallMapper;
    public int insertCurrentSpeedBatch( List<RainFall> list){
        return rainFallMapper.insertRainFallBatch(list);
    }
    public List<RainFall> getSingleDayRainFalldata(String sensor,String date){
        return rainFallMapper.getSingleDayRainFalldata(sensor, date);
    }
    public List<RainFall> getAllRainFall(String sensor){
        return rainFallMapper.getAllRainFall(sensor);
    }

    public int deleteRainFall(Long id){
        return rainFallMapper.deleteRainFall(id);
    }

    public int insertRainFall(String sensor,String date,double modulus,double rainfall,double accumulatedrainfall){
        return rainFallMapper.insertRainFall(sensor, date, modulus, rainfall, accumulatedrainfall);
    }

    public int updateRainFall(Long id,String sensor,String date,double modulus,double rainfall,double accumulatedrainfall){
        return rainFallMapper.updateRainFall(id, sensor, date, modulus, rainfall, accumulatedrainfall);
    }
    public String getMaxDate(String sensor){
        return  rainFallMapper.getMaxDate(sensor);
    }
    public List<RainFall> getSomeDayRainFall(String startTime,String endTime,String sensor){
        return rainFallMapper.getSomeDayRainFall(startTime, endTime, sensor);
    }
    public List<String> getSomeDateRainFall(String startTime,String endTime,String sensor){
        return rainFallMapper.getSomeDateRainFall(startTime, endTime, sensor);
    }
}

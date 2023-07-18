package com.dixiashui.boot.service;

import com.dixiashui.boot.bean.CurrentSpeed;
import com.dixiashui.boot.mapper.CurrentSpeedMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrentSpeedService {
    @Autowired
    CurrentSpeedMapper currentSpeedMapper;
    public int insertCurrentSpeedBatch( List<CurrentSpeed> list){
        return  currentSpeedMapper.insertCurrentSpeedBatch(list);
    }
    public List<CurrentSpeed> getAllCurrentSpeed(String sensor){
        return currentSpeedMapper.getAllCurrentSpeed(sensor);
    }
    public List<CurrentSpeed> getSingleDayCurrentSpeeddata(String sensor,String date){
        return currentSpeedMapper.getSingleDayCurrentSpeeddata(sensor,date);
    }
    public int deleteCurrentSpeed(Long id){
        return currentSpeedMapper.deleteCurrentSpeed(id);
    }
    public int insertCurrentSpeed(String date,String sensor,Double  DepthRaw
            ,Double  DepthAvg,Double  VelocityRaw,Double  VelocityAvg,Double  TemperatureRaw,
                                  Double  BatteryRaw ,Double  QuartileRaw,Double  SamplesRaw){
        return currentSpeedMapper.insertCurrentSpeed(date, sensor, DepthRaw, DepthAvg, VelocityRaw, VelocityAvg, TemperatureRaw, BatteryRaw, QuartileRaw, SamplesRaw);
    }
    public int updateCurrentSpeed(Long id,String date,String sensor,Double  DepthRaw
            ,Double  DepthAvg,Double  VelocityRaw,Double  VelocityAvg,Double  TemperatureRaw,
                                  Double  BatteryRaw ,Double  QuartileRaw,Double  SamplesRaw){
        return currentSpeedMapper.updateCurrentSpeed(id, date, sensor, DepthRaw, DepthAvg, VelocityRaw, VelocityAvg, TemperatureRaw, BatteryRaw, QuartileRaw, SamplesRaw);

    }
    public String getMaxDate(String sensor){
        return currentSpeedMapper.getMaxDate(sensor);
    }
    public List<CurrentSpeed> getSomeDayCurrentSpeed(String startTime,String endTime,String sensor){
        return currentSpeedMapper.getSomeDayCurrentSpeed(startTime, endTime, sensor);
    }

}

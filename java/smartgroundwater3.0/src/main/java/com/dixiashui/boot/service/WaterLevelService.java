package com.dixiashui.boot.service;

import com.dixiashui.boot.bean.WaterLevel;
import com.dixiashui.boot.mapper.WaterLevelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class WaterLevelService {
    @Autowired
    WaterLevelMapper waterLevelMapper;

//    public Integer insertAllData(String sensor,String date, String time, float ms, float level, float temperature){
//        return  waterLevelMapper.insertAllData(sensor,date,time,ms,level,temperature);
//    }
public List<WaterLevel> getAllDemoWaterLevel(){
    return waterLevelMapper.getAllDemoWaterLevel();
}
    public List<WaterLevel> getAllWaterLevel(String sensor){
        return waterLevelMapper.getAllWaterLevel(sensor);
    }
    public List<WaterLevel> getSingleDayWaterLeveldata1(String sensor,String date){
        return waterLevelMapper.getSingleDayWaterLeveldata(sensor,date);

    }
    public int deleteWaterLevel(Long id){
        return waterLevelMapper.deleteWaterLevel(id) ;
    }

    public int insertWaterLevel(String sensor,String date,double level,double rainfall){
        return  waterLevelMapper.insertWaterLevel(sensor, date, level, rainfall);
    }
//    public List<WaterLevel> getSomeDayWaterLevel(String startTime,String endTime,String sensor){
//        return waterLevelMapper.getSomeDayWaterLevel(startTime, endTime,sensor);
//    }
    public String getMaxDate(String sensor){
        return waterLevelMapper.getMaxDate(sensor);
    }
    public int updateWaterLevel(Long id,String sensor,String date,double level,double rainfall){
        return waterLevelMapper.updateWaterLevel(id, sensor, date,level, rainfall);
    }
    public int insertWaterLevelBatch( List<WaterLevel> list){
        return waterLevelMapper.insertWaterLevelBatch(list);
    }
}

package com.dixiashui.boot.service;

import com.dixiashui.boot.bean.EvaporationCapacity;
import com.dixiashui.boot.mapper.EvaporationCapacityMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
public class EvaporationCapacityService {
    @Autowired
    EvaporationCapacityMapper evaporationCapacityMapper;
    public int insertEvaporationCapacityBatch( List<EvaporationCapacity> list){
        return evaporationCapacityMapper.insertEvaporationCapacityBatch(list);
    }
    public List<EvaporationCapacity> getSingleDayEvaporationCapacitydata(String sensor,String date){
        return  evaporationCapacityMapper.getSingleDayEvaporationCapacitydata(sensor, date);
    }
    public String getMaxDate(String sensor){
        return evaporationCapacityMapper.getMaxDate(sensor);
    }
    public List<EvaporationCapacity> getSomeDayEvaporationCapacity(String startTime,String endTime,String sensor){
        return evaporationCapacityMapper.getSomeDayEvaporationCapacity(startTime, endTime, sensor);
    }
    public List<EvaporationCapacity> getEvaporationCapacity(String sensor){
        return evaporationCapacityMapper.getEvaporationCapacity(sensor);
    }
    public int deleteEvaporationCapacity(Long id){
        return evaporationCapacityMapper.deleteEvaporationCapacity(id);
    }
    public int insertEvaporationCapacity(String sensor,String date,Double  waterlevel
            ,Double  accumulatedrainfall,Double  evaporation){
        return evaporationCapacityMapper.insertEvaporationCapacity(sensor, date, waterlevel, accumulatedrainfall, evaporation);

    }
    public int updateEvaporationCapacity(Long id,String sensor,String date,Double  waterlevel
            ,Double  accumulatedrainfall,Double  evaporation){
        return evaporationCapacityMapper.updateEvaporationCapacity(id,sensor, date, waterlevel, accumulatedrainfall, evaporation);
    }
}

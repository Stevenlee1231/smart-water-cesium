package com.dixiashui.boot.service;

import com.dixiashui.boot.bean.MeasuringWeir;
import com.dixiashui.boot.mapper.MeasuringWeirMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeasuringWeirService {
    @Autowired
    MeasuringWeirMapper measuringWeirMapper;
    public Integer insertAllMeasuringWeirData(String sensor,String date,double modulus,double weirhead,double flow){
        return  measuringWeirMapper.insertAllMeasuringWeirData(sensor,date,modulus,weirhead,flow);
    }
    public int insertBatch(List<MeasuringWeir> list){
        return  measuringWeirMapper.insertBatch(list);
    }
    public List<MeasuringWeir> getSingleDayMeasuringWeirdata(String sensor,String date){
        return  measuringWeirMapper.getSingleDayMeasuringWeirdata(sensor, date);
    }
    public List<MeasuringWeir> getAllMeasuringWeir(String sensor){
        return measuringWeirMapper.getAllMeasuringWeir(sensor);
    }

    public int deleteMeasuringWeir(Long id){
        return measuringWeirMapper.deleteMeasuringWeir(id);
    }

    public int insertMeasuringWeir(String sensor,String date,double moudles,double weirhead,double flow){
        return measuringWeirMapper.insertMeasuringWeir(sensor, date, moudles, weirhead, flow);
    }

    public int updateMeasuringWeir(Long id,String sensor,String date,double moudles,double weirhead,double flow){
        return measuringWeirMapper.updateMeasuringWeir(id, sensor, date, moudles, weirhead, flow);
    }
    public String getMaxDate(String sensor){
        return measuringWeirMapper.getMaxDate(sensor);
    }
    public List<MeasuringWeir> getSomeDayMeasuringWeir(String startTime,String endTime,String sensor){
        return measuringWeirMapper.getSomeDayMeasuringWeir(startTime, endTime, sensor);
    }
}

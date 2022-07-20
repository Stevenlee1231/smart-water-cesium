package com.dixiashui.boot.mapper;

import com.dixiashui.boot.bean.MeasuringWeir;
import org.apache.ibatis.annotations.*;

import java.util.List;


@Mapper
public interface MeasuringWeirMapper {
    @Select("select `id` ,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `modulus` ,\n" +
            "  `weirhead` ,\n" +
            "  `flow`  from measuring_weir WHERE STATUS =1 and sensor=#{sensor}")
    public List<MeasuringWeir> getAllMeasuringWeir(String sensor);
    @Select("INSERT INTO measuring_weir (sensor,date,modulus,weirhead,flow)\n" +
            "                       VALUES\n" +
            "                       (#{sensor},#{date},#{modulus},#{weirhead},#{flow})")
    public Integer insertAllMeasuringWeirData(String sensor,String date,double modulus,double weirhead,double flow);
    public int insertBatch(@Param("list") List<MeasuringWeir> list);
    @Select("select `id` ,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `modulus` ,\n" +
            "  `weirhead` ,\n" +
            "  `flow`  from measuring_weir where  sensor=#{sensor} and date like #{date} and status=1")
    public List<MeasuringWeir> getSingleDayMeasuringWeirdata(String sensor,String date);
    @Select("SELECT MAX(DATE) FROM `measuring_weir` where  sensor=#{sensor}")
    public String getMaxDate(String sensor);
    @Select("select `id` ,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `modulus` ,\n" +
            "  `weirhead` ,\n" +
            "  `flow`  from measuring_weir where date>=#{startTime} and date<=#{endTime} and status=1 and sensor=#{sensor}")
    public List<MeasuringWeir> getSomeDayMeasuringWeir(String startTime,String endTime,String sensor);
    @Update("UPDATE measuring_weir SET status = 0 where id=#{id}")
    public int deleteMeasuringWeir(Long id);
    @Insert("INSERT INTO measuring_weir  \n" +
            "(`sensor`,`date`,`modulus`,`weirhead`,`flow`)\n" +
            "VALUES\n" +
            "(#{sensor},#{date},#{modulus},#{weirhead},#{flow})")
    public int insertMeasuringWeir(String sensor,String date,double modulus,double weirhead,double flow);
    @Update("UPDATE measuring_weir  SET `sensor`=#{sensor},`date`=#{date},modulus=#{modulus},weirhead=#{weirhead},`flow`=#{flow}\n" +
            "WHERE id=#{id} ")
    public int updateMeasuringWeir(Long id,String sensor,String date,double modulus,double weirhead,double flow);
}

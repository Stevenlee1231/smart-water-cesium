package com.dixiashui.boot.mapper;


import com.dixiashui.boot.bean.EvaporationCapacity;
import org.apache.ibatis.annotations.*;

import java.util.List;
@Mapper
public interface EvaporationCapacityMapper {
    @Select("SELECT `id`,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `waterlevel` ,\n" +
            "  `accumulatedrainfall` ,\n" +
            "  `evaporation` \n" +
            "   FROM `evaporation_capacity`\n" +
            "  WHERE STATUS =1 and sensor=#{sensor}")
    public List<EvaporationCapacity> getEvaporationCapacity(String sensor);
    public int insertEvaporationCapacityBatch(@Param("list") List<EvaporationCapacity> list);
    @Select("select `id`,\n" +
            " `sensor` ,\n" +
            " `date` ,\n" +
            " `waterlevel` ,\n" +
            " `accumulatedrainfall` ,\n" +
            " `evaporation` from evaporation_capacity where  sensor=#{sensor} and date like #{date} and status=1")
    public List<EvaporationCapacity> getSingleDayEvaporationCapacitydata(String sensor,String date);
    @Select("SELECT MAX(DATE) FROM `evaporation_capacity` where  sensor=#{sensor}")
    public String getMaxDate(String sensor);
    @Select("select `id`,\n" +
            " `sensor` ,\n" +
            " `date` ,\n" +
            " `waterlevel` ,\n" +
            " `accumulatedrainfall` ,\n" +
            " `evaporation` from evaporation_capacity   where date>=#{startTime} and date<=#{endTime} and status=1 and sensor=#{sensor}")
    public List<EvaporationCapacity> getSomeDayEvaporationCapacity(String startTime,String endTime,String sensor);
    @Update("UPDATE evaporation_capacity SET status = 0 where id=#{id}")
    public int deleteEvaporationCapacity(Long id);
    @Insert("INSERT INTO evaporation_capacity \n" +
            "(`sensor`,`date`,`waterlevel`,`accumulatedrainfall`,`evaporation`)\n" +
            "VALUES\n" +
            "(#{sensor},#{date},#{waterlevel},#{accumulatedrainfall},#{evaporation})")
    public int insertEvaporationCapacity(String sensor,String date,Double  waterlevel
            ,Double  accumulatedrainfall,Double  evaporation);
    @Update("UPDATE evaporation_capacity SET `sensor`=#{sensor},`date`=#{date},waterlevel=#{waterlevel},accumulatedrainfall=#{accumulatedrainfall},`evaporation`=#{evaporation}\n" +
            "WHERE id=#{id} ")
    public int updateEvaporationCapacity(Long id,String sensor,String date,Double  waterlevel
            ,Double  accumulatedrainfall,Double  evaporation);
}

package com.dixiashui.boot.mapper;

import com.dixiashui.boot.bean.CurrentSpeed;
import com.dixiashui.boot.bean.RainFall;
import org.apache.ibatis.annotations.*;

import java.util.List;
@Mapper
public interface RainFallMapper {
    @Select("select `id`,`sensor`,`date`,`moudles`,`rainfall`,`accumulatedrainfall` from rain_fall where  sensor=#{sensor}  and status=1")
    public List<RainFall> getAllRainFall(String sensor);
    public int insertRainFallBatch(@Param("list") List<RainFall> list);
    @Select("select `id` ,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `moudles` ,\n" +
            "  `rainfall` ,\n" +
            "  `accumulatedrainfall` from rain_fall where  sensor=#{sensor} and date like #{date} and status=1")
    public List<RainFall> getSingleDayRainFalldata(String sensor,String date);
    @Select("SELECT MAX(DATE) FROM `rain_fall` where  sensor=#{sensor}")
    public String getMaxDate(String sensor);
    @Select("select `id` ,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `moudles` ,\n" +
            "  `rainfall` ,\n" +
            "  `accumulatedrainfall` from rain_fall where  date>=#{startTime} and date<=#{endTime} and status=1 and sensor=#{sensor}")
    public List<RainFall> getSomeDayRainFall(String startTime,String endTime,String sensor);
    @Select("select `date` from rain_fall where  date>=#{startTime} and date<=#{endTime} and status=1 and sensor=#{sensor}")
    public List<String> getSomeDateRainFall(String startTime,String endTime,String sensor);
    @Update("UPDATE rain_fall SET status = 0 where id=#{id}")
    public int deleteRainFall(Long id);
    @Insert("INSERT INTO rain_fall  \n" +
            "(`sensor`,`date`,`moudles`,`rainfall`,`accumulatedrainfall`)\n" +
            "VALUES\n" +
            "(#{sensor},#{date},#{moudles},#{rainfall},#{accumulatedrainfall})")
    public int insertRainFall(String sensor,String date,double moudles,double rainfall,double accumulatedrainfall);
    @Update("UPDATE rain_fall  SET `sensor`=#{sensor},`date`=#{date},moudles=#{moudles},rainfall=#{rainfall},`accumulatedrainfall`=#{accumulatedrainfall}\n" +
            "WHERE id=#{id} ")
    public int updateRainFall(Long id,String sensor,String date,double moudles,double rainfall,double accumulatedrainfall);
}

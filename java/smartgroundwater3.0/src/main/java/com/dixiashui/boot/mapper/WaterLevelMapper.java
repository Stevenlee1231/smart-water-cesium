package com.dixiashui.boot.mapper;

import com.dixiashui.boot.bean.WaterLevel;
import org.apache.ibatis.annotations.*;

import java.util.Date;
import java.util.List;


@Mapper
public interface WaterLevelMapper {
//    @Select("INSERT INTO water_level (`sensor`,`date`,`level`,`rainfall`)\n" +
//            "                       VALUES\n" +
//            "                       (#{sensor},#{date},#{level},#{rainfall})")
//    public Integer insertAllData(String sensor,String date,double level,double rainfall);
    //从execl读取数据到数据库
    public int insertWaterLevelBatch(@Param("list") List<WaterLevel> list);
    //查全部
    @Select("select  `id` ,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `level`,\n" +
            "  `rainfall`  from water_level where sensor=#{sensor} and status=1")
    public List<WaterLevel> getAllWaterLevel(String sensor);
    @Select("select  `id` ,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `level`,\n" +
            "  `rainfall`  from water_level_1 where  status=1")
    public List<WaterLevel> getAllDemoWaterLevel();
//    @Select("select  `id` ,\n" +
//            "`sensor` , \n" +
//            "`date` ,\n" +
//            "`time` ,\n" +
//            "`ms` ,\n" +
//            "`level`,\n" +
//            "`temperature`  from water_level where date>=#{startTime} " +
//            "and  date<=#{endTime} and status=1 and sensor=#{sensor}")
//    public List<WaterLevel> getSomeDayWaterLevel(String startTime,String endTime,String sensor);
    //查单个
    @Select("select  `id` ,\n" +
            "  `sensor` ,\n" +
            "  `date` ,\n" +
            "  `level`,\n" +
            "  `rainfall`  from water_level where  sensor=#{sensor} and date=#{date} and status=1")
    public List<WaterLevel> getSingleDayWaterLeveldata(String sensor,String date);
    @Select("SELECT MAX(DATE) FROM `water_level` where  sensor=#{sensor}")
    public String getMaxDate(String sensor);
    //删除
    @Update("UPDATE water_level SET status = 0 where id=#{id}")
    public int deleteWaterLevel(Long id);
    //添加
    @Insert("INSERT INTO water_level \n" +
            "(`sensor`,`date`,`level`,`rainfall`)\n" +
            "VALUES\n" +
            "(#{sensor},#{date},#{level},#{rainfall})")
    public int insertWaterLevel(String sensor,String date,double level,double rainfall);
    //更新
    @Update("UPDATE water_level  SET `sensor`=#{sensor},`date`=#{date},`level`=#{level},`rainfall`=#{rainfall}\n" +
            "WHERE id=#{id} ")
    public int updateWaterLevel(Long id,String sensor,String date,double level,double rainfall);
}

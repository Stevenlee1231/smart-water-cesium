package com.dixiashui.boot.mapper;

import com.dixiashui.boot.bean.CurrentSpeed;

import org.apache.ibatis.annotations.*;

import java.util.List;
@Mapper
public interface CurrentSpeedMapper {
    @Select("select id,`date`,sensor,DepthRAW,`DepthAVG`\n" +
            "  ,`VelocityRAW` \n" +
            "  ,`VelocityAVG` \n" +
            "  ,`TemperatureRAW` \n" +
            "  ,`BatteryRAW` \n" +
            "  ,`QuartileRAW` \n" +
            "  ,`SamplesRAW` from current_speed where status=1 and sensor=#{sensor}")
    public List<CurrentSpeed> getAllCurrentSpeed (String sensor);
    public int insertCurrentSpeedBatch(@Param("list") List<CurrentSpeed> list);

    @Select("select id,`date`,sensor,DepthRAW,`DepthAVG`\n" +
            "  ,`VelocityRAW` \n" +
            "  ,`VelocityAVG` \n" +
            "  ,`TemperatureRAW` \n" +
            "  ,`BatteryRAW` \n" +
            "  ,`QuartileRAW` \n" +
            "  ,`SamplesRAW`  from current_speed where  sensor=#{sensor} and date like #{date} and status=1")
    public List<CurrentSpeed> getSingleDayCurrentSpeeddata(String sensor,String date);
    @Select("select id,`date`,sensor,DepthRAW,`DepthAVG`\n" +
            "  ,`VelocityRAW` \n" +
            "  ,`VelocityAVG` \n" +
            "  ,`TemperatureRAW` \n" +
            "  ,`BatteryRAW` \n" +
            "  ,`QuartileRAW` \n" +
            "  ,`SamplesRAW`  from current_speed where date>=#{startTime} and date<=#{endTime} and status=1 and sensor=#{sensor}")
    public List<CurrentSpeed> getSomeDayCurrentSpeed(String startTime,String endTime,String sensor);
    @Select("SELECT MAX(DATE) FROM `current_speed` where  sensor=#{sensor}")
    public String getMaxDate(String sensor);
    @Update("UPDATE current_speed SET status = 0 where id=#{id}")
    public int deleteCurrentSpeed(Long id);
    @Insert("INSERT INTO current_speed \n" +
            "(`date`,`sensor`,`DepthRaw`,`DepthAvg`,`VelocityRaw`,`VelocityAvg`,`TemperatureRaw`,`BatteryRaw`,`QuartileRaw`,`SamplesRaw`)\n" +
            "VALUES\n" +
            "(#{date},#{sensor},#{DepthRaw},#{DepthAvg},#{VelocityRaw},#{VelocityAvg},#{TemperatureRaw},#{BatteryRaw},#{QuartileRaw},#{SamplesRaw})")
    public int insertCurrentSpeed(String date,String sensor,Double  DepthRaw
            ,Double  DepthAvg,Double  VelocityRaw,Double  VelocityAvg,Double  TemperatureRaw,
                                  Double  BatteryRaw ,Double  QuartileRaw,Double  SamplesRaw);
    @Update("UPDATE current_speed SET `date`=#{date},`sensor`=#{sensor},DepthRaw=#{DepthRaw},DepthAvg=#{DepthAvg},`VelocityRaw`=#{VelocityRaw},`VelocityAvg`=#{VelocityAvg},`TemperatureRaw`=#{TemperatureRaw},`BatteryRaw`=#{BatteryRaw},`QuartileRaw`=#{QuartileRaw},SamplesRaw=#{SamplesRaw}\n" +
            "WHERE id=#{id} ")
    public int updateCurrentSpeed(Long id,String date,String sensor,Double  DepthRaw
            ,Double  DepthAvg,Double  VelocityRaw,Double  VelocityAvg,Double  TemperatureRaw,
                                  Double  BatteryRaw ,Double  QuartileRaw,Double  SamplesRaw);
}

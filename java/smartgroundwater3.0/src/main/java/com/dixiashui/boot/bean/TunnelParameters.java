package com.dixiashui.boot.bean;

public class TunnelParameters {
    private String tunnel;//隧道
    private double catchment_area;//汇水面积
    private double topographic_slope;//地形坡度
    private String   is_negative_relief;//是否存在负地形
    private String  formation_lithology;//地层岩性
    private String   geologic_structure;//地质构造
    private double  rate_of_decay;//风化程度
    private double strata_inclination;//岩层倾角
    private  double rock_tendency;//岩层倾向
    private String type_and_degree;//裂隙发育类型和程度
    private double groundwater_runoff_modulus;//地下水径流模数
    private double volunteers_value;//吕荣值
    private double osmotic_coefficient;//渗透系数
    private String groundwater_recharge_condition;//地下水补给条件
    private double depth;//地下水位埋深
    private String position;//储水构造相对隧道位置
    private String geological_type;//不良地质类型
    private String size;//发育程度或规模
    private String degree;//施工扰动程度
    private String measure;//支护措施
    private double thickness;//防突岩墙厚度
    private double circle_depth;//开挖爆破松弛圈深度
    private String ability;//施工抽排水能力
    private String construction_measures;//工程施工措施
    private double length;// 隧洞长度
    private double buried_depth;//隧洞埋深
    private double water_inflow;//突涌水量

    public TunnelParameters(String tunnel,
                            double catchment_area,
                            double topographic_slope,
                            String is_negative_relief,
                            String formation_lithology,
                            String geologic_structure,
                            double rate_of_decay,//风化程度
                            double strata_inclination,//岩层倾角
                            double rock_tendency,//岩层倾向
                            String type_and_degree,//裂隙发育类型和程度
                            double groundwater_runoff_modulus,//地下水径流模数
                            double volunteers_value,//吕荣值
                            double osmotic_coefficient,//渗透系数
                            String groundwater_recharge_condition,//地下水补给条件
                            double depth,//地下水位埋深
                            String position,//储水构造相对隧道位置
                            String geological_type,//不良地质类型
                            String size,//发育程度或规模
                            String degree,//施工扰动程度
                            String measure,//支护措施
                            double thickness,//防突岩墙厚度
                            double circle_depth,//开挖爆破松弛圈深度
                            String ability,//施工抽排水能力
                            String construction_measures,//工程施工措施
                            double length,// 隧洞长度
                            double buried_depth,//隧洞埋深
                            double water_inflow
    )
    {
        this.tunnel =tunnel;
        this.catchment_area = catchment_area;
        this.topographic_slope = topographic_slope ;
        this.is_negative_relief = is_negative_relief;
        this.formation_lithology = formation_lithology;
        this.geologic_structure = geologic_structure;
       this.rate_of_decay= rate_of_decay;
        this.strata_inclination = strata_inclination;
        this.rock_tendency = rock_tendency;
        this.type_and_degree = type_and_degree;
        this.groundwater_runoff_modulus = groundwater_runoff_modulus;
        this.volunteers_value = volunteers_value;
        this.osmotic_coefficient = osmotic_coefficient;
        this.groundwater_recharge_condition = groundwater_recharge_condition;
        this.depth = depth;
        this.position = position;
        this.geological_type = geological_type;
        this.size= size;
        this.degree = degree;
        this.measure = measure;
        this.thickness = thickness;
        this.circle_depth = circle_depth;
        this.ability = ability;
        this.construction_measures= construction_measures;
        this.length = length;
        this.buried_depth = buried_depth;
        this.water_inflow = water_inflow;

    }


}

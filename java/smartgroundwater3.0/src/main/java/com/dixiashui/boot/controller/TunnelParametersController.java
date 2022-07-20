package com.dixiashui.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class TunnelParametersController {
    /*@Autowired
    TunnelParametersController  tunnelparameters;*/

    @GetMapping("/get/calculationofwaterinrush")
    public double Calculationofwaterinrush(
            /*                              String tunnel,
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

             */
    )
    {

        return 1.0;
    }
}

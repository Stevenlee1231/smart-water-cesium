package com.dixiashui.boot.controller;

import com.dixiashui.boot.bean.EvaporationCapacity;
import com.dixiashui.boot.service.EvaporationCapacityService;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
@CrossOrigin
@RestController
public class EvaporationCapacityController {
    public static HSSFRow row; // 行
    public static HSSFCell cell; // 列
    @Autowired
    EvaporationCapacityService evaporationCapacityService;
    @GetMapping("/get/evaporationcapacitys")
    public List<EvaporationCapacity> getevaporationcapacity(String sensor) {

        return evaporationCapacityService.getEvaporationCapacity(sensor);
    }
    @GetMapping("/get/someevaporationcapacity")
    public List<EvaporationCapacity> getSomeDayWaterLevel(String startTime,String endTime,String sensor)throws ParseException {
        if (startTime.equals("10")||startTime.equals("30")||startTime.equals("180")){

            endTime=evaporationCapacityService.getMaxDate(sensor);
            int year =Integer.parseInt(endTime.substring(0,4));
            int month =Integer.parseInt(endTime.substring(5,7));
            int day =Integer.parseInt(endTime.substring(8,10));
            Calendar calendar=new GregorianCalendar(year,month-1,day);
            calendar.add(Calendar.DATE, -Integer.parseInt(startTime));
            Date starttime=calendar.getTime();
            SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd");

            return evaporationCapacityService.getSomeDayEvaporationCapacity(df.format(starttime), endTime,sensor);
        }else {

            return evaporationCapacityService.getSomeDayEvaporationCapacity(startTime, endTime, sensor);
        }
    }
    @GetMapping("/get/evaporationcapacity")
    public List<EvaporationCapacity> getSingleDayEvaporationCapacitydata(String sensor,String date){
        String a="%";
        date=date+a;
        return evaporationCapacityService.getSingleDayEvaporationCapacitydata(sensor, date);
    }
    @GetMapping("/admin/delete/evaporationcapacity")
    public int deleteEvaporationCapacity(Long id){
        return evaporationCapacityService.deleteEvaporationCapacity(id);
        //http://localhost:8080/delete/evaporationcapacity?id=571
    }
    @GetMapping("/post/evaporationcapacity")
    public int insertEvaporationCapacity(String sensor,String date,Double  waterlevel
            ,Double  accumulatedrainfall,Double  evaporation){
        return evaporationCapacityService.insertEvaporationCapacity(sensor, date, waterlevel, accumulatedrainfall, evaporation);
//localhost:8080/post/evaporationcapacity?sensor=ss&date=knk&waterlevel=1&accumulatedrainfall=1&evaporation=1
    }
    @GetMapping("/admin/put/evaporationcapacity")
    public int updateEvaporationCapacity(Long id,String sensor,String date,Double  waterlevel
            ,Double  accumulatedrainfall,Double  evaporation){
        //http://localhost:8080/put/evaporationcapacity?id=570&sensor=sss&date=knk&waterlevel=1&accumulatedrainfall=1&evaporation=1
        return evaporationCapacityService.updateEvaporationCapacity(id, sensor, date, waterlevel, accumulatedrainfall, evaporation);
    }
//    @GetMapping("/doevaporation")
//    public String doexcel() throws IOException {
//        Double waterlevel=0.0;
//        Double accumulatedrainfall=0.0;
//        Double evaporation=0.0;
//        String date="";
//        String sensor ="XinfengWeatherStation";
//
//        String fileName = "C:\\Users\\卡卡\\Desktop\\监测数据(1)(1)\\监测数据\\地下水监测数据完整2019年整理\\地下水监测数据完整2019年整理\\新峰气象站\\蒸发量\\蒸发量.xls";
//        List<EvaporationCapacity> list = new ArrayList<>();
//        InputStream inputStream=new FileInputStream(fileName);
//        Workbook workbook =new HSSFWorkbook(inputStream);
//        Sheet sheet = workbook.getSheetAt(0);
//        int totalRows = sheet.getPhysicalNumberOfRows();
//
//        for (int k=1;k<totalRows;k++) {
//            row = (HSSFRow) sheet.getRow(k);
//            for (int i = 3; i < 7; i++) {
//
//
//                if (i == 3) {
//                    cell = row.getCell(i);
//
//                    cell.setCellType(CellType.STRING);
//
//                    date = cell.getStringCellValue();
//
//                } else {
//                    cell = row.getCell(4);
//                    CellType cellType = cell.getCellType();
//                    if (cellType==CellType.STRING)
//
//                    {
//                        waterlevel=0.0;
//                    }else { cell.setCellType(CellType.NUMERIC);
//                        waterlevel = cell.getNumericCellValue();}
//                    cell = row.getCell(5);
//                    cellType = cell.getCellType();
//                    if (cellType==CellType.STRING)
//                    {
//                        accumulatedrainfall=0.0;
//                    }else {
//
//                        cell.setCellType(CellType.NUMERIC);
//                        accumulatedrainfall = cell.getNumericCellValue();
//                    }
//                    cell = row.getCell(6);
//                    cellType = cell.getCellType();
//                    if (cellType==CellType.STRING)
//                    {
//                        evaporation=0.0;
//                    }else {
//
//                        cell.setCellType(CellType.NUMERIC);
//                        evaporation = cell.getNumericCellValue();
//                    }
//
//
//
//                }
//
//
//            }list.add(new EvaporationCapacity(sensor,date,waterlevel,accumulatedrainfall,evaporation));
//
//
//
//
//
//        }
//        evaporationCapacityService.insertEvaporationCapacityBatch(list);
//        return "读取成功";
//    }
}

package com.dixiashui.boot.controller;

import com.dixiashui.boot.bean.RainFall;
import com.dixiashui.boot.service.RainFallService;
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
public class RainFallController {
    public static HSSFRow row; // 行
    public static HSSFCell cell; // 列
    private double modulus;

    private Double rainfall;
    private Double accumulatedrainfall;
    @Autowired
    RainFallService rainFallService;
    @GetMapping("/get/rainfalls")
    public Map<String, Double> getrainfall(String sensor) {
        List<RainFall>  Date=rainFallService.getAllRainFall(sensor);
        List<String>  someDateRainFall=new ArrayList<String>();

        for (RainFall temp1 : Date){

            someDateRainFall.add(temp1.getDate().substring(0,10));
        }
        Map<String, Double> map = new HashMap<String, Double>();
        for (String temp : someDateRainFall) {
            Double count = map.get(temp);
            map.put(temp, (count == null) ? 1 : count + 1);
        }
        for(String key:map.keySet()){
            System.out.println("key:"+key+" "+"Value:"+map.get(key));
        }
        return map;

    }
    @GetMapping("/get/rainfall")
    public List<RainFall> getSingleDayRainFalldata(String sensor,String date){
        String a="%";
        date=date+a;


        return rainFallService.getSingleDayRainFalldata(sensor, date);
    }
    @GetMapping("/get/somerainfall")
    public Map<String, Double> getSomeMeasuringWeir(String startTime,String endTime,String sensor)throws ParseException {
        if (startTime.equals("10")||startTime.equals("30")||startTime.equals("180")){

            endTime=rainFallService.getMaxDate(sensor);
            int year =Integer.parseInt(endTime.substring(0,4));
            int month =Integer.parseInt(endTime.substring(5,7));
            int day =Integer.parseInt(endTime.substring(8,10));
            Calendar calendar=new GregorianCalendar(year,month-1,day);
            calendar.add(Calendar.DATE, -Integer.parseInt(startTime));
            Date starttime=calendar.getTime();
            SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd");
                List<String>  Date=rainFallService.getSomeDateRainFall(df.format(starttime), endTime, sensor);
            List<String>  someDateRainFall=new ArrayList<String>();

            for (String temp1 : Date){
                System.out.println(temp1);
                someDateRainFall.add(temp1.substring(0,10));
            }
            if (someDateRainFall == null || someDateRainFall.size() == 0) return null;
            Map<String, Double> map = new HashMap<String, Double>();
            for (String temp : someDateRainFall) {
                Double count = map.get(temp);
                map.put(temp, (count == null) ? 1 : count + 1);
            }
            return map;
        }else {

            List<String>  Date=rainFallService.getSomeDateRainFall(startTime, endTime, sensor);
            List<String>  someDateRainFall=new ArrayList<String>();

            for (String temp1 : Date){

                someDateRainFall.add(temp1.substring(0,10));
            }
            if (someDateRainFall == null || someDateRainFall.size() == 0)
            {return null;}
            Map<String, Double> map = new HashMap<String, Double>();
            for (String temp : someDateRainFall) {
                Double count = map.get(temp);
                map.put(temp, (count == null) ? 1 : count + 1);
            }



            return map;


        }
    }
    //http://localhost:8080/get/somerainfall?startTime=2017-04-13%00:00:00&endTime=2017-04-15%23:59:59&sensor=XinfengWeatherStation
    @GetMapping("/admin/delete/rainfall")
    public int deleteRainFall(Long id){
        return rainFallService.deleteRainFall(id);
    }
    @GetMapping("/post/rainfall")
    public int insertRainFall(String sensor,String date,double moudles,double rainfall,double accumulatedrainfall){
        return rainFallService.insertRainFall(sensor, date, moudles, rainfall, accumulatedrainfall);
    }//http://localhost:8080/post/rainfall?sensor=aakk&date=aa&moudles=11&rainfall=1&accumulatedrainfall=1
    @GetMapping("/admin/put/rainfall")
    public int updateRainFall(Long id,String sensor,String date,double moudles,double rainfall,double accumulatedrainfall){
        return rainFallService.updateRainFall(id, sensor, date, moudles, rainfall, accumulatedrainfall);
    }
//    @GetMapping("/dorainfall")
//    public String doexcel() throws IOException {
//        String sensor ="XinfengWeatherStation";
//
//        String fileName = "C:\\Users\\卡卡\\Desktop\\监测数据(1)(1)\\监测数据\\地下水监测数据完整2019年整理\\地下水监测数据完整2019年整理\\新峰气象站\\雨量\\雨量.xls";
//        List<RainFall> list = new ArrayList<>();
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
//                    data = cell.getStringCellValue();
//
//                } else {
//                    cell = row.getCell(4);
//                    CellType cellType = cell.getCellType();
//                    if (cellType== CellType.STRING)
//
//                    {
//                        modulus=0;
//                    }else { cell.setCellType(CellType.NUMERIC);
//                        modulus = cell.getNumericCellValue();}
//                    cell = row.getCell(5);
//                    cellType = cell.getCellType();
//                    if (cellType==CellType.STRING)
//                    {
//                        rainfall=0.0;
//                    }else {
//
//                        cell.setCellType(CellType.NUMERIC);
//                        rainfall = cell.getNumericCellValue();
//                    }
//                    cell = row.getCell(6);
//                    cellType = cell.getCellType();
//                    if (cellType==CellType.STRING)
//                    {
//                        accumulatedrainfall=0.0;
//                    }else {
//
//                        cell.setCellType(CellType.NUMERIC);
//                        accumulatedrainfall = cell.getNumericCellValue();
//                    }
//
//
//
//                }
//
//
//            }list.add(new RainFall(sensor,data,modulus,rainfall,accumulatedrainfall));
//
//
//
//
//
//        }
//       rainFallService.insertCurrentSpeedBatch(list);
//        return "读取成功";
//    }
}

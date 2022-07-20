package com.dixiashui.boot.controller;

import com.dixiashui.boot.bean.MeasuringWeir;
import com.dixiashui.boot.service.MeasuringWeirService;
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
public class MeasuringWeirController {
    @Autowired
    MeasuringWeirService measuringWeirService;
    public static HSSFRow row; // 行
    public static HSSFCell cell; // 列
    private double modulus;
    private double weirhead;
    private double flow;
    private  String data;
    @GetMapping("/get/measuringweirs")
    public List<MeasuringWeir> getmeasuringweir(String sensor) {

        return measuringWeirService.getAllMeasuringWeir(sensor);
    }
    @GetMapping("/get/measuringweir")
    public List<MeasuringWeir> getSingleDayMeasuringWeirdata(String sensor,String date){
        String a="%";
        date=date+a;
        return measuringWeirService.getSingleDayMeasuringWeirdata(sensor, date);
    }
    @GetMapping("/get/somemeasuringweir")
    public List<MeasuringWeir> getSomeMeasuringWeir(String startTime,String endTime,String sensor)throws ParseException {
        if (startTime.equals("10")||startTime.equals("30")||startTime.equals("180")){

            endTime=measuringWeirService.getMaxDate(sensor);
            int year =Integer.parseInt(endTime.substring(0,4));
            int month =Integer.parseInt(endTime.substring(5,7));
            int day =Integer.parseInt(endTime.substring(8,10));
            Calendar calendar=new GregorianCalendar(year,month-1,day);
            calendar.add(Calendar.DATE, -Integer.parseInt(startTime));
            Date starttime=calendar.getTime();
            SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd");

            return measuringWeirService.getSomeDayMeasuringWeir(df.format(starttime), endTime,sensor);
        }else {

            return measuringWeirService.getSomeDayMeasuringWeir(startTime, endTime, sensor);
        }
    }
    //http://localhost:8080/get/somemeasuringweir?startTime=2018-07-15&endTime=2018-07-25&sensor=upperqingshuiriver
    @GetMapping("/admin/delete/measuringweir")
    public int deleteEvaporationCapacity(Long id){
        return measuringWeirService.deleteMeasuringWeir(id);
    }
    @GetMapping("/post/measuringweir")
    public int insertEvaporationCapacity(String sensor,String date,double modulus,double weirhead,double flow){
        return measuringWeirService.insertMeasuringWeir(sensor, date, modulus, weirhead, flow);
    }//http://localhost:8080/post/measuringweir?sensor=aakk&date=aa&modulus=11&weirhead=1&flow=1
    @GetMapping("/admin/put/measuringweir")
    public int updateEvaporationCapacity(Long id,String sensor,String date,double modulus,double weirhead,double flow){
        return measuringWeirService.updateMeasuringWeir(id, sensor, date, modulus, weirhead, flow);
    }//http://localhost:8080/put/measuringweir?id=21728&sensor=aakk&date=aa&modulus=11&weirhead=1&flow=1
//    @GetMapping("/do1")
//    public String doexcel() throws IOException {
//        String sensor ="upperqingshuiriver";
//        String fileName = "C:\\Users\\卡卡\\Desktop\\监测数据(1)(1)\\监测数据\\地下水监测数据完整2019年整理\\地下水监测数据完整2019年整理\\量水堰\\清水江泉群上游\\清水江泉群上游.xls";
//        List<MeasuringWeir> list = new ArrayList<>();
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
//                     data = cell.getStringCellValue();
//
//                } else {
//                    cell = row.getCell(4);
//                    CellType cellType = cell.getCellType();
//                    if (cellType==CellType.STRING)
//
//                   {
//                        modulus=0;
//                    }else {
//                        cell.setCellType(CellType.NUMERIC);
//                        modulus = cell.getNumericCellValue();}
//                    cell = row.getCell(5);
//                     cellType = cell.getCellType();
//                    if (cellType==CellType.STRING)
//                    {
//                        weirhead=0;
//                    }else {
//
//                        cell.setCellType(CellType.NUMERIC);
//                        weirhead = cell.getNumericCellValue();
//                    }
//                    cell = row.getCell(6);
//                     cellType = cell.getCellType();
//                    if (cellType==CellType.STRING)
//                    {
//                        flow=0;
//                    }else {
//
//                        cell.setCellType(CellType.NUMERIC);
//                        flow = cell.getNumericCellValue();
//                    }
//
//
//
//                }
//
//
//            }list.add(new MeasuringWeir(sensor,data,modulus,weirhead,flow));
//
//
//
//
//
//        }
//        measuringWeirService.insertBatch(list);
//           return "读取成功";
//    }
}

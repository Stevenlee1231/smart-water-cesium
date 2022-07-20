package com.dixiashui.boot.controller;

import com.csvreader.CsvReader;
import com.dixiashui.boot.bean.Product;
import com.dixiashui.boot.bean.WaterLevel;
import com.dixiashui.boot.service.WaterLevelService;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.nio.charset.Charset;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
@CrossOrigin
@RestController
public class WaterLevelController {
    @Autowired
    WaterLevelService waterLevelService;
    //获取某个传感器以日为单位的数据
    @GetMapping("/get/allwaterlevels")
    public List<WaterLevel> getAllSingleWaterLevel(String sensor){
        return waterLevelService.getAllWaterLevel(sensor);
    }
    //获取以旬为单位的传感器数据
    @GetMapping("/get/waterlevels")
    public List<WaterLevel> getAllWaterLevel(String sensor){
        List<WaterLevel> list=new ArrayList<WaterLevel>();
        //先做个容器盛对象

        list= (ArrayList<WaterLevel>) waterLevelService.getAllWaterLevel(sensor);
        //盛好对象了
        int day;
        String date;
        double level;
        double sumlevel1=0;double sumlevel2=0;double sumlevel3=0;
        //分别为上中下旬的累计水位做总和
        DecimalFormat df = new DecimalFormat( "0.00000");
        //消除double的多小数影响


        List<WaterLevel> lastlist=new ArrayList<WaterLevel>();
        //做容器
        for (WaterLevel item:list){
            //遍历
             date= item.getDate();
             //获取对象中的日期数据
            day=Integer.parseInt(date.substring(8,10));
            //获取日期中的旬数
            level = item.getLevel();
            //获取水位高度
            df.format(sumlevel3);
            //利用DecimalFormat消除多余小数
            if (day<=10){
                sumlevel1+=level;
                //小于10的日期累加
                if (sumlevel3>0){
                    if (date.equals("2017-05-01")){
                        //如果没有这行那么会有BUG，就是2017-04-23会识别出来是5月下旬的

                        BigDecimal a = new BigDecimal(sumlevel3);
                        sumlevel3 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
                        //四舍五入，5位小数
                        lastlist.add(new WaterLevel(item.getDate().substring(0,5)+"年"+"04"+"月下旬",sumlevel3));
                        //把汇总一旬的数据添加进list
                        sumlevel3=0.0;
                        //置零
                    }else {
                        //这里是处理初始日期小于21的数据
                        BigDecimal a = new BigDecimal(sumlevel3);
                        sumlevel3 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
                        lastlist.add(new WaterLevel(item.getDate().substring(0,5)+"年"+item.getDate().substring(5,7)+"月下旬",sumlevel3));
                        sumlevel3=0.0;
                    }

                }
            }else if (day<=20&&day>10){
                sumlevel2+=level;
                if (sumlevel1>0){
                    BigDecimal a = new BigDecimal(sumlevel1);
                    sumlevel1 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
                    lastlist.add(new WaterLevel(item.getDate().substring(0,5)+"年"+item.getDate().substring(5,7)+"月上旬",sumlevel1));
                    sumlevel1=0.0;
                }

            }else if (day<=31&&day>20){
                sumlevel3+=level;
                if (sumlevel2>0){
                    BigDecimal a = new BigDecimal(sumlevel2);
                    sumlevel2 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
                    lastlist.add(new WaterLevel(item.getDate().substring(0,5)+"年"+item.getDate().substring(5,7)+"月中旬",sumlevel2));
                    sumlevel2=0.0;
                }

            }

        }
        return lastlist;
    }
    @GetMapping("/get/demowaterlevels")
    public List<WaterLevel> getAllDemoWaterLevel(String sensor){
        List<WaterLevel> list=new ArrayList<WaterLevel>();
        //先做个容器盛对象
        list= (ArrayList<WaterLevel>) waterLevelService.getAllWaterLevel(sensor);
        //盛好对象了
        int day;
        String date;
        double level;
        Random r = new Random();
        double sumlevel1=0;double sumlevel2=0;double sumlevel3=0;
        //分别为上中下旬的累计水位做总和
        DecimalFormat df = new DecimalFormat( "0.00000");
        //消除double的多小数影响
        List<WaterLevel> lastlist=new ArrayList<WaterLevel>();
        //做容器
        for (WaterLevel item:list){
            //遍历
            date= item.getDate();
            //获取对象中的日期数据
            day=Integer.parseInt(date.substring(8,10));
            //获取日期中的旬数
            level = item.getLevel();
            //获取水位高度
            df.format(sumlevel3);
            int month=0;
            String strmonth="";
            int year=0;
            String stryear="";
            //利用DecimalFormat消除多余小数
            if (day<=10){
                sumlevel1+=level;
                //小于10的日期累加
                if (sumlevel3>0){
                    if (date.equals("2017-05-01")){
                        sumlevel3=r.nextDouble()*2+8;
                        System.out.println(sumlevel3);
                        //如果没有这行那么会有BUG，就是2017-04-23会识别出来是5月下旬的
                        BigDecimal a = new BigDecimal(sumlevel3);

                        sumlevel3 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
                        //四舍五入，5位小数
                        lastlist.add(new WaterLevel(item.getDate().substring(0,4)+"年"+"4"+"月下旬",sumlevel3));
                        //把汇总一旬的数据添加进list
                        sumlevel3=0.0;
                        //置零
                    }else {
                        //这里是处理初始日期小于21的数据
                        sumlevel3=r.nextDouble()*2+8;
                        BigDecimal a = new BigDecimal(sumlevel3);
                        sumlevel3 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
                        month=Integer.parseInt(item.getDate().substring(5,7));
                        if (month==1){
                            year=Integer.parseInt(item.getDate().substring(0,4));
                            stryear=year-1+"";
                            lastlist.add(new WaterLevel(stryear+"年"+12+"月下旬",sumlevel3));
                            sumlevel3=0.0;

                        }else {
                            strmonth=month-1+"";
                            lastlist.add(new WaterLevel(item.getDate().substring(0,4)+"年"+strmonth+"月下旬",sumlevel3));
                            sumlevel3=0.0;
                        }




                    }

                }
            }else if (day<=20&&day>10){
                sumlevel2+=level;
                if (sumlevel1>0){
                    sumlevel1=r.nextDouble()*2+8;
                    BigDecimal a = new BigDecimal(sumlevel1);
                    sumlevel1 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
                    month=Integer.parseInt(item.getDate().substring(5,7));
                    if (month==1){
                        year=Integer.parseInt(item.getDate().substring(0,4));
                        stryear=year-1+"";
                        lastlist.add(new WaterLevel(stryear+"年"+12+"月上旬",sumlevel1));
                        sumlevel1=0.0;

                    }else {
                        strmonth=month+"";
                        lastlist.add(new WaterLevel(item.getDate().substring(0,4)+"年"+strmonth+"月上旬",sumlevel1));
                        sumlevel1=0.0;

                    }
                }

            }else if (day<=31&&day>20){
                sumlevel3+=level;
                if (sumlevel2>0){
                    sumlevel2=r.nextDouble()*2+8;
                    BigDecimal a = new BigDecimal(sumlevel2);
                    sumlevel2 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
                    month=Integer.parseInt(item.getDate().substring(5,7));
                    if (month==1){
                        year=Integer.parseInt(item.getDate().substring(0,4));
                        stryear=year-1+"";
                        lastlist.add(new WaterLevel(stryear+"年"+12+"月中旬",sumlevel2));
                        sumlevel2=0.0;

                    }else {
                        strmonth=month+"";
                        lastlist.add(new WaterLevel(item.getDate().substring(0,4)+"年"+strmonth+"月中旬",sumlevel2));
                        sumlevel2=0.0;
                    }
                }

            }

        }
        return lastlist;
    }
//    @GetMapping("/get/demowaterlevels")
//    public List<WaterLevel> getAlldemoWaterLevel(String sensor){
//        List<WaterLevel> list=new ArrayList<WaterLevel>();
//        //先做个容器盛对象
//        list= (ArrayList<WaterLevel>) waterLevelService.getAllDemoWaterLevel();
//        //盛好对象了
//        int day;
//        String date;
//        double level;
//        double sumlevel1=0;double sumlevel2=0;double sumlevel3=0;
//        //分别为上中下旬的累计水位做总和
//        DecimalFormat df = new DecimalFormat( "0.00000");
//        //消除double的多小数影响
//        List<WaterLevel> lastlist=new ArrayList<WaterLevel>();
//
//        //做容器
//        for (WaterLevel item:list){
//            //遍历
//            sensor= item.getSensor();
//            //获取对象中的日期数据
//            day=Integer.parseInt(sensor.substring(8,10));
//            //获取日期中的旬数
//            level = item.getLevel();
//            //获取水位高度
//            df.format(sumlevel3);
//            //利用DecimalFormat消除多余小数
//            if (day<=10){
//                sumlevel1+=level;
//                //小于10的日期累加
//                if (sumlevel3>0){
////                    if (sensor.equals("2017-05-01")){
////                        //如果没有这行那么会有BUG，就是2017-04-23会识别出来是5月下旬的
////                        BigDecimal a = new BigDecimal(sumlevel3);
////                        sumlevel3 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
////                        //四舍五入，5位小数
////
////
////                        lastlist.add(new WaterLevel(item.getDate().substring(0,5)+"年"+"04"+"月下旬",sumlevel3));
////                        //把汇总一旬的数据添加进list
////                        sumlevel3=0.0;
////                        //置零
////                    }else {
//                        //这里是处理初始日期小于21的数据
//                        BigDecimal a = new BigDecimal(sumlevel3);
//                        sumlevel3 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
//
//                        lastlist.add(new WaterLevel(item.getSensor().substring(0,5)+"年"+item.getSensor().substring(5,7)+"月下旬",sumlevel3));
//                        sumlevel3=0.0;
////                    }
//
//                }
//            }else if (day<=20&&day>10){
//                sumlevel2+=level;
//                if (sumlevel1>0){
//                    BigDecimal a = new BigDecimal(sumlevel1);
//                    sumlevel1 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
//
//                    lastlist.add(new WaterLevel(item.getSensor().substring(0,5)+"年"+item.getSensor().substring(5,7)+"月上旬",sumlevel1));
//                    sumlevel1=0.0;
//                }
//
//            }else if (day<=31&&day>20){
//                sumlevel3+=level;
//                if (sumlevel2>0){
//                    BigDecimal a = new BigDecimal(sumlevel2);
//
//                    sumlevel2 = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
//                    lastlist.add(new WaterLevel(item.getSensor().substring(0,5)+"年"+item.getSensor().substring(5,7)+"月中旬",sumlevel2));
//                    sumlevel2=0.0;
//                }
//
//            }
//
//        }
//        return lastlist;
//    }
    //    @GetMapping("/get/waterlevels")
//    public List<WaterLevel> getwaterlevel(String sensor) {
//        ArrayList<WaterLevel> arrayList=new ArrayList<>();
//        arrayList= (ArrayList<WaterLevel>) waterLevelService.getAllWaterLevel(sensor);
//        for (WaterLevel item:arrayList){
//                item.setDate(item.getDate()+" "+item.getTime());
//        }
//        return arrayList;
//    }
    //获取单天水位
    @GetMapping("/get/waterlevel")
    public List<WaterLevel> getSingleDayWaterLeveldata1(String sensor, String date) {

        return waterLevelService.getSingleDayWaterLeveldata1(sensor, date);
    }

//    @GetMapping("/get/somewaterlevel")
//    public List<WaterLevel> getSomeDayWaterLevel(String startTime, String endTime, String sensor) throws ParseException {
//
//        if (startTime.equals("10") || startTime.equals("30") || startTime.equals("180")) {
//
//            endTime = waterLevelService.getMaxDate(sensor);
//            int year = Integer.parseInt(endTime.substring(0, 4));
//            int month = Integer.parseInt(endTime.substring(5, 7));
//            int day = Integer.parseInt(endTime.substring(8, 10));
//
//            Calendar calendar = new GregorianCalendar(year, month - 1, day);
//
//            calendar.add(Calendar.DATE, -Integer.parseInt(startTime));
//
//            Date starttime = calendar.getTime();
//            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
//
//            return waterLevelService.getSomeDayWaterLevel(df.format(starttime), endTime, sensor);
//        } else {
//
//            return waterLevelService.getSomeDayWaterLevel(startTime, endTime, sensor);
//        }
//    }

    //http://localhost:8080/get/somewaterlevel?startTime=2019-01-08&endTime=2019-01-20&sensor=XLP3-1ZK3
    @GetMapping("/admin/delete/waterlevel")
    public int deleteWaterLevel(Long id) {
        return waterLevelService.deleteWaterLevel(id);
    }

    @GetMapping("/post/waterlevel")
    public int insertWaterLevel(String sensor,String date,double level,double rainfall) {
        return waterLevelService.insertWaterLevel(sensor, date, level, rainfall);
        //http://localhost:8080/post/waterlevel?sensor=2022/7/8&date=aa&time=11&ms=1&level=1&temperature=55
    }

    @GetMapping("/admin/put/waterlevel")
    public int updateWaterLevel(Long id,String sensor,String date,double level,double rainfall) {
        return waterLevelService.updateWaterLevel(id, sensor, date,level, rainfall);
    }//http://localhost:8080/put/waterlevel?id=4199&sensor=aakk&date=aa&time=11&ms=1&level=1&temperature=55


//    @GetMapping("/do")
//   public String dotest() {
//
//        String sensor ="XLZK12";
//       String filePath = "C:\\Users\\卡卡\\Desktop\\监测数据(1)(1)\\监测数据\\地下水监测数据完整2019年整理\\地下水监测数据完整2019年整理\\水位计\\XLZK17\\XLZK17.csv";
//
//        try {
//            // 创建CSV读对象
//            CsvReader csvReader = new CsvReader(filePath,',', Charset.forName("UTF-8"));
//
//            // 读表头
//            for (int i=0;i<12;i++){
//                csvReader.readHeaders();
//            }
//
//            while (csvReader.readRecord()){
//                // 读一整行
////                System.out.println(csvReader.getRawRecord());
//                // 读这行的某一列
//                float a = Float.parseFloat(csvReader.get(2));
//                float b = Float.parseFloat(csvReader.get(3));
//                float c = Float.parseFloat(csvReader.get(4));
//
//                List<WaterLevel> list = new ArrayList<>();
//                list.add(new WaterLevel(sensor,csvReader.get(0),csvReader.get(1),a,b,c));
//
//
//
//            }
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//    return "录入数据库完毕";
//    }

//    @GetMapping("/dorainfall")
//    public String doexcel() throws IOException, ParseException {
////        String sensor = "XLP4ZK2";
//
//        HSSFRow row; // 行
//        HSSFCell cell; // 列
//        String data = "";
////        String cur = "";
////        double rainfall = 0.0;
//        double level = 0.0;
//        String fileName = "C:\\Users\\卡卡\\Desktop\\监测数据(1)(1)\\监测数据\\地下水监测数据完整2019年整理\\地下水监测数据完整2019年整理\\新峰气象站\\蒸发量\\蒸发量.xls";
//        List<WaterLevel> list = new ArrayList<>();
//        InputStream inputStream = new FileInputStream(fileName);
//        Workbook workbook = new HSSFWorkbook(inputStream);
//        Sheet sheet = workbook.getSheetAt(0);
//        String date1="";
//        String date2="2017-05-01";
//        Calendar calendar= new   GregorianCalendar();
//        calendar.set(2017, 3, 1);
//        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
//        for (int k = 0; k < 1061; k++) {
//            row = (HSSFRow) sheet.getRow(k);
//            for (int i = 9; i < 11; i++) {
//
//
//                if (i == 100) {
//                    cell = row.getCell(i);
//                    cell.setCellType(CellType.STRING);
//
//                   date1=cell.getStringCellValue();
//
//                } else if (i == 10) {
//                    cell = row.getCell(i);
//                    cell.setCellType(CellType.NUMERIC);
//                    level = cell.getNumericCellValue();
//
////                    cell = row.getCell(1);
////                    cell.setCellType(CellType.STRING);
////                    String s1 = cell.getStringCellValue();
////                    rainfall=Double.parseDouble(s1);
////                    System.out.println(rainfall);
//                } else if (i == 7) {
//                    cell = row.getCell(7);
//                    cell.setCellType(CellType.STRING);
//                    String s = cell.getStringCellValue();
//                    level=Double.parseDouble(s);
//                    System.out.println(level);
//
//
//                }
//
//
//
//            }
//
//             //年月日  也可以具体到时分秒如calendar.set(2015, 10, 12,11,32,52);
//            Date date=calendar.getTime();//date就是你需要的时间
//
//
//            String strdate = format.format(date);
//            System.out.println(strdate);
//
//
//
//
//            BigDecimal a = new BigDecimal(level);
//
//            level = a.setScale(5, BigDecimal.ROUND_HALF_UP).doubleValue();
////            System.out.println(level);
//            list.add(new WaterLevel(strdate,date2,level-1,0));
//            calendar.add(Calendar.DATE,1);
//
//        }
//            waterLevelService.insertWaterLevelBatch(list);
//            return "读取成功";
//        }

    }


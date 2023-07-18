package com.dixiashui.boot.controller;

import com.github.psambit9791.jdsp.filter.Butterworth;
import com.opencsv.CSVWriter;
import com.csvreader.CsvReader;
import com.csvreader.CsvWriter;
import com.dixiashui.boot.bean.CurrentSpeed;
import com.dixiashui.boot.service.CurrentSpeedService;
import com.dixiashui.boot.bean.FFT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dixiashui.boot.bean.complex;
import java.io.IOException;
import java.nio.charset.Charset;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
@CrossOrigin
@RestController
public class CurrentSpeedController {

    public double[] yidong(double[] beiyidongshuzu,double[] cankaoshuzu){
        int yitiaoquxianchangdu=cankaoshuzu.length;
        //
        int yidongjuli=10;
        double[] fanhuishuzu=new  double[yitiaoquxianchangdu];
        double[] xunzhaozuixiaozhi=new  double[2*yidongjuli-1];
      for (int i=0;i<yidongjuli;i++) {
          double chafenleijia=0;
          double[] yidonghoushuzu=new  double[yitiaoquxianchangdu];
          System.arraycopy(beiyidongshuzu,0,yidonghoushuzu,i,yitiaoquxianchangdu-i);

          //当srcPos为0，destPos>1时原数组相比之前往后移动yidongjuli
          for (int u=0;u<i;u++){
              yidonghoushuzu[u]=beiyidongshuzu[yitiaoquxianchangdu-u-1];
          }
          for (int k=0;k<yitiaoquxianchangdu;k++){

              chafenleijia+=Math.abs(Math.abs(cankaoshuzu[k])-Math.abs(yidonghoushuzu[k]));
          }

          xunzhaozuixiaozhi[i]=chafenleijia;

          System.out.println("向后移的下标"+i+"值为"+chafenleijia);
      }

        for (int i=1;i<yidongjuli;i++) {
            double chafenleijia=0;
            double[] yidonghoushuzu=new  double[yitiaoquxianchangdu];
            System.arraycopy(beiyidongshuzu,i,yidonghoushuzu,0,yitiaoquxianchangdu-i);
            //填补空缺
            for (int u=0;u<i;u++){
                yidonghoushuzu[yitiaoquxianchangdu-u-1]=beiyidongshuzu[u];
            }
            //当destPos为0，srcPos>1时原数组相比之前往前移动yidongjuli
            for (int k=1;k<yitiaoquxianchangdu;k++){

                chafenleijia+=Math.abs(Math.abs(cankaoshuzu[k])-Math.abs(yidonghoushuzu[k]));
            }

            xunzhaozuixiaozhi[i+9]=chafenleijia;
            System.out.println("向前移的下标"+i+"值为"+chafenleijia);
        }
        double  zuixiaozhi=xunzhaozuixiaozhi[0];
        int pianyi=0;
        for (int l=0;l<xunzhaozuixiaozhi.length;l++){

            if (zuixiaozhi>=xunzhaozuixiaozhi[l]){
                System.out.println("最小值为"+xunzhaozuixiaozhi[l]+"下标为"+l);
                zuixiaozhi=xunzhaozuixiaozhi[l];
                pianyi=l;
            }

        }
            if (pianyi<10){
                System.arraycopy(beiyidongshuzu,0,fanhuishuzu,pianyi,yitiaoquxianchangdu-pianyi);
                //填补空缺
                for (int u=0;u<pianyi;u++){
                    fanhuishuzu[u]=beiyidongshuzu[yitiaoquxianchangdu-u-1];
                }
            }else  if (pianyi>=10){
                System.arraycopy(beiyidongshuzu,pianyi-9,fanhuishuzu,0,yitiaoquxianchangdu-(pianyi-9));

                //填补空缺
                for (int u=0;u<pianyi-9;u++){
                    fanhuishuzu[yitiaoquxianchangdu-u-1]=beiyidongshuzu[u];
                }

            }


          return fanhuishuzu;








    }


    @GetMapping("/yigewenjian")
    public List yigewenjian(String canshu) {


        List<double[]> ruilisanshejihe = new ArrayList<double[]>();
        List<double[]> xianghuchafen = new ArrayList<double[]>();
        List<double[]> fangcha = new ArrayList<double[]>();
        List<double[]> chafen = new ArrayList<double[]>();
        List<double[]> zuotu = new ArrayList<double[]>();
        List<double[]> jiaoduguojihe = new ArrayList<double[]>();
        List<double[]> zhenfujieguojihe = new ArrayList<double[]>();
        List<double[]> xianghuchafenleijia = new ArrayList<double[]>();
        List<double[]> chafenleijia = new ArrayList<double[]>();
        List<double[]> xianghuchafenzhenfulist = new ArrayList<double[]>();
        int zongchangdu=200000;
        int yitiaoquxianchangdu = 250000;
        double[]  xianghuchafenleijiashuzu=new  double[yitiaoquxianchangdu];
        double[] chafenleijiashuzu=new  double[yitiaoquxianchangdu];
        double[] xianghuchafenzhenfu=new  double[yitiaoquxianchangdu];
        int dianshu =100;
        int pianyi=4;
        int ruilitiaosu =10;

        Double dianyazhi;
        String filePath = "C:\\Users\\abc\\Desktop\\zhuang\\6.13\\_06.csv";

        try {
            // 创建CSV读对象
            CsvReader csvReader = new CsvReader(filePath, ',', Charset.forName("UTF-8"));

            // 读表头

            for (int i = 0; i < 176436; i++) {
                csvReader.readRecord();
                //去除表头两行
            }
            double[] jiequ=new  double[yitiaoquxianchangdu];
            for (int i=0;i<ruilitiaosu;i++){
                double[] ruilishuzu=new  double[yitiaoquxianchangdu];
                for ( int k=0;k<yitiaoquxianchangdu;k++){
                    csvReader.readRecord();
                    dianyazhi = Double.parseDouble(csvReader.get(1));

                    ruilishuzu[k]=dianyazhi;
                }

//                if(i==1){
//                    System.out.println("ss");
//                    int xishu=3;
//                    for ( int j=0;j<yitiaoquxianchangdu;j++){
//                                if (j<yitiaoquxianchangdu-xishu){
//                                    ruilishuzu[j] =ruilishuzu[j+xishu];
//                                }
//
//
//                    }
//                }

                ruilisanshejihe.add(i,ruilishuzu);
                if (i>=1){

                    //相互差分
                    double[] xianghuchafentem=ruilisanshejihe.get(i);
                    double[] xiayitiaoxianghuchafentem=ruilisanshejihe.get(0);
                    ruilisanshejihe.set(i,yidong(xianghuchafentem,xiayitiaoxianghuchafentem));
                }




            }




            //平均
            double[] pingjun=new  double[yitiaoquxianchangdu];
            for (int i=0;i<ruilitiaosu;i++){
                double[] pingjuntem=ruilisanshejihe.get(i);

                for (int k=0;k<yitiaoquxianchangdu;k++){
                    pingjun[k]+=pingjuntem[k];
                }
            }
            for (int k=0;k<yitiaoquxianchangdu;k++){
                pingjun[k]=pingjun[k]/ruilitiaosu;
            }

//            //差分
            for (int i=0;i<ruilitiaosu;i++){

                double[] chafentem=ruilisanshejihe.get(i);
                double[] chafencshuzu=new  double[yitiaoquxianchangdu];
                for ( int k=0;k<yitiaoquxianchangdu;k++){
                    chafencshuzu[k]=(chafentem[k]-pingjun[k]);
                }

                chafen.add(i,chafencshuzu);
            }

            //相互差分
            for (int i=0;i<ruilitiaosu-1;i++){
                double[] xianghuchafentem=ruilisanshejihe.get(i);
                double[] xiayitiaoxianghuchafentem=ruilisanshejihe.get(i+1);
                double[] xianghuchafencshuzu=new  double[yitiaoquxianchangdu];
                for (int k=0;k<yitiaoquxianchangdu;k++){
                    xianghuchafencshuzu[k]=(xiayitiaoxianghuchafentem[k]-xianghuchafentem[k]);

                }
                xianghuchafen.add(i,xianghuchafencshuzu);
            }
            for (int i=0;i<ruilitiaosu-1;i++){

                double[] xianghuchafentemsss= xianghuchafen.get(i);
                double s=0;
                for (int k=0;k<yitiaoquxianchangdu;k++){
                    s+=Math.abs(xianghuchafentemsss[k]);

                }

            }



            //差分的累加
            for(int i=0;i<ruilitiaosu;i++){
                double[] tem=chafen.get(i);

                for (int k=0;k<yitiaoquxianchangdu;k++){
                    chafenleijiashuzu[k]+=Math.abs(tem[k]);


                }

            }
            for (int k=0;k<yitiaoquxianchangdu;k++){
                chafenleijiashuzu[k]=chafenleijiashuzu[k];


            }
        //想互差分的累加
            for(int i=0;i<ruilitiaosu-1;i++){
                double[] tem=xianghuchafen.get(i);

                for (int k=0;k<yitiaoquxianchangdu;k++){
                    xianghuchafenleijiashuzu[k]+=Math.abs(tem[k]);

                }

            }
            for (int k=0;k<yitiaoquxianchangdu;k++){
                xianghuchafenleijiashuzu[k]=xianghuchafenleijiashuzu[k];


            }



            //获取一部分点差分后的点做图

            for (int y=0;y<dianshu+0;y++){

                double[] xianghuchafencshuzu=new  double[ruilitiaosu-1];
                for (int i=0;i<ruilitiaosu-1;i++){
                    double[] xianghuchafentem=new  double[ruilitiaosu-1];
                    xianghuchafentem=ruilisanshejihe.get(i);
                    xianghuchafencshuzu[i]=xianghuchafentem[y];
                    //System.out.println( i+"   "+xianghuchafentem[l]);
                }

                zuotu.add(y-0,xianghuchafencshuzu);
            }
for (int y=0;y<ruilitiaosu;y++){
    double[] tem= ruilisanshejihe.get(y);
    iqjietiao(tem,jiaoduguojihe,zhenfujieguojihe,y);


}
for (int x=0;x<ruilitiaosu-1;x++){
    double[] tem= zhenfujieguojihe.get(x);
    double[] tem1= zhenfujieguojihe.get(x+1);
    for (int u=0;u<yitiaoquxianchangdu;u++){
        xianghuchafenzhenfu[u]+=Math.abs(tem1[u]-tem[u]);
    }
}




        }catch (IOException e) {
            e.printStackTrace();
        }
        if (canshu.equals("quxian")) {

            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;

            ruilisanshejihe.add(ruilitiaosu,fujiacanshu );

            return ruilisanshejihe;
        }else if(canshu.equals("chafen")){
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;
            chafen.add(ruilitiaosu,fujiacanshu );
            return chafen;
        }else if(canshu.equals("xianghuchafen")){
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;
            xianghuchafen.add(ruilitiaosu-1,fujiacanshu );
            return xianghuchafen;
        }else if(canshu.equals("iq")){
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = ruilitiaosu-1;
            zuotu.add(dianshu,fujiacanshu );
            return zuotu;
        }else if(canshu.equals("iqjiaodu")){
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = ruilitiaosu-1;
            jiaoduguojihe.add(ruilitiaosu,fujiacanshu );

            return jiaoduguojihe;
        }
        else if(canshu.equals("chafenleijia")){
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;
            chafenleijia.add(0,chafenleijiashuzu );
            chafenleijia.add(1,fujiacanshu );
            return chafenleijia;
        }
        else if(canshu.equals("xianghuchafenleijia")){
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;
            xianghuchafenleijia.add(0,xianghuchafenleijiashuzu );
            xianghuchafenleijia.add(1,fujiacanshu );
            return xianghuchafenleijia;
        }
        else if(canshu.equals("zhenfujietiao")){
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;

            zhenfujieguojihe.add(ruilitiaosu,fujiacanshu );
            return zhenfujieguojihe;
        }
        else if(canshu.equals("xianghuzhenfujietiao")){
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;

            xianghuchafenzhenfulist.add(0,xianghuchafenzhenfu );
            xianghuchafenzhenfulist.add(1,fujiacanshu );
            return xianghuchafenzhenfulist;
        }
        else

            {
            return  null;
        }


    }
public void iqjietiao( double[] shuju,List jiaodulist,List zhenfulist,int i){


    int shuzhuchangdu=shuju.length;
    double[] I = new double[shuzhuchangdu];
    double[] Q = new double[shuzhuchangdu];
    double[] zhenfu = new double[shuzhuchangdu];
    double[] jietiaojieguo = new double[shuzhuchangdu];
for (int m=0;m<shuzhuchangdu;m++){
    double degrees = 360 * (m + 1)*0.04;
    double radians = Math.toRadians(degrees);
    double Ifenliang = Math.sin(radians);//sin函数只接收rad
    double Qfenliang = Math.cos(radians);
    I[m] = shuju[m] * Ifenliang;
    Q[m] = shuju[m] * Qfenliang;

}







        double caiyanglv =500000000;


        Butterworth butterworthI=new Butterworth(I,10*caiyanglv);
        Butterworth butterworthQ=new Butterworth(Q,10*caiyanglv);
        I= butterworthI.lowPassFilter(2,1500000);//阶数越高越尖锐，频率越高越尖锐
    Q= butterworthQ.lowPassFilter(2,1500000);


    //解调
    for (int k = 0; k < shuzhuchangdu; k++) {
        double jiaodu = -Math.atan(I[k] / Q[k]);
        if (I[k] > 0 && Q[k] < 0) {

        } else if (I[k] < 0 && Q[k] < 0) {
            jiaodu += 3.14159265;
        } else if (I[k] < 0 && Q[k] < 0) {
            jiaodu -= 3.14159265;
        } else if (I[k] > 0 && Q[k] > 0) {

        }
        jietiaojieguo[k] = jiaodu;
        //System.out.println(jiaodu);
        zhenfu[k]=Math.sqrt(I[k]*I[k]+Q[k]*Q[k]);

    }
    jiaodulist.add(i,jietiaojieguo);
    zhenfulist.add(i,zhenfu);





}


    @GetMapping("/xiboerte")
    public List xiboerte(String canshu) {
        List<double[]> baoluo = new ArrayList<double[]>();

        int N=50;
        double[] baoluoshuzu=new  double[N];
        double[] baoluoshuzu1=new  double[N];
        complex[] dft_out =new complex[N];
        complex[] dft_one =new complex[N];
        for (int i=0;i<N;i++){
            dft_out[i]=new complex(0.0,0.0);
            dft_one[i]=new complex(0.0,0.0);
        }

        int n,k;
        double Xn;
        double[] z_r = new double[N];
        double[] z_i = new double[N];
        double[] x_r = new double[N];
        double[] x_i = new double[N];
        double[] y_r = new double[N];
        double[] y_i = new double[N];
        double[] s_r = new double[N];
        double[] s_i = new double[N];
        double[] m_r = new double[N];
        double[] m_i = new double[N];

        double[] xn = new double[N];


        for (int l=0;l<N;l++){
         xn[l]=Math.cos(l*(Math.PI*2)/N);
        }

        String filePath = "C:\\Users\\卡卡\\Desktop\\6.1\\scope_"+3+"_1.csv";
        int shujuchangdu=50;
        try {
            // 创建CSV读对象
            CsvReader csvReader = new CsvReader(filePath, ',', Charset.forName("UTF-8"));
            for (int i = 0; i < 2; i++) {
                csvReader.readRecord();
                //去除表头两行
            }
//            for (int i=0;i<N;i++) {
//                csvReader.readRecord();
//                double dianyazhi = Double.parseDouble(csvReader.get(1));
//                xn[i]=dianyazhi;
//            }
            double[] amp = new double[N];
            double[] xr = new double[N];
            double[] xi = new double[N];

            for(k=0; k<N; k++) {

                for (n = 0; n <N; n++) {
                 // complex  cc=new  complex(1.0,1.0);

                    Xn = Math.cos(n * Math.PI / 6);                      //初始信号

                    dft_one[n].real = Xn * Math.cos(2 * Math.PI / N * n * k); //实部信号
                    dft_one[n].imag = Xn * Math.sin(2 * Math.PI  / N * n * k); //虚部信号

                    dft_out[k].real += dft_one[n].real;      //实部相加
                    dft_out[k].imag += dft_one[n].imag;      //虚部相加


                }
                x_r[k]=dft_out[k].real;                    //X(k)
                x_i[k]=dft_out[k].imag;                    //X(k)
            }

            for (n=0; n<N; n++)                            //求出Z(K)
            {
                if(n==0)
                {
                    z_r[n]=x_r[n];
                    z_i[n]=x_i[n];

                }
                if(0<n&&n<N/2)
                {
                    z_r[n]=2*x_r[n];
                    z_i[n]=2*x_i[n];

                }
                if(N/2<=n&&n<N)
                {
                    z_r[n]=0;
                    z_i[n]=0;

                }

            }
            for(n=0; n<N; n++)                              //IDFT
            {

                for(k=0; k<N; k++)
                {
                    m_r[n]+=z_r[k]*Math.cos(2*Math.PI/N*n*k)-z_i[k]*Math.sin(2*Math.PI/N*n*k);
                    m_i[n]+=z_i[k]*Math.cos(2*Math.PI/N*n*k)+z_r[k]*Math.sin(2*Math.PI/N*n*k);
                }
                s_r[n]=m_r[n]/N;                        //解析信号的实部
                s_i[n]=m_i[n]/N;                        //解析信号的虚部
            }

            for (int i=0;i<N;i++){

                baoluoshuzu[i]= s_i[i];
                baoluoshuzu1[i]= s_r[i];
        //Math.sqrt(s_i[i]*s_i[i]+s_r[i]*s_r[i]);
             double a=   Math.atan(s_i[i]/s_r[i]);
                if (s_i[i] > 0 &&s_r[i] > 0) {

                } else if (s_i[i] > 0 && s_r[i] < 0) {
                    a += 3.14159265;
                } else if (s_i[i] < 0 && s_r[i] < 0) {
                    a -= 3.14159265;
                } else if (s_i[i] < 0 && s_r[i] > 0) {

                }


            }

        }catch (IOException e) {
            e.printStackTrace();
        }

        baoluo.add(0,baoluoshuzu);
        baoluo.add(1,baoluoshuzu1);
        double[] fujiacanshu = new double[1];
        fujiacanshu[0] = N;
        baoluo.add(2,fujiacanshu);
        return baoluo ;
    }

    @GetMapping("/zixiangguan")
    public List zixiangguan(String quxianorchafen) {
        // FFT fft=new FFT(shujuchangdu);
        List<double[]> ruilisanshejihe = new ArrayList<double[]>();
        List<double[]> xianghuchafen = new ArrayList<double[]>();
        List<double[]> fangcha = new ArrayList<double[]>();
        List<double[]> chafen = new ArrayList<double[]>();
        List<double[]> jietiaojieguojihe = new ArrayList<double[]>();
        int yitiaoquxianchangdu = 128000;
        int pianyi=4;
        int ruilitiaosu = 1;

        Double dianyazhi;
        double[] I = new double[yitiaoquxianchangdu];
        double[] Q = new double[yitiaoquxianchangdu];
        double[] zhenfu = new double[yitiaoquxianchangdu];
        double[] jietiaojieguo = new double[yitiaoquxianchangdu];
        //"C:\\Users\\卡卡\\Desktop\\newbuzhend\\scope_210_"+j+"_1.csv"
        //"C:\\Users\\卡卡\\Desktop\\zhenpzt\\scope_"+j+"_1.csv"
        for(int j=pianyi;j<pianyi+ruilitiaosu;j++){
            String filePath = "C:\\Users\\卡卡\\Desktop\\6.1\\scope_"+j+"_1.csv";

            try {
                // 创建CSV读对象
                CsvReader csvReader = new CsvReader(filePath, ',', Charset.forName("UTF-8"));

                // 读表头
                for (int i = 0; i < 2; i++) {
                    csvReader.readRecord();
                    //去除表头两行
                }


                //混频

                    double[] yitiaoquxian = new double[yitiaoquxianchangdu];

                    for (int m = 0; m < yitiaoquxianchangdu; m++) {
                        csvReader.readRecord();
                        dianyazhi = Double.parseDouble(csvReader.get(1));
                        yitiaoquxian[m] = dianyazhi;
                        double degrees = 360 * (m + 1)*0.05;
                        double radians = Math.toRadians(degrees);

                        double Ifenliang = Math.sin(radians);//sin函数只接收rad
                        double Qfenliang = Math.cos(radians);

                        I[m] = dianyazhi * Ifenliang;
                        Q[m] = dianyazhi * Qfenliang;
                    }
                    ruilisanshejihe.add(j-pianyi, yitiaoquxian);

                //滤波
                /*
                * function smoothArray( values, smoothing ){
  var value = values[0]; // start with the first input
  for (var i=1, len=values.length; i<len; ++i){
    var currentValue = values[i];
    value += (currentValue - value) / smoothing;
    values[i] = value;
  }
}*/
                for (int v = 1; v < yitiaoquxianchangdu; v++) {
                    double Ivalue = I[0];
                    double Qvalue = Q[0];
                    double IcurrentValue = I[v];
                    double QcurrentValue = I[v];
                    Ivalue += (IcurrentValue - Ivalue) / 1000;
                    I[v] = Ivalue;
                    Qvalue += (QcurrentValue - Qvalue) / 1000;
                    Q[v] = Qvalue;
                }


                //解调
                for (int k = 0; k < yitiaoquxianchangdu; k++) {
                    double jiaodu = -Math.atan(I[k] / Q[k]);
                    if (I[k] > 0 && Q[k] < 0) {

                    } else if (I[k] < 0 && Q[k] < 0) {
                        jiaodu += 3.14159265;
                    } else if (I[k] < 0 && Q[k] < 0) {
                        jiaodu -= 3.14159265;
                    } else if (I[k] > 0 && Q[k] > 0) {

                    }
                    jietiaojieguo[k] = jiaodu;
                    zhenfu[k]=Math.sqrt(I[k]*I[k]+Q[k]*Q[k]);
                   // System.out.println(zhenfu[k]);
                }




            } catch (IOException e) {
                e.printStackTrace();
            }
        }
//做相互差分
        for(int o=0;o<ruilitiaosu-1;o++){
            double[] xianghuchafenshuzu = new double[yitiaoquxianchangdu];
            double[] xianghuchafentem = new double[yitiaoquxianchangdu];
            xianghuchafenshuzu= ruilisanshejihe.get(o);
            xianghuchafentem=ruilisanshejihe.get(o+1);
            for (int g=0;g<yitiaoquxianchangdu;g++){
                xianghuchafenshuzu[g]=xianghuchafentem[g]-xianghuchafenshuzu[g];

            }
            xianghuchafen.add(o,xianghuchafenshuzu);
        }




        if (quxianorchafen.equals("jietiao")) {
            jietiaojieguojihe.add(0, jietiaojieguo);
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;
            jietiaojieguojihe.add(ruilitiaosu, zhenfu);
            jietiaojieguojihe.add(ruilitiaosu+1, fujiacanshu);
            return jietiaojieguojihe;
        } else if (quxianorchafen.equals("quxian")) {
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;
            ruilisanshejihe.add(ruilitiaosu, fujiacanshu);
            return ruilisanshejihe;
        } else if (quxianorchafen.equals("xianghuchafen")) {
            double[] fujiacanshu = new double[1];
            fujiacanshu[0] = yitiaoquxianchangdu;
            xianghuchafen.add(ruilitiaosu-1, fujiacanshu);
            return xianghuchafen;
        }

        else {
            return null;
        }


//        try {
//
//            CsvWriter csvWriter = new CsvWriter("C:\\Users\\卡卡\\Desktop\\exzhendong\\new.csv",',', Charset.forName("UTF-8"));
//
//
//            for(int i=0;i<51;i++){
//                String[] strArray=new String[1500];
//                for(int M=0;M<1500;M++){
//                    strArray[M]=String.valueOf(output[M]);
//                }
//                    csvWriter.writeRecord(strArray);
//            }
//            csvWriter.endRecord();
//            csvWriter.flush();
//        } catch (Exception e) {
//          e.printStackTrace();
//        }
    }










    @Autowired
    CurrentSpeedService currentSpeedService;
    @CrossOrigin
    @GetMapping("/get/currentspeeds")
    public List<CurrentSpeed> getcurrentSpeed(String sensor) {

        return currentSpeedService.getAllCurrentSpeed(sensor);
    }
    @GetMapping("/get/somecurrentspeed")
    public List<CurrentSpeed> getSomeDayWaterLevel(String startTime,String endTime,String sensor)throws ParseException {
        if (startTime.equals("10")||startTime.equals("30")||startTime.equals("180")){

            endTime=currentSpeedService.getMaxDate(sensor);
            int year =Integer.parseInt(endTime.substring(0,4));
            int month =Integer.parseInt(endTime.substring(5,7));
            int day =Integer.parseInt(endTime.substring(8,10));

            Calendar calendar=new GregorianCalendar(year,month-1,day);

            calendar.add(Calendar.DATE, -Integer.parseInt(startTime));

            Date starttime=calendar.getTime();
            SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd");

            return currentSpeedService.getSomeDayCurrentSpeed(df.format(starttime), endTime,sensor);
        }else {

            return currentSpeedService.getSomeDayCurrentSpeed(startTime, endTime, sensor);
        }
    }
//http://localhost:8080/get/somecurrentspeed?startTime=2018-07-15&endTime=2018-07-25&sensor=Salmonfactorynorth
    @GetMapping("/get/currentspeed")
    public List<CurrentSpeed> getSingleDayCurrentSpeed(String sensor,String date){
        String a="%";
        date=date+a;
        return currentSpeedService.getSingleDayCurrentSpeeddata(sensor, date);
    }
    @GetMapping("/admin/delete/currentspeed")
    public int deleteCurrentSpeed(Long id){
        return  currentSpeedService.deleteCurrentSpeed(id);
    }
    @GetMapping("/post/currentspeed")
    public int insertCurrentSpeed(String date,String sensor,Double  DepthRaw
            ,Double  DepthAvg,Double  VelocityRaw,Double  VelocityAvg,Double  TemperatureRaw,
                                  Double  BatteryRaw ,Double  QuartileRaw,Double  SamplesRaw)
    {
        return currentSpeedService.insertCurrentSpeed(date, sensor, DepthRaw, DepthAvg, VelocityRaw, VelocityAvg, TemperatureRaw, BatteryRaw, QuartileRaw, SamplesRaw);
//http://localhost:8080/get/currentspeed?date=1&sensor=1&DepthRaw=1&DepthAvg=1&VelocityRaw=1&VelocityAvg=1&TemperatureRaw=1&BatteryRaw=1&QuartileRaw=1&SamplesRaw=1
    }
    @GetMapping("/admin/put/currentspeed")
    public int updateCurrentSpeed(Long id,String date,String sensor,Double  DepthRaw
            ,Double  DepthAvg,Double  VelocityRaw,Double  VelocityAvg,Double  TemperatureRaw,
                                  Double  BatteryRaw ,Double  QuartileRaw,Double  SamplesRaw){
        return currentSpeedService.updateCurrentSpeed(id, date, sensor, DepthRaw, DepthAvg, VelocityRaw, VelocityAvg, TemperatureRaw, BatteryRaw, QuartileRaw, SamplesRaw);
    }
//    @GetMapping("/docsv")
//    public String dotest() {
//        List<CurrentSpeed> list = new ArrayList<>();
//        String sensor ="Salmonfactorynorth";
//        String filePath = "C:\\Users\\卡卡\\Desktop\\监测数据(1)(1)\\监测数据\\地下水监测数据完整2019年整理\\地下水监测数据完整2019年整理\\流速仪\\三文渔厂北\\三文鱼场北.CSV";
//
//        try {
//            // 创建CSV读对象
//            CsvReader csvReader = new CsvReader(filePath,',', Charset.forName("UTF-8"));
//
//            // 读表头
//            for (int i=0;i<2;i++){
//                csvReader.readHeaders();
//            }
//
//            while (csvReader.readRecord()){
//                // 读一整行
////                System.out.println(csvReader.getRawRecord());
//                // 读这行的某一列
//
//                String data =csvReader.get(0);
//                Double DepthRaw=Double.parseDouble(csvReader.get(1));
//                Double DepthAvg=Double.parseDouble(csvReader.get(2));
//                Double VelocityRaw=Double.parseDouble(csvReader.get(3));
//                Double VelocityAvg=Double.parseDouble(csvReader.get(4));
//                Double TemperatureRaw=Double.parseDouble(csvReader.get(5));
//                Double BatteryRaw=Double.parseDouble(csvReader.get(6));
//                Double QuartileRaw=Double.parseDouble(csvReader.get(7));
//                Double SamplesRaw=Double.parseDouble(csvReader.get(8));
//
//                list.add(new CurrentSpeed(sensor,data,DepthRaw,DepthAvg,VelocityRaw,
//                        VelocityAvg,TemperatureRaw,BatteryRaw,QuartileRaw,SamplesRaw));
//
//
//
//
//            }
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        currentSpeedService.insertCurrentSpeedBatch(list);
//        return "录入数据库完毕";
//    }
        @GetMapping("/docsv")
    public String dotest() {
        List<CurrentSpeed> list = new ArrayList<>();
        String sensor ="Salmonfactorynorth";
        String filePath = "C:\\Users\\卡卡\\Desktop\\监测数据(1)(1)\\监测数据\\地下水监测数据完整2019年整理\\地下水监测数据完整2019年整理\\流速仪\\三文渔厂北\\三文鱼场北.CSV";

        try {
            // 创建CSV读对象
            CsvReader csvReader = new CsvReader(filePath,',', Charset.forName("UTF-8"));

            // 读表头
            for (int i=0;i<2;i++){
                csvReader.readHeaders();
            }

            while (csvReader.readRecord()){
                // 读一整行
//                System.out.println(csvReader.getRawRecord());
                // 读这行的某一列

                String data =csvReader.get(0);
                Double DepthRaw=Double.parseDouble(csvReader.get(1));
                Double DepthAvg=Double.parseDouble(csvReader.get(2));
                Double VelocityRaw=Double.parseDouble(csvReader.get(3));
                Double VelocityAvg=Double.parseDouble(csvReader.get(4));
                Double TemperatureRaw=Double.parseDouble(csvReader.get(5));
                Double BatteryRaw=Double.parseDouble(csvReader.get(6));
                Double QuartileRaw=Double.parseDouble(csvReader.get(7));
                Double SamplesRaw=Double.parseDouble(csvReader.get(8));

                list.add(new CurrentSpeed(sensor,data,DepthRaw,DepthAvg,VelocityRaw,
                        VelocityAvg,TemperatureRaw,BatteryRaw,QuartileRaw,SamplesRaw));




            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        currentSpeedService.insertCurrentSpeedBatch(list);
        return "录入数据库完毕";
    }
}

Number.prototype.mytoFixed = function (s) {
    var changenum = this.toFixed(s);
    if (changenum <= 0) { changenum = 0; }
    return changenum;
}


var ZT_FM = [];//阀门手动/自动
var JZF_CLOSE = [];//截止阀关到位信号
var YYZ_LJG_ZT = [];//拉矫辊状态
var YYZ_TDG_ZT = [];//脱锭辊状态
var SPEED_LZJ = [];//拉速
var FLOW_JJQ = [];//结晶器水流量
var FLOW_ELS_0 = [];//二冷水0段流量
var FLOW_ELS_1 = [];//二冷水1段流量
var FLOW_ELS_2 = [];//二冷水2段流量
var YDG_XC_H = [];//引锭杆上限位
var YDG_XC_Z = [];//引锭杆中限位
var YDG_XC_L = [];//引锭杆下限位
var READY_SYD = [];//送引锭准备指示
var READY_JZ = [];//浇铸准备指示
var SHOW_KJ = [];//开浇指示
var PUBLIC_MODEL_NUM = [];
var PRE_JJQZG_IN;//结晶器总管进水压力
var PRE_ELSZG_IN;//二冷水总管进水压力
var TEM_JJQZG_IN;//结晶器总管进水温度
var TE_ELS_ZG;//二冷水总管温度

var FAULT_ZBC_1_1;//1#中包车电机1故障
var FAULT_ZBC_1_2;//1#中包车电机2故障
var FAULT_ZBC_2_1;//2#中包车电机1故障
var FAULT_ZBC_2_2;//2#中包车电机2故障
var FAULT_GBC;//1#钢包回转台故障
var JJQ_JSYL_LOW;//结晶进水低压报警
var FAULT_ELFJ_1;//二冷排蒸汽风机故障

var FAULT_ZD = [];//振动故障
var FAULT_LJ_H = [];//上拉矫故障
var FAULT_LJ_L = [];//下拉矫故障
var FAULT_LJ_BP = [];//拉矫机变频故障
var FAULT_CF = [];//存放故障
var FAULT_SSGD_1 = [];//输送辊道1故障
var FAULT_SSGD_2 = [];//输送辊道2故障

var PEM_JJQ_IN = [];//结晶器进水压力	
var TEM_JJQ_OUT = [];//结晶器出水温度
var PRE_ELS_0 = [];//二冷水0段压力
var PRE_ELS_1 = [];//二冷水1段压力
var PRE_ELS_2 = [];//二冷水2段压力
var FPBC_A = [];//方坯面长A
var FPBC_B = [];//方坯面宽B
var TEM_JJQ_OUT = [];//结晶器出水温度

var YYZ_ZT = []; var YYZ_ZT1 = [];
var run_time = -1;//请求次数
var barPosition = 0;

var sss = 0;

var NOW_TIME = ["", "", "", "", "", ""];
var TOTAL_PRE_JJQZG_IN = ["", "", "", "", "", ""];
var TOTAL_PRE_ELSZG_IN = ["", "", "", "", "", ""];
var TOTAL_TEM_JJQZG_IN = ["", "", "", "", "", ""];
var TOTAL_TE_ELS_ZG = ["", "", "", "", "", ""];

var TOTAL_SPEED_LZJ = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_FLOW_JJQ = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_FLOW_ELS_0 = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_FLOW_ELS_1 = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_FLOW_ELS_2 = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];

var TOTAL_PEM_JJQ_IN = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_TEM_JJQ_OUT = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_PRE_ELS_0 = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_PRE_ELS_1 = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_PRE_ELS_2 = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_FPBC_A = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];
var TOTAL_FPBC_B = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];

function groupData(total) {
    sss++;
    var totalData = total.result;
    var returnDate = [], returnDate1 = [], returnDate2 = [], returnDate3 = [], returnDate4 = [],
        returnDate5 = [], returnDate6 = [], returnDate7 = [], returnDate8 = [], returnDate9 = [],
        returnDate10 = [], returnDate11 = [], returnDate12 = [], returnDate13 = [], returnDate14 = [],
        returnDate15 = [], returnDate16 = [], returnDate17 = [], returnDate18 = [], returnDate19 = [],
        returnDate20 = [], returnDate21 = [], returnDate22 = [], returnDate23 = [], returnDate24 = [],
        returnDate25 = [], returnDate26 = [], returnDate27 = [], returnDate28 = [], returnDate29 = [];
    for (var i = 1; i <= 6; i++) {
        returnDate[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("ZT_FM_" + i) != -1; });
        returnDate1[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("JZF_CLOSE_" + i) != -1; });
        returnDate2[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("YYZ_LJG_ZT_" + i) != -1; });
        returnDate3[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("YYZ_TDG_ZT_" + i) != -1; });
        returnDate4[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("SPEED_LZJ_" + i) != -1; });
        returnDate5[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FLOW_JJQ_" + i) != -1; });
        returnDate6[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FLOW_ELS_0_" + i) != -1; });
        returnDate7[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FLOW_ELS_1_" + i) != -1; });
        returnDate8[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FLOW_ELS_2_" + i) != -1; });
        returnDate9[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("YDG_XC_H_" + i) != -1; });
        returnDate10[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("YDG_XC_Z_" + i) != -1; });
        returnDate11[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("YDG_XC_L_" + i) != -1; });
        returnDate12[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("READY_SYD_" + i) != -1; });
        returnDate13[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("READY_JZ_" + i) != -1; });
        returnDate14[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("SHOW_KJ_" + i) != -1; });

        returnDate15[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_ZD_" + i) != -1; });
        returnDate16[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_LJ_H_" + i) != -1; });
        returnDate17[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_LJ_L_" + i) != -1; });
        returnDate18[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_LJ_BP_" + i) != -1; });
        returnDate19[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_CF_" + i) != -1; });
        returnDate20[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_SSGD_1_" + i) != -1; });
        returnDate21[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_SSGD_2_" + i) != -1; });

        returnDate22[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("PEM_JJQ_IN_" + i) != -1; });
        returnDate23[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("TEM_JJQ_OUT_" + i) != -1; });
        returnDate24[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("PRE_ELS_0_" + i) != -1; });
        returnDate25[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("PRE_ELS_1_" + i) != -1; });
        returnDate26[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("PRE_ELS_2_" + i) != -1; });
        returnDate27[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FPBC_A_" + i) != -1; });
        returnDate28[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FPBC_B_" + i) != -1; });
        returnDate29[i - 1] = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("TEM_JJQ_OUT_" + i) != -1; });
    }

    PRE_JJQZG_IN = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("PRE_JJQZG_IN") != -1; })[0].value_number.mytoFixed(4);
    PRE_ELSZG_IN = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("PRE_ELSZG_IN") != -1; })[0].value_number.mytoFixed(4);
    TEM_JJQZG_IN = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("TEM_JJQZG_IN") != -1; })[0].value_number.mytoFixed(4);
    TE_ELS_ZG = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("TE_ELS_ZG") != -1; })[0].value_number.mytoFixed(4);

    FAULT_ZBC_1_1 = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_ZBC_1_1") != -1; })[0].value_number + 1;
    FAULT_ZBC_1_2 = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_ZBC_1_2") != -1; })[0].value_number + 1;
    FAULT_ZBC_2_1 = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_ZBC_2_1") != -1; })[0].value_number + 1;
    FAULT_ZBC_2_2 = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_ZBC_2_2") != -1; })[0].value_number + 1;
    FAULT_GBC = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_GBC") != -1; })[0].value_number + 1;
    JJQ_JSYL_LOW = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("JJQ_JSYL_LOW") != -1; })[0].value_number + 1;
    FAULT_ELFJ_1 = $.grep(totalData, function (element, index) { return element.a_tag.indexOf("FAULT_ELFJ_1") != -1; })[0].value_number + 1;

    var obj = {};
    for (i = 0; i < 6; i++) { ZT_FM[i] = returnDate[i][0]; }
    for (i = 0; i < 6; i++) { JZF_CLOSE[i] = returnDate1[i][0]; }
    for (i = 0; i < 6; i++) {
        obj = {};
        obj.id = i + 1;
        obj.ljg = returnDate2[i][0].value_number;
        obj.tdg = returnDate3[i][0].value_number;
        if (YYZ_ZT.length >= 6) YYZ_ZT.shift();
        if (obj.ljg === 0) obj.ljg = '待机中';
        if (obj.ljg === 1) obj.ljg = '高压抬起';
        if (obj.ljg === 2) obj.ljg = '高压压下';
        if (obj.ljg === 3) obj.ljg = '低压抬起';
        if (obj.ljg === 4) obj.ljg = '低压压下';

        if (obj.tdg === 0) obj.tdg = '待机中';
        if (obj.tdg === 1) obj.tdg = '高压抬起';
        if (obj.tdg === 2) obj.tdg = '高压压下';
        if (obj.tdg === 3) obj.tdg = '低压抬起';
        if (obj.tdg === 4) obj.tdg = '低压压下';

        YYZ_ZT.push(obj);
    }

    for (i = 0; i < 6; i++) {
        SPEED_LZJ[i] = returnDate4[i][0];
        FLOW_JJQ[i] = returnDate5[i][0];
        FLOW_ELS_0[i] = returnDate6[i][0];
        FLOW_ELS_1[i] = returnDate7[i][0];
        FLOW_ELS_2[i] = returnDate8[i][0];
        YDG_XC_H[i] = returnDate9[i][0];
        YDG_XC_Z[i] = returnDate10[i][0];
        YDG_XC_L[i] = returnDate11[i][0];
        READY_SYD[i] = returnDate12[i][0];
        READY_JZ[i] = returnDate13[i][0];
        SHOW_KJ[i] = returnDate14[i][0];

        FAULT_ZD[i] = returnDate15[i][0];
        FAULT_LJ_H[i] = returnDate16[i][0];
        FAULT_LJ_L[i] = returnDate17[i][0];
        FAULT_LJ_BP[i] = returnDate18[i][0];
        FAULT_CF[i] = returnDate19[i][0];
        FAULT_SSGD_1[i] = returnDate20[i][0];
        FAULT_SSGD_2[i] = returnDate21[i][0];

        PEM_JJQ_IN[i] = returnDate22[i][0];
        TEM_JJQ_OUT[i] = returnDate23[i][0];
        PRE_ELS_0[i] = returnDate24[i][0];
        PRE_ELS_1[i] = returnDate25[i][0];
        PRE_ELS_2[i] = returnDate26[i][0];
        FPBC_A[i] = returnDate27[i][0];
        FPBC_B[i] = returnDate28[i][0];
        TEM_JJQ_OUT[i] = returnDate29[i][0];

        /* 左下4区域折线图数据 */
        TOTAL_SPEED_LZJ[i].shift(); TOTAL_SPEED_LZJ[i].push(SPEED_LZJ[i].value_number.mytoFixed(4));
        TOTAL_FLOW_JJQ[i].shift(); TOTAL_FLOW_JJQ[i].push(FLOW_JJQ[i].value_number.mytoFixed(4));
        TOTAL_FLOW_ELS_0[i].shift(); TOTAL_FLOW_ELS_0[i].push(FLOW_ELS_0[i].value_number.mytoFixed(4));
        TOTAL_FLOW_ELS_1[i].shift(); TOTAL_FLOW_ELS_1[i].push(FLOW_ELS_1[i].value_number.mytoFixed(4));
        TOTAL_FLOW_ELS_2[i].shift(); TOTAL_FLOW_ELS_2[i].push(FLOW_ELS_2[i].value_number.mytoFixed(4));

        /* 右下4区域折线图数据 */
        TOTAL_PEM_JJQ_IN[i].shift(); TOTAL_PEM_JJQ_IN[i].push(PEM_JJQ_IN[i].value_number.mytoFixed(4));
        TOTAL_TEM_JJQ_OUT[i].shift(); TOTAL_TEM_JJQ_OUT[i].push(TEM_JJQ_OUT[i].value_number.mytoFixed(4));
        TOTAL_PRE_ELS_0[i].shift(); TOTAL_PRE_ELS_0[i].push(PRE_ELS_0[i].value_number.mytoFixed(4));
        TOTAL_PRE_ELS_1[i].shift(); TOTAL_PRE_ELS_1[i].push(PRE_ELS_1[i].value_number.mytoFixed(4));
        TOTAL_PRE_ELS_2[i].shift(); TOTAL_PRE_ELS_2[i].push(PRE_ELS_2[i].value_number.mytoFixed(4));
        TOTAL_FPBC_A[i].shift(); TOTAL_FPBC_A[i].push(FPBC_A[i].value_number.mytoFixed(2));
        TOTAL_FPBC_B[i].shift(); TOTAL_FPBC_B[i].push(FPBC_B[i].value_number.mytoFixed(2));
    }

    /* 公共模拟量折线图数据 */
    TOTAL_PRE_JJQZG_IN.shift(); TOTAL_PRE_JJQZG_IN.push(PRE_JJQZG_IN);
    TOTAL_PRE_ELSZG_IN.shift(); TOTAL_PRE_ELSZG_IN.push(PRE_ELSZG_IN);
    TOTAL_TEM_JJQZG_IN.shift(); TOTAL_TEM_JJQZG_IN.push(TEM_JJQZG_IN);
    TOTAL_TE_ELS_ZG.shift(); TOTAL_TE_ELS_ZG.push(TE_ELS_ZG);

    NOW_TIME.shift(); NOW_TIME.push(total.time);


    run_time++;

    if (run_time < 1) {
        leftTwoData(0);//约55ms→12ms     
        leftThreeData(0);//约14ms→5ms  
        leftFourData(0);//约28ms→18ms 
        middleOneData(0);
        rightTwoData(0);//约9ms    
        rightThreeData(0);//约34ms          
        nextFluxion(0);//约1ms 
    } else {
        run_time = 100;
    }


    /* 左上数据 */
    $(".PRE_JJQZG_IN").html(PRE_JJQZG_IN);
    $(".PRE_ELSZG_IN").html(PRE_ELSZG_IN);
    $(".TEM_JJQZG_IN").html(TEM_JJQZG_IN);
    $(".TE_ELS_ZG").html(TE_ELS_ZG);

    middleFourData(YYZ_ZT);
    nextFluxion(barPosition);

    leftFourData($("#model_06 .my-col-con .on").attr("pos"));
    rightThreeData($("#model_09 .my-col-con .on").attr("pos"))

    var echarts_01_json = {
        "time": NOW_TIME,
        "result": [{
            'a_tag': 'PRE_JJQZG_IN',
            'value': TOTAL_PRE_JJQZG_IN
        }, {
            'a_tag': 'PRE_ELSZG_IN',
            'value': TOTAL_PRE_ELSZG_IN
        }, {
            'a_tag': 'TEM_JJQZG_IN',
            'value': TOTAL_TEM_JJQZG_IN
        }, {
            'a_tag': 'TE_ELS_ZG',
            'value': TOTAL_TE_ELS_ZG
        }]
    }

    echarts.init(document.getElementById('echarts_01')).setOption({
        xAxis: {
            data: echarts_01_json.time
        },
        series: [{
            name: '结晶器总管进水压力',
            data: echarts_01_json.result[0].value
        }, {
            name: '二冷水总管进水压力',
            data: echarts_01_json.result[1].value
        }, {
            name: '结晶器总管进水温度',
            data: echarts_01_json.result[2].value
        }, {
            name: '二冷水总管温度',
            data: echarts_01_json.result[3].value
        }]
    });

    echarts.init(document.getElementById('echarts_04')).setOption({
        series: [{
            data: [
                ['1#钢包回转台故障', FAULT_GBC],
                ['1#中包车电机1故障', FAULT_ZBC_1_1],
                ['1#中包车电机2故障', FAULT_ZBC_1_2],
                ['2#中包车电机1故障', FAULT_ZBC_2_1],
                ['2#中包车电机2故障', FAULT_ZBC_2_2],
                ['二冷排蒸汽风机故障', FAULT_ELFJ_1],
                ['二冷排蒸汽风机运行', 1],
                ['结晶进水低压报警', JJQ_JSYL_LOW]
            ],
        }]
    });


}

function renderPage() {
    var fluxions = ['一流', '二流', '三流', '四流', '五流', '六流'];
    $("#model_01 .my-col-con").html("");
    $("#model_04 .my-col-con").html("");
    $("#model_05 .my-col-con").html("");
    $("#model_06 .my-col-con").html("");
    $("#model_08 .my-col-con").html("");
    $("#model_09 .my-col-con").html("");
    for (var i = 0; i < 6; i++) {
        $("#model_01 .my-col-con").append('<div class="my-col" pos="' + i + '">' + fluxions[i] + '</div>');
        $("#model_04 .my-col-con").append('<div class="my-col" pos="' + i + '">' + fluxions[i] + '</div>');
        $("#model_05 .my-col-con").append('<div class="my-col" pos="' + i + '">' + fluxions[i] + '</div>');
        $("#model_06 .my-col-con").append('<div class="my-col" pos="' + i + '">' + fluxions[i] + '</div>');
        $("#model_08 .my-col-con").append('<div class="my-col" pos="' + i + '">' + fluxions[i] + '</div>');
        $("#model_09 .my-col-con").append('<div class="my-col" pos="' + i + '">' + fluxions[i] + '</div>');
    }
    $("#model_01 .my-col-con .my-col").each(function () {
        $(this).click(function () {
            $('#model_01 .my-col-con .my-col').removeClass("on");
            $(this).addClass("on");
            middleOneData($(this).index());
        });
    });
    $("#model_04 .my-col-con .my-col").each(function () {
        $(this).click(function () {
            $('#model_04 .my-col-con .my-col').removeClass("on");
            $(this).addClass("on");
            leftTwoData($(this).index());
        });
    });
    $("#model_05 .my-col-con .my-col").each(function () {
        $(this).click(function () {
            $('#model_05 .my-col-con .my-col').removeClass("on");
            $(this).addClass("on");
            leftThreeData($(this).index());
        });
    });
    $("#model_06 .my-col-con .my-col").each(function () {
        $(this).click(function () {
            $('#model_06 .my-col-con .my-col').removeClass("on");
            $(this).addClass("on");
            leftFourData($(this).index());
        });
    });
    $("#model_08 .my-col-con .my-col").each(function () {
        $(this).click(function () {
            $('#model_08 .my-col-con .my-col').removeClass("on");
            $(this).addClass("on");
            rightTwoData($(this).index());
        });
    });
    $("#model_09 .my-col-con .my-col").each(function () {
        $(this).click(function () {
            $('#model_09 .my-col-con .my-col').removeClass("on");
            $(this).addClass("on");
            rightThreeData($(this).index());
        });
    });
    $(".bar .pre").click(function () {
        if (barPosition > 0) {
            barPosition--;
        }
        nextFluxion(barPosition);
    });
    $(".bar .next").click(function () {
        if (barPosition < 5) {
            barPosition++;
        }
        nextFluxion(barPosition);
    });

    var interval = setInterval(function () {
        if (run_time != -1) {
            nextFluxion(barPosition++);
            if (barPosition > 5) {
                barPosition = 0;
            }
        }

    }, 3000);

    $(".bar .pause").click(function () {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            interval = setInterval(function () {
                nextFluxion(barPosition++);
                if (barPosition > 5) {
                    barPosition = 0;
                }
            }, 3000);
        } else {
            $(this).addClass("on");
            clearInterval(interval);
        }
    });

}

function nextFluxion(pos) {
    var fluxions = ["一流模拟量", "二流模拟量", "三流模拟量", "四流模拟量", "五流模拟量", "六流模拟量"];
    $("#model_11 table thead td").html(fluxions[pos]);
    $("#model_11 .SPEED_LZJ").html(SPEED_LZJ[pos].value_number.mytoFixed(4));
    $("#model_11 .PEM_JJQ_IN").html(PEM_JJQ_IN[pos].value_number.mytoFixed(4));
    $("#model_11 .FLOW_ELS_0").html(FLOW_ELS_0[pos].value_number.mytoFixed(4));
    $("#model_11 .FLOW_ELS_1").html(FLOW_ELS_1[pos].value_number.mytoFixed(4));
    $("#model_11 .FLOW_ELS_2").html(FLOW_ELS_2[pos].value_number.mytoFixed(4));
    $("#model_11 .FPBC_A").html(FPBC_A[pos].value_number.mytoFixed(2));
    $("#model_11 .FPBC_B").html(FPBC_B[pos].value_number.mytoFixed(2));
    $("#model_11 .PRE_ELS_0").html(PRE_ELS_0[pos].value_number.mytoFixed(4));
    $("#model_11 .PRE_ELS_1").html(PRE_ELS_1[pos].value_number.mytoFixed(4));
    $("#model_11 .PRE_ELS_2").html(PRE_ELS_2[pos].value_number.mytoFixed(4));
    $("#model_11 .FLOW_JJQ").html(FLOW_JJQ[pos].value_number.mytoFixed(4));
    $("#model_11 .TEM_JJQ_OUT").html(TEM_JJQ_OUT[pos].value_number.mytoFixed(4));
    $("#model_11 .LJG_ZT").html(YYZ_ZT[pos].ljg);
    $("#model_11 .TDG_ZT").html(YYZ_ZT[pos].tdg);
}
function middleOneData(flu) {
    $('#model_01 .my-col-con .my-col').eq(flu).addClass("on");
    if (ZT_FM[flu].value_number) {
        $("#model_01 .ZT_FM_ITEM").html("自动");
    } else {
        $("#model_01 .ZT_FM_ITEM").html("手动");
    }
    if (JZF_CLOSE[flu].value_number) {
        $("#model_01 .JZF_CLOSE_ITEM").html("开到位").removeClass("on").addClass("on1");
    } else {
        $("#model_01 .JZF_CLOSE_ITEM").html("关到位").removeClass("on1").addClass("on");
    }
}
function leftTwoData(flu) {
    $('#model_04 .my-col-con .my-col').eq(flu).addClass("on");
    echarts.init(document.getElementById('echarts_03')).setOption({
        series: [{
            data: [
                ['送引锭准备指示', READY_SYD[flu].value_number + 1],
                ['浇铸准备指示', READY_JZ[flu].value_number + 1],
                ['停浇/开浇指示', SHOW_KJ[flu].value_number + 1]
            ]
        }]
    });
}
function leftThreeData(flu) {
    $('#model_05 .my-col-con .my-col').eq(flu).addClass("on");
    echarts.init(document.getElementById('echarts_02')).setOption({
        series: [{
            data: [
                ['引锭杆上限位开关', YDG_XC_H[flu].value_number + 1],
                ['引锭杆中限位开关', YDG_XC_Z[flu].value_number + 1],
                ['引锭杆下限位开关', YDG_XC_L[flu].value_number + 1]
            ]
        }]
    });
}
function leftFourData(flu) {
    $('#model_06 .my-col-con .my-col').eq(flu).addClass("on");
    $("#model_06 .SPEED_LZJ").html(SPEED_LZJ[flu].value_number.mytoFixed(4));
    $("#model_06 .FLOW_JJQ").html(FLOW_JJQ[flu].value_number.mytoFixed(4));
    $("#model_06 .FLOW_ELS_0").html(FLOW_ELS_0[flu].value_number.mytoFixed(4));
    $("#model_06 .FLOW_ELS_1").html(FLOW_ELS_1[flu].value_number.mytoFixed(4));
    $("#model_06 .FLOW_ELS_2").html(FLOW_ELS_2[flu].value_number.mytoFixed(4));
    if (STATISTIC_VALUE.result.length > 0) {
        $("#model_06 .first .num").html(STATISTIC_VALUE.result[flu].max_val);
        var max_speed = STATISTIC_VALUE.result.slice(12, 18);
        $("#model_06 .second .num").html(max_speed[flu].max_val);
    }

    var echarts_06_json = {
        "time": NOW_TIME,
        "result": [{
            'a_tag': 'SPEED_LZJ',
            'value': TOTAL_SPEED_LZJ[flu]
        }, {
            'a_tag': 'FLOW_JJQ',
            'value': TOTAL_FLOW_JJQ[flu]
        }, {
            'a_tag': 'FLOW_ELS_0',
            'value': TOTAL_FLOW_ELS_0[flu]
        }, {
            'a_tag': 'FLOW_ELS_1',
            'value': TOTAL_FLOW_ELS_1[flu]
        }, {
            'a_tag': 'FLOW_ELS_2',
            'value': TOTAL_FLOW_ELS_2[flu]
        }]
    }

    echarts.init(document.getElementById('echarts_06')).setOption({
        xAxis: {
            data: echarts_06_json.time
        },
        series: [{
            name: '拉速',
            data: echarts_06_json.result[0].value
        }, {
            name: '结晶器回水流量',
            data: echarts_06_json.result[1].value
        }, {
            name: '二冷水0段流量',
            data: echarts_06_json.result[2].value
        }, {
            name: '二冷水1段流量 ',
            data: echarts_06_json.result[3].value
        }, {
            name: '二冷水2段流量 ',
            data: echarts_06_json.result[4].value
        }]
    });

}
function middleFourData(YYZ_ZT) {
    $("#model_03 tbody").html("");
    for (var i = 0; i < 6; i++) {
        $("#model_03 tbody").append("<tr><td>" + YYZ_ZT[i].id + "</td><td>" + YYZ_ZT[i].ljg + "</td><td>" + YYZ_ZT[i].tdg + "</td></tr>")
    }
}
function rightTwoData(flu) {
    $('#model_08 .my-col-con .my-col').eq(flu).addClass("on");
    echarts.init(document.getElementById('echarts_05')).setOption({
        series: [{
            data: [
                ['振动故障', 1 + FAULT_ZD[flu].value_number],
                ['上拉矫故障', 1 + FAULT_LJ_H[flu].value_number],
                ['下拉矫故障', 1 + FAULT_LJ_L[flu].value_number],
                ['拉矫机变频故障', 1 + FAULT_LJ_BP[flu].value_number],
                ['存放故障', 1 + FAULT_CF[flu].value_number],
                ['输送辊道1故障', 1 + FAULT_SSGD_1[flu].value_number],
                ['输送辊道2故障', 1 + FAULT_SSGD_2[flu].value_number],
                ['输送辊道3故障', 2]
            ],
        }]
    });
}
function rightThreeData(flu) {
    $('#model_09 .my-col-con .my-col').eq(flu).addClass("on");
    $("#model_09 .PEM_JJQ_IN").html(PEM_JJQ_IN[flu].value_number.mytoFixed(4));
    $("#model_09 .TEM_JJQ_OUT").html(TEM_JJQ_OUT[flu].value_number.mytoFixed(4));
    $("#model_09 .PRE_ELS_0").html(PRE_ELS_0[flu].value_number.mytoFixed(4));
    $("#model_09 .PRE_ELS_1").html(PRE_ELS_1[flu].value_number.mytoFixed(4));
    $("#model_09 .PRE_ELS_2").html(PRE_ELS_2[flu].value_number.mytoFixed(4));
    $("#model_09 .FPBC_A").html(FPBC_A[flu].value_number.mytoFixed(2));
    $("#model_09 .FPBC_B").html(FPBC_B[flu].value_number.mytoFixed(2));
    if (STATISTIC_VALUE.result.length > 0) {
        var max_pem_jjq_in = STATISTIC_VALUE.result.slice(6, 12);
        var max_tem_jjq_out = STATISTIC_VALUE.result.slice(18, 24);
        $("#model_09 .first .num").html(max_tem_jjq_out[flu].max_val);
        $("#model_09 .second .num").html(max_pem_jjq_in[flu].max_val);
    }
    var echarts_07_json = {
        "time": NOW_TIME,
        "result": [{
            'a_tag': 'PEM_JJQ_IN',
            'value': TOTAL_PEM_JJQ_IN[flu]
        }, {
            'a_tag': 'TEM_JJQ_OUT',
            'value': TOTAL_TEM_JJQ_OUT[flu]
        }, {
            'a_tag': 'PRE_ELS_0',
            'value': TOTAL_PRE_ELS_0[flu]
        }, {
            'a_tag': 'PRE_ELS_1',
            'value': TOTAL_PRE_ELS_1[flu]
        }, {
            'a_tag': 'PRE_ELS_2',
            'value': TOTAL_PRE_ELS_2[flu]
        }, {
            'a_tag': 'FPBC_A',
            'value': TOTAL_FPBC_A[flu]
        }, {
            'a_tag': 'FPBC_B',
            'value': TOTAL_FPBC_B[flu]
        }]
    }


    echarts.init(document.getElementById('echarts_07')).setOption({
        xAxis: {
            data: echarts_07_json.time
        },
        series: [{
            name: '结晶器进水压力',
            data: echarts_07_json.result[0].value
        }, {
            name: '结晶器回水温度',
            data: echarts_07_json.result[1].value
        }, {
            name: '二冷水0段压力',
            data: echarts_07_json.result[2].value
        }, {
            name: '二冷水1段压力',
            data: echarts_07_json.result[3].value
        }, {
            name: '二冷水2段压力',
            data: echarts_07_json.result[4].value
        }, {
            name: '方坯面宽度',
            data: echarts_07_json.result[5].value
        }, {
            name: '方坯面长度',
            data: echarts_07_json.result[6].value
        }]
    });

}



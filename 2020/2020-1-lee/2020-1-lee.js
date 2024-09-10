$(document).ready(function () {
    // 設定 "今天" 按鈕的功能
    $("#today").click(function () {
        let today = new Date();
        $("#day-input").val(today.getDate());
        $("#month-input").val(today.getMonth() + 1);
        $("#year-input").val(today.getFullYear());
    });

    // 初始化日的下拉選單
    for (let i = 1; i <= 31; i++) {
        $('#day-select').append(`<option value="${i}">${i}</option>`);
    }
    // 初始化月的下拉選單
    const months = ['01 - Jan', '02 - Feb', '03 - Mar', '04 - Apr', '05 - May', '06 - Jun', 
                    '07 - Jul', '08 - Aug', '09 - Sep', '10 - Oct', '11 - Nov', '12 - Dec'];
    months.forEach((month, index) => {
        $('#month-select').append(`<option value="${index + 1}">${month}</option>`);
    });
    // 初始化年的下拉選單
    let currentYear = new Date().getFullYear();
    for (let i = currentYear - 1000; i <= currentYear + 1000; i++) {
        $('#year-select').append(`<option value="${i}">${i}</option>`);
    }

    // 點擊輸入框時顯示相應的下拉選單
    $("#day-input").focus(function () {
        $("#day-select").toggle();
    });

    $("#month-input").focus(function () {
        $("#month-select").toggle();
    });

    $("#year-input").focus(function () {
        $("#year-select").toggle();
    });

    // 當下拉選單選擇後，將值填入輸入框並隱藏選單
    $("#day-select").change(function () {
        $("#day-input").val($(this).val());
        $(this).hide();
    });

    $("#month-select").change(function () {
        $("#month-input").val($(this).val());
        $(this).hide();
    });

    $("#year-select").change(function () {
        $("#year-input").val($(this).val());
        $(this).hide();
    });

    // 計算目標日期的功能
    $("#calculate").click(function () {
        let day = parseInt($("#day-input").val());
        let month = parseInt($("#month-input").val());
        let year = parseInt($("#year-input").val());

        if (!isValidDate(year, month, day)) {
            alert("輸入的日期不合理。請確認日期、月份、或年份是否正確。");
            return;
        }

        let startDate = new Date(year, month - 1, day);
        let operation = $("#operation").val();
        let years = parseInt($("#years").val());
        let months = parseInt($("#months").val());
        let weeks = parseInt($("#weeks").val());
        let days = parseInt($("#days").val());

        // 將年、月、週、日轉換為總天數
        let totalDays = years * 365 + months * 30 + weeks * 7 + days;

        if (operation === "+") {
            startDate.setDate(startDate.getDate() + totalDays);
        } else {
            startDate.setDate(startDate.getDate() - totalDays);
        }

        let result = startDate.toDateString();
        alert(`開始日期往${operation === "+" ? "前" : "後"} ${years} 年 ${months} 月 ${weeks} 週 ${days} 天的日期: ${result}`);
    });
});

// 檢查日期是否合理
function isValidDate(year, month, day) {
    let date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === (month - 1) && date.getDate() === day;
}

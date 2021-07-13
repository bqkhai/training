$(document).ready(function(){
    formatDate();
    formatGender();
    formatMoneyInput();
    formatSalary();
    formatWorkStatus();
})


/**
 * Format dữ liệu ngày tháng năm dạng json sang ngày / tháng / năm
 * @param {*} date tham số có kiểu dữ liệu bắt kỳ
 * @returns 
 * CreatedBy: bqkhai (6/7/2021)
 */
function formatDate(date, type) {
    var date = new Date(date);
    if (Number.isNaN(date.getTime())) {
        return "";
    }
    else {
        var day = date.getDate(),
            month = date.getMonth() + 1;
        year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        if (type == 1) return `${day}/${month}/${year}`;
        else return `${year}-${month}-${day}`
    }
}

/**
 * hàm định dạng tiền lương show ra bảng sss.sss.sss
 * @param {*} salary Số tiền
 * Created by bqkhai (6/7/2021)
 */
function formatSalary(money) {
    const numberFormat = new Intl.NumberFormat('vi-VN');
    if (money === null) {
        money = 'Không xác định';
    }
    money = numberFormat.format(money);
    if (money === "NaN") {
        money = 'Không xác định';
    }
    return money;
}

/**
 * Hàm định dạng tiền lương lúc nhập vào form
 * Author: bqkhai (10/7/2021)
 */
function formatMoneyInput(){
    $('#txtSalary').on('input',function() {
        let value = $(this).val()
        value = value.replaceAll('.','')
        value = value.replaceAll(',','')
        value = BigInt(value).toLocaleString('it-IT');
        $(this).val(value);
    })
}

/**
 * Hàm format giới tính
 * Author: bqkhai (9/7/2021)
 */
function formatGender(genderCode) {
    if (genderCode == null || genderCode == 3){
        return "";
    } else if (genderCode == 0) {
        return "Nữ";
    } else if (genderCode == 1) {
        return "Nam";
    } else if (genderCode == 2) {
        return "Không xác định";
    }
}


/**Hàm format tình trạng công việc
 * Author: bqkhai (9/7/2021)
 */
function formatWorkStatus(workStatusCode) {
    if (workStatusCode == 0) {
        return "Đã nghỉ việc";
    } else if (workStatusCode == 1) {
        return "Đang làm việc";
    }
    else {
        return "Khác";
    }
}
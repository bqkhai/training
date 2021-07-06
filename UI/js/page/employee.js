$(document).ready(function () {
    loadData();
    initEvents();
})

/**
 * 
 * Khởi tạo sự kiện
 * Author: BQKhai (05/07/2021)
 */
function initEvents() {
    var me = this;

    //Sự kiện highlight khi click chuột trên bảng
    // $('#tbListData tbody').on('click', 'tr', function () {
    //     $('.m-dialog').css('display', 'block');
    //     $(this).css('background', '#8ec252');
    // })

    $("#tbListData tbody").on('click', 'tr', function (){
        $('tr').removeClass('selected');
        $(this).addClass('selected');
    })

    $("#tbListData tbody").on('dblclick', 'tr', function (){
        $('tr').removeClass('selected');
        $(this).addClass('selected');
        $('.m-dialog').css('display', 'block');
    })

    // Sự kiện click button refresh
    $("#my-btn").click(function (){
        me.loadData();
    })
}


/**
 * Load dữ liêu danh sách nhân viên
 * Author: BQKhai (05/07/2021)
 * 
 */
function loadData() {
    //1. Lấy dữ liệu từ API về
    $.ajax({
        method: "GET", //GET: Lấy dữ liệu; POST: Thêm mới; PUT: sửa; DELETE: xóa.
        url: "http://cukcuk.manhnv.net/v1/Employees",
        // data:"",
        // contentType:"application/json",
        // dataType:"json"
    }).done(function (response) {
        let data = response;

        //Duyệt từng đối tượng xử lý các thông tin
        $.each(data, function (index, item) {
            let employeeCode = item.EmployeeCode;
            let fullName = item.FullName;
            let genderName = item.GenderName;
            if (genderName === null) {
                genderName = 'Không xác định'
            }
            let dateOfBirth = item.DateOfBirth;
            dateOfBirth = formatDate(dateOfBirth);
            let phone = item.PhoneNumber;
            let mail = item.Email;
            let address = item.IdentityPlace;
            let departmentName = item.DepartmentName;
            let salary = item.Salary;
            salary = formatSalary(salary);
            let workStatus = item.WorkStatus;
            if (workStatus === null) {
                workStatus = 'Không xác định'
            }
            let trHtml = `
                <tr>
                    <td>${employeeCode}</td>
                    <td>${fullName}</td>
                    <td>${genderName}</td>
                    <td>${dateOfBirth}</td>
                    <td>${phone}</td>
                    <td>${mail}</td>
                    <td>${address}</td>
                    <td>${departmentName}</td>
                    <td style="text-align:right;">${salary}</td>
                    <td>${workStatus}</td>
                </tr>`;
            $('tbody').append(trHtml);
        })
        console.log(response);

    }).fail(function (response) {
        alert("Có lỗi xảy ra!");
    })

    //2. Xử lý dữ liệu:
    
    //3. Hiển thị dữ liệu;
}

/**
 * Format dữ liệu ngày tháng năm dạng json sang ngày / tháng / năm
 * @param {*} date tham số có kiểu dữ liệu bắt kỳ
 * @returns 
 * CreatedBy: bqkhai (6/7/2021)
 */
function formatDate(date){
    var date = new Date(date);
    if(Number.isNaN(date.getTime())){
        return "";
    }
    else {
        var day = date.getDate(),
            month = date.getMonth() + 1;
            year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
    }
    return day + '/' + month + '/' + year;
}

/**
 * hàm định dạng tiền lương
 * @param {*} salary Số tiền
 * Created by bqkhai (6/7/2021)
 */
function formatSalary(money){
    return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
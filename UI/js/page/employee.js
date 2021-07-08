$(document).ready(function () {
    loadData();
    initEvents();
})

/**
 * Hàm mở form nhân viên 
 * Author: bqkhai (6/7/2021)
 */
function openform() {
    var modal = document.getElementById("m-dialog dialog-detail");
    modal.style.display = "block";
}

/**
 * Hàm đóng form nhân viên 
 * Author: bqkhai (6/7/2021)
 */
function closeform() {
    var modal = document.getElementById("m-dialog dialog-detail");
    modal.style.display = "none";
}

/**
 * Khởi tạo sự kiện
 * Author: BQKhai (05/07/2021)
 */
function initEvents() {
    var me = this;

    //Sự kiện highlight khi click chuột trên bảng
    $("#tbListData tbody").on('click', 'tr', function () {
        $('tr').removeClass('selected');
        $(this).addClass('selected');
    })

    $("#tbListData tbody").on('dblclick', 'tr', function () {
        $('tr').removeClass('selected');
        $(this).addClass('selected');
        $('.m-dialog').css('display', 'block');
    })

    // Sự kiện click button refresh
    $("#my-btn").click(function () {
        // Làm trống bảng
        $("#tbListData tbody").empty();
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
                genderName = 'Không xác định';
            }
            let dateOfBirth = item.DateOfBirth;
            dateOfBirth = formatDate(dateOfBirth);
            let phone = item.PhoneNumber;
            if (phone === null) {
                phone = 'Không xác định';
            }
            let mail = item.Email;
            let postisionName = item.PositionName;
            let departmentName = item.DepartmentName;
            let salary = formatSalary(item.Salary);
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
                    <td>${postisionName}</td>
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
}

/**
* Thêm mới dữ liệu
* Author: bqkhai (5/7/2021)
*/
function add() {
    $.ajax({
        url: this.dataUrl,
        method: "POST",
        data: JSON.stringify(employee),
        contentType: 'application/json'
    }).done(function (res) {
        console.log('Thêm thành công');
        // toggleDialog();

        console.log(res);
    }).fail(function (err) {
        console.log(err);
    })
}

/**
 * Format dữ liệu ngày tháng năm dạng json sang ngày / tháng / năm
 * @param {*} date tham số có kiểu dữ liệu bắt kỳ
 * @returns 
 * CreatedBy: bqkhai (6/7/2021)
 */
function formatDate(date) {
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
    }
    return day + '/' + month + '/' + year;
}

/**
 * hàm định dạng tiền lương
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
 * Hàm đổ dữ liệu vào form sau khi dbclick()
 * Author: bqkhai
 */


/**
 *
 */
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

// function refreshData() {
//     $("#my-btn").click(function () {
//         // Làm trống bảng
//         $("#tbListData tbody").empty();
//         loadData();
//     })
// }

/**
 * Khởi tạo sự kiện
 * Author: bqkhai (05/07/2021)
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

    $("#btnSave").click(function () {
        //validate dữ liệu
        var inputValidates = $('input[required], input[type=email], #txtPhoneNumber');
        $.each(inputValidates, (index, input) => {
            $(input).trigger('blur');
        })
        let inputNotValids = $('input[validate=false]');
        if (inputNotValids && inputNotValids.length > 0) {
            alert("Dữ liệu không hợp lệ vui lòng kiểm tra lại.")
            inputNotValids[0].focus();
            return;
        }
        //thu thập thông tin dữ liệu được nhập ->
        var employee = {
            "EmployeeCode": $('#txtEmployeeCode').val(),
            "FullName": $('#txtFullName').val(),
            "DateOfBirth": $('#txtDateOfBirth').val(),
            "Gender": $('#txtGender').val(),
            "IdentityNumber": $('#txtIdentityNumber').val(),
            "IdentityDate": $('#txtIdentityDate').val(),
            "IdentityPlace": $('#txtIdentityPlace').val(),
            "Email": $('#txtEmail').val(),
            "PhoneNumber": $('#txtPhoneNumber').val(),
            "PersonalTaxCode": $('#txtPersonalTaxCode').val(),
            "Salary": $('#txtSalary').val(),
            "JoinDate": $('#txtJoinDate').val()
        }

        //Gọi service tương ứng khi lưu dữ liệu
        // Post dữ liệu
        $.ajax({
            url: "http://cukcuk.manhnv.net/v1/Employees",
            method: "POST",
            data: JSON.stringify(employee),
            contentType: 'application/json'
        }).done(function (res) {
            alert('Thêm thành công');
            // Ẩn form
            closeform();
            // load lại dữ liệu
            loadData();
        }).fail(function (err) {
            console.log(err);
        })
    })

    /**
     * Hàm validate tránh bỏ trống input
     * Author: bqkhai (8/7/2021)
     */
    $('input[required]').blur(function () {
        //kiểm tra nhập nếu trống thì cảnh báo
        var value = $(this).val();
        if (!value) {
            $(this).addClass('border-red');
            $(this).attr('title', 'Trường này không được phép để trống.');
            $(this).attr('validate', false);
        } else {
            $(this).removeClass('border-red');
            $(this).attr('title', '');
            $(this).attr('validate', true);
        }
    })

    /**
     * Hàm validate email
     * Author: bqkhai (8/7/2021)
     */
    $('input[type="email"]').blur(function () {
        var email = $(this).val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            $(this).addClass('border-red');
            $(this).attr('title', 'Email không đúng định dạng');
            $(this).attr('validate', false)
        }
        else {
            $(this).removeClass('border-red');
            $(this).attr('validate', true);
            $(this).attr('title', '');
        }
    })

    /**
     * Hàm validate số điện thoại
     * Author: bqkhai (8/7/2021)
     */
    $('#txtPhoneNumber').on('blur', function () {
        var phone_number = $(this).val();
        if (phone_number.length === 10) {
            $(this).removeClass('border-red');
            $(this).attr('title', '');
            $(this).attr('validate', true);
        }
        else {
            $(this).addClass('border-red');
            $(this).attr('title', 'Số điện thoại phải có 10 chữ số');
            $(this).attr('validate', false);
        }
    })

    /**
     * Hàm validate số CMTND/Căn cước có 9 hoặc 12 chữ số
     * Author: bqkhai (8/7/2021)
     */
    $('#txtIdentityNumber').on('blur', function () {
        var identity_number = $(this).val();
        if (identity_number.length === 9 || identity_number.length === 12) {
            $(this).removeClass('border-red');
            $(this).attr('title', '');
            $(this).attr('validate', true);
        }
        else {
            $(this).addClass('border-red');
            $(this).attr('title', 'Số CMTND/Căn cước phải có 9 hoặc 12 chữ số');
            $(this).attr('validate', false);
        }
    })
    loadData();
}


/**
 * Load dữ liêu danh sách nhân viên
 * Author: BQKhai (05/07/2021)
 * 
 */
function loadData() {
    //1. Lấy dữ liệu từ API về
    $.ajax({
        method: "GET", //GET: Lấy dữ liệu
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
                genderName = 'Không có';
            }
            let dateOfBirth = item.DateOfBirth;
            dateOfBirth = formatDate(dateOfBirth);
            let phone = item.PhoneNumber;
            if (phone === null) {
                phone = 'Không xác định';
            }
            let mail = item.Email;
            let postisionName = item.PositionName;
            if (postisionName === null) {
                postisionName = 'Không xác định';
            }
            let departmentName = item.DepartmentName;
            if (departmentName === null) {
                departmentName = 'Không xác định';
            }
            let salary = formatSalary(item.Salary);
            let workStatus = item.WorkStatus;
            if (workStatus === null) {
                workStatus = ''
            }
            else workStatus = 'Trạng thái ' + workStatus;
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
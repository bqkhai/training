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
    $('table #tbListDAta tbody').on('click', 'tr', function () {
        $(this).css('background', '#8ec252');
    })

    $('#btnAdd').click(function () {
        alert("hello");
    })
}


/**
 * Load du lieu danh sach nhan vien
 * Author: BQKhai (05/07/2021)
 * 
 */

function loadData() {
    //1. Lay du lieu tu API ve:

    $.ajax({
        method: "GET", //GET: Lay du lieu; POST: Thêm mới; PUT: sửa; DELETE: xóa.
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
            if (genderName == null) {
                genderName = 'Không xác định'
            }
            let dateOfBirth = item.DateOfBirth;
            let dateOrigin = new Date(dateOfBirth);
            let phone = item.PhoneNumber;
            let mail = item.Email;
            let postName = item.PositionName;
            let departmentName = item.DepartmentName;
            let salary = item.Salary;
            let workStatus = item.WorkStatus;
            let trHtml = `
                <tr>
                    <td>${employeeCode}</td>
                    <td>${fullName}</td>
                    <td>${genderName}</td>
                    <td>${dateOrigin}</td>
                    <td>${phone}</td>
                    <td>${mail}</td>
                    <td>${postName}</td>
                    <td>${departmentName}</td>
                    <td>${salary}</td>
                    <td style="max-width: 100px;">${workStatus}</td>
                </tr>`;
            $('tbody').append(trHtml);
        })
        console.log(response);

    }).fail(function (response) {
        alert("Có lỗi xảy ra!");
    })

    //2. Xu ly du lieu:

    //3. Hien thi du lieu :
}
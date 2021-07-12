$(document).ready(function () {
    new EmployeeJS();
})

class EmployeeJS extends baseJS {
    constructor() {
        super();
        this.eventEmpolyeeInits();
        this.loadData();
        this.openForm();
        this.closeForm();
    }

    /**
     * Hàm mở form dialog
     * Author: bqkhai (5/7/2021)
     */
    openForm() {
        $('#btnAdd').on('click', function (e) {
            e.preventDefault();
            //hiện dialog form
            $('.dialog-modal').removeClass('hide-dialog');
            //focus vào ô mã nhân viên
            $('#txtEmployeeCode').focus();
        });
    }

    /**
     * Hàm đóng form dialog sau khi click button 'x' hoặc chọn 'hủy' trong form dialog
     * Author: bqkhai (5/7/2021)
     */
    closeForm() {
        $('.dialog-header-close, .btn-cancel-box').on('click', function (e) {
            //xóa input nhập trong form
            clearInputForm();
            //xóa các viền đỏ validate input khi đóng form
            $('input[required]').removeClass('border-red');
            e.preventDefault();
            //ẩn dialog form
            $('.dialog-modal').addClass('hide-dialog');
        });
    }

    eventEmpolyeeInits() {

        var me = this;
        var EmployeeID;

        //Sự kiện đánh dấu highlight khi click chuột vào tr trên bảng
        $("#tbListData tbody").on('click', 'tr', function () {
            $('tr').removeClass('selected');
            $(this).addClass('selected');
            var delRecordID = $(this).attr('recordID');
            me.delRecordID = delRecordID;
        })

        /**
        * Xóa dữ liệu theo id
        * Method: DELETE
        * Author: bqkhai (9/7/2021)
        */
        $('#btnDelete').click(function () {
            var delRecordID = me.delRecordID;
            var cfDelete = confirm('Bạn muốn xóa bản ghi này');
            if (cfDelete) {
                // Gọi api xóa nhân viên
                $.ajax({
                    url: "http://cukcuk.manhnv.net/v1/Employees/" + `${delRecordID}`,
                    type: "DELETE",
                    contentType: 'application/json-patch+json'
                }).done(function (res) {
                    //đưa ra thông báo thành công
                    alert('Xóa thành công!');

                    //load lại dữ liệu
                    me.loadData();

                }).fail(function (res) {

                })
            }
        })

        /**
         * Hàm sự kiện show form dialog khi dblclick vào tr trên bảng
         * Author: bqkhai (9/7/2021)
         */
        $("#tbListData tbody").on('dblclick', 'tr', function () {
            $('tr').removeClass('selected');
            $(this).addClass('selected');

            me.FormMode = "Edit";
            var EmployeeID = $(this).attr('recordID');
            me.EmployeeID = EmployeeID;
            console.log(EmployeeID);

            $.ajax({
                url: "http://cukcuk.manhnv.net/v1/Employees/" + `${EmployeeID}`,
                type: "GET"
            }).done(function (res) {
                //Binding dữ liệu lên form chi tiết:
                var inputs = $('input[fieldName]');
                $.each(inputs, function (index, input) {
                    var propertyName = $(this).attr('fieldName');
                    var value = res[propertyName];
                    switch (propertyName) {
                        case 'DateOfBirth':
                            value = formatDate(value, 2);
                            break;
                        case 'IdentityDate':
                            value = formatDate(value, 2);
                            break;
                        case 'JoinDate':
                            value = formatDate(value, 2);
                            break;
                        case 'Salary':
                            value = formatSalary(value);
                            break;
                        case 'Gender':
                            value = formatGender(value);
                            break;
                        case 'WorkStatus':
                            value = formatWorkStatus(value);
                            break;
                        default:
                            value = value;
                            break;
                    }
                    // hiển thị lên console giá trị các input
                    console.log(value);
                    // có value, biết fieldName rồi
                    $(`input[fieldName="${propertyName}"]`).val(value);
                })

            }).fail(function (err) {

                console.log("Lỗi");

            })

            $('.dialog-modal').removeClass('hide-dialog');
        })

        //FormMode có 2 trạng thái add và edit tương ứng với thêm và sửa (post, put)
        $('#btnAdd').on('click', function (e) {
            me.FormMode = "Add";
            $('.dialog-modal').removeClass('hide-dialog');
        })

        // Sự kiện click button refresh load lại data trên bảng
        $("#my-btn").click(function () {
            // Làm trống bảng
            $("#tbListData tbody").empty();
            me.loadData();
        })


        /**
         * Hàm sự kiện click button save trên form -> đẩy dữ liệu lên server
         * Method: POST
         * Author: bqkhai (9/7/2021)
         */
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

            var inputs = $('input[fieldName]');
            var employee = {};
            $.each(inputs, function (index, input) {
                var propertyName = $(this).attr('fieldName');
                var value;
                if ($(input).hasClass('m-input')) {
                    value = $(this).val();
                } else {
                    //
                }

                employee[propertyName] = value;

            })
            console.log(employee);

            if (me.FormMode == 'Add') {
                $.ajax({
                    url: "http://cukcuk.manhnv.net/v1/Employees",
                    type: "POST",
                    data: JSON.stringify(employee),
                    contentType: 'application/json-patch+json',
                }).done(function (res) {
                    debugger
                    //Thông báo thêm thành công
                    alert('Thêm nhân viên thành công');
                    //ẩn form 
                    $('.dialog-modal').addClass('hide-dialog');
                    //load lại dữ liệu
                    me.loadData();

                }).fail(function (err) {
                    //console.log(err)
                })
            }
            else {
                var EmployeeID = me.EmployeeID;
                $.ajax({
                    url: "http://cukcuk.manhnv.net/v1/Employees/" + `${EmployeeID}`,
                    type: "PUT",
                    data: JSON.stringify(employee),
                    contentType: 'application/json-patch+json'
                }).done(function (res) {
                    // thông báo sửa thành công
                    alert('Sửa thành công');
                    // ẩn fom chi tiết
                    $('.dialog-modal').addClass('hide-dialog');
                    // load lại dữ liệu
                    me.loadData();

                }).fail(function (err) {
                    //console.log(err)
                })
            }
        })
    }


    /**
    * Load dữ liêu danh sách nhân viên (GET method)
    * Author: BQKhai (05/07/2021)
    * 
    */
    loadData() {
        $('table tbody').empty();
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
                dateOfBirth = formatDate(dateOfBirth, 1);
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
                    <tr recordID= "${item.EmployeeId}">
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
}


/**
 * Sửa dữ liệu
 * Author: bqkhai (9/7/2021)
 */
// edit(EmployeeId, employee) {
//     let me = this;
//     $.ajax({
//         url: `${this.dataUrl}/${EmployeeId}`,
//         method: "PUT",
//         data: JSON.stringify(employee),
//         contentType: 'application/json'
//     }).done(function (res) {
//         // Sau khi lưu thành công
//         // + Thông báo thành công
//         alert('Lưu thay đổi thành công');
//         // + Ẩn form
//         closeForm();
//         // + load lại dữ liệu
//         me.loadData();
//         console.log(res);
//     }).fail(function (err) {
//         console.log((err))
//     })
// }


/**
 * Hàm xóa input nhập khi đóng form dialog
 * Author: bqkhai (9/7/2021)
 */
function clearInputForm() {
    $(function () {
        $('#txtEmployeeCode').val("");
        $('#txtDateOfBirth').val("");
        $('#txtIdentityDate').val("");
        $('#txtJoinDate').val("");
        $('#cbxGender').val("Nam");
        $('#txtIdentityNumber').val("");
        $('#txtIdentityPlace').val("");
        $('#txtEmail').val("");
        $('#txtPersonalTaxCode').val("");
        $('#txtFullName').val("");
        $('#txtIdentityDate').val("");
        $('#txtPhoneNumber').val("");
        $('#txtSalary').val("");
        $('#cbxWorkStatus').val("Đang làm việc");
        $('#cbxDepartmentId').val("Tất cả phòng ban");
        $('#cbxPositionId').val("Tất cả vị trí");
    });
}
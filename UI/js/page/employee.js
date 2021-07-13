$(document).ready(function () {
    new EmployeeJS();
})

class EmployeeJS extends baseJS {
    constructor() {
        super();
        this.eventEmpolyeeInits();
        this.loadData();
    }

    eventEmpolyeeInits() {

        var me = this;

        //sự kiện navbar menu, click chuột đổi màu navbar-item
        $(".navbar-content a").click(function () {
            $(".navbar-content a").removeClass("active");
            $(this).addClass("active");
        });

        /**
         * Hàm mở form dialog
         * Author: bqkhai (5/7/2021)
         */
        $('#btnAdd').on('click', function (e) {
            me.FormMode = "Add";
            e.preventDefault();
            //hiện dialog form
            $('.dialog-modal').removeClass('hide-dialog');
            //focus vào ô mã nhân viên
            $('#txtEmployeeCode').focus();
        });


        /**
        * Hàm đóng form dialog sau khi click button 'x' hoặc chọn 'hủy' trong form dialog
        * Author: bqkhai (5/7/2021)
        */
        $('.dialog-header-close, .btn-cancel-box').on('click', function (e) {
            $('.m-popup').removeClass('hide-popup');
        });


        // hiện popup khi click icon 'x' hay button 'hủy' trên form
        $('.dialog-header-close, .btn-cancel-box').on('click', function (e) {
            $('.m-popup').removeClass('hide-popup');
        })


        // đóng popup nhưng vẫn hiển thị form nhập khi click icon 'x', button 'hủy' trên popup
        $('.popup-close, .btn-cancel-popup').on('click', function (e) {
            $('.m-popup').addClass('hide-popup');
        })


        // đóng popup và form khi click button 'Đóng'
        $('.btn-close').on('click', function (e) {
            $('.m-popup').addClass('hide-popup');
            //xóa input nhập trong form
            clearInputForm();
            //xóa các viền đỏ validate input khi đóng form
            $('input[required]').removeClass('border-red');
            e.preventDefault();
            //ẩn dialog form
            $('.dialog-modal').addClass('hide-dialog');
        })


        //Sự kiện đánh dấu highlight khi click chuột vào tr trên bảng
        $("#tbListData tbody").on('click', 'tr', function () {
            $('tr').removeClass('selected');
            $(this).addClass('selected');
            var delRecordID = $(this).attr('recordID');
            me.delRecordID = delRecordID;
        })

        $(document).mouseup(function (e) {
            // debugger
            // lấy phần tbody
            var checkRange = $("#tbListData tbody");
            //Kiểm tra nếu click chuột ra ngoài tbody thì xóa highlight
            if (!checkRange.is(e.target) && checkRange.has(e.target).length === 0) {
                $('#tbListData tbody tr').removeClass('selected');
            }
        });


        /**
        * Xóa dữ liệu theo id
        * Method: DELETE
        * Author: bqkhai (9/7/2021)
        */
        $('#btnDelete').on('click', function () {
            var checkDel = 0;
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

                }).fail(function (err) {
                    console.log(err)
                })
            }
            // $('.m-popup-delete').removeClass('hide-popup-delete');

            // $('.popup-close-delete, .btn-cancel-delete').on('click', function (e) {
            //     $('.m-popup-delete').addClass('hide-popup-delete');
            // })

            // $('.btn-close-delete').on('click', function (e) {
            //     $('.m-popup-delete').addClass('hide-popup-delete');
            //     debugger
            //     $.ajax({
            //         url: "http://cukcuk.manhnv.net/v1/Employees/" + `${delRecordID}`,
            //         type: "DELETE",
            //         contentType: 'application/json-patch+json'
            //     }).done(function (res) {
            //         debugger
            //         //đưa ra thông báo thành công
            //         alert('Xóa thành công!');
            //         debugger

            //         //load lại dữ liệu
            //         me.loadData();

            //     }).fail(function (err) {
            //         console.log(err)
            //     })
            // })
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
                        // case 'Salary':
                        //     value = formatSalary(value);
                        //     break;
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
                    // gán value vào các input tương ứng
                    $(`input[fieldName="${propertyName}"]`).val(value);
                })

            }).fail(function (err) {

                console.log("Lỗi");

            })

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
                }
                switch (propertyName) {
                    case 'Gender':
                        value = (value == 'Nữ' ? 0 : 1);
                        break;
                    case 'WorkStatus':
                        if (value == "Đang làm việc") {
                            value = 0;
                        } else if (value == "Đã nghỉ việc") {
                            value = 1;
                        }
                    // case 'Salary':
                    //     value = $('input[Salary]').replace('.', '');
                    //     break;
                    default:
                        break;
                }
                employee[propertyName] = value;
            })
            console.log(employee)

            if (me.FormMode == 'Add') {
                $.ajax({
                    url: "http://cukcuk.manhnv.net/v1/Employees",
                    type: "POST",
                    data: JSON.stringify(employee),
                    contentType: 'application/json-patch+json'
                }).done(function (res) {
                    // thông báo thành công
                    alert('Thêm nhân viên thành công!');
                    // ẩn fom chi tiết
                    $('.dialog-modal').addClass('hide-dialog');
                    // load lại dữ liệu
                    me.loadData();

                }).fail(function (res) {
                    console.log(res)
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
                    // thông báo thành công
                    alert('Sửa thành công!');
                    // ẩn fom chi tiết
                    $('.dialog-modal').addClass('hide-dialog');
                    // load lại dữ liệu
                    me.loadData();

                }).fail(function (res) {
                    console.log(res)
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
        clearInputForm();
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
                let genderName = formatGender(item.Gender);
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
                let workStatus = formatWorkStatus(item.WorkStatus);
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
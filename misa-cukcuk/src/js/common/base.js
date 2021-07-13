class baseJS {
    constructor() {
        this.dataUrl = null;
        this.setDataUrl();
        this.eventInits();
    }

    setDataUrl() {

    }

    eventInits() {

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
    }
}
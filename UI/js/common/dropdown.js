$(document).ready(function () {
    clickSelectBox();
})

/**
 * Hàm sự kiện ẩn hiện dropdown select
 * Author: bqkhai (7/7/2021)
 */
function clickSelectBox() {
    $(`.btn-select-box`).click(function () {
        const dropdownName = `dropdown-box-${$(this).attr('class').split(/\s+/)[1].split('-')[2]}`
        if ($(`.${dropdownName}`).hasClass('hidden')) {
            showDropdown(dropdownName);
        } else {
            hideDropdown(dropdownName);
        }
    })
}

/**
 * Hàm chọn item trong dropdown, thêm icon check khi chọn
 * Author: bqkhai (7/7/2021)
 */
function getSelectedItem(dropdownName) {
    let itemName = dropdownName.split('-')[2];
    let el = $(`.${dropdownName} .dropdown-item .dropdown-item__icon`);
    el.empty();
    el.append('<i class="fa fa-check"></i>')
    $(`.dropdown-item input[name=radio-${itemName}]`).change(function () {
        $(`.btn-dropdown-${itemName}~.select-box-text`).val($(this).val());
        hideDropdown(dropdownName);
    })
}

/**Hàm hiện dropdown select
 * Author: bqkhai (7/7/2021)
 */
function showDropdown(dropdownName) {
    $('.dropdown-box').removeClass('show');
    $('.dropdown-box').addClass('hidden');
    //thêm, xóa icon cuộn lên, kéo xuống ở dropdown
    $(`.btn-select-box .select-box-icon i`).removeClass('fa-chevron-up')
    $(`.btn-select-box .select-box-icon i`).addClass('fa-chevron-down')
    const name = dropdownName.split('-')[2];
    getSelectedItem(dropdownName)
    $(`.${dropdownName}`).removeClass('hidden');
    $(`.${dropdownName}`).addClass('show');
    $(`.btn-dropdown-${name} .select-box-icon i`).removeClass('fa-chevron-down')
    $(`.btn-dropdown-${name} .select-box-icon i`).addClass('fa-chevron-up')
}

/**
 * Hàm ẩn dropdown select
 * Author: bqkhai (7/7/2021)
 */
function hideDropdown(dropdownName) {
    const name = dropdownName.split('-')[2]
    $(`.${dropdownName}`).addClass('hidden');
    $(`.${dropdownName}`).removeClass('show');
    $(`.btn-dropdown-${name} .select-box-icon i`).removeClass('fa-chevron-up')
    $(`.btn-dropdown-${name} .select-box-icon i`).addClass('fa-chevron-down')
}